import os
import json
import time
import urllib.request
import urllib.error

API_KEY = os.environ.get("GEMINI_API_KEY")

if not API_KEY:
    try:
        from dotenv import load_dotenv
        load_dotenv()
        API_KEY = os.environ.get("GEMINI_API_KEY")
    except ImportError:
        pass

if not API_KEY:
    print("Error: GEMINI_API_KEY not found in environment or .env file.")
    exit(1)

API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"

def generate_lessons_batch(batch_size, startIndex=1):
    prompt = f"""Generate exactly {batch_size} distinct practical Spanish lessons for English speakers. Focus on very common day-to-day situations in a Spanish-speaking country. Examples:
- Ordering coffee or food
- Banking transactions
- Emergency/health (doctor visit)
- Shopping for clothes or groceries
- Asking for directions
- taking a taxi / public transit
Make the dialogues sound natural. Use distinct situations for each lesson.
Do NOT duplicate lessons. 
Ensure the word array maps perfectly line-by-line back to the spanish sentences.

Start numbering IDs from 'spanish-scenario-{startIndex}'.

Return ONE JSON array containing the {batch_size} objects, matching the exact schema provided.
"""
    schema = {
        "type": "array",
        "description": "List of Spanish Lessons",
        "items": {
            "type": "object",
            "properties": {
                "id": {"type": "string", "description": "A unique slug, e.g. spanish-scenario-1"},
                "title": {"type": "string", "description": "Lesson title in English"},
                "description": {"type": "string", "description": "A sentence explaining the situation"},
                "sentences": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "english": {"type": "string", "description": "The full sentence in English"},
                            "spanish": {"type": "string", "description": "The full sentence in Spanish"},
                            "words": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "english": {"type": "string", "description": "The English piece of the sentence"},
                                        "spanish": {"type": "string", "description": "The exact aligned Spanish piece of the sentence"}
                                    },
                                    "required": ["english", "spanish"]
                                }
                            }
                        },
                        "required": ["english", "spanish", "words"]
                    }
                },
                "questions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {"type": "string", "description": "A unique question id for this lesson, e.g. q1"},
                            "questionEnglish": {"type": "string", "description": "The question in English"},
                            "questionSpanish": {"type": "string", "description": "The question in Spanish"},
                            "options": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "text": {"type": "string", "description": "The answer option, e.g. To the park (Al parque)"},
                                        "isCorrect": {"type": "boolean", "description": "True if this is the correct answer"}
                                    },
                                    "required": ["text", "isCorrect"]
                                }
                            },
                            "explanation": {"type": "string", "description": "Explanation of the correct answer"}
                        },
                        "required": ["id", "questionEnglish", "questionSpanish", "options", "explanation"]
                    }
                }
            },
            "required": ["id", "title", "description", "sentences", "questions"]
        }
    }

    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "responseSchema": schema
        }
    }

    req = urllib.request.Request(API_URL, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            text_response = result['candidates'][0]['content']['parts'][0]['text']
            return json.loads(text_response)
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code} - {e.read().decode('utf-8')}")
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None

def main():
    total_lessons_needed = 99
    all_lessons = []
    
    batch_size = 10
    total_batches = (total_lessons_needed + batch_size - 1) // batch_size
    current_idx = 1
    
    for i in range(total_batches):
        current_batch_size = min(batch_size, total_lessons_needed - len(all_lessons))
        print(f"Generating batch {i+1}/{total_batches} ({current_batch_size} lessons)...")
        
        batch_lessons = generate_lessons_batch(current_batch_size, current_idx)
        
        if batch_lessons:
            all_lessons.extend(batch_lessons)
            current_idx += len(batch_lessons)
            print(f"Successfully generated {len(batch_lessons)} lessons. Total: {len(all_lessons)}")
        else:
            print(f"Failed to generate batch {i+1}. Retrying once...")
            time.sleep(2)
            batch_lessons = generate_lessons_batch(current_batch_size, current_idx)
            if batch_lessons:
                all_lessons.extend(batch_lessons)
                current_idx += len(batch_lessons)
                print(f"Successfully recovered and generated {len(batch_lessons)} lessons. Total: {len(all_lessons)}")
            else:
                 print(f"Failed again on batch {i+1}. Stopping early.")
                 break
                 
        # Respect rate limits
        if i < total_batches - 1:
            time.sleep(2)

    os.makedirs('.tmp', exist_ok=True)
    with open('.tmp/spanish_lessons_generated.json', 'w', encoding='utf-8') as f:
        json.dump(all_lessons, f, indent=4, ensure_ascii=False)
        
    print(f"\nDone! Successfully generated {len(all_lessons)} lessons.")
    print("Saved to .tmp/spanish_lessons_generated.json")

if __name__ == "__main__":
    main()
