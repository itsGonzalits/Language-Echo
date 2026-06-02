
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY || "";
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

const EXISTING_TOPICS = [
  "Ordering Coffee",
  "Convenience Store",
  "Mobile Payment",
  "Ordering Bubble Tea",
  "Food Delivery Call",
  "Taking a Taxi",
  "Hotel Check-in",
  "Buying Clothes"
];

// Target: 100 Total. Need 92 more.
const NEW_TOPICS = [
  // --- DAILY INTERACTIONS (20) ---
  "Asking for Directions (Subway)",
  "Ordering Dinner at a Restaurant",
  "Meeting a Friend for Lunch",
  "Talking about the Weather",
  "Asking for the WiFi Password",
  "Buying a Train Ticket",
  "Renting an Apartment (Basic)",
  "At the Hair Salon (Haircut)",
  "Sending a Package (Post Office)",
  "Going to the Pharmacy",
  "Opening a Bank Account",
  "Calling a Plumber",
  "Reporting Lost Item to Police",
  "Asking for Help with Luggage",
  "Buying Groceries (Vegetables)",
  "Buying Fruits at a Market",
  "Bargaining for a Price",
  "Asking Someone to Take a Photo",
  "Apologizing for being Late",
  "Introducing Yourself to Neighbors",

  // --- SOCIAL / CASUAL (20) ---
  "Talking about Hobbies",
  "Discussing Weekend Plans",
  "Talking about Family",
  "Describing Your Job",
  "Inviting Someone to Dinner",
  "Complimenting Someone's Outfit",
  "Talking about Movies",
  "Talking about Travel Experiences",
  "Expressing Likes and Dislikes",
  "Talking about Pets",
  "Discussing Music Preferences",
  "Talking about Sports",
  "Planning a Birthday Party",
  "Talking about Festivals (Spring Festival)",
  "Gossiping (Mild)",
  "Giving Advice to a Friend",
  "Talking about Stress/Work",
  "Sharing Good News",
  "Consoling a Friend",
  "Saying Goodbye at Airport",

  // --- EMERGENCIES / NECESSITIES (10) ---
  "Calling an Ambulance (Basic)",
  "Reporting a Fire (Basic)",
  "Lost Meaning/Understanding (Pardon?)",
  "Asking to Speak Slower",
  "Explaining You Don't Understand",
  "Asking for a Refund",
  "Complaining about Noise",
  "dealing with Internet Issues",
  "Locking Yourself Out",
  "Car Breakdown (Calling Tow Truck)",

  // --- WORK / STUDY (15) ---
  "Job Interview (Self Introduction)",
  "Asking for Leave (Sick Day)",
  "Scheduling a Meeting",
  "Rescheduling an Appointment",
  "Asking a Colleague for Help",
  "Printer is Broken",
  "Ordering Office Supplies",
  "Discussing a Project Deadline",
  "Talking about University Major",
  "Applying for a Student Visa",
  "Asking Teacher a Question",
  "Borrowing a Book from Library",
  " Studying for an Exam",
  "Lunch Break Chat",
  "Welcoming a New Colleague",

  // --- LEISURE / ACTIVITIES (15) ---
  "Buying Movie Tickets",
  "Reserving a KTV Room",
  "Ordering at a Bar",
  "Booking a Gym Session",
  "Visiting a Museum",
  "Asking about Park Opening Hours",
  "Renting a Bicycle",
  "Taking a Bus (Asking Stops)",
  "Asking about Subway Transfer",
  "Planning a Hiking Trip",
  "Checking into a Flight",
  "Asking for a Recommendation (Food)",
  "Describing Taste of Food",
  "Talking about Coffee Preferences",
  "Buying a SIM Card",

  // --- RANDOM / USEFUL (12) ---
  "Asking About Recycling",
  "Asking Where the Bathroom Is (Polite)",
  "Asking for Water Refill",
  "Talking about Air Quality (Pollution)",
  "Describing a Person's Appearance",
  "Talking about Zodiac Signs",
  "Expressing Gratitude",
  "Refusing an Invitation Politely",
  "Agreeing with an Opinion",
  "Disagreeing Politely",
  "Asking for the Bill (Mai Dan)",
  "Asking about Payment Methods"
];

const PROMPT_TEMPLATE = `
You are an expert Mandarin teacher creating high-quality listening practice materials.
Generate a JSON object for a lesson about: "{{TOPIC}}".

The output must be a single JSON object strictly following this structure:
{
  "id": "kebab-case-id-based-on-topic",
  "title": "Topic Title",
  "description": "Brief description of the scenario",
  "sentences": [
    // EXACTLY 4 sentences.
    // Ensure natural flow of conversation (A -> B -> A -> B or similar).
    // Difficulty: HSK 3-4 (Intermediate). Spoken style.
    {
      "mandarin": "Chinese characters",
      "pinyin": "Pinyin with tones",
      "translation": "English translation",
      "words": [
        // EVERY single word/phrase in the sentence must be broken down here.
        // This is crucial for the tap-to-translate feature.
        { "pinyin": "word_pinyin", "hanzi": "word_hanzi", "meaning": "word_meaning" }
      ]
    }
  ],
  "questions": [
    // EXACTLY 4 multiple choice comprehension questions.
    {
      "id": "q1",
      "questionMandarin": "Question in Chinese",
      "questionPinyin": "Question Pinyin",
      "questionTranslation": "Question Meaning",
      "options": [
        { "text": "Option A (English)", "isCorrect": boolean },
        { "text": "Option B (English)", "isCorrect": boolean },
        { "text": "Option C (English)", "isCorrect": boolean }
      ],
      "answerExplanation": "Brief explanation"
    }
  ]
}

IMPORTANT:
1. Return ONLY valid JSON. No markdown formatting.
2. The "words" array MUST cover the entire sentence.
3. Use real, natural Mandarin usage.
`;

const OUTPUT_FILE = 'generated_lessons_full.json';

async function generateLessonWithRetry(topic, index) {
  while (true) {
    try {
      console.log(`[${index + 1}/${NEW_TOPICS.length}] Generating: ${topic}...`);
      const prompt = PROMPT_TEMPLATE.replace("{{TOPIC}}", topic);

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
      });

      const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("No text returned");

      const cleanText = text.trim().replace(/^```json/, '').replace(/```$/, '');
      return JSON.parse(cleanText);

    } catch (e) {
      if (e.message && (e.message.includes('429') || e.message.includes('Resource has been exhausted'))) {
        console.log("⚠️ Hit Rate Limit (429). Waiting 70 seconds before retry...");
        await new Promise(r => setTimeout(r, 70000));
        continue; // Retry forever
      }
      console.error(`❌ Error generating ${topic}:`, e.message);
      // Verify if we should skip or retry? 
      // For now, retry limited times? No, just skip if it's not a rate limit.
      // But usually only 429 fails.
      // We'll skip other errors to prevent infinite loop on bad prompts.
      return null;
    }
  }
}

async function main() {
  let results = [];

  // Resume from existing file if possible
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const content = fs.readFileSync(OUTPUT_FILE, 'utf8');
      if (content && content.trim().length > 2) {
        results = JSON.parse(content);
        console.log(`✅ Loaded ${results.length} existing lessons.`);
      }
    } catch (e) {
      console.log("Could not load existing file, starting fresh.");
    }
  }

  for (let i = 0; i < NEW_TOPICS.length; i++) {
    const topic = NEW_TOPICS[i];

    // Skip if we already have this lesson (Simple check by title usually, but topic list matches order)
    // Since we write sequentially, results[i] should correspond roughly.
    // But to be robust, let's check if we have results[i] and it looks valid.
    if (results[i] && results[i].title) {
      // console.log(`Skipping ${topic} (Already done)`);
      continue;
    }

    const lesson = await generateLessonWithRetry(topic, i);

    if (lesson) {
      results[i] = lesson; // Assign to correct index to maintain order

      // Save immediately
      // Filter out empty slots if any (though we fill sequentially)
      const cleanResults = results.filter(r => r !== null && r !== undefined);
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cleanResults, null, 2));
      console.log(`💾 Saved progress (${cleanResults.length}/${NEW_TOPICS.length})`);

      // Artificial delay to play nice with Rate Limiter (60 requests per minute? No, 15 RPM for free tier)
      // 15 RPM = 4 seconds per request.
      // Generation takes ~5-10s.
      // Adding 10s delay implies ~20s per request -> 3 RPM. Very Safe.
      console.log("Waiting 10s...");
      await new Promise(r => setTimeout(r, 10000));
    } else {
      console.log(`Skipped ${topic} after error.`);
    }
  }

  console.log(`🎉 Done! All lessons saved to ${OUTPUT_FILE}`);
}

main();
