const fs = require('fs');
const https = require('https');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("No API key");
    process.exit(1);
}

const targetPath = path.join(__dirname, '..', 'learnSpanishConstants.ts');
const targetContent = fs.readFileSync(targetPath, 'utf8');

// Regex to find all options objects that look like { "text": "Something", "isCorrect": false }
// But we want to mutate them gracefully. Let's use string manipulation or parse the whole file.
// Since it's a TS file exporting an array, we can use an ugly regex that finds the exact text fields.
const lines = targetContent.split('\n');

const toTranslate = {};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('text: \'') || line.includes('text: "') || line.includes('"text": "')) {
        // extract the string inside quotes
        const match = line.match(/text:\s*['"]([^'"]+)['"]/i) || line.match(/"text":\s*"([^"]+)"/i);
        if (match) {
            const optText = match[1];
            // Only translate if it doesn't already have (English)
            if (!optText.includes('(')) {
                toTranslate[`line_${i}`] = optText;
            }
        }
    }
}

const keys = Object.keys(toTranslate);
console.log(`Found ${keys.length} options to translate.`);

if (keys.length === 0) {
    process.exit(0);
}

async function doTranslation(batchDict) {
    const prompt = `Translate these Spanish phrases into the format "Spanish (English translation)". Do not change keys. Output purely JSON object matching the exact keys provided. Example: {"line_1": "Un café (A coffee)"}. Here is the dictionary: \n` + JSON.stringify(batchDict);

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const data = JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            responseMimeType: "application/json"
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
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(responseData);
                    const parsed = JSON.parse(result.candidates[0].content.parts[0].text);
                    resolve(parsed);
                } catch (e) {
                    reject(e);
                }
            });
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

(async () => {
    // We can do this in chunks of 100 to avoid limits or huge generation times
    const chunkSize = 150;
    const finalTranslations = {};
    for (let i = 0; i < keys.length; i += chunkSize) {
        const chunkKeys = keys.slice(i, i + chunkSize);
        const batchDict = {};
        for (let k of chunkKeys) batchDict[k] = toTranslate[k];

        console.log(`Translating batch ${i / chunkSize + 1}...`);
        try {
            const mapped = await doTranslation(batchDict);
            Object.assign(finalTranslations, mapped);
        } catch (e) {
            console.error("Batch failed", e);
        }
    }

    // Now insert back into the file lines
    for (const [key, translated] of Object.entries(finalTranslations)) {
        if (!translated) continue;
        const lineIdx = parseInt(key.split('_')[1], 10);
        const originalText = toTranslate[key];

        // ensure we only replace the exact option string safely
        lines[lineIdx] = lines[lineIdx].replace(originalText, translated);
    }

    fs.writeFileSync(targetPath, lines.join('\n'), 'utf8');
    console.log("Done! Updated learnSpanishConstants.ts");
})();
