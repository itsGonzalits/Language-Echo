const fs = require('fs');
const https = require('https');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("No API key");
    process.exit(1);
}

const generatedPath = path.join(__dirname, 'spanish_lessons_generated.json');
const data = JSON.parse(fs.readFileSync(generatedPath, 'utf8'));

const toTranslate = {};
let idx = 0;

data.forEach((lesson, lIdx) => {
    lesson.questions.forEach((q, qIdx) => {
        q.options.forEach((opt, oIdx) => {
            const currentText = opt.text;
            // Ignore if already correctly formatted "Spanish (English)" (very basic heuristic)
            // But actually we have lots of "Manual car (Manual car)". So let's retranslate everything.
            const key = `L${lIdx}_Q${qIdx}_O${oIdx}`;
            toTranslate[key] = currentText;
        });
    });
});

const keys = Object.keys(toTranslate);
console.log(`Found ${keys.length} options to re-translate.`);

async function doTranslation(batchDict) {
    const prompt = `Here is a JSON dictionary of short phrases (options for a multiple-choice quiz). They might be in English or Spanish. Your task is to translate and format each one exactly into this format: "Spanish phrase (English translation)".
For example:
If the input is "blue", output "azul (blue)".
If the input is "rojo", output "rojo (red)".
If the input is "A restaurant", output "Un restaurante (A restaurant)".
If the input is "Manual car (Manual car)", output "Coche manual (Manual car)".
Return purely a JSON object with the exact same keys as the input, and the formatted strings as values.
Input:\n` + JSON.stringify(batchDict, null, 2);

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const reqData = JSON.stringify({
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
                'Content-Length': Buffer.byteLength(reqData)
            }
        }, (res) => {
            let responseData = '';
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    return reject("API Error: " + responseData);
                }
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
        req.write(reqData);
        req.end();
    });
}

(async () => {
    const chunkSize = 150;
    const finalTranslations = {};
    for (let i = 0; i < keys.length; i += chunkSize) {
        const chunkKeys = keys.slice(i, i + chunkSize);
        const batchDict = {};
        for (let k of chunkKeys) batchDict[k] = toTranslate[k];

        console.log(`Translating batch ${Math.floor(i / chunkSize) + 1}...`);
        try {
            const mapped = await doTranslation(batchDict);
            Object.assign(finalTranslations, mapped);
        } catch (e) {
            console.error("Batch failed", e);
        }
    }

    // Apply translations
    data.forEach((lesson, lIdx) => {
        lesson.questions.forEach((q, qIdx) => {
            q.options.forEach((opt, oIdx) => {
                const key = `L${lIdx}_Q${qIdx}_O${oIdx}`;
                if (finalTranslations[key]) {
                    opt.text = finalTranslations[key];
                }
            });

            // Wait, what about answerExplanation?
            // "The customer said 'me gustaría un café con leche'."
            // We can leave answerExplanation as is for now. But we should make sure options are right.
        });
    });

    const fixedJsonPath = path.join(__dirname, 'spanish_lessons_generated_fixed.json');
    fs.writeFileSync(fixedJsonPath, JSON.stringify(data, null, 4), 'utf8');
    console.log("Written fixed lessons to " + fixedJsonPath);
})();
