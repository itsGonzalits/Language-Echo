# Language Echo 🎧

Language Echo is a premium, AI-powered language listening mastery application. It features curated modules for **Mandarin**, **Spanish**, and **English** to help users transition from passive listening to active understanding.

The project is structured as a dual-platform application:
1. **Web Application:** Built with React, Vite, and Tailwind CSS.
2. **Mobile Application:** Built with Flutter, featuring native platform integrations and local Text-to-Speech decoding.

---

## 📲 Direct APK Download (Android)

You can download and run the compiled Android application directly on your phone:

📥 **[Download Language_Echo.apk](https://github.com/itsGonzalits/Language-Echo/raw/main/Language_Echo.apk)**

### Installation Instructions:
1. Open the link above on your Android phone's web browser to download the `.apk` file.
2. Once downloaded, tap the file in your notification bar or Downloads folder.
3. If prompted, enable **"Install from Unknown Sources"** in your browser/system settings to proceed.
4. Open **Language Echo** from your home screen and start practicing!

---

## ✨ Features

- **Paced Listening Exercises:** Listen to realistic conversations paced naturally for language learners.
- **Interactive Sentence Analysis:** Reveal Hanzi, Pinyin, and English translations with interactive word breakdowns.
- **Interactive Vocabulary:** Tap any word to show its definition and save it to your persistent learning list.
- **Challenge Quizzes:** Test your comprehension at the end of each module with custom interactive quizzes.
- **Vibrant Modern UI:** Dark slate aesthetics, glassmorphism, glowing micro-animations, and high-fidelity layouts.

---

## 🛠️ Project Structure & Tech Stack

### Web App (React)
Located at the root of the workspace.
- **Framework:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Local Dev Server:** `npm run dev`

### Mobile App (Flutter)
Located in the [language_echo_flutter/](file:///c:/Users/gonza/Documents/Language%20Echo/language_echo_flutter) directory.
- **Framework:** Flutter (Dart)
- **Audio Decoding:** `just_audio`
- **Animation:** `flutter_animate`
- **Launcher Generator:** `flutter_launcher_icons`

---

## 💻 Running Locally

### 1. Web Application
1. Install node dependencies:
   ```bash
   npm install
   ```
2. Run Vite local server:
   ```bash
   npm run dev
   ```

### 2. Mobile Application
1. Navigate to the Flutter directory:
   ```bash
   cd language_echo_flutter
   ```
2. Get packages:
   ```bash
   flutter pub get
   ```
3. Run on a connected device/emulator:
   ```bash
   flutter run --dart-define=GEMINI_API_KEY=YOUR_API_KEY
   ```
