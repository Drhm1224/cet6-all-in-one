# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Planned
- Complete overhaul of the mock test module (see [README § Next Steps](README.md#next-steps))

---

## [0.2.0] - 2026-05-19

### Added
- **Vocab — Mastered word review**: New "✓ 已掌握" button opens a modal listing all words marked as mastered, each with a "撤回" button to restore them to the practice pool. Prevents accidental permanent removal.
- **Listening — High-frequency vocabulary groups**: Expanded from 3 groups / 6 words to 6 collapsible groups / 60+ words, organised by scene (Academic, Workplace, Society, Science & Environment, Health, Signal Words). Each entry includes the exam context where the word appears.
- **Translation — High-frequency vocabulary groups**: Expanded from 2 groups / 20 entries to 5 collapsible groups / 60+ entries, organised by theme (Cultural Proper Nouns, Social Policy, Science & Technology, High-frequency Verbs, Values & Spirit). Entries are annotated with the specific exam set they appear in.
- **Home — Quick navigation bar**: Full 7-button quick-nav grid (备考技巧 / 作文 / 听力 / 阅读 / 翻译 / 词汇 / 模拟测试) placed at the top of the home page, above the score breakdown cards.
- **Collapsible vocab groups**: New `.vocab-group` CSS component with click-to-expand behaviour, shared by both the listening and translation vocabulary sections.

### Changed
- **Reading — Section B answer input**: Replaced 14 radio buttons (A–N) per statement with a compact `<select>` dropdown. Paragraph letters are auto-detected from the article content, so the dropdown only shows letters that actually exist in that exam set. Layout changed to `[dropdown] [statement text]` inline.
- **Writing page**: Updated description to reflect that all exams since 2023 use the continuation (续写) format; removed outdated references to picture-composition and chart-composition types.
- **Outline page (备考技巧)**: Removed the vocabulary review section. Rewrote all four remaining sections (Writing, Translation, Reading, Listening) to focus on actionable exam techniques and study methods derived from 2023–2025 past papers, replacing generic advice with specific rules (e.g. "second sentence must directly continue the opening line", "use select-by-part-of-speech first in banked cloze").
- **Home — High-frequency themes**: Updated all three theme blocks (Writing / Translation / Reading) to reflect topics actually tested in 2023–2025 exams. Writing themes now list continuation-format topics; Translation themes cite specific exam sets.
- **Home — Quick navigation**: Removed the old 4-button "⚡ 快速导航" card and the "📅 备考时间规划建议" card.
- **Navigation bar**: Renamed "复习要点" to "备考技巧" for consistency with the page heading.
- **Home quick-nav buttons**: Replaced fixed `btn-primary` (always blue) with a new `home-nav-btn` class that highlights only the currently active destination, keeping visual state in sync with the top nav bar.

### Fixed
- **Vocab data (`vocab_data.js`)**: Audited all 2,497 entries and corrected 62 errors across five categories:
  - Deleted 10 entries whose `word` field contained sentence fragments (garbled OCR artefacts); correct entries already existed elsewhere in the file.
  - Fixed 3 entries with garbled `word` fields where no duplicate existed (`Easter`, `static`, `specialize`).
  - Cleaned 22 `meaning` fields: removed mid-word line-break artefacts, deduplicated repeated definitions, stripped mixed-in etymology essays and exam-question fragments, and corrected one factual error (`arson`: "防火" → "纵火罪").
  - Corrected 21 `phonetic` fields: full-width colons, digit `1` substituted for letter `l`, missing prefixes, and garbled leading characters.
  - Fixed 5 `pos` fields (empty or wrong part of speech) and renamed `cooperativeness` → `cooperative` with an expanded definition.

---

## [0.1.0] - 2026-05-01

### Added
- Initial release with 18 past-paper sets (2023–2025) covering all four skills.
- 4,000-word flashcard system with wordbook and mastered-word tracking.
- Mock test module with random question generation.
- Static single-file architecture (no build step, runs directly from `file://`).
