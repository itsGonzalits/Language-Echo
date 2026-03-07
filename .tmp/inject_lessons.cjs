const fs = require('fs');
const path = require('path');

const constantsPath = path.join(__dirname, '..', 'learnSpanishConstants.ts');
const generatedPath = path.join(__dirname, 'spanish_lessons_generated.json');

// Read the generated lessons
const generatedLessonsRaw = fs.readFileSync(generatedPath, 'utf8');
let generatedLessons = JSON.parse(generatedLessonsRaw);

// We need to format them as valid TS object strings (or just stringify and let JSON be valid TS)
// JSON string is valid TS code for an array, except we want to omit quotes around keys if we were strict,
// but JSON works fine inside a TS array because it parses perfectly.
const jsonStringToInsert = JSON.stringify(generatedLessons, null, 4);

// To avoid messing up the whole file, we'll slice into the string.
let constantsContent = fs.readFileSync(constantsPath, 'utf8');

// Find the end of the `LEARN_SPANISH_STORIES` array which should end with `];` or `] ;` 
// It's safer to find the last object ending and append before the closing bracket.
const arrayEndIndex = constantsContent.lastIndexOf('];');

if (arrayEndIndex === -1) {
    console.error("Could not find the end of LEARN_SPANISH_STORIES array ('];').");
    process.exit(1);
}

// We just append a comma, then the inner contents of the generated lessons array
// removing the outermost brackets of `jsonStringToInsert`
const innerJsonItems = jsonStringToInsert.trim().slice(1, -1); // strip [ and ]

const newContent = constantsContent.slice(0, arrayEndIndex) + ",\n" + innerJsonItems + "\n];\n";

fs.writeFileSync(constantsPath, newContent, 'utf8');
console.log("Successfully injected " + generatedLessons.length + " lessons into learnSpanishConstants.ts");
