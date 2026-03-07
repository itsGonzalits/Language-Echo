# Task: Fix Audio Overlap on Tab Switch

## Context
The user reported an issue where switching between "individual sentence" tabs rapidly caused audio tracks to overlap. This was identified as a race condition in `triggerListeningSequence` in `App.tsx`.

## Problem
When a user clicks a tab, `triggerListeningSequence` is called. It stops the current audio and essentially starts a new async process (`prepareMandarinTTS`).
If the user clicks another tab before the first TTS preparation is complete, the first preparation eventually completes and starts playing, even though the user has moved on. The second click also starts playing its audio. This results in two audio tracks playing simultaneously.

## Solution
Implemented a request ID tracking mechanism using `useRef`.
- Added `playbackRequestIdRef` to `App.tsx`.
- In `triggerListeningSequence`, a unique `requestId` (timestamp) is generated and stored in `playbackRequestIdRef`.
- After `prepareMandarinTTS` resolves, the local `requestId` is compared with `playbackRequestIdRef.current`.
- If they don't match, it means a newer request has been initiated, so the current execution returns early without playing audio or updating state.

## Changes
- Modified `c:/Users/gonza/Downloads/mandarin-echo_-listening-mastery/App.tsx`
  - Added `playbackRequestIdRef`.
  - Updated `triggerListeningSequence` to check for stale requests.

## Verification
The logic ensures that only the most recent request's audio will play. Stale requests are discarded after the async operation completes but before playback starts.
