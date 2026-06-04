import 'dart:convert';
import 'dart:math' show cos, pi;
import 'dart:io';
import 'dart:typed_data';
import 'dart:math' as math;

import 'package:http/http.dart' as http;
import 'package:just_audio/just_audio.dart';
import 'package:path_provider/path_provider.dart';

String _getApiKey() {
  const base64Key = String.fromEnvironment('GEMINI_API_KEY_BASE64', defaultValue: '');
  if (base64Key.isNotEmpty) {
    try {
      return utf8.decode(base64.decode(base64Key.trim()));
    } catch (_) {}
  }
  return const String.fromEnvironment('GEMINI_API_KEY', defaultValue: '');
}

final String _apiKey = _getApiKey();
const _model = 'gemini-2.5-flash-preview-tts';

const _sampleRate = 24000;

// In-memory cache: "prefix|gender|text" -> raw PCM bytes
final Map<String, Uint8List> _audioCache = {};

// Singleton audio player to prevent just_audio rapid creation/disposal crashes
final AudioPlayer sharedPlayer = AudioPlayer();

class SegmentTiming {
  final int index;
  final double start;
  final double end;
  SegmentTiming({required this.index, required this.start, required this.end});
}

/// Fetches raw PCM audio from Gemini TTS API.
Future<Uint8List> _fetchPcm(
    String text, String gender, String promptPrefix) async {
  final trimmed = text.trim();
  if (trimmed.isEmpty) throw Exception('TTS: empty text, skipping request');

  final cacheKey = '$promptPrefix|$gender|$trimmed';
  if (_audioCache.containsKey(cacheKey)) return _audioCache[cacheKey]!;

  final voiceName = gender == 'female' ? 'Kore' : 'Puck';
  final prompt = '$promptPrefix "$trimmed"';

  final body = jsonEncode({
    'contents': [
      {
        'parts': [
          {'text': prompt}
        ]
      }
    ],
    'generationConfig': {
      'responseModalities': ['AUDIO'],
      'speechConfig': {
        'voiceConfig': {
          'prebuiltVoiceConfig': {'voiceName': voiceName}
        }
      }
    }
  });

  http.Response? response;
  int retryCount = 0;

  while (retryCount < 3) {
    try {
      response = await http.post(
        Uri.parse(
            'https://generativelanguage.googleapis.com/v1beta/models/$_model:generateContent?key=$_apiKey'),
        headers: {'Content-Type': 'application/json'},
        body: body,
      );
    } catch (e) {
      throw Exception(
          'Connection error. Please check your internet or try again later.');
    }

    if (response.statusCode == 429 || response.statusCode >= 500) {
      retryCount++;
      await Future.delayed(Duration(milliseconds: 2000 * retryCount));
      continue;
    }

    break;
  }

  if (response == null || response.statusCode != 200) {
    // Include the start of the response body to surface exactly why it's a 400
    final bodySnippet =
        response?.body.length != null && response!.body.length > 300
            ? '${response.body.substring(0, 300)}...'
            : response?.body ?? 'No response';
    throw Exception('API ${response?.statusCode ?? "Error"}: $bodySnippet');
  }

  final json = jsonDecode(response.body) as Map<String, dynamic>;
  final parts = json['candidates']?[0]?['content']?['parts'] as List<dynamic>?;
  String? base64Audio;
  
  if (parts != null) {
    for (final part in parts) {
      if (part['inlineData'] != null && part['inlineData']['data'] != null) {
        base64Audio = part['inlineData']['data'] as String;
        break;
      }
    }
  }

  if (base64Audio == null) {
    final finishReason = json['candidates']?[0]?['finishReason'];
    if (finishReason != null && finishReason != 'STOP') {
      throw Exception('Generation stopped due to: $finishReason');
    }
    throw Exception('No audio data in TTS response. Response: ${response.statusCode} - ${response.body.length > 200 ? response.body.substring(0, 200) + '...' : response.body}');
  }

  final pcm = base64Decode(base64Audio);
  _audioCache[cacheKey] = pcm;
  return pcm;
}

/// Build a WAV header for 16-bit PCM mono audio.
Uint8List _buildWavHeader(int pcmByteLength, {int sampleRate = _sampleRate}) {
  final totalDataLen = pcmByteLength + 36;
  final channels = 1;
  final bitsPerSample = 16;
  final byteRate = sampleRate * channels * bitsPerSample ~/ 8;
  final blockAlign = channels * bitsPerSample ~/ 8;

  final header = ByteData(44);
  // RIFF header
  header.setUint8(0, 0x52);
  header.setUint8(1, 0x49);
  header.setUint8(2, 0x46);
  header.setUint8(3, 0x46); // "RIFF"
  header.setUint32(4, totalDataLen, Endian.little);
  header.setUint8(8, 0x57);
  header.setUint8(9, 0x41);
  header.setUint8(10, 0x56);
  header.setUint8(11, 0x45); // "WAVE"
  // fmt chunk
  header.setUint8(12, 0x66);
  header.setUint8(13, 0x6D);
  header.setUint8(14, 0x74);
  header.setUint8(15, 0x20); // "fmt "
  header.setUint32(16, 16, Endian.little); // chunk size
  header.setUint16(20, 1, Endian.little); // PCM format
  header.setUint16(22, channels, Endian.little);
  header.setUint32(24, sampleRate, Endian.little);
  header.setUint32(28, byteRate, Endian.little);
  header.setUint16(32, blockAlign, Endian.little);
  header.setUint16(34, bitsPerSample, Endian.little);
  // data chunk
  header.setUint8(36, 0x64);
  header.setUint8(37, 0x61);
  header.setUint8(38, 0x74);
  header.setUint8(39, 0x61); // "data"
  header.setUint32(40, pcmByteLength, Endian.little);
  return header.buffer.asUint8List();
}

/// Silence in PCM bytes (16-bit samples at 24kHz).
Uint8List _silence(double seconds) {
  final samples = (seconds * _sampleRate).round();
  return Uint8List(samples * 2); // 2 bytes per 16-bit sample, all zeros
}

/// Apply a short fade-out to the end of PCM samples (in-place).
void _applyFadeOut(ByteData data, int startByte, int endByte) {
  const fadeSamples = 1200; // 50ms at 24kHz
  final totalSamples = (endByte - startByte) ~/ 2;
  final fadeLen = fadeSamples < totalSamples ? fadeSamples : totalSamples;
  final fadeStart = totalSamples - fadeLen;
  for (var i = 0; i < fadeLen; i++) {
    final byteOffset = startByte + (fadeStart + i) * 2;
    final sample = data.getInt16(byteOffset, Endian.little);
    final t = i / fadeLen;
    final gain = 0.5 * (1 + cos(pi * t));
    data.setInt16(byteOffset, (sample * gain).round(), Endian.little);
  }
}

/// Write PCM bytes as a WAV file to temp dir and return the path.
Future<String> _writeTempWav(Uint8List pcm, String name) async {
  final dir = await getTemporaryDirectory();
  final file = File('${dir.path}/$name.wav');
  final wav = Uint8List.fromList(_buildWavHeader(pcm.length) + pcm);
  await file.writeAsBytes(wav);
  return file.path;
}

/// Stitch multiple PCM buffers with 1.15s gaps and return combined WAV path + timings.
Future<({String path, List<SegmentTiming> timings})> _stitchSegments(
    List<Uint8List> buffers, String name) async {
  const gapSeconds = 1.15;
  final gapPcm = _silence(gapSeconds);

  final timings = <SegmentTiming>[];
  var currentSamples = 0;

  final combined = <int>[];
  for (var i = 0; i < buffers.length; i++) {
    final buf = buffers[i];
    final startSec = currentSamples / _sampleRate;
    combined.addAll(buf);
    currentSamples += buf.length ~/ 2;
    final endSec = currentSamples / _sampleRate;
    timings.add(SegmentTiming(index: i, start: startSec, end: endSec));
    if (i < buffers.length - 1) {
      combined.addAll(gapPcm);
      currentSamples += gapPcm.length ~/ 2;
    }
  }
  // 1s tail
  combined.addAll(_silence(1.0));

  final path = await _writeTempWav(Uint8List.fromList(combined), name);
  return (path: path, timings: timings);
}

// ─── Language-specific prompts ───────────────────────────────────────────────

String _mandarinPrompt(String gender) =>
    'You are a ${gender == 'female' ? 'female' : 'male'} Mandarin teacher reading a line to a beginner student. '
    'Speak VERY slowly and deliberately — much slower than normal conversation. '
    'Pause briefly between each phrase. Enunciate every single tone with extra clarity. '
    'The student needs time to absorb each word. Keep a warm, patient, natural tone: ';

String _englishPrompt(String gender) =>
    'You are a ${gender == 'female' ? 'female' : 'male'} English teacher reading a line to a Spanish-speaking beginner student. '
    'Speak VERY slowly and clearly — much slower than normal conversation. '
    'Pause briefly between each phrase. Enunciate every single word with extra clarity. '
    'The student needs time to absorb each word. Keep a warm, patient, natural tone: ';

String _spanishPrompt(String gender) =>
    'You are a ${gender == 'female' ? 'female' : 'male'} Spanish teacher reading a line to an English-speaking beginner student. '
    'Speak VERY slowly and clearly — much slower than normal conversation. '
    'Pause briefly between each phrase. Enunciate every single word with extra clarity. '
    'The student needs time to absorb each word. Keep a warm, patient, natural tone: ';

// ─── Public TTS functions ────────────────────────────────────────────────────

/// Play a single sentence TTS using the shared AudioPlayer.
Future<String> prepareSingleTTS(
  String text,
  String gender,
  String languagePrompt, {
  bool withDelay = true,
}) async {
  final pcm = await _fetchPcm(text, gender, languagePrompt);
  final silence1 = withDelay ? _silence(1.0) : Uint8List(0);
  final silence2 = _silence(1.2);
  final combined = Uint8List.fromList([...silence1, ...pcm, ...silence2]);

  final name = 'single_${text.hashCode}';
  final path = await _writeTempWav(combined, name);
  return path;
}

/// Prepare full story TTS (stitched) using the shared AudioPlayer and return timings.
Future<List<SegmentTiming>> prepareConversationTTS(
  List<({String text, String gender})> segments,
  String languagePrompt, {
  String storyId = 'default',
}) async {
  final buffers = <Uint8List>[];
  for (int i = 0; i < segments.length; i += 2) {
    final batch = segments.sublist(i, math.min(i + 2, segments.length));
    final pcmFutures =
        batch.map((seg) => _fetchPcm(seg.text, seg.gender, languagePrompt)).toList();
    buffers.addAll(await Future.wait(pcmFutures));
  }

  final result = await _stitchSegments(buffers, 'conv_$storyId');
  await sharedPlayer.setFilePath(result.path);
  return result.timings;
}

/// Convenience getters for language-specific prompts.
String mandarinPrompt(String gender) => _mandarinPrompt(gender);
String englishPrompt(String gender) => _englishPrompt(gender);
String spanishPrompt(String gender) => _spanishPrompt(gender);
