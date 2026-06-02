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

async function fixMandarinOptions(options) {
    const prompt = `You are a translator for a language learning app.
Translate the following English quiz answers into Mandarin.
For each string, return it in this EXACT format, separating each part with a literal newline (\\n). Do NOT include any punctuation marks (no periods, commas, etc) and no parentheses:
Hanzi
pinyin
English

Example input:
["Right in front.", "Turn left."]
Example output:
["正前方\\nZhèng qiánfāng\\nRight in front", "左转\\nZuǒ zhuǎn\\nTurn left"]

Inputs to translate:
${JSON.stringify(options.map(o => o.text), null, 2)}

Return ONLY a valid JSON array of strings in the exact same order. Do NOT include markdown blocks.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: prompt }] }],
            config: { temperature: 0.1 },
        });
        let text = response.text.trim();
        if (text.startsWith('```json')) text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        else if (text.startsWith('```')) text = text.replace(/```/g, '').trim();
        const arr = JSON.parse(text);
        if (arr && arr.length === options.length) {
            for (let i = 0; i < arr.length; i++) {
                options[i].text = arr[i];
            }
        }
    } catch (e) {
        console.error("Failed mandarin options format:", e.message);
    }
}

async function fixSpanishOptions(options) {
    // If the first option already contains '(', assume it's already translated
    if (options[0].text.includes('(')) return;

    const prompt = `You are a translator for a language learning app.
Translate the following English quiz answers into Spanish.
For each string, return it in this EXACT format:
English (Spanish)

Example input:
["Right in front.", "Turn left."]
Example output:
["Right in front. (Justo enfrente.)", "Turn left. (Gire a la izquierda.)"]

Inputs to translate:
${JSON.stringify(options.map(o => o.text), null, 2)}

Return ONLY a valid JSON array of strings in the exact same order. Do NOT include markdown blocks.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: prompt }] }],
            config: { temperature: 0.1 },
        });
        let text = response.text.trim();
        if (text.startsWith('```json')) text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        else if (text.startsWith('```')) text = text.replace(/```/g, '').trim();
        const arr = JSON.parse(text);
        if (arr && arr.length === options.length) {
            for (let i = 0; i < arr.length; i++) {
                options[i].text = arr[i];
            }
        }
    } catch (e) {
        console.error("Failed spanish options format:", e.message);
    }
}

async function processFile(filePath, type) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let totalQs = 0;

    // Create an array of formatting promises
    const tasks = [];
    for (let i = 0; i < data.length; i++) {
        const story = data[i];
        for (let j = 0; j < story.questions.length; j++) {
            totalQs++;
            if (type === 'mandarin') {
                tasks.push(fixMandarinOptions(story.questions[j].options));
            } else if (type === 'spanish') {
                tasks.push(fixSpanishOptions(story.questions[j].options));
            }
        }
    }

    // Wait for all to finish formatting in parallel
    console.log(`Processing ${tasks.length} questions for ${type}...`);
    // Run in chunks to prevent 429
    const chunkSize = 15;
    for (let i = 0; i < tasks.length; i += chunkSize) {
        const chunk = tasks.slice(i, i + chunkSize);
        await Promise.all(chunk);
        await new Promise(r => setTimeout(r, 2000));
        console.log(`Finished ${Math.min(i + chunkSize, tasks.length)} / ${tasks.length}`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // write progress
    }
    console.log(`Done rewriting ${filePath}!`);
}

async function main() {
    await processFile('assets/data/mandarin_stories.json', 'mandarin');
    // await processFile('assets/data/spanish_stories.json', 'spanish');
}

main().catch(console.error);
