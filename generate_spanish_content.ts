import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

// Use the API key directly (for this one-off script only)
const API_KEY = "AIzaSyBXJl548-K4j-R0rqhszjTC3pW4anQgI2s";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const TOPICS = [
    "Introducing Yourself",
    "Asking for Directions",
    "Taking an Uber/Taxi",
    "Checking into a Hotel",
    "Shopping for Clothes",
    "Buying Second-hand Items / Garage Sale",
    "Making a Phone Call",
    "Meeting a New Friend",
    "Talking about Hobbies",
    "Asking about the Weather",
    "Visiting a Doctor",
    "Opening a Bank Account",
    "Buying a Train/Subway Ticket",
    "Ordering Coffee at a Cafe",
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
    "Calling a Plumber/Electrician",
    "Reporting a Lost Item",
    "Exchanging Currency",
    "Visiting a Museum",
    "Talking about Holidays (Thanksgiving/Christmas)",
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
    "Ordering Food from a Food Truck",
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

const CHUNK_SIZE = 5;
const DELAY_MS = 15000; // 15 seconds

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateStories() {
    console.log(`Generating ${TOPICS.length} new English lessons for Spanish speakers in batches of ${CHUNK_SIZE}...`);

    let allStories: any[] = [];

    // Load existing progress if available
    if (fs.existsSync('generated_spanish_stories.json')) {
        try {
            const currentData = JSON.parse(fs.readFileSync('generated_spanish_stories.json', 'utf8'));
            if (Array.isArray(currentData) && currentData.length > 0) {
                allStories = currentData;
                console.log(`Resuming from ${allStories.length} existing stories...`);
            }
        } catch (e) {
            console.log("Could not parse existing file, starting fresh.");
        }
    }

    const startingIndex = allStories.length;

    for (let i = startingIndex; i < TOPICS.length; i += CHUNK_SIZE) {
        const batchTopics = TOPICS.slice(i, i + CHUNK_SIZE);
        console.log(`\n--- Processing batch ${Math.floor(i / CHUNK_SIZE) + 1} of ${Math.ceil(TOPICS.length / CHUNK_SIZE)} ---`);
        console.log(`Topics: ${batchTopics.join(', ')}`);

        const prompt = `
        You are an expert English teacher creating listening practice materials for native Spanish-speaking beginners.
        I need you to generate a JSON array of ${batchTopics.length} lesson objects.
        Each object must strictly follow this exact TypeScript interface:

        interface SpanishSentenceWord {
            english: string; // The specific English word/phrase being highlighted
            spanish: string; // The direct Spanish translation of that word/phrase
        }

        interface SpanishSentence {
            english: string; // The English sentence (natural, spoken-style, beginner/intermediate level)
            spanish: string; // Spanish translation of the entire sentence
            words: SpanishSentenceWord[]; // 3-6 key vocabulary words from this sentence with their translations
        }

        interface SpanishQuestionOption {
            text: string; // The option text in English + (Spanish translation) in parentheses
            isCorrect: boolean;
        }

        interface SpanishQuestion {
            id: string; // e.g., 'q1', 'q2'
            questionEnglish: string; // The question asked in English
            questionSpanish: string; // The Spanish translation of the question
            options: SpanishQuestionOption[]; // Exactly 3 options, only ONE isCorrect: true
            answerExplanation: string; // Brief explanation in English/Spanglish of why it's correct
        }

        interface SpanishStory {
            id: string; // unique URL-friendly string based on title (e.g., 'asking-for-directions')
            title: string; // Short Spanish title of the lesson (e.g., 'Preguntando Direcciones')
            description: string; // Brief Spanish description of the scenario
            sentences: SpanishSentence[]; // EXACTLY 4 sentences that form a coherent short conversational story
            questions: SpanishQuestion[]; // EXACTLY 4 comprehension questions about the story
        }

        I will provide a list of topics. Generate EXACTLY ONE story per topic.
        Ensure the English is natural, spoken-style, useful for daily life in Western/English-speaking countries (A2-B1 level).
        Ensure the Spanish translations are natural for Latin American Spanish speakers.
        
        Topics to generate:
        ${JSON.stringify(batchTopics)}

        IMPORTANT: Return ONLY the raw JSON array. Start your response with '[' and end with ']'. Do NOT wrap it in markdown code blocks like \`\`\`json. Return pure JSON data only so it can be parsed directly.
        `;

        try {
            console.log("Sending request to Gemini 2.0 Flash...");
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: [{ parts: [{ text: prompt }] }],
            });

            const jsonString = response.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!jsonString) throw new Error("No JSON returned");

            const cleanJson = jsonString.replace(/```json/g, '').replace(/```/g, '').trim();
            const batchStories = JSON.parse(cleanJson);

            allStories = allStories.concat(batchStories);

            // Save progress after every batch
            fs.writeFileSync('generated_spanish_stories.json', JSON.stringify(allStories, null, 2));
            console.log(`Successfully saved batch! Total stories so far: ${allStories.length}`);

        } catch (error: any) {
            console.error(`Error generating batch: ${error.message || error}`);
            console.log("Saving current progress and stopping. Run the script again to resume.");
            break;
        }

        if (i + CHUNK_SIZE < TOPICS.length) {
            console.log(`Waiting ${DELAY_MS / 1000} seconds to avoid rate limits...`);
            await sleep(DELAY_MS);
        }
    }
    console.log("Finished generation process.");
}

generateStories();
