
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

// Use the API key directly (for this one-off script only) or read from .env if you have a parser
const API_KEY = "AIzaSyBXJl548-K4j-R0rqhszjTC3pW4anQgI2s";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const TOPICS = [
    "Introducing Yourself",
    "Ordering Food in a Restaurant",
    "Asking for Directions",
    "Taking a Taxi",
    "Checking into a Hotel",
    "Shopping for Clothes",
    "Bargaining at a Market",
    "Making a Phone Call",
    "Meeting a New Friend",
    "Talking about Hobbies",
    "Asking about the Weather",
    "Visiting a Doctor",
    "Opening a Bank Account",
    "Buying a Train Ticket",
    "Ordering Specific Drinks (Bubble Tea)",
    "Talking about Family",
    "Describing Your Job",
    "Inviting Someone to Dinner",
    "Apologizing for Being Late",
    "Complimenting Someone",
    "Asking for Help",
    "Talking about Date and Time",
    "Discussing Travel Plans",
    "Renting an Apartment",
    "At the Hair Salon",
    "Sending a Package at the Post Office",
    "Talking about Movies",
    "Expressing Likes and Dislikes",
    "Describing a Person's Appearance",
    "Talking about Daily Routine",
    "At the Gym",
    "Giving a Gift",
    "Attending a Wedding",
    "Handling a Work Meeting",
    "Dealing with Internet Issues",
    "Calling a Plumber",
    "Reporting a Lost Item",
    "Exchanging Currency",
    "Visiting a Museum",
    "Talking about Festivals (Spring Festival)",
    "Ordering Takeout via App",
    "Discussing Traffic",
    "Talking about Pets",
    "Cooking a Meal",
    "At the Pharmacy",
    "Returning a Product",
    "Suggesting a Weekend Activity",
    "Talking about Music",
    "Describing Your Hometown",
    "Discussing Future Goals",
    "At the Library",
    "Borrowing Money",
    "Refusing an Invitation Politely",
    "Explaining a Cultural Difference",
    "Talking about Sports",
    "Cheering for a Team",
    "Complaining about Noise",
    "Asking for WiFi Password",
    "Setting up an Alarm",
    "Talking about Technology",
    "Planning a Birthday Party",
    "At the Bakery",
    "Ordering Street Food",
    "Talking about Your Studies",
    "Discussing News",
    "At the Cinema",
    "Reserving a Table",
    "Canceling an Appointment",
    "Asking for a Recommendation",
    "Talking about Stress",
    "Relaxing after Work",
    "Describing a Dream",
    "Talking about Childhood",
    "Discussing Favorite Books",
    "At the Zoo",
    "Learning to Drive",
    "Talking about Pollution",
    "Recycling and Trash",
    "Visiting a Relative",
    "Helping a Stranger",
    "Talking about Zodiac Signs",
    "Discussing Layout of a House",
    "Moving House",
    "Renovating a Room",
    "Gardening",
    "Playing Video Games",
    "Using Social Media",
    "Talking about Photography",
    "Going for a Hike",
    "Camping Trip",
    "Beach Vacation",
    "Skiing Trip",
    "Talking about Food Allergies",
    "Dietary Restrictions",
    "Learning a New Skill",
    "Teaching Someone Something",
    "Talking about Inflation/Prices",
    "Discussing a TV Show",
    "Saying Goodbye at the Airport"
];

// Combine existing 2 with 98 new ones = 100 total
const TOTAL_LESSONS_NEEDED = 5;

async function generateStories() {
    console.log(`Generating ${TOTAL_LESSONS_NEEDED} new lessons...`);

    // We will generate them in batches to avoid hitting context limits, or one by one.
    // Let's generate a JSON array of story objects.

    const prompt = `
    You are an expert Mandarin teacher creating listening practice materials.
    I need you to generate a JSON array of lesson objects.
    Each object must strictly follow this TypeScript interface:

    interface Sentence {
      mandarin: string; // Simplified Chinese, intermediate level, natural connection to previous sentence
      pinyin: string; // Accurate tone marks
      translation: string; // English translation
    }

    interface QuestionOption {
      text: string; // Mandarin + (English translation) in parentheses
      isCorrect: boolean;
    }

    interface Question {
      id: string; // e.g., 'q1', 'q2'
      questionMandarin: string;
      questionPinyin: string;
      questionTranslation: string;
      options: QuestionOption[]; // 3 options, one correct
      answerExplanation: string; // Brief English explanation
    }

    interface Story {
      id: string; // unique URL-friendly string based on title
      title: string; // Short English title
      description: string; // Brief description
      sentences: Sentence[]; // EXACTLY 4 sentences that form a coherent short story
      questions: Question[]; // EXACTLY 4 comprehension questions
    }

    I will provide a list of topics. Generate one story per topic.
    Ensure the Mandarin is natural, spoken-style, useful for daily life (HSK 3-4 level).
    
    Topics to generate now:
    ${JSON.stringify(TOPICS.slice(0, TOTAL_LESSONS_NEEDED))}

    IMPORTANT: Return ONLY the raw JSON array. No markdown formatting, no code blocks. Just the JSON.
  `;

    try {
        // Gemini 2.0 Flash is good for large context generation
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [{ parts: [{ text: prompt }] }],
            config: {
                responseMimeType: "application/json",
            }
        });

        const jsonString = response.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!jsonString) throw new Error("No JSON returned");

        // Clean up potential markdown code blocks if the model ignores the instruction (safeguard)
        const cleanJson = jsonString.replace(/```json/g, '').replace(/```/g, '').trim();

        // Save to a temp file first to inspect
        fs.writeFileSync('generated_stories.json', cleanJson);
        console.log("Successfully generated stories. Saved to generated_stories.json");

    } catch (error) {
        console.error("Error generating stories:", error);
    }
}

generateStories();
