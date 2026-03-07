const fs = require('fs');
const path = require('path');
const https = require('https');


const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY not found in environment or .env file.");
    process.exit(1);
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateLessonsBatch(batchSize, startIndex = 1) {
    const prompt = `Generate exactly ${batchSize} distinct practical Spanish lessons for English speakers. Focus on very common day-to-day situations in a Spanish-speaking country. Examples:
- Ordering coffee or food
- Banking transactions
- Emergency/health (doctor visit)
- Shopping for clothes or groceries
- Asking for directions
- taking a taxi / public transit
Make the dialogues sound natural. Use distinct situations for each lesson.
Do NOT duplicate lessons. 
Ensure the word array maps perfectly line-by-line back to the spanish sentences.

Start numbering IDs from 'spanish-scenario-${startIndex}'.

Return ONE JSON array containing the ${batchSize} objects, matching the exact schema provided.`;

    const schema = {
        type: "ARRAY",
        description: "List of Spanish Lessons",
        items: {
            type: "OBJECT",
            properties: {
                id: { type: "STRING", description: "A unique slug, e.g. spanish-scenario-1" },
                title: { type: "STRING", description: "Lesson title in English" },
                description: { type: "STRING", description: "A sentence explaining the situation" },
                sentences: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            english: { type: "STRING", description: "The full sentence in English" },
                            spanish: { type: "STRING", description: "The full sentence in Spanish" },
                            words: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        english: { type: "STRING", description: "The English piece of the sentence" },
                                        spanish: { type: "STRING", description: "The exact aligned Spanish piece of the sentence" }
                                    },
                                    required: ["english", "spanish"]
                                }
                            }
                        },
                        required: ["english", "spanish", "words"]
                    }
                },
                questions: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            id: { type: "STRING", description: "A unique question id for this lesson, e.g. q1" },
                            questionEnglish: { type: "STRING", description: "The question in English" },
                            questionSpanish: { type: "STRING", description: "The question in Spanish" },
                            options: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        text: { type: "STRING", description: "The answer option, e.g. To the park (Al parque)" },
                                        isCorrect: { type: "BOOLEAN", description: "True if this is the correct answer" }
                                    },
                                    required: ["text", "isCorrect"]
                                }
                            },
                            explanation: { type: "STRING", description: "Explanation of the correct answer" }
                        },
                        required: ["id", "questionEnglish", "questionSpanish", "options", "explanation"]
                    }
                }
            },
            required: ["id", "title", "description", "sentences", "questions"]
        }
    };

    const data = JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: schema
        }
    });

    return new Promise((resolve, reject) => {
        const req = https.request(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        }, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        const result = JSON.parse(responseData);
                        const textResponse = result.candidates[0].content.parts[0].text;
                        resolve(JSON.parse(textResponse));
                    } catch (e) {
                        reject(new Error(`Failed to parse response: ${e.message}`));
                    }
                } else {
                    reject(new Error(`HTTP Error: ${res.statusCode} - ${responseData}`));
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(data);
        req.end();
    });
}

async function main() {
    const totalLessonsNeeded = 99;
    let allLessons = [];

    const batchSize = 10;
    const totalBatches = Math.ceil(totalLessonsNeeded / batchSize);
    let currentIdx = 1;

    for (let i = 0; i < totalBatches; i++) {
        const currentBatchSize = Math.min(batchSize, totalLessonsNeeded - allLessons.length);
        console.log(`Generating batch ${i + 1}/${totalBatches} (${currentBatchSize} lessons)...`);

        try {
            const batchLessons = await generateLessonsBatch(currentBatchSize, currentIdx);
            if (batchLessons && Array.isArray(batchLessons)) {
                allLessons = allLessons.concat(batchLessons);
                currentIdx += batchLessons.length;
                console.log(`Successfully generated ${batchLessons.length} lessons. Total: ${allLessons.length}`);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error(`Failed to generate batch ${i + 1}: ${error.message}. Retrying once...`);
            await delay(2000);
            try {
                const batchLessons = await generateLessonsBatch(currentBatchSize, currentIdx);
                if (batchLessons && Array.isArray(batchLessons)) {
                    allLessons = allLessons.concat(batchLessons);
                    currentIdx += batchLessons.length;
                    console.log(`Successfully recovered and generated ${batchLessons.length} lessons. Total: ${allLessons.length}`);
                } else {
                    console.error(`Failed again on batch ${i + 1}. Stopping early.`);
                    break;
                }
            } catch (retryError) {
                console.error(`Retry failed: ${retryError.message}. Stopping early.`);
                break;
            }
        }

        // Respect rate limits
        if (i < totalBatches - 1) {
            await delay(3000);
        }
    }

    const tmpDir = path.join(__dirname, '..', '.tmp');
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
    }

    const outputPath = path.join(tmpDir, 'spanish_lessons_generated.json');
    fs.writeFileSync(outputPath, JSON.stringify(allLessons, null, 4), 'utf8');

    console.log(`\nDone! Successfully generated ${allLessons.length} lessons.`);
    console.log(`Saved to ${outputPath}`);
}

main();
