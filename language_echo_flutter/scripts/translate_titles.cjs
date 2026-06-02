const fs = require('fs');
const https = require('https');
require('dotenv').config({ path: '../.env' }); // Load API key

const API_KEY = process.env.GEMINI_API_KEY;

async function translateText(text, targetLang) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            contents: [{ parts: [{ text: `Translate the following short title/description into ${targetLang}. Return ONLY the translation, nothing else, no quotes: ${text}` }] }],
            generationConfig: { temperature: 0.1 }
        });

        const req = https.request(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            },
            (res) => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => {
                    try {
                        const j = JSON.parse(body);
                        resolve(j.candidates[0].content.parts[0].text.trim());
                    } catch (e) {
                        console.error(body);
                        resolve(text); // fallback
                    }
                });
            }
        );
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function processFile(filePath, targetLang) {
    console.log('Processing', filePath, 'to', targetLang);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (let i = 0; i < data.length; i++) {
        console.log(`Translating ${i + 1}/${data.length}: ${data[i].title}`);
        data[i].title = await translateText(data[i].title, targetLang);
        data[i].description = await translateText(data[i].description, targetLang);
        // write every iteration to save progress
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        await new Promise(r => setTimeout(r, 600)); // rate limit
    }
}

async function main() {
    await processFile('assets/data/ingles_stories.json', 'Spanish');
    await processFile('assets/data/spanish_stories.json', 'English');
    console.log('Done!');
}

main().catch(console.error);
