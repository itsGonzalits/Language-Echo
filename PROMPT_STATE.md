# Project Status: Mandarin Echo

## Recent Progress (Feb 2026)
- **Full TTS Service Rewrite (`ttsService.ts`):**
    - Fixed `onended` race condition — `play()` promise no longer hangs when `stop()` is called externally.
    - Fixed `seek()` dead branch — seeking now works correctly from any state (playing, paused, idle).
    - Added **GainNode-based audio graph** with proper `teardownSource()` for clean disconnects on every stop/pause/seek.
    - Added **in-memory audio cache** (`Map<string, AudioBuffer>` keyed by `text|gender`) — replays are instant, zero API calls.
    - Added **crossfade** (50ms raised-cosine fade-in/fade-out) at segment boundaries to eliminate clicks/pops.
    - Added **1-second lead-in silence** before individual sentence audio for a calmer start.
- **Voice Consistency:**
    - Locked to exactly **2 voices**: `Kore` (female) and `Puck` (male). Removed storyId-based voice rotation.
    - Sentence index determines gender: even sentences → female, odd → male. Consistent between full-story and individual-sentence modes.
- **TTS Prompt Optimization:**
    - Prompt now frames speaker as a "Mandarin teacher reading to a beginner student" with explicit instructions: speak very slowly, pause between phrases, enunciate every tone, warm patient tone.
- **Speed Normalization (Implemented & Removed):**
    - Built `normalizeBufferSpeed()` using `OfflineAudioContext` to equalize speaking rates across segments (capped ±15%).
    - **Removed** because `playbackRate`-based normalization lowered pitch (deeper voices). Now relies purely on TTS prompt for pacing.
- **Audio Overlap Fix:**
    - `playbackRequestIdRef` mechanism in `App.tsx` ensures only the most recent request plays — stale requests are discarded.
- **App.tsx Fix:**
    - `isPaused` state properly resets when audio ends naturally.

## Current State
- **TTS Service:** `gemini-2.5-flash-preview-tts` with Kore/Puck voices, teacher-paced prompt, audio caching, and crossfade.
- **Playback:** Single-sentence (with 1s delay) and full-conversation playback with synchronized text highlighting.
- **Vocabulary:** Users can save words from stories to a persistent vocabulary list.
- **Backups:** `ttsService.ts.backup` and `App.tsx.backup` contain the last known-good state with normalization enabled (deeper but consistent pace).

## Architecture Notes
- `ttsService.ts` — TTS fetch, decode, cache, AudioController, crossfade, stitching.
- `App.tsx` — UI state machine (SELECTING → FULL_LISTEN → SENTENCE_LISTEN → COMPREHENSION → VOCABULARY), playback orchestration, progress tracking.
- `normalizeBufferSpeed()` utility still exists in `ttsService.ts` but is **not called**. Can be re-enabled if pitch-preserving time-stretch is implemented later.

## Next Steps
- Consider implementing **WSOLA (Waveform Similarity Overlap-Add)** for pitch-preserving speed normalization if pacing inconsistency remains an issue.
- Explore additional pedagogical features like pinyin toggle or translation reveal logic.
