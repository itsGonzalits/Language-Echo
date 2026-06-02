import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../state/app_state.dart';
import '../models/story.dart';
import '../theme/app_theme.dart';

class VocabularyScreen extends StatelessWidget {
  final VoidCallback onBack;
  const VocabularyScreen({super.key, required this.onBack});

  @override
  Widget build(BuildContext context) {
    final appState = context.watch<AppStateNotifier>();
    final isSp = appState.activeTab == LanguageTab.ingles;
    final isMandarin = appState.activeTab == LanguageTab.mandarin;
    final sort = appState.vocabSort;
    final activeSort = (!isMandarin && sort == VocabSort.pinyin) ? VocabSort.hanzi : sort;

    final words = [...appState.savedWords]..sort((a, b) {
        return activeSort == VocabSort.pinyin
            ? a.pinyin.compareTo(b.pinyin)
            : activeSort == VocabSort.hanzi
                ? a.hanzi.compareTo(b.hanzi)
                : a.meaning.compareTo(b.meaning);
      });

    return Scaffold(
      backgroundColor: AppTheme.bgDeep,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: onBack,
                    child: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                          color: AppTheme.bgCard,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: AppTheme.borderMuted)),
                      child: const Icon(Icons.chevron_left,
                          color: AppTheme.textSecondary, size: 22),
                    ),
                  ),
                  const SizedBox(width: 16),
                  Text(isSp ? 'Vocabulario' : 'Vocabulary',
                      style: const TextStyle(
                          color: AppTheme.textPrimary,
                          fontSize: 24,
                          fontWeight: FontWeight.w900,
                          fontStyle: FontStyle.italic)),
                ],
              ),
            ),
            const Divider(color: AppTheme.borderMuted, height: 1),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  if (isMandarin) ...[
                    _SortButton(
                        label: 'Pinyin',
                        active: activeSort == VocabSort.pinyin,
                        onTap: () => appState.setVocabSort(VocabSort.pinyin)),
                    const SizedBox(width: 8),
                    _SortButton(
                        label: 'Hanzi',
                        active: activeSort == VocabSort.hanzi,
                        onTap: () => appState.setVocabSort(VocabSort.hanzi)),
                    const SizedBox(width: 8),
                    _SortButton(
                        label: 'English',
                        active: activeSort == VocabSort.meaning,
                        onTap: () => appState.setVocabSort(VocabSort.meaning)),
                  ] else if (isSp) ...[
                    _SortButton(
                        label: 'Inglés',
                        active: activeSort == VocabSort.hanzi,
                        onTap: () => appState.setVocabSort(VocabSort.hanzi)),
                    const SizedBox(width: 8),
                    _SortButton(
                        label: 'Español',
                        active: activeSort == VocabSort.meaning,
                        onTap: () => appState.setVocabSort(VocabSort.meaning)),
                  ] else ...[
                    _SortButton(
                        label: 'Spanish',
                        active: activeSort == VocabSort.hanzi,
                        onTap: () => appState.setVocabSort(VocabSort.hanzi)),
                    const SizedBox(width: 8),
                    _SortButton(
                        label: 'English',
                        active: activeSort == VocabSort.meaning,
                        onTap: () => appState.setVocabSort(VocabSort.meaning)),
                  ],
                ],
              ),
            ),
            Expanded(
              child: words.isEmpty
                  ? Center(
                      child: Text(isSp ? 'No hay palabras guardadas aún' : 'No words saved yet',
                          style: const TextStyle(
                              color: AppTheme.textMuted,
                              fontSize: 13,
                              letterSpacing: 2)))
                  : ListView.separated(
                      padding: const EdgeInsets.fromLTRB(24, 0, 24, 32),
                      itemCount: words.length,
                      separatorBuilder: (_, __) => const SizedBox(height: 10),
                      itemBuilder: (context, i) {
                        final word = words[i];
                        final originalIdx = appState.savedWords.indexOf(word);
                        return Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 16, vertical: 14),
                          decoration: BoxDecoration(
                            color: AppTheme.bgCard.withOpacity(0.2),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: AppTheme.borderMuted),
                          ),
                          child: Row(
                            children: [
                              if (!isMandarin) ...[
                                if (activeSort == VocabSort.hanzi) ...[
                                  Expanded(
                                    flex: 2,
                                    child: Text(
                                      word.hanzi,
                                      style: const TextStyle(
                                        color: AppTheme.violet,
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ),
                                  _Divider(),
                                  Expanded(
                                    flex: 3,
                                    child: Text(
                                      word.meaning,
                                      style: const TextStyle(
                                        color: AppTheme.textSecondary,
                                        fontStyle: FontStyle.italic,
                                        fontSize: 14,
                                      ),
                                    ),
                                  ),
                                ] else ...[
                                  Expanded(
                                    flex: 3,
                                    child: Text(
                                      word.meaning,
                                      style: const TextStyle(
                                        color: AppTheme.violet,
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ),
                                  _Divider(),
                                  Expanded(
                                    flex: 2,
                                    child: Text(
                                      word.hanzi,
                                      style: const TextStyle(
                                        color: AppTheme.textPrimary,
                                        fontSize: 16,
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                  ),
                                ],
                              ] else ...[
                                if (activeSort == VocabSort.pinyin) ...[
                                  SizedBox(
                                      width: 80,
                                      child: Text(word.pinyin,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontWeight: FontWeight.bold,
                                              fontFamily: 'monospace'))),
                                  _Divider(),
                                  SizedBox(
                                      width: 60,
                                      child: Text(word.hanzi,
                                          style: const TextStyle(
                                              color: AppTheme.textPrimary,
                                              fontSize: 20,
                                              fontWeight: FontWeight.w300))),
                                  _Divider(),
                                  Expanded(
                                      child: Text(word.meaning,
                                          style: const TextStyle(
                                              color: AppTheme.textMuted,
                                              fontStyle: FontStyle.italic,
                                              fontSize: 13))),
                                ] else if (activeSort == VocabSort.hanzi) ...[
                                  SizedBox(
                                      width: 50,
                                      child: Text(word.hanzi,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontSize: 22,
                                              fontWeight: FontWeight.w300))),
                                  _Divider(),
                                  SizedBox(
                                      width: 90,
                                      child: Text(word.pinyin,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontFamily: 'monospace',
                                              fontSize: 13))),
                                  _Divider(),
                                  Expanded(
                                      child: Text(word.meaning,
                                          style: const TextStyle(
                                              color: AppTheme.textMuted,
                                              fontStyle: FontStyle.italic,
                                              fontSize: 13))),
                                ] else ...[
                                  Expanded(
                                      child: Text(word.meaning,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontWeight: FontWeight.bold,
                                              fontSize: 13))),
                                  _Divider(),
                                  SizedBox(
                                      width: 80,
                                      child: Text(word.pinyin,
                                          style: const TextStyle(
                                              color: AppTheme.violet,
                                              fontFamily: 'monospace',
                                              fontSize: 12))),
                                  _Divider(),
                                  SizedBox(
                                      width: 40,
                                      child: Text(word.hanzi,
                                          style: const TextStyle(
                                              color: AppTheme.textPrimary,
                                              fontSize: 18,
                                              fontWeight: FontWeight.w300))),
                                ],
                              ],
                              IconButton(
                                icon: const Icon(Icons.delete_outline,
                                    color: AppTheme.textMuted, size: 20),
                                onPressed: () =>
                                    appState.deleteWord(originalIdx),
                                padding: EdgeInsets.zero,
                                constraints: const BoxConstraints(),
                              ),
                            ],
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SortButton extends StatelessWidget {
  final String label;
  final bool active;
  final VoidCallback onTap;
  const _SortButton(
      {required this.label, required this.active, required this.onTap});
  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: active ? AppTheme.violetDim : Colors.transparent,
            borderRadius: BorderRadius.circular(50),
            border: Border.all(
                color: active ? AppTheme.violetBorder : AppTheme.borderMuted),
          ),
          child: Text(label,
              style: TextStyle(
                  color: active ? AppTheme.violet : AppTheme.textMuted,
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1)),
        ),
      );
}

class _Divider extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Container(
        width: 1,
        height: 30,
        margin: const EdgeInsets.symmetric(horizontal: 10),
        color: AppTheme.borderMuted,
      );
}
