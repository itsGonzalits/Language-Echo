import 'package:string_similarity/string_similarity.dart';

void main() {
  String targetText = "Siga derecho, luego gire a la izquierda en la esquina.";
  List<String> words = ["Siga derecho", "gire a la izquierda", "en la esquina"];

  String remaining = targetText;

  for (final w in words) {
    String cleanTarget = w.toLowerCase().replaceAll(
        RegExp(
            r'^[^a-z0-9\u00C0-\u024F\u4E00-\u9FA5]+|[^a-z0-9\u00C0-\u024F\u4E00-\u9FA5]+$'),
        '');
    String lowerRemaining = remaining.toLowerCase();

    int bestMatchIdx = -1;
    int bestMatchLen = 0;
    double highestScore = 0.0;

    int targetLen = cleanTarget.length;
    int minLen = (targetLen * 0.7).floor();
    int maxLen = (targetLen * 1.5).ceil();

    for (int i = 0; i <= lowerRemaining.length - minLen; i++) {
      for (int len = minLen;
          len <= maxLen && i + len <= lowerRemaining.length;
          len++) {
        final rawWindow = lowerRemaining.substring(i, i + len);

        bool validStart = i == 0 ||
            RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                .hasMatch(lowerRemaining[i - 1]);
        bool validEnd = (i + len == lowerRemaining.length) ||
            RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                .hasMatch(lowerRemaining[i + len]);

        if (!validStart || !validEnd) continue;

        final window = rawWindow.trim();
        final score = cleanTarget.similarityTo(window);
        if (score > highestScore && score >= 0.5) {
          highestScore = score;
          bestMatchIdx = i;
          bestMatchLen = len;
        }
      }
    }

    final idx =
        bestMatchIdx != -1 ? bestMatchIdx : lowerRemaining.indexOf(cleanTarget);
    final matchLen = bestMatchIdx != -1 ? bestMatchLen : cleanTarget.length;

    if (idx != -1) {
      print('MATCHED: "$w" -> "${remaining.substring(idx, idx + matchLen)}"');
      remaining = remaining.substring(idx + matchLen);
    } else {
      print('FAILED: "$w"');
    }
  }
}
