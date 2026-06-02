import 'package:string_similarity/string_similarity.dart';

void main() {
  final targetSentence = "Hola, me gustaría cortarme el pelo, por favor.";
  final wordsToMatch = ["Hola", "Me gustaría", "corte de pelo"];

  String remaining = targetSentence;

  for (final word in wordsToMatch) {
    if (word.isEmpty) continue;

    // Attempt fuzzy match
    final lowerRemaining = remaining.toLowerCase();
    final lowerTarget = word.toLowerCase();

    // We want to find a substring in 'lowerRemaining' that best matches 'lowerTarget'
    // Since 'corte de pelo' != 'cortarme el pelo', standard indexOf fails.

    // Sliding window on the raw string for better character-level fuzzy match
    int bestMatchIdx = -1;
    int bestMatchLen = 0;
    double highestScore = 0.0;

    // We expect the match to be roughly the same length as the target
    int targetLen = lowerTarget.length;
    int minLen = (targetLen * 0.7).floor();
    int maxLen = (targetLen * 1.5).ceil();

    for (int i = 0; i <= lowerRemaining.length - minLen; i++) {
      for (int len = minLen;
          len <= maxLen && i + len <= lowerRemaining.length;
          len++) {
        final rawWindow = lowerRemaining.substring(i, i + len);

        // Only consider windows that start and end on word boundaries to avoid matching middle of words
        bool validStart = i == 0 ||
            RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                .hasMatch(lowerRemaining[i - 1]);
        bool validEnd = (i + len == lowerRemaining.length) ||
            RegExp(r'[^a-zA-Z\u00C0-\u024F\u4E00-\u9FA5]')
                .hasMatch(lowerRemaining[i + len]);

        if (!validStart || !validEnd) continue;

        final window = rawWindow.trim();
        final score = lowerTarget.similarityTo(window);
        if (score > highestScore && score >= 0.5) {
          highestScore = score;
          bestMatchIdx = i;
          bestMatchLen = len;
        }
      }
    }

    if (bestMatchIdx != -1) {
      print(
          'Matched "$word" to "${remaining.substring(bestMatchIdx, bestMatchIdx + bestMatchLen)}" (Score: $highestScore)');
      remaining = remaining.substring(bestMatchIdx + bestMatchLen);
    } else {
      print('Failed to match "$word"');
    }
  }
}
