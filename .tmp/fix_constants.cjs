const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'learnSpanishConstants.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// Replace all instances of `explanation:` or `"explanation":` inside the object Array
content = content.replace(/\"explanation\"\s*:/g, '"answerExplanation":');
content = content.replace(/explanation\s*:/g, 'answerExplanation:');

fs.writeFileSync(targetPath, content, 'utf8');
console.log("Fixed explanation keys.");
