const { GoogleGenAI } = require("@google/genai");
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Missing API Key");
    process.exit(1);
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

const TOPICS = [
    "Presentándote a ti mismo",
    "Pidiendo comida en un restaurante",
    "Preguntando por direcciones",
    "Tomando un taxi",
    "De compras en una tienda",
    "Haciendo una llamada telefónica",
    "Conociendo a un nuevo amigo",
    "Hablando del clima",
    "En el aeropuerto",
    "Una entrevista de trabajo"
];

async function generateStoryForTopic(topic) {
    const prompt = `You are generating structured JSON content for a language learning app. This section is specifically for a Spanish speaker learning ENGLISH.
The topic is: ${topic}. 

Create a short dialogue in English between two people related to this topic.
The output MUST be a valid, minified JSON object with the following schema:
{
  "id": "en-unique-id-slug",
  "title": "Topic in SPANISH (e.g. Presentarse)",
  "description": "A very short description in SPANISH (e.g. Juan se presenta en una reunión.)",
  "sentences": [
    {
      "english": "Hello, my name is John. Nice to meet you.",
      "translation": "Hola, mi nombre es John. Encantado de conocerte.",
      "words": [
        { "english": "Hello", "meaning": "Hola" },
        { "english": "my name is", "meaning": "mi nombre es" },
        { "english": "Nice to meet you", "meaning": "Encantado de conocerte" }
      ]
    }
    // Add 4 to 6 sentences total to form a complete short conversational dialogue.
  ],
  "questions": [
    {
      "id": "q1",
      "questionText": "Question in SPANISH testing comprehension",
      "questionTranslation": "Translation of the question in English",
      "options": [
        { "text": "Wrong answer in English", "isCorrect": false },
        { "text": "Correct answer in English", "isCorrect": true },
        { "text": "Another wrong answer in English", "isCorrect": false }
      ],
      "answerExplanation": "Explanation in SPANISH of why the answer is correct."
    }
    // Add 3-4 questions total
  ]
}

CRITICAL INSTRUCTIONS:
- The target language being learned is ENGLISH. So the spoken dialogue field must be "english".
- The native language of the user is SPANISH. So title, description, meanings, translations, questionText, and answerExplanation must be in SPANISH.
- Do NOT wrap the JSON in markdown code blocks. Just output raw, valid JSON.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: prompt }] }],
            config: { temperature: 0.2 },
        });

        let text = response.text.trim();
        if (text.startsWith('```json')) text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        else if (text.startsWith('```')) text = text.replace(/```/g, '').trim();
        return JSON.parse(text);
    } catch (error) {
        console.error(`Failed on topic ${topic}:`, error.message);
        return null;
    }
}

async function main() {
    const allStories = [];
    for (const topic of TOPICS) {
        console.log(`Generating English lesson: ${topic}`);
        const story = await generateStoryForTopic(topic);
        if (story) {
            allStories.push(story);
            fs.writeFileSync('assets/data/ingles_stories.json', JSON.stringify(allStories, null, 2));
        }
        await new Promise(r => setTimeout(r, 2000));
    }
    console.log('Finished generating fresh English content!');
}

main().catch(console.error);
