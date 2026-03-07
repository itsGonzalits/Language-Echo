import fs from 'fs';

// Read the existing file content
const constantsPath = './spanishConstants.ts';
let constantsContent = fs.readFileSync(constantsPath, 'utf8');

// Read the generated JSON
const newStories = JSON.parse(fs.readFileSync('./generated_spanish_stories.json', 'utf8'));

// Convert the objects to a formatted string
// Since we want raw TS strings (not strict JSON with quotes on everything), we'll do a basic replace or just format it as stringified JSON but it works fine as valid TS
const formattedNewStories = JSON.stringify(newStories, null, 4);

// We need to inject these items into the `export const SPANISH_STORIES: SpanishStory[] = [` array in spanishConstants.ts.
// Best way is to find the end of the initial array and inject them.
// Let's just grab the one existing story and append to it. 
// Wait, an easier way is to just generate the ENTIRE array string. But we want to preserve imports and interface definitions if any.
// Let's replace the whole array definition.

// Let's construct the new array by parsing the first existing story or just string-manipulating.
// Look for export const SPANISH_STORIES: SpanishStory[] = [ ... ];
const arrayStartInfo = constantsContent.indexOf('export const SPANISH_STORIES: SpanishStory[] = [');
if (arrayStartInfo === -1) {
    console.error("Could not find SPANISH_STORIES array in spanishConstants.ts");
    process.exit(1);
}

// Find where the array closes at the end of the file.
// Or we can just insert right before the closing bracket of the array.
// To be safe, we'll slice out the string `"generated_spanish_stories"` and insert it replacing the empty end bracket.
// Let's just find the last `];` in the file.
const lastBracketIndex = constantsContent.lastIndexOf('];');

if (lastBracketIndex === -1) {
    console.error("Could not find the end of the SPANISH_STORIES array.");
    process.exit(1);
}

// Extract the literal JSON string of new items without the outer brackets
// e.g. [, ...newItems ]
const innerItemsRaw = formattedNewStories.substring(1, formattedNewStories.length - 1);

// We want to append a comma to the existing file before the closing bracket if there isn't one.
// Let's just find the last } before ];
const lastBraceIndex = constantsContent.lastIndexOf('}', lastBracketIndex);
if (lastBraceIndex !== -1) {
    const beforeInsertion = constantsContent.substring(0, lastBraceIndex + 1);
    const afterInsertion = constantsContent.substring(lastBracketIndex);

    // Inject inner items between existing block and end block
    const finalContent = beforeInsertion + ',\n' + innerItemsRaw + '\n' + afterInsertion;

    fs.writeFileSync(constantsPath, finalContent);
    console.log("Successfully injected 99 stories into spanishConstants.ts!");
} else {
    console.log("Failed to find where to inject.");
}
