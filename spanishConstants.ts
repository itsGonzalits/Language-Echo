
import { SpanishStory } from './spanishTypes';

export const SPANISH_STORIES: SpanishStory[] = [
    {
        id: 'restaurant-order',
        title: 'Ordenando en un Restaurante',
        description: 'Una pareja pidiendo la cena en un restaurante casual americano.',
        sentences: [
            {
                english: 'Hi there! Welcome in. Can I start you off with something to drink?',
                spanish: '¡Hola! Bienvenidos. ¿Puedo empezar con algo de tomar?',
                words: [
                    { english: 'welcome', spanish: 'bienvenidos' },
                    { english: 'start you off', spanish: 'empezar con' },
                    { english: 'something', spanish: 'algo' },
                    { english: 'to drink', spanish: 'de tomar' }
                ]
            },
            {
                english: "Yes, I'll have a glass of water, and she'll have an iced tea, please.",
                spanish: 'Sí, yo quiero un vaso de agua, y ella quiere un té helado, por favor.',
                words: [
                    { english: 'a glass of', spanish: 'un vaso de' },
                    { english: 'water', spanish: 'agua' },
                    { english: 'iced tea', spanish: 'té helado' },
                    { english: 'please', spanish: 'por favor' }
                ]
            },
            {
                english: "Perfect. Are you ready to order, or do you need a few more minutes?",
                spanish: 'Perfecto. ¿Están listos para ordenar, o necesitan unos minutos más?',
                words: [
                    { english: 'ready', spanish: 'listos' },
                    { english: 'to order', spanish: 'para ordenar' },
                    { english: 'need', spanish: 'necesitan' },
                    { english: 'a few more minutes', spanish: 'unos minutos más' }
                ]
            },
            {
                english: "We're ready. I'd like the grilled chicken sandwich, and she'll have the Caesar salad.",
                spanish: 'Estamos listos. Yo quiero el sándwich de pollo a la parrilla, y ella quiere la ensalada César.',
                words: [
                    { english: "we're ready", spanish: 'estamos listos' },
                    { english: "I'd like", spanish: 'yo quiero' },
                    { english: 'grilled chicken', spanish: 'pollo a la parrilla' },
                    { english: 'sandwich', spanish: 'sándwich' },
                    { english: 'salad', spanish: 'ensalada' }
                ]
            }
        ],
        questions: [
            {
                id: 'q1',
                questionEnglish: 'What did the man order to drink?',
                questionSpanish: '¿Qué pidió el hombre para tomar?',
                options: [
                    { text: 'Té helado (Iced tea)', isCorrect: false },
                    { text: 'Un vaso de agua (A glass of water)', isCorrect: true },
                    { text: 'Café (Coffee)', isCorrect: false }
                ],
                answerExplanation: 'He said "I\'ll have a glass of water" — pidió un vaso de agua.'
            },
            {
                id: 'q2',
                questionEnglish: 'What did the woman order to drink?',
                questionSpanish: '¿Qué pidió la mujer para tomar?',
                options: [
                    { text: 'Un vaso de agua (A glass of water)', isCorrect: false },
                    { text: 'Limonada (Lemonade)', isCorrect: false },
                    { text: 'Té helado (Iced tea)', isCorrect: true }
                ],
                answerExplanation: 'He said "she\'ll have an iced tea" — ella quiere un té helado.'
            },
            {
                id: 'q3',
                questionEnglish: 'What food did the man order?',
                questionSpanish: '¿Qué comida pidió el hombre?',
                options: [
                    { text: 'Ensalada César (Caesar salad)', isCorrect: false },
                    { text: 'Sándwich de pollo a la parrilla (Grilled chicken sandwich)', isCorrect: true },
                    { text: 'Hamburguesa (Hamburger)', isCorrect: false }
                ],
                answerExplanation: 'He ordered the grilled chicken sandwich — el sándwich de pollo a la parrilla.'
            },
            {
                id: 'q4',
                questionEnglish: 'Were they ready to order right away?',
                questionSpanish: '¿Estaban listos para ordenar de inmediato?',
                options: [
                    { text: 'No, necesitaban más tiempo (No, they needed more time)', isCorrect: false },
                    { text: 'Sí, estaban listos (Yes, they were ready)', isCorrect: true },
                    { text: 'Solo el hombre estaba listo (Only the man was ready)', isCorrect: false }
                ],
                answerExplanation: 'He said "We\'re ready" — Estamos listos.'
            }
        ]
    },

    {
        "id": "introducing-yourself",
        "title": "Presentándote",
        "description": "Aprende frases básicas para presentarte a alguien.",
        "sentences": [
            {
                "english": "Hi, my name is Maria. What's your name?",
                "spanish": "Hola, me llamo María. ¿Cuál es tu nombre?",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "my name is",
                        "spanish": "me llamo"
                    },
                    {
                        "english": "What's your name?",
                        "spanish": "¿Cuál es tu nombre?"
                    }
                ]
            },
            {
                "english": "Nice to meet you, Maria. I'm David.",
                "spanish": "Mucho gusto, María. Soy David.",
                "words": [
                    {
                        "english": "Nice to meet you",
                        "spanish": "Mucho gusto"
                    },
                    {
                        "english": "I'm",
                        "spanish": "Soy"
                    }
                ]
            },
            {
                "english": "It's a pleasure to meet you too, David.",
                "spanish": "El gusto es mío también, David.",
                "words": [
                    {
                        "english": "It's a pleasure",
                        "spanish": "El gusto"
                    },
                    {
                        "english": "to meet you too",
                        "spanish": "es mío también"
                    }
                ]
            },
            {
                "english": "So, David, where are you from?",
                "spanish": "Entonces, David, ¿de dónde eres?",
                "words": [
                    {
                        "english": "So",
                        "spanish": "Entonces"
                    },
                    {
                        "english": "where are you from?",
                        "spanish": "¿de dónde eres?"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does Maria ask David?",
                "questionSpanish": "¿Qué le pregunta María a David?",
                "options": [
                    {
                        "text": "Dónde trabaja (Where he works)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cuál es su nombre (What his name is)",
                        "isCorrect": true
                    },
                    {
                        "text": "Si está ocupado (If he is busy)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Maria asks 'What's your name?' - '¿Cuál es su nombre?'"
            },
            {
                "id": "q2",
                "questionEnglish": "What does David say after Maria introduces herself?",
                "questionSpanish": "¿Qué dice David después de que María se presenta?",
                "options": [
                    {
                        "text": "Adiós (Goodbye)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mucho gusto (Nice to meet you)",
                        "isCorrect": true
                    },
                    {
                        "text": "Lo siento (I'm sorry)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "David says 'Nice to meet you, Maria' - 'Mucho gusto, María'."
            },
            {
                "id": "q3",
                "questionEnglish": "What does 'El gusto es mío también' mean?",
                "questionSpanish": "¿Qué significa 'El gusto es mío también'?",
                "options": [
                    {
                        "text": "El gusto es mío también (The pleasure is all mine too)",
                        "isCorrect": true
                    },
                    {
                        "text": "No entiendo (I don't understand)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tengo hambre (I'm hungry)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "'El gusto es mío también' directly translates to 'The pleasure is all mine too'."
            },
            {
                "id": "q4",
                "questionEnglish": "Where does Maria ask David if he is from?",
                "questionSpanish": "¿De dónde le pregunta María a David si es?",
                "options": [
                    {
                        "text": "Después de presentarse (After they introduce themselves)",
                        "isCorrect": true
                    },
                    {
                        "text": "Antes de presentarse (Before they introduce themselves)",
                        "isCorrect": false
                    },
                    {
                        "text": "Nunca (Never)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Maria asks where David is from after they introduce themselves."
            }
        ]
    },
    {
        "id": "asking-for-directions",
        "title": "Preguntando Direcciones",
        "description": "Aprende cómo pedir direcciones en la calle.",
        "sentences": [
            {
                "english": "Excuse me, how do I get to the library?",
                "spanish": "Disculpe, ¿cómo llego a la biblioteca?",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpe"
                    },
                    {
                        "english": "how do I get to",
                        "spanish": "¿cómo llego a"
                    },
                    {
                        "english": "the library",
                        "spanish": "la biblioteca"
                    }
                ]
            },
            {
                "english": "Go straight ahead, then turn left at the corner.",
                "spanish": "Siga derecho, luego gire a la izquierda en la esquina.",
                "words": [
                    {
                        "english": "Go straight ahead",
                        "spanish": "Siga derecho"
                    },
                    {
                        "english": "turn left",
                        "spanish": "gire a la izquierda"
                    },
                    {
                        "english": "at the corner",
                        "spanish": "en la esquina"
                    }
                ]
            },
            {
                "english": "Is it far from here?",
                "spanish": "¿Está lejos de aquí?",
                "words": [
                    {
                        "english": "Is it far?",
                        "spanish": "¿Está lejos?"
                    },
                    {
                        "english": "from here",
                        "spanish": "de aquí"
                    }
                ]
            },
            {
                "english": "No, it's not far. About five minutes walking.",
                "spanish": "No, no está lejos. Como cinco minutos caminando.",
                "words": [
                    {
                        "english": "No, it's not far",
                        "spanish": "No, no está lejos"
                    },
                    {
                        "english": "About",
                        "spanish": "Como"
                    },
                    {
                        "english": "walking",
                        "spanish": "caminando"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What place are they asking directions to?",
                "questionSpanish": "¿A qué lugar están pidiendo direcciones?",
                "options": [
                    {
                        "text": "El parque (The park)",
                        "isCorrect": false
                    },
                    {
                        "text": "La biblioteca (The library)",
                        "isCorrect": true
                    },
                    {
                        "text": "El restaurante (The restaurant)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is asking how to get to 'the library' - 'la biblioteca'."
            },
            {
                "id": "q2",
                "questionEnglish": "Which direction should they turn?",
                "questionSpanish": "¿En qué dirección deben girar?",
                "options": [
                    {
                        "text": "Derecha (Right)",
                        "isCorrect": false
                    },
                    {
                        "text": "Izquierda (Left)",
                        "isCorrect": true
                    },
                    {
                        "text": "Derecho (Straight)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They should 'turn left' - 'gire a la izquierda'."
            },
            {
                "id": "q3",
                "questionEnglish": "How long does it take to walk there?",
                "questionSpanish": "¿Cuánto tiempo se tarda en caminar hasta allí?",
                "options": [
                    {
                        "text": "Como cinco minutos (About five minutes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Como diez minutos (About ten minutes)",
                        "isCorrect": false
                    },
                    {
                        "text": "Como una hora (About an hour)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "It takes 'about five minutes walking' - 'como cinco minutos caminando'."
            },
            {
                "id": "q4",
                "questionEnglish": "Is the place far or near?",
                "questionSpanish": "¿Está el lugar lejos o cerca?",
                "options": [
                    {
                        "text": "Lejos (Far)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca (Near)",
                        "isCorrect": true
                    },
                    {
                        "text": "Muy lejos (Very far)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'No, it's not far' - 'No, no está lejos'."
            }
        ]
    },
    {
        "id": "taking-an-uber-taxi",
        "title": "Tomando un Uber/Taxi",
        "description": "Aprende cómo tomar un Uber o taxi.",
        "sentences": [
            {
                "english": "Hello, I need a ride to the airport, please.",
                "spanish": "Hola, necesito un viaje al aeropuerto, por favor.",
                "words": [
                    {
                        "english": "I need",
                        "spanish": "Necesito"
                    },
                    {
                        "english": "a ride",
                        "spanish": "un viaje"
                    },
                    {
                        "english": "to the airport",
                        "spanish": "al aeropuerto"
                    }
                ]
            },
            {
                "english": "Sure, where are you going?",
                "spanish": "Claro, ¿a dónde va?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "where are you going?",
                        "spanish": "¿a dónde va?"
                    }
                ]
            },
            {
                "english": "I'm going to gate number 5 at the International Terminal.",
                "spanish": "Voy a la puerta número 5 en la Terminal Internacional.",
                "words": [
                    {
                        "english": "I'm going to",
                        "spanish": "Voy a"
                    },
                    {
                        "english": "gate number 5",
                        "spanish": "la puerta número 5"
                    },
                    {
                        "english": "International Terminal",
                        "spanish": "Terminal Internacional"
                    }
                ]
            },
            {
                "english": "Okay, that'll be about $35.",
                "spanish": "Okay, serían unos $35.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "that'll be",
                        "spanish": "serían"
                    },
                    {
                        "english": "about",
                        "spanish": "unos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where does the person want to go?",
                "questionSpanish": "¿A dónde quiere ir la persona?",
                "options": [
                    {
                        "text": "El parque (The park)",
                        "isCorrect": false
                    },
                    {
                        "text": "El aeropuerto (The airport)",
                        "isCorrect": true
                    },
                    {
                        "text": "La tienda (The store)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I need a ride to the airport' - 'Necesito un viaje al aeropuerto'."
            },
            {
                "id": "q2",
                "questionEnglish": "Which terminal are they going to?",
                "questionSpanish": "¿A qué terminal van?",
                "options": [
                    {
                        "text": "Terminal Doméstica (Domestic Terminal)",
                        "isCorrect": false
                    },
                    {
                        "text": "Terminal Internacional (International Terminal)",
                        "isCorrect": true
                    },
                    {
                        "text": "Terminal de Carga (Cargo Terminal)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are going to the 'International Terminal' - 'Terminal Internacional'."
            },
            {
                "id": "q3",
                "questionEnglish": "What gate number are they going to?",
                "questionSpanish": "¿A qué número de puerta van?",
                "options": [
                    {
                        "text": "Puerta 1 (Gate 1)",
                        "isCorrect": false
                    },
                    {
                        "text": "Puerta 5 (Gate 5)",
                        "isCorrect": true
                    },
                    {
                        "text": "Puerta 10 (Gate 10)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are going to 'gate number 5' - 'la puerta número 5'."
            },
            {
                "id": "q4",
                "questionEnglish": "How much will the ride cost?",
                "questionSpanish": "¿Cuánto costará el viaje?",
                "options": [
                    {
                        "text": "Unos $20 (About $20)",
                        "isCorrect": false
                    },
                    {
                        "text": "Unos $35 (About $35)",
                        "isCorrect": true
                    },
                    {
                        "text": "Unos $50 (About $50)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The ride will cost 'about $35' - 'unos $35'."
            }
        ]
    },
    {
        "id": "checking-into-a-hotel",
        "title": "Registrándose en un Hotel",
        "description": "Aprende cómo registrarte en un hotel.",
        "sentences": [
            {
                "english": "Good afternoon, I have a reservation under the name Smith.",
                "spanish": "Buenas tardes, tengo una reserva a nombre de Smith.",
                "words": [
                    {
                        "english": "Good afternoon",
                        "spanish": "Buenas tardes"
                    },
                    {
                        "english": "I have a reservation",
                        "spanish": "Tengo una reserva"
                    },
                    {
                        "english": "under the name",
                        "spanish": "a nombre de"
                    }
                ]
            },
            {
                "english": "Okay, Mr. Smith. Can I see your ID, please?",
                "spanish": "Okay, Sr. Smith. ¿Puedo ver su identificación, por favor?",
                "words": [
                    {
                        "english": "Can I see",
                        "spanish": "¿Puedo ver"
                    },
                    {
                        "english": "your ID",
                        "spanish": "su identificación"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Sure, here you go.",
                "spanish": "Claro, aquí tiene.",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "here you go",
                        "spanish": "aquí tiene"
                    }
                ]
            },
            {
                "english": "Thank you. Your room is number 205 on the second floor.",
                "spanish": "Gracias. Su habitación es la número 205 en el segundo piso.",
                "words": [
                    {
                        "english": "Thank you",
                        "spanish": "Gracias"
                    },
                    {
                        "english": "Your room is",
                        "spanish": "Su habitación es"
                    },
                    {
                        "english": "second floor",
                        "spanish": "segundo piso"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person have?",
                "questionSpanish": "¿Qué tiene la persona?",
                "options": [
                    {
                        "text": "Una llave (A key)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una reserva (A reservation)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una pregunta (A question)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I have a reservation' - 'Tengo una reserva'."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the receptionist ask for?",
                "questionSpanish": "¿Qué pide el/la recepcionista?",
                "options": [
                    {
                        "text": "Su pasaporte (Their passport)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su identificación (Their ID)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su dinero (Their money)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The receptionist asks 'Can I see your ID?' - '¿Puedo ver su identificación?'"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the room number?",
                "questionSpanish": "¿Cuál es el número de la habitación?",
                "options": [
                    {
                        "text": "Doscientos cinco (205)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ciento uno (101)",
                        "isCorrect": false
                    },
                    {
                        "text": "Trescientos diez (310)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The room number is '205' - 'doscientos cinco'."
            },
            {
                "id": "q4",
                "questionEnglish": "Which floor is the room on?",
                "questionSpanish": "¿En qué piso está la habitación?",
                "options": [
                    {
                        "text": "Primer piso (First floor)",
                        "isCorrect": false
                    },
                    {
                        "text": "Segundo piso (Second floor)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tercer piso (Third floor)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The room is on the 'second floor' - 'segundo piso'."
            }
        ]
    },
    {
        "id": "shopping-for-clothes",
        "title": "Comprando Ropa",
        "description": "Aprende frases para comprar ropa.",
        "sentences": [
            {
                "english": "Excuse me, where can I find the t-shirts?",
                "spanish": "Disculpe, ¿dónde puedo encontrar las camisetas?",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpe"
                    },
                    {
                        "english": "where can I find",
                        "spanish": "¿dónde puedo encontrar"
                    },
                    {
                        "english": "t-shirts",
                        "spanish": "camisetas"
                    }
                ]
            },
            {
                "english": "They're over there, in the men's section.",
                "spanish": "Están allá, en la sección de hombres.",
                "words": [
                    {
                        "english": "They're over there",
                        "spanish": "Están allá"
                    },
                    {
                        "english": "in the",
                        "spanish": "en la"
                    },
                    {
                        "english": "men's section",
                        "spanish": "sección de hombres"
                    }
                ]
            },
            {
                "english": "Do you have this in a smaller size?",
                "spanish": "¿Tiene esto en una talla más pequeña?",
                "words": [
                    {
                        "english": "Do you have",
                        "spanish": "¿Tiene"
                    },
                    {
                        "english": "this",
                        "spanish": "esto"
                    },
                    {
                        "english": "smaller size",
                        "spanish": "talla más pequeña"
                    }
                ]
            },
            {
                "english": "Let me check. What size are you looking for?",
                "spanish": "Déjeme revisar. ¿Qué talla está buscando?",
                "words": [
                    {
                        "english": "Let me check",
                        "spanish": "Déjeme revisar"
                    },
                    {
                        "english": "What size",
                        "spanish": "¿Qué talla"
                    },
                    {
                        "english": "are you looking for?",
                        "spanish": "está buscando?"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person looking for?",
                "questionSpanish": "¿Qué está buscando la persona?",
                "options": [
                    {
                        "text": "Pantalones (Pants)",
                        "isCorrect": false
                    },
                    {
                        "text": "Camisetas (T-shirts)",
                        "isCorrect": true
                    },
                    {
                        "text": "Zapatos (Shoes)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is asking for 't-shirts' - 'camisetas'."
            },
            {
                "id": "q2",
                "questionEnglish": "Where are the t-shirts located?",
                "questionSpanish": "¿Dónde están ubicadas las camisetas?",
                "options": [
                    {
                        "text": "Sección de mujeres (Women's section)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sección de hombres (Men's section)",
                        "isCorrect": true
                    },
                    {
                        "text": "Sección de niños (Children's section)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The t-shirts are in the 'men's section' - 'sección de hombres'."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the person want?",
                "questionSpanish": "¿Qué quiere la persona?",
                "options": [
                    {
                        "text": "Una talla más grande (A bigger size)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una talla más pequeña (A smaller size)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un color diferente (A different color)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants 'a smaller size' - 'una talla más pequeña'."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the employee ask?",
                "questionSpanish": "¿Qué pregunta el/la empleado/a?",
                "options": [
                    {
                        "text": "¿Qué talla está buscando? (What size are you looking for?)",
                        "isCorrect": true
                    },
                    {
                        "text": "¿Puedo ayudarle? (Can I help you?)",
                        "isCorrect": false
                    },
                    {
                        "text": "¿Necesita una bolsa? (Do you need a bag?)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee asks 'What size are you looking for?' - '¿Qué talla está buscando?'"
            }
        ]
    },
    {
        "id": "buying-second-hand-items",
        "title": "Comprando Cosas Usadas",
        "description": "Una persona compra un libro en una venta de garaje.",
        "sentences": [
            {
                "english": "Hi, how much is this book?",
                "spanish": "Hola, ¿cuánto cuesta este libro?",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "how much",
                        "spanish": "cuánto"
                    },
                    {
                        "english": "book",
                        "spanish": "libro"
                    }
                ]
            },
            {
                "english": "It's five dollars.",
                "spanish": "Son cinco dólares.",
                "words": [
                    {
                        "english": "It's",
                        "spanish": "Son"
                    },
                    {
                        "english": "five",
                        "spanish": "cinco"
                    },
                    {
                        "english": "dollars",
                        "spanish": "dólares"
                    }
                ]
            },
            {
                "english": "Okay, I'll take it.",
                "spanish": "Está bien, lo llevo.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "I'll take",
                        "spanish": "lo llevo"
                    }
                ]
            },
            {
                "english": "Great, thank you!",
                "spanish": "¡Genial, gracias!",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Genial"
                    },
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person buying? (¿Qué está comprando la persona?)",
                "questionSpanish": "¿Qué está comprando la persona?",
                "options": [
                    {
                        "text": "Un carro (A car)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro (A book)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una casa (A house)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The dialogue mentions buying a 'book' (libro)."
            },
            {
                "id": "q2",
                "questionEnglish": "How much does the item cost? (¿Cuánto cuesta el objeto?)",
                "questionSpanish": "¿Cuánto cuesta el objeto?",
                "options": [
                    {
                        "text": "Dos dólares (Two dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cinco dólares (Five dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Diez dólares (Ten dollars)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The item costs 'five dollars' (cinco dólares)."
            },
            {
                "id": "q3",
                "questionEnglish": "Where are they buying the item from? (¿Dónde están comprando el objeto?)",
                "questionSpanish": "¿Dónde están comprando el objeto?",
                "options": [
                    {
                        "text": "Un restaurante (A restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una venta de garaje (A garage sale)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una tienda de comestibles (A grocery store)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The description mentions 'garage sale' (venta de garaje)."
            },
            {
                "id": "q4",
                "questionEnglish": "Does the buyer decide to purchase the item? (¿El comprador decide comprar el objeto?)",
                "questionSpanish": "¿El comprador decide comprar el objeto?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The buyer says 'I'll take it' (lo llevo) showing they want to buy it."
            }
        ]
    },
    {
        "id": "making-a-phone-call",
        "title": "Haciendo una Llamada",
        "description": "Una persona llama a una tienda para preguntar sobre el horario.",
        "sentences": [
            {
                "english": "Hello, is this the bookstore?",
                "spanish": "Hola, ¿es esta la librería?",
                "words": [
                    {
                        "english": "Hello",
                        "spanish": "Hola"
                    },
                    {
                        "english": "bookstore",
                        "spanish": "librería"
                    }
                ]
            },
            {
                "english": "Yes, it is. How can I help you?",
                "spanish": "Sí, es la librería. ¿En qué puedo ayudarle?",
                "words": [
                    {
                        "english": "Yes",
                        "spanish": "Sí"
                    },
                    {
                        "english": "help",
                        "spanish": "ayudarle"
                    }
                ]
            },
            {
                "english": "What time do you close?",
                "spanish": "¿A qué hora cierran?",
                "words": [
                    {
                        "english": "What time",
                        "spanish": "A qué hora"
                    },
                    {
                        "english": "close",
                        "spanish": "cierran"
                    }
                ]
            },
            {
                "english": "We close at 6 PM. Thanks for calling!",
                "spanish": "Cerramos a las 6 PM. ¡Gracias por llamar!",
                "words": [
                    {
                        "english": "close",
                        "spanish": "Cerramos"
                    },
                    {
                        "english": "thanks",
                        "spanish": "gracias"
                    },
                    {
                        "english": "calling",
                        "spanish": "llamar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What kind of store is being called? (¿Qué tipo de tienda están llamando?)",
                "questionSpanish": "¿Qué tipo de tienda están llamando?",
                "options": [
                    {
                        "text": "Un restaurante (A restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una librería (A bookstore)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una tienda de ropa (A clothing store)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The dialogue starts with 'Hello, is this the bookstore?'"
            },
            {
                "id": "q2",
                "questionEnglish": "What does the caller want to know? (¿Qué quiere saber la persona que llama?)",
                "questionSpanish": "¿Qué quiere saber la persona que llama?",
                "options": [
                    {
                        "text": "La hora de cierre (The closing time)",
                        "isCorrect": true
                    },
                    {
                        "text": "La dirección (The address)",
                        "isCorrect": false
                    },
                    {
                        "text": "El precio de un libro (The price of a book)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The caller asks 'What time do you close?'"
            },
            {
                "id": "q3",
                "questionEnglish": "What time does the store close? (¿A qué hora cierra la tienda?)",
                "questionSpanish": "¿A qué hora cierra la tienda?",
                "options": [
                    {
                        "text": "5 PM (5 PM)",
                        "isCorrect": false
                    },
                    {
                        "text": "6 PM (6 PM)",
                        "isCorrect": true
                    },
                    {
                        "text": "7 PM (7 PM)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The store answers 'We close at 6 PM.'"
            },
            {
                "id": "q4",
                "questionEnglish": "Is the person thankful after getting the information? (¿Está la persona agradecida después de obtener la información?)",
                "questionSpanish": "¿Está la persona agradecida después de obtener la información?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "No sé (I don't know)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The store representative says 'Thanks for calling!'"
            }
        ]
    },
    {
        "id": "meeting-a-new-friend",
        "title": "Conociendo a un Nuevo Amigo",
        "description": "Dos personas se conocen en un parque.",
        "sentences": [
            {
                "english": "Hi, I'm Maria. What's your name?",
                "spanish": "Hola, soy María. ¿Cómo te llamas?",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "I'm",
                        "spanish": "soy"
                    },
                    {
                        "english": "What's your name",
                        "spanish": "Cómo te llamas"
                    }
                ]
            },
            {
                "english": "I'm David. Nice to meet you, Maria.",
                "spanish": "Soy David. Mucho gusto, María.",
                "words": [
                    {
                        "english": "I'm",
                        "spanish": "Soy"
                    },
                    {
                        "english": "Nice to meet you",
                        "spanish": "Mucho gusto"
                    }
                ]
            },
            {
                "english": "Nice to meet you too! Are you new here?",
                "spanish": "¡Mucho gusto también! ¿Eres nuevo por aquí?",
                "words": [
                    {
                        "english": "Nice to meet you too",
                        "spanish": "Mucho gusto también"
                    },
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "here",
                        "spanish": "aquí"
                    }
                ]
            },
            {
                "english": "Yes, I just moved here last week.",
                "spanish": "Sí, me mudé aquí la semana pasada.",
                "words": [
                    {
                        "english": "Yes",
                        "spanish": "Sí"
                    },
                    {
                        "english": "moved",
                        "spanish": "mudé"
                    },
                    {
                        "english": "last week",
                        "spanish": "la semana pasada"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does Maria ask David? (¿Qué le pregunta María a David?)",
                "questionSpanish": "¿Qué le pregunta María a David?",
                "options": [
                    {
                        "text": "Su edad (His age)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su nombre (His name)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su trabajo (His job)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Maria asks 'What's your name?'"
            },
            {
                "id": "q2",
                "questionEnglish": "What does David say after Maria introduces herself? (¿Qué dice David después de que María se presenta?)",
                "questionSpanish": "¿Qué dice David después de que María se presenta?",
                "options": [
                    {
                        "text": "Adiós (Goodbye)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mucho gusto (Nice to meet you)",
                        "isCorrect": true
                    },
                    {
                        "text": "Gracias (Thank you)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "David says 'Nice to meet you, Maria.'"
            },
            {
                "id": "q3",
                "questionEnglish": "Is David new to the place? (¿Es David nuevo en el lugar?)",
                "questionSpanish": "¿Es David nuevo en el lugar?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "David says 'Yes, I just moved here last week.'"
            },
            {
                "id": "q4",
                "questionEnglish": "When did David move to this place? (¿Cuándo se mudó David a este lugar?)",
                "questionSpanish": "¿Cuándo se mudó David a este lugar?",
                "options": [
                    {
                        "text": "El año pasado (Last year)",
                        "isCorrect": false
                    },
                    {
                        "text": "La semana pasada (Last week)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ayer (Yesterday)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "David says 'I just moved here last week.'"
            }
        ]
    },
    {
        "id": "talking-about-hobbies",
        "title": "Hablando de Hobbies",
        "description": "Dos amigos hablan de sus pasatiempos.",
        "sentences": [
            {
                "english": "What do you like to do for fun?",
                "spanish": "¿Qué te gusta hacer para divertirte?",
                "words": [
                    {
                        "english": "What do you like",
                        "spanish": "Qué te gusta"
                    },
                    {
                        "english": "do",
                        "spanish": "hacer"
                    },
                    {
                        "english": "fun",
                        "spanish": "divertirte"
                    }
                ]
            },
            {
                "english": "I like to play soccer and read books.",
                "spanish": "Me gusta jugar fútbol y leer libros.",
                "words": [
                    {
                        "english": "I like",
                        "spanish": "Me gusta"
                    },
                    {
                        "english": "play soccer",
                        "spanish": "jugar fútbol"
                    },
                    {
                        "english": "read books",
                        "spanish": "leer libros"
                    }
                ]
            },
            {
                "english": "That's cool! I enjoy painting and hiking.",
                "spanish": "¡Qué chévere! Me gusta pintar y hacer senderismo.",
                "words": [
                    {
                        "english": "That's cool",
                        "spanish": "Qué chévere"
                    },
                    {
                        "english": "I enjoy",
                        "spanish": "Me gusta"
                    },
                    {
                        "english": "painting",
                        "spanish": "pintar"
                    },
                    {
                        "english": "hiking",
                        "spanish": "hacer senderismo"
                    }
                ]
            },
            {
                "english": "Maybe we can go hiking sometime!",
                "spanish": "¡Tal vez podamos ir de excursión alguna vez!",
                "words": [
                    {
                        "english": "Maybe",
                        "spanish": "Tal vez"
                    },
                    {
                        "english": "we can go",
                        "spanish": "podamos ir"
                    },
                    {
                        "english": "hiking",
                        "spanish": "excursión"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the first person ask? (¿Qué pregunta la primera persona?)",
                "questionSpanish": "¿Qué pregunta la primera persona?",
                "options": [
                    {
                        "text": "¿Qué hora es? (What time is it?)",
                        "isCorrect": false
                    },
                    {
                        "text": "¿Qué les gusta hacer para divertirse? (What they like to do for fun?)",
                        "isCorrect": true
                    },
                    {
                        "text": "¿Dónde viven? (Where they live?)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks 'What do you like to do for fun?'"
            },
            {
                "id": "q2",
                "questionEnglish": "What does the second person like to do? (¿Qué le gusta hacer a la segunda persona?)",
                "questionSpanish": "¿Qué le gusta hacer a la segunda persona?",
                "options": [
                    {
                        "text": "Jugar videojuegos (Play video games)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jugar fútbol y leer libros (Play soccer and read books)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver películas (Watch movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says 'I like to play soccer and read books.'"
            },
            {
                "id": "q3",
                "questionEnglish": "What hobbies does the first person mention? (¿Qué pasatiempos menciona la primera persona?)",
                "questionSpanish": "¿Qué pasatiempos menciona la primera persona?",
                "options": [
                    {
                        "text": "Pintar y hacer senderismo (Painting and hiking)",
                        "isCorrect": true
                    },
                    {
                        "text": "Leer y escribir (Reading and writing)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cocinar y limpiar (Cooking and cleaning)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says 'I enjoy painting and hiking.'"
            },
            {
                "id": "q4",
                "questionEnglish": "What do they plan to do together? (¿Qué planean hacer juntos?)",
                "questionSpanish": "¿Qué planean hacer juntos?",
                "options": [
                    {
                        "text": "Ir al cine (Go to the movies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir de excursión (Go hiking)",
                        "isCorrect": true
                    },
                    {
                        "text": "Jugar fútbol (Play soccer)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say 'Maybe we can go hiking sometime!'"
            }
        ]
    },
    {
        "id": "asking-about-the-weather",
        "title": "Preguntando Sobre el Clima",
        "description": "Dos personas hablan sobre el clima.",
        "sentences": [
            {
                "english": "What's the weather like today?",
                "spanish": "¿Qué tiempo hace hoy?",
                "words": [
                    {
                        "english": "What's",
                        "spanish": "Qué"
                    },
                    {
                        "english": "weather",
                        "spanish": "tiempo"
                    },
                    {
                        "english": "today",
                        "spanish": "hoy"
                    }
                ]
            },
            {
                "english": "It's sunny and warm.",
                "spanish": "Está soleado y cálido.",
                "words": [
                    {
                        "english": "It's",
                        "spanish": "Está"
                    },
                    {
                        "english": "sunny",
                        "spanish": "soleado"
                    },
                    {
                        "english": "warm",
                        "spanish": "cálido"
                    }
                ]
            },
            {
                "english": "Great! I'm going to the park.",
                "spanish": "¡Genial! Voy a ir al parque.",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Genial"
                    },
                    {
                        "english": "going",
                        "spanish": "voy"
                    },
                    {
                        "english": "park",
                        "spanish": "parque"
                    }
                ]
            },
            {
                "english": "Have fun! Don't forget sunscreen.",
                "spanish": "¡Que te diviertas! No olvides el protector solar.",
                "words": [
                    {
                        "english": "Have fun",
                        "spanish": "Que te diviertas"
                    },
                    {
                        "english": "don't forget",
                        "spanish": "no olvides"
                    },
                    {
                        "english": "sunscreen",
                        "spanish": "protector solar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about? (¿De qué están hablando?)",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "El clima (The weather)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comida (Food)",
                        "isCorrect": false
                    },
                    {
                        "text": "Deportes (Sports)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first sentence is 'What's the weather like today?'"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the weather like? (¿Cómo está el clima?)",
                "questionSpanish": "¿Cómo está el clima?",
                "options": [
                    {
                        "text": "Lluvioso y frío (Rainy and cold)",
                        "isCorrect": false
                    },
                    {
                        "text": "Soleado y cálido (Sunny and warm)",
                        "isCorrect": true
                    },
                    {
                        "text": "Nublado y ventoso (Cloudy and windy)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The response is 'It's sunny and warm.'"
            },
            {
                "id": "q3",
                "questionEnglish": "Where is the person going? (¿A dónde va la persona?)",
                "questionSpanish": "¿A dónde va la persona?",
                "options": [
                    {
                        "text": "A la playa (To the beach)",
                        "isCorrect": false
                    },
                    {
                        "text": "Al parque (To the park)",
                        "isCorrect": true
                    },
                    {
                        "text": "A la escuela (To school)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I'm going to the park.'"
            },
            {
                "id": "q4",
                "questionEnglish": "What should the person not forget? (¿Qué no debe olvidar la persona?)",
                "questionSpanish": "¿Qué no debe olvidar la persona?",
                "options": [
                    {
                        "text": "Un sombrero (A hat)",
                        "isCorrect": false
                    },
                    {
                        "text": "Protector solar (Sunscreen)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un paraguas (An umbrella)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is told 'Don't forget sunscreen.'"
            }
        ]
    },
    {
        "id": "visiting-a-doctor",
        "title": "Visitando al Doctor",
        "description": "Una persona visita al doctor para un chequeo.",
        "sentences": [
            {
                "english": "Hello, I have an appointment today.",
                "spanish": "Hola, tengo una cita hoy.",
                "words": [
                    {
                        "english": "Hello",
                        "spanish": "Hola"
                    },
                    {
                        "english": "appointment",
                        "spanish": "cita"
                    },
                    {
                        "english": "today",
                        "spanish": "hoy"
                    }
                ]
            },
            {
                "english": "What seems to be the problem?",
                "spanish": "¿Cuál parece ser el problema?",
                "words": [
                    {
                        "english": "What",
                        "spanish": "Cuál"
                    },
                    {
                        "english": "problem",
                        "spanish": "problema"
                    },
                    {
                        "english": "seems to be",
                        "spanish": "parece ser"
                    }
                ]
            },
            {
                "english": "I have a bad headache and a cough.",
                "spanish": "Tengo un fuerte dolor de cabeza y tos.",
                "words": [
                    {
                        "english": "headache",
                        "spanish": "dolor de cabeza"
                    },
                    {
                        "english": "cough",
                        "spanish": "tos"
                    },
                    {
                        "english": "bad",
                        "spanish": "fuerte"
                    }
                ]
            },
            {
                "english": "Okay, I'll take a look. Please sit here.",
                "spanish": "Está bien, voy a echar un vistazo. Por favor, siéntese aquí.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "take a look",
                        "spanish": "echar un vistazo"
                    },
                    {
                        "english": "sit",
                        "spanish": "siéntese"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person have?",
                "questionSpanish": "¿Qué tiene la persona?",
                "options": [
                    {
                        "text": "Un brazo roto (A broken arm)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un dolor de cabeza y tos (A headache and a cough)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un dolor de estómago (A stomach ache)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said they have a headache and a cough. (La persona dijo que tiene dolor de cabeza y tos.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where is the person?",
                "questionSpanish": "¿Dónde está la persona?",
                "options": [
                    {
                        "text": "En un banco (At a bank)",
                        "isCorrect": false
                    },
                    {
                        "text": "En una tienda (At a store)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el consultorio del doctor (At the doctor's)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person is visiting a doctor. (La persona está visitando a un doctor.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What will the doctor do?",
                "questionSpanish": "¿Qué hará el doctor?",
                "options": [
                    {
                        "text": "Darles medicina (Give them medicine)",
                        "isCorrect": false
                    },
                    {
                        "text": "Echar un vistazo (Take a look)",
                        "isCorrect": true
                    },
                    {
                        "text": "Enviarlos a casa (Send them home)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The doctor said, \"I'll take a look.\" (El doctor dijo, \"Voy a echar un vistazo.\")"
            },
            {
                "id": "q4",
                "questionEnglish": "What should the person do next?",
                "questionSpanish": "¿Qué debe hacer la persona después?",
                "options": [
                    {
                        "text": "Sentarse (Sit down)",
                        "isCorrect": true
                    },
                    {
                        "text": "Salir (Leave)",
                        "isCorrect": false
                    },
                    {
                        "text": "Bailar (Dance)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The doctor told them to please sit here. (El doctor les dijo que por favor se sienten aquí.)"
            }
        ]
    },
    {
        "id": "opening-a-bank-account",
        "title": "Abriendo una Cuenta Bancaria",
        "description": "Una persona está abriendo una cuenta en el banco.",
        "sentences": [
            {
                "english": "I'd like to open a bank account, please.",
                "spanish": "Me gustaría abrir una cuenta bancaria, por favor.",
                "words": [
                    {
                        "english": "like to",
                        "spanish": "gustaría"
                    },
                    {
                        "english": "open",
                        "spanish": "abrir"
                    },
                    {
                        "english": "bank account",
                        "spanish": "cuenta bancaria"
                    }
                ]
            },
            {
                "english": "Sure, what kind of account are you interested in?",
                "spanish": "Claro, ¿qué tipo de cuenta le interesa?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "kind",
                        "spanish": "tipo"
                    },
                    {
                        "english": "interested",
                        "spanish": "interesa"
                    }
                ]
            },
            {
                "english": "I'm thinking about a checking account.",
                "spanish": "Estoy pensando en una cuenta corriente.",
                "words": [
                    {
                        "english": "thinking about",
                        "spanish": "pensando en"
                    },
                    {
                        "english": "checking account",
                        "spanish": "cuenta corriente"
                    },
                    {
                        "english": "I'm",
                        "spanish": "Estoy"
                    }
                ]
            },
            {
                "english": "Great. I'll need some identification and your address.",
                "spanish": "Genial. Necesitaré alguna identificación y su dirección.",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Genial"
                    },
                    {
                        "english": "identification",
                        "spanish": "identificación"
                    },
                    {
                        "english": "address",
                        "spanish": "dirección"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to do?",
                "questionSpanish": "¿Qué quiere hacer la persona?",
                "options": [
                    {
                        "text": "Cerrar una cuenta bancaria (Close a bank account)",
                        "isCorrect": false
                    },
                    {
                        "text": "Abrir una cuenta bancaria (Open a bank account)",
                        "isCorrect": true
                    },
                    {
                        "text": "Pedir dinero prestado (Borrow money)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to open a bank account. (La persona quiere abrir una cuenta bancaria.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What kind of account is the person considering?",
                "questionSpanish": "¿Qué tipo de cuenta está considerando la persona?",
                "options": [
                    {
                        "text": "Una cuenta de ahorros (A savings account)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una cuenta corriente (A checking account)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una cuenta de jubilación (A retirement account)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is thinking about a checking account. (La persona está pensando en una cuenta corriente.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What does the bank need from the person?",
                "questionSpanish": "¿Qué necesita el banco de la persona?",
                "options": [
                    {
                        "text": "Identificación y su dirección (Identification and their address)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su número de teléfono (Their phone number)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su coche (Their car)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The bank needs identification and the person's address. (El banco necesita identificación y la dirección de la persona.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Where is the person?",
                "questionSpanish": "¿Dónde está la persona?",
                "options": [
                    {
                        "text": "En una tienda (At a store)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la biblioteca (At the library)",
                        "isCorrect": false
                    },
                    {
                        "text": "En un banco (At a bank)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person is at a bank to open an account. (La persona está en un banco para abrir una cuenta.)"
            }
        ]
    },
    {
        "id": "buying-a-train-subway-ticket",
        "title": "Comprando un Boleto de Tren/Metro",
        "description": "Una persona está comprando un boleto para el tren o el metro.",
        "sentences": [
            {
                "english": "One ticket to downtown, please.",
                "spanish": "Un boleto para el centro, por favor.",
                "words": [
                    {
                        "english": "One",
                        "spanish": "Un"
                    },
                    {
                        "english": "ticket",
                        "spanish": "boleto"
                    },
                    {
                        "english": "downtown",
                        "spanish": "el centro"
                    }
                ]
            },
            {
                "english": "Okay, is that one-way or round trip?",
                "spanish": "Bien, ¿es solo de ida o ida y vuelta?",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Bien"
                    },
                    {
                        "english": "one-way",
                        "spanish": "solo de ida"
                    },
                    {
                        "english": "round trip",
                        "spanish": "ida y vuelta"
                    }
                ]
            },
            {
                "english": "Just one-way, thank you.",
                "spanish": "Solo de ida, gracias.",
                "words": [
                    {
                        "english": "Just",
                        "spanish": "Solo"
                    },
                    {
                        "english": "one-way",
                        "spanish": "de ida"
                    },
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    }
                ]
            },
            {
                "english": "That'll be three dollars.",
                "spanish": "Serán tres dólares.",
                "words": [
                    {
                        "english": "That'll be",
                        "spanish": "Serán"
                    },
                    {
                        "english": "three",
                        "spanish": "tres"
                    },
                    {
                        "english": "dollars",
                        "spanish": "dólares"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where does the person want to go?",
                "questionSpanish": "¿A dónde quiere ir la persona?",
                "options": [
                    {
                        "text": "A la parte alta de la ciudad (Uptown)",
                        "isCorrect": false
                    },
                    {
                        "text": "Al centro de la ciudad (Downtown)",
                        "isCorrect": true
                    },
                    {
                        "text": "Al aeropuerto (The airport)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants a ticket to downtown. (La persona quiere un boleto para el centro.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What kind of ticket does the person want?",
                "questionSpanish": "¿Qué tipo de boleto quiere la persona?",
                "options": [
                    {
                        "text": "De ida (One-way)",
                        "isCorrect": true
                    },
                    {
                        "text": "De ida y vuelta (Round trip)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un pase mensual (A monthly pass)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants a one-way ticket. (La persona quiere un boleto de ida.)"
            },
            {
                "id": "q3",
                "questionEnglish": "How much does the ticket cost?",
                "questionSpanish": "¿Cuánto cuesta el boleto?",
                "options": [
                    {
                        "text": "Cinco dólares (Five dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dos dólares (Two dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tres dólares (Three dollars)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The ticket costs three dollars. (El boleto cuesta tres dólares.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Where is the person?",
                "questionSpanish": "¿Dónde está la persona?",
                "options": [
                    {
                        "text": "En un cine (At a movie theater)",
                        "isCorrect": false
                    },
                    {
                        "text": "En una estación de tren/metro (At a train/subway station)",
                        "isCorrect": true
                    },
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is buying a train/subway ticket. (La persona está comprando un boleto de tren/metro.)"
            }
        ]
    },
    {
        "id": "ordering-coffee-at-a-cafe",
        "title": "Ordenando Café en un Café",
        "description": "Una persona está ordenando café en un café.",
        "sentences": [
            {
                "english": "Hi, I'd like a latte, please.",
                "spanish": "Hola, me gustaría un latte, por favor.",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "like",
                        "spanish": "gustaría"
                    },
                    {
                        "english": "latte",
                        "spanish": "latte"
                    }
                ]
            },
            {
                "english": "Sure, what size?",
                "spanish": "Claro, ¿qué tamaño?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "what",
                        "spanish": "qué"
                    },
                    {
                        "english": "size",
                        "spanish": "tamaño"
                    }
                ]
            },
            {
                "english": "Medium, please. To go.",
                "spanish": "Mediano, por favor. Para llevar.",
                "words": [
                    {
                        "english": "Medium",
                        "spanish": "Mediano"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    },
                    {
                        "english": "to go",
                        "spanish": "para llevar"
                    }
                ]
            },
            {
                "english": "Okay, that'll be four dollars.",
                "spanish": "Está bien, serán cuatro dólares.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "that'll be",
                        "spanish": "serán"
                    },
                    {
                        "english": "four",
                        "spanish": "cuatro"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to order?",
                "questionSpanish": "¿Qué quiere ordenar la persona?",
                "options": [
                    {
                        "text": "Un capuchino (A cappuccino)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un latte (A latte)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un té (A tea)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to order a latte. (La persona quiere ordenar un latte.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What size does the person want?",
                "questionSpanish": "¿Qué tamaño quiere la persona?",
                "options": [
                    {
                        "text": "Pequeño (Small)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mediano (Medium)",
                        "isCorrect": true
                    },
                    {
                        "text": "Grande (Large)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants a medium size. (La persona quiere un tamaño mediano.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Is the person drinking their coffee at the cafe?",
                "questionSpanish": "¿La persona está bebiendo su café en el café?",
                "options": [
                    {
                        "text": "No, para llevar (No, to go)",
                        "isCorrect": true
                    },
                    {
                        "text": "Sí, aquí (Yes, here)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says \"To go.\" (La persona dice \"Para llevar.\")"
            },
            {
                "id": "q4",
                "questionEnglish": "How much is the coffee?",
                "questionSpanish": "¿Cuánto cuesta el café?",
                "options": [
                    {
                        "text": "Tres dólares (Three dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cuatro dólares (Four dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cinco dólares (Five dollars)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The coffee costs four dollars. (El café cuesta cuatro dólares.)"
            }
        ]
    },
    {
        "id": "talking-about-family",
        "title": "Hablando de la Familia",
        "description": "Una persona está hablando de su familia.",
        "sentences": [
            {
                "english": "I have a small family. Just my parents and one brother.",
                "spanish": "Tengo una familia pequeña. Solo mis padres y un hermano.",
                "words": [
                    {
                        "english": "small",
                        "spanish": "pequeña"
                    },
                    {
                        "english": "parents",
                        "spanish": "padres"
                    },
                    {
                        "english": "brother",
                        "spanish": "hermano"
                    }
                ]
            },
            {
                "english": "Oh, that's nice. Do you see them often?",
                "spanish": "Oh, qué bien. ¿Los ves seguido?",
                "words": [
                    {
                        "english": "nice",
                        "spanish": "bien"
                    },
                    {
                        "english": "see",
                        "spanish": "ves"
                    },
                    {
                        "english": "often",
                        "spanish": "seguido"
                    }
                ]
            },
            {
                "english": "Yeah, we usually get together on Sundays.",
                "spanish": "Sí, usualmente nos reunimos los domingos.",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "usually",
                        "spanish": "usualmente"
                    },
                    {
                        "english": "get together",
                        "spanish": "reunimos"
                    }
                ]
            },
            {
                "english": "That sounds like fun!",
                "spanish": "¡Eso suena divertido!",
                "words": [
                    {
                        "english": "sounds",
                        "spanish": "suena"
                    },
                    {
                        "english": "like",
                        "spanish": "como"
                    },
                    {
                        "english": "fun",
                        "spanish": "divertido"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "How big is the person's family?",
                "questionSpanish": "¿Qué tan grande es la familia de la persona?",
                "options": [
                    {
                        "text": "Grande (Big)",
                        "isCorrect": false
                    },
                    {
                        "text": "Pequeña (Small)",
                        "isCorrect": true
                    },
                    {
                        "text": "Promedio (Average)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they have a small family. (La persona dice que tiene una familia pequeña.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Who is in the person's family?",
                "questionSpanish": "¿Quién está en la familia de la persona?",
                "options": [
                    {
                        "text": "Padres y un hermano (Parents and one brother)",
                        "isCorrect": true
                    },
                    {
                        "text": "Padres y dos hermanas (Parents and two sisters)",
                        "isCorrect": false
                    },
                    {
                        "text": "Solo sus padres (Just their parents)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they have parents and one brother. (La persona dice que tiene padres y un hermano.)"
            },
            {
                "id": "q3",
                "questionEnglish": "When do they usually see each other?",
                "questionSpanish": "¿Cuándo usualmente se ven?",
                "options": [
                    {
                        "text": "Los sábados (On Saturdays)",
                        "isCorrect": false
                    },
                    {
                        "text": "Los domingos (On Sundays)",
                        "isCorrect": true
                    },
                    {
                        "text": "Los lunes (On Mondays)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They usually get together on Sundays. (Usualmente se reúnen los domingos.)"
            },
            {
                "id": "q4",
                "questionEnglish": "How does the other person feel about it?",
                "questionSpanish": "¿Cómo se siente la otra persona al respecto?",
                "options": [
                    {
                        "text": "Suena aburrido (It sounds boring)",
                        "isCorrect": false
                    },
                    {
                        "text": "Suena divertido (It sounds like fun)",
                        "isCorrect": true
                    },
                    {
                        "text": "Suena difícil (It sounds difficult)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says, \"That sounds like fun!\" (La otra persona dice, \"¡Eso suena divertido!\")"
            }
        ]
    },
    {
        "id": "describing-your-job",
        "title": "Describiendo Tu Trabajo",
        "description": "Una conversación breve sobre el trabajo de una persona.",
        "sentences": [
            {
                "english": "So, what do you do for work?",
                "spanish": "Entonces, ¿a qué te dedicas?",
                "words": [
                    {
                        "english": "So",
                        "spanish": "Entonces"
                    },
                    {
                        "english": "do",
                        "spanish": "haces"
                    },
                    {
                        "english": "work",
                        "spanish": "trabajo"
                    }
                ]
            },
            {
                "english": "I'm a software engineer at a tech company.",
                "spanish": "Soy ingeniero de software en una empresa de tecnología.",
                "words": [
                    {
                        "english": "I'm",
                        "spanish": "Soy"
                    },
                    {
                        "english": "software engineer",
                        "spanish": "ingeniero de software"
                    },
                    {
                        "english": "tech company",
                        "spanish": "empresa de tecnología"
                    }
                ]
            },
            {
                "english": "Oh, that's interesting! What kind of projects do you work on?",
                "spanish": "¡Oh, qué interesante! ¿En qué tipo de proyectos trabajas?",
                "words": [
                    {
                        "english": "interesting",
                        "spanish": "interesante"
                    },
                    {
                        "english": "What kind of",
                        "spanish": "¿Qué tipo de"
                    },
                    {
                        "english": "projects",
                        "spanish": "proyectos"
                    }
                ]
            },
            {
                "english": "Mostly web applications and mobile apps.",
                "spanish": "Principalmente aplicaciones web y aplicaciones móviles.",
                "words": [
                    {
                        "english": "Mostly",
                        "spanish": "Principalmente"
                    },
                    {
                        "english": "web applications",
                        "spanish": "aplicaciones web"
                    },
                    {
                        "english": "mobile apps",
                        "spanish": "aplicaciones móviles"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person's job? (¿Cuál es el trabajo de la persona?)",
                "questionSpanish": "¿Cuál es el trabajo de la persona?",
                "options": [
                    {
                        "text": "Un maestro (A teacher)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un ingeniero de software (A software engineer)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un doctor (A doctor)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person states they are a software engineer. (La persona dice que es un ingeniero de software.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where does the person work? (¿Dónde trabaja la persona?)",
                "questionSpanish": "¿Dónde trabaja la persona?",
                "options": [
                    {
                        "text": "Un hospital (A hospital)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una empresa de tecnología (A tech company)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una escuela (A school)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person works at a tech company. (La persona trabaja en una empresa de tecnología.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What type of projects does the person work on? (¿En qué tipo de proyectos trabaja la persona?)",
                "questionSpanish": "¿En qué tipo de proyectos trabaja la persona?",
                "options": [
                    {
                        "text": "Aplicaciones web y aplicaciones móviles (Web applications and mobile apps)",
                        "isCorrect": true
                    },
                    {
                        "text": "Carros y camiones (Cars and trucks)",
                        "isCorrect": false
                    },
                    {
                        "text": "Libros y revistas (Books and magazines)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person works on web applications and mobile apps. (La persona trabaja en aplicaciones web y aplicaciones móviles.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Was the other person interested in their job? (¿Estaba la otra persona interesada en su trabajo?)",
                "questionSpanish": "¿Estaba la otra persona interesada en su trabajo?",
                "options": [
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says 'Oh, that's interesting!' indicating interest. (La otra persona dice '¡Oh, qué interesante!' indicando interés.)"
            }
        ]
    },
    {
        "id": "inviting-someone-to-dinner",
        "title": "Invitando a Alguien a Cenar",
        "description": "Una persona invita a otra a cenar.",
        "sentences": [
            {
                "english": "Hey, are you free for dinner this weekend?",
                "spanish": "Oye, ¿estás libre para cenar este fin de semana?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "free",
                        "spanish": "libre"
                    },
                    {
                        "english": "weekend",
                        "spanish": "fin de semana"
                    }
                ]
            },
            {
                "english": "Oh, that sounds nice! What did you have in mind?",
                "spanish": "¡Oh, suena bien! ¿Qué tienes en mente?",
                "words": [
                    {
                        "english": "sounds nice",
                        "spanish": "suena bien"
                    },
                    {
                        "english": "What",
                        "spanish": "¿Qué"
                    },
                    {
                        "english": "mind",
                        "spanish": "mente"
                    }
                ]
            },
            {
                "english": "There's a new Italian restaurant downtown.",
                "spanish": "Hay un nuevo restaurante italiano en el centro.",
                "words": [
                    {
                        "english": "There's",
                        "spanish": "Hay"
                    },
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "downtown",
                        "spanish": "centro"
                    }
                ]
            },
            {
                "english": "That sounds perfect! I love Italian food.",
                "spanish": "¡Eso suena perfecto! Me encanta la comida italiana.",
                "words": [
                    {
                        "english": "perfect",
                        "spanish": "perfecto"
                    },
                    {
                        "english": "I love",
                        "spanish": "Me encanta"
                    },
                    {
                        "english": "food",
                        "spanish": "comida"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person inviting the other person to? (¿A qué está invitando la persona a la otra persona?)",
                "questionSpanish": "¿A qué está invitando la persona a la otra persona?",
                "options": [
                    {
                        "text": "Al almuerzo (Lunch)",
                        "isCorrect": false
                    },
                    {
                        "text": "A la cena (Dinner)",
                        "isCorrect": true
                    },
                    {
                        "text": "Al desayuno (Breakfast)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person asks if the other person is free for dinner. (La persona pregunta si la otra persona está libre para cenar.)"
            },
            {
                "id": "q2",
                "questionEnglish": "When is the invitation for? (¿Para cuándo es la invitación?)",
                "questionSpanish": "¿Para cuándo es la invitación?",
                "options": [
                    {
                        "text": "La semana que viene (Next week)",
                        "isCorrect": false
                    },
                    {
                        "text": "Este fin de semana (This weekend)",
                        "isCorrect": true
                    },
                    {
                        "text": "Mañana (Tomorrow)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The invitation is for this weekend. (La invitación es para este fin de semana.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What kind of restaurant is mentioned? (¿Qué tipo de restaurante se menciona?)",
                "questionSpanish": "¿Qué tipo de restaurante se menciona?",
                "options": [
                    {
                        "text": "Mexicano (Mexican)",
                        "isCorrect": false
                    },
                    {
                        "text": "Italiano (Italian)",
                        "isCorrect": true
                    },
                    {
                        "text": "Chino (Chinese)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "An Italian restaurant is mentioned. (Se menciona un restaurante italiano.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Does the other person like Italian food? (¿Le gusta la comida italiana a la otra persona?)",
                "questionSpanish": "¿Le gusta la comida italiana a la otra persona?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I love Italian food'. (La persona dice 'Me encanta la comida italiana'.)"
            }
        ]
    },
    {
        "id": "apologizing-for-being-late",
        "title": "Disculpándose por Llegar Tarde",
        "description": "Una persona se disculpa por llegar tarde a una reunión.",
        "sentences": [
            {
                "english": "I'm so sorry I'm late! The traffic was terrible.",
                "spanish": "¡Lo siento mucho por llegar tarde! El tráfico estaba terrible.",
                "words": [
                    {
                        "english": "I'm sorry",
                        "spanish": "Lo siento"
                    },
                    {
                        "english": "late",
                        "spanish": "tarde"
                    },
                    {
                        "english": "traffic",
                        "spanish": "tráfico"
                    }
                ]
            },
            {
                "english": "No worries. It happens. Did you have trouble finding parking too?",
                "spanish": "No te preocupes. Pasa. ¿Tuviste problemas para encontrar estacionamiento también?",
                "words": [
                    {
                        "english": "No worries",
                        "spanish": "No te preocupes"
                    },
                    {
                        "english": "It happens",
                        "spanish": "Pasa"
                    },
                    {
                        "english": "parking",
                        "spanish": "estacionamiento"
                    }
                ]
            },
            {
                "english": "Yes! It took me like 20 minutes to find a spot.",
                "spanish": "¡Sí! Me tomó como 20 minutos encontrar un lugar.",
                "words": [
                    {
                        "english": "took",
                        "spanish": "tomó"
                    },
                    {
                        "english": "minutes",
                        "spanish": "minutos"
                    },
                    {
                        "english": "spot",
                        "spanish": "lugar"
                    }
                ]
            },
            {
                "english": "Ugh, that's the worst. Well, let's get started.",
                "spanish": "Uf, eso es lo peor. Bueno, empecemos.",
                "words": [
                    {
                        "english": "worst",
                        "spanish": "peor"
                    },
                    {
                        "english": "Well",
                        "spanish": "Bueno"
                    },
                    {
                        "english": "get started",
                        "spanish": "empecemos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Why was the person late? (¿Por qué llegó tarde la persona?)",
                "questionSpanish": "¿Por qué llegó tarde la persona?",
                "options": [
                    {
                        "text": "Se quedaron dormidos (They overslept)",
                        "isCorrect": false
                    },
                    {
                        "text": "El tráfico estaba mal (The traffic was bad)",
                        "isCorrect": true
                    },
                    {
                        "text": "Se les olvidó (They forgot)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says the traffic was terrible. (La persona dice que el tráfico estaba terrible.)"
            },
            {
                "id": "q2",
                "questionEnglish": "How did the other person react? (¿Cómo reaccionó la otra persona?)",
                "questionSpanish": "¿Cómo reaccionó la otra persona?",
                "options": [
                    {
                        "text": "Se enojaron (They got angry)",
                        "isCorrect": false
                    },
                    {
                        "text": "Fueron comprensivos (They were understanding)",
                        "isCorrect": true
                    },
                    {
                        "text": "Estaban tristes (They were sad)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says 'No worries. It happens'. (La otra persona dice 'No te preocupes. Pasa'.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Did the person have trouble finding parking? (¿Tuvo la persona problemas para encontrar estacionamiento?)",
                "questionSpanish": "¿Tuvo la persona problemas para encontrar estacionamiento?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says it took them 20 minutes to find a spot. (La persona dice que les tomó 20 minutos encontrar un lugar.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What are they going to do next? (¿Qué van a hacer después?)",
                "questionSpanish": "¿Qué van a hacer después?",
                "options": [
                    {
                        "text": "Empezar la reunión (Start the meeting)",
                        "isCorrect": true
                    },
                    {
                        "text": "Irse (Leave)",
                        "isCorrect": false
                    },
                    {
                        "text": "Almorzar (Eat lunch)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are going to get started with the meeting. (Van a empezar la reunión.)"
            }
        ]
    },
    {
        "id": "complimenting-someone",
        "title": "Halagando a Alguien",
        "description": "Una persona le da un cumplido a otra persona.",
        "sentences": [
            {
                "english": "I love your dress! Where did you get it?",
                "spanish": "¡Me encanta tu vestido! ¿Dónde lo compraste?",
                "words": [
                    {
                        "english": "I love",
                        "spanish": "Me encanta"
                    },
                    {
                        "english": "dress",
                        "spanish": "vestido"
                    },
                    {
                        "english": "get",
                        "spanish": "compraste"
                    }
                ]
            },
            {
                "english": "Oh, thank you! I got it at a boutique downtown.",
                "spanish": "¡Oh, gracias! Lo compré en una boutique en el centro.",
                "words": [
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    },
                    {
                        "english": "boutique",
                        "spanish": "boutique"
                    },
                    {
                        "english": "downtown",
                        "spanish": "centro"
                    }
                ]
            },
            {
                "english": "It looks amazing on you. The color is perfect.",
                "spanish": "Te queda increíble. El color es perfecto.",
                "words": [
                    {
                        "english": "looks amazing",
                        "spanish": "queda increíble"
                    },
                    {
                        "english": "color",
                        "spanish": "color"
                    },
                    {
                        "english": "perfect",
                        "spanish": "perfecto"
                    }
                ]
            },
            {
                "english": "Thanks! You're so sweet!",
                "spanish": "¡Gracias! ¡Eres muy amable!",
                "words": [
                    {
                        "english": "Thanks",
                        "spanish": "Gracias"
                    },
                    {
                        "english": "You're",
                        "spanish": "Eres"
                    },
                    {
                        "english": "sweet",
                        "spanish": "amable"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person compliment? (¿Qué es lo que halaga la persona?)",
                "questionSpanish": "¿Qué es lo que halaga la persona?",
                "options": [
                    {
                        "text": "Los zapatos (The shoes)",
                        "isCorrect": false
                    },
                    {
                        "text": "El vestido (The dress)",
                        "isCorrect": true
                    },
                    {
                        "text": "El pelo (The hair)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person compliments the dress. (La persona halaga el vestido.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where did the other person get the item? (¿Dónde compró la otra persona el artículo?)",
                "questionSpanish": "¿Dónde compró la otra persona el artículo?",
                "options": [
                    {
                        "text": "En línea (Online)",
                        "isCorrect": false
                    },
                    {
                        "text": "En una boutique (At a boutique)",
                        "isCorrect": true
                    },
                    {
                        "text": "En una tienda departamental (At a department store)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person got it at a boutique downtown. (La persona lo compró en una boutique en el centro.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What does the person say about the color of the item? (¿Qué dice la persona sobre el color del artículo?)",
                "questionSpanish": "¿Qué dice la persona sobre el color del artículo?",
                "options": [
                    {
                        "text": "Es demasiado brillante (It's too bright)",
                        "isCorrect": false
                    },
                    {
                        "text": "Es perfecto (It's perfect)",
                        "isCorrect": true
                    },
                    {
                        "text": "No combina (It doesn't match)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says the color is perfect. (La persona dice que el color es perfecto.)"
            },
            {
                "id": "q4",
                "questionEnglish": "How does the other person react to the compliment? (¿Cómo reacciona la otra persona al cumplido?)",
                "questionSpanish": "¿Cómo reacciona la otra persona al cumplido?",
                "options": [
                    {
                        "text": "Se enojan (They get angry)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dan las gracias (They say thanks)",
                        "isCorrect": true
                    },
                    {
                        "text": "Lo ignoran (They ignore it)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say 'Thanks! You're so sweet!'. (Dicen '¡Gracias! ¡Eres muy amable!'.)"
            }
        ]
    },
    {
        "id": "asking-for-help",
        "title": "Pidiendo Ayuda",
        "description": "Una persona le pide ayuda a otra persona en la calle.",
        "sentences": [
            {
                "english": "Excuse me, could you help me, please?",
                "spanish": "Disculpe, ¿podría ayudarme, por favor?",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpe"
                    },
                    {
                        "english": "help",
                        "spanish": "ayudarme"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Sure, what do you need?",
                "spanish": "Claro, ¿qué necesitas?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "what",
                        "spanish": "¿qué"
                    },
                    {
                        "english": "need",
                        "spanish": "necesitas"
                    }
                ]
            },
            {
                "english": "I'm looking for the post office. Is it far from here?",
                "spanish": "Estoy buscando la oficina de correos. ¿Está lejos de aquí?",
                "words": [
                    {
                        "english": "looking for",
                        "spanish": "buscando"
                    },
                    {
                        "english": "post office",
                        "spanish": "oficina de correos"
                    },
                    {
                        "english": "far",
                        "spanish": "lejos"
                    }
                ]
            },
            {
                "english": "No, it's not too far. Go straight for two blocks, then turn left.",
                "spanish": "No, no está muy lejos. Siga derecho por dos cuadras, luego gire a la izquierda.",
                "words": [
                    {
                        "english": "straight",
                        "spanish": "derecho"
                    },
                    {
                        "english": "blocks",
                        "spanish": "cuadras"
                    },
                    {
                        "english": "turn left",
                        "spanish": "gire a la izquierda"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person doing? (¿Qué está haciendo la persona?)",
                "questionSpanish": "¿Qué está haciendo la persona?",
                "options": [
                    {
                        "text": "Pidiendo direcciones (Asking for directions)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprando comestibles (Buying groceries)",
                        "isCorrect": false
                    },
                    {
                        "text": "Vendiendo algo (Selling something)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is asking for help to find the post office. (La persona está pidiendo ayuda para encontrar la oficina de correos.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the person looking for? (¿Qué está buscando la persona?)",
                "questionSpanish": "¿Qué está buscando la persona?",
                "options": [
                    {
                        "text": "Un restaurante (A restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "La oficina de correos (The post office)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un banco (A bank)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is looking for the post office. (La persona está buscando la oficina de correos.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Is the place far away? (¿Está el lugar lejos?)",
                "questionSpanish": "¿Está el lugar lejos?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": false
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says it's not too far. (La otra persona dice que no está muy lejos.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What should the person do to get there? (¿Qué debe hacer la persona para llegar allí?)",
                "questionSpanish": "¿Qué debe hacer la persona para llegar allí?",
                "options": [
                    {
                        "text": "Seguir derecho y girar a la izquierda (Go straight and turn left)",
                        "isCorrect": true
                    },
                    {
                        "text": "Girar a la derecha y seguir derecho (Turn right and go straight)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dar la vuelta (Turn around)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person should go straight for two blocks, then turn left. (La persona debe seguir derecho por dos cuadras, luego girar a la izquierda.)"
            }
        ]
    },
    {
        "id": "talking-about-date-and-time",
        "title": "Hablando de Fecha y Hora",
        "description": "Una conversación corta sobre planes para el fin de semana.",
        "sentences": [
            {
                "english": "Hi Maria, what are you doing this weekend?",
                "spanish": "Hola Maria, ¿qué vas a hacer este fin de semana?",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "doing",
                        "spanish": "hacer"
                    },
                    {
                        "english": "this weekend",
                        "spanish": "este fin de semana"
                    }
                ]
            },
            {
                "english": "I'm free on Saturday. Maybe we can go to the movies.",
                "spanish": "Estoy libre el sábado. Tal vez podamos ir al cine.",
                "words": [
                    {
                        "english": "I'm free",
                        "spanish": "Estoy libre"
                    },
                    {
                        "english": "Saturday",
                        "spanish": "Sábado"
                    },
                    {
                        "english": "go to the movies",
                        "spanish": "ir al cine"
                    }
                ]
            },
            {
                "english": "Sounds good! What time should we meet?",
                "spanish": "¡Suena bien! ¿A qué hora deberíamos reunirnos?",
                "words": [
                    {
                        "english": "Sounds good",
                        "spanish": "Suena bien"
                    },
                    {
                        "english": "What time",
                        "spanish": "A qué hora"
                    },
                    {
                        "english": "meet",
                        "spanish": "reunirnos"
                    }
                ]
            },
            {
                "english": "How about 7 PM?",
                "spanish": "¿Qué tal a las 7 PM?",
                "words": [
                    {
                        "english": "How about",
                        "spanish": "¿Qué tal"
                    },
                    {
                        "english": "7 PM",
                        "spanish": "7 PM"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What day are they planning to go to the movies? (¿Qué día planean ir al cine?)",
                "questionSpanish": "¿Qué día planean ir al cine?",
                "options": [
                    {
                        "text": "Viernes (Friday)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sábado (Saturday)",
                        "isCorrect": true
                    },
                    {
                        "text": "Domingo (Sunday)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They said they are free on Saturday. (Dijeron que están libres el Sábado)."
            },
            {
                "id": "q2",
                "questionEnglish": "What are they planning to do? (¿Qué están planeando hacer?)",
                "questionSpanish": "¿Qué están planeando hacer?",
                "options": [
                    {
                        "text": "Ir al parque (Go to the park)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir al cine (Go to the movies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir de compras (Go shopping)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They said they can go to the movies. (Dijeron que pueden ir al cine)."
            },
            {
                "id": "q3",
                "questionEnglish": "What time are they planning to meet? (¿A qué hora planean reunirse?)",
                "questionSpanish": "¿A qué hora planean reunirse?",
                "options": [
                    {
                        "text": "6 PM (6 PM)",
                        "isCorrect": false
                    },
                    {
                        "text": "7 PM (7 PM)",
                        "isCorrect": true
                    },
                    {
                        "text": "8 PM (8 PM)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They agreed on 7 PM. (Acordaron a las 7 PM)."
            },
            {
                "id": "q4",
                "questionEnglish": "Who are they talking to? (¿A quién le están hablando?)",
                "questionSpanish": "¿A quién le están hablando?",
                "options": [
                    {
                        "text": "Maria (Maria)",
                        "isCorrect": true
                    },
                    {
                        "text": "Pedro (Pedro)",
                        "isCorrect": false
                    },
                    {
                        "text": "Juan (Juan)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation starts with 'Hi Maria'. (La conversación empieza con 'Hola Maria')."
            }
        ]
    },
    {
        "id": "discussing-travel-plans",
        "title": "Discutiendo Planes de Viaje",
        "description": "Una conversación sobre un viaje planeado.",
        "sentences": [
            {
                "english": "Are you excited about our trip to Mexico next month?",
                "spanish": "¿Estás emocionado por nuestro viaje a México el próximo mes?",
                "words": [
                    {
                        "english": "excited",
                        "spanish": "emocionado"
                    },
                    {
                        "english": "trip",
                        "spanish": "viaje"
                    },
                    {
                        "english": "next month",
                        "spanish": "el próximo mes"
                    }
                ]
            },
            {
                "english": "Yes, I am! Have you booked the hotel yet?",
                "spanish": "¡Sí, lo estoy! ¿Ya reservaste el hotel?",
                "words": [
                    {
                        "english": "booked",
                        "spanish": "reservaste"
                    },
                    {
                        "english": "hotel",
                        "spanish": "hotel"
                    }
                ]
            },
            {
                "english": "Not yet, but I plan to do it tomorrow. Any preferences?",
                "spanish": "Todavía no, pero planeo hacerlo mañana. ¿Alguna preferencia?",
                "words": [
                    {
                        "english": "Not yet",
                        "spanish": "Todavía no"
                    },
                    {
                        "english": "plan to",
                        "spanish": "planeo"
                    },
                    {
                        "english": "preferences",
                        "spanish": "preferencias"
                    }
                ]
            },
            {
                "english": "Somewhere near the beach would be great!",
                "spanish": "¡En algún lugar cerca de la playa estaría genial!",
                "words": [
                    {
                        "english": "near",
                        "spanish": "cerca de"
                    },
                    {
                        "english": "beach",
                        "spanish": "playa"
                    },
                    {
                        "english": "great",
                        "spanish": "genial"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where are they planning to travel? (¿A dónde están planeando viajar?)",
                "questionSpanish": "¿A dónde están planeando viajar?",
                "options": [
                    {
                        "text": "Canadá (Canada)",
                        "isCorrect": false
                    },
                    {
                        "text": "México (Mexico)",
                        "isCorrect": true
                    },
                    {
                        "text": "España (Spain)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are talking about their trip to Mexico. (Están hablando de su viaje a México)."
            },
            {
                "id": "q2",
                "questionEnglish": "When are they planning to travel? (¿Cuándo están planeando viajar?)",
                "questionSpanish": "¿Cuándo están planeando viajar?",
                "options": [
                    {
                        "text": "Este mes (This month)",
                        "isCorrect": false
                    },
                    {
                        "text": "El próximo mes (Next month)",
                        "isCorrect": true
                    },
                    {
                        "text": "El próximo año (Next year)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning to travel next month. (Están planeando viajar el próximo mes)."
            },
            {
                "id": "q3",
                "questionEnglish": "What are they discussing about the hotel? (¿Qué están discutiendo sobre el hotel?)",
                "questionSpanish": "¿Qué están discutiendo sobre el hotel?",
                "options": [
                    {
                        "text": "Si ya está reservado (If it's already booked)",
                        "isCorrect": true
                    },
                    {
                        "text": "Si tiene una piscina (If it has a swimming pool)",
                        "isCorrect": false
                    },
                    {
                        "text": "Si es caro (If it's expensive)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are checking if the hotel has already been booked. (Están verificando si el hotel ya ha sido reservado)."
            },
            {
                "id": "q4",
                "questionEnglish": "Where does one of them want the hotel to be? (¿Dónde quiere uno de ellos que esté el hotel?)",
                "questionSpanish": "¿Dónde quiere uno de ellos que esté el hotel?",
                "options": [
                    {
                        "text": "Cerca de las montañas (Near the mountains)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca del centro de la ciudad (Near the city center)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca de la playa (Near the beach)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "One of them wants the hotel near the beach. (Uno de ellos quiere el hotel cerca de la playa)."
            }
        ]
    },
    {
        "id": "renting-an-apartment",
        "title": "Alquilando un Apartamento",
        "description": "Una conversación entre un inquilino y un agente de bienes raíces.",
        "sentences": [
            {
                "english": "Hello, I'm interested in renting an apartment.",
                "spanish": "Hola, estoy interesado en alquilar un apartamento.",
                "words": [
                    {
                        "english": "Hello",
                        "spanish": "Hola"
                    },
                    {
                        "english": "interested",
                        "spanish": "interesado"
                    },
                    {
                        "english": "renting",
                        "spanish": "alquilar"
                    }
                ]
            },
            {
                "english": "Great! What's your budget and what are you looking for?",
                "spanish": "¡Genial! ¿Cuál es su presupuesto y qué está buscando?",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Genial"
                    },
                    {
                        "english": "budget",
                        "spanish": "presupuesto"
                    },
                    {
                        "english": "looking for",
                        "spanish": "buscando"
                    }
                ]
            },
            {
                "english": "My budget is around $1200, and I need a place with two bedrooms.",
                "spanish": "Mi presupuesto es alrededor de $1200, y necesito un lugar con dos habitaciones.",
                "words": [
                    {
                        "english": "around",
                        "spanish": "alrededor de"
                    },
                    {
                        "english": "need",
                        "spanish": "necesito"
                    },
                    {
                        "english": "two bedrooms",
                        "spanish": "dos habitaciones"
                    }
                ]
            },
            {
                "english": "Okay, I have a few options. Let's take a look at them.",
                "spanish": "Bien, tengo algunas opciones. Vamos a echarles un vistazo.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Bien"
                    },
                    {
                        "english": "options",
                        "spanish": "opciones"
                    },
                    {
                        "english": "take a look",
                        "spanish": "echarles un vistazo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person trying to do? (¿Qué está tratando de hacer la persona?)",
                "questionSpanish": "¿Qué está tratando de hacer la persona?",
                "options": [
                    {
                        "text": "Comprar una casa (Buy a house)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alquilar un apartamento (Rent an apartment)",
                        "isCorrect": true
                    },
                    {
                        "text": "Vender su casa (Sell their house)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they are interested in renting an apartment. (La persona dice que está interesada en alquilar un apartamento)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the person's budget? (¿Cuál es el presupuesto de la persona?)",
                "questionSpanish": "¿Cuál es el presupuesto de la persona?",
                "options": [
                    {
                        "text": "Alrededor de $1000 (Around $1000)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alrededor de $1200 (Around $1200)",
                        "isCorrect": true
                    },
                    {
                        "text": "Alrededor de $1500 (Around $1500)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person's budget is around $1200. (El presupuesto de la persona es alrededor de $1200)."
            },
            {
                "id": "q3",
                "questionEnglish": "How many bedrooms does the person need? (¿Cuántas habitaciones necesita la persona?)",
                "questionSpanish": "¿Cuántas habitaciones necesita la persona?",
                "options": [
                    {
                        "text": "Una habitación (One bedroom)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dos habitaciones (Two bedrooms)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tres habitaciones (Three bedrooms)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs a place with two bedrooms. (La persona necesita un lugar con dos habitaciones)."
            },
            {
                "id": "q4",
                "questionEnglish": "Who is the person talking to? (¿Con quién está hablando la persona?)",
                "questionSpanish": "¿Con quién está hablando la persona?",
                "options": [
                    {
                        "text": "Un casero (A landlord)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un agente de bienes raíces (A real estate agent)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un amigo (A friend)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is talking to a real estate agent. (La persona está hablando con un agente de bienes raíces)."
            }
        ]
    },
    {
        "id": "at-the-hair-salon",
        "title": "En la Peluquería",
        "description": "Una conversación en una peluquería.",
        "sentences": [
            {
                "english": "Hi, I'd like to get a haircut, please.",
                "spanish": "Hola, me gustaría cortarme el pelo, por favor.",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "I'd like",
                        "spanish": "Me gustaría"
                    },
                    {
                        "english": "haircut",
                        "spanish": "corte de pelo"
                    }
                ]
            },
            {
                "english": "Sure! What kind of haircut are you thinking of?",
                "spanish": "¡Claro! ¿Qué tipo de corte de pelo estás pensando?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "What kind",
                        "spanish": "Qué tipo"
                    },
                    {
                        "english": "thinking of",
                        "spanish": "pensando"
                    }
                ]
            },
            {
                "english": "Just a trim, and maybe some layers.",
                "spanish": "Solo un despunte, y tal vez algunas capas.",
                "words": [
                    {
                        "english": "Just",
                        "spanish": "Solo"
                    },
                    {
                        "english": "trim",
                        "spanish": "despunte"
                    },
                    {
                        "english": "layers",
                        "spanish": "capas"
                    }
                ]
            },
            {
                "english": "Okay, sounds good. Let's get started.",
                "spanish": "Bien, suena bien. Vamos a empezar.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Bien"
                    },
                    {
                        "english": "sounds good",
                        "spanish": "suena bien"
                    },
                    {
                        "english": "Let's get started",
                        "spanish": "Vamos a empezar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where is the person? (¿Dónde está la persona?)",
                "questionSpanish": "¿Dónde está la persona?",
                "options": [
                    {
                        "text": "En el supermercado (At the supermarket)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la peluquería (At the hair salon)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el banco (At the bank)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to get a haircut, so they are at the hair salon. (La persona quiere cortarse el pelo, así que está en la peluquería)."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the person want? (¿Qué quiere la persona?)",
                "questionSpanish": "¿Qué quiere la persona?",
                "options": [
                    {
                        "text": "Un nuevo peinado (A new hairstyle)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un masaje (A massage)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una manicura (A manicure)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to get a haircut. (La persona quiere cortarse el pelo)."
            },
            {
                "id": "q3",
                "questionEnglish": "What kind of haircut does the person want? (¿Qué tipo de corte de pelo quiere la persona?)",
                "questionSpanish": "¿Qué tipo de corte de pelo quiere la persona?",
                "options": [
                    {
                        "text": "Solo un despunte (Just a trim)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un estilo completamente nuevo (A completely new style)",
                        "isCorrect": false
                    },
                    {
                        "text": "Teñirse el pelo (To dye their hair)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants just a trim and maybe some layers. (La persona quiere solo un despunte y tal vez algunas capas)."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the hairdresser say? (¿Qué dice el peluquero?)",
                "questionSpanish": "¿Qué dice el peluquero?",
                "options": [
                    {
                        "text": "Suena bien (Sounds good)",
                        "isCorrect": true
                    },
                    {
                        "text": "Eso es imposible (That's impossible)",
                        "isCorrect": false
                    },
                    {
                        "text": "No entiendo (I don't understand)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The hairdresser says 'Okay, sounds good. Let's get started.' (El peluquero dice 'Bien, suena bien. Vamos a empezar.')"
            }
        ]
    },
    {
        "id": "sending-a-package-at-the-post-office",
        "title": "Enviando un Paquete en la Oficina de Correos",
        "description": "Una conversación en la oficina de correos.",
        "sentences": [
            {
                "english": "Hi, I need to send this package to Argentina, please.",
                "spanish": "Hola, necesito enviar este paquete a Argentina, por favor.",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "need to send",
                        "spanish": "necesito enviar"
                    },
                    {
                        "english": "package",
                        "spanish": "paquete"
                    }
                ]
            },
            {
                "english": "Okay, let me weigh it. How would you like to send it?",
                "spanish": "Bien, déjeme pesarlo. ¿Cómo le gustaría enviarlo?",
                "words": [
                    {
                        "english": "weigh it",
                        "spanish": "pesarlo"
                    },
                    {
                        "english": "How would you like",
                        "spanish": "Cómo le gustaría"
                    },
                    {
                        "english": "send it",
                        "spanish": "enviarlo"
                    }
                ]
            },
            {
                "english": "How much is it to send it express?",
                "spanish": "¿Cuánto cuesta enviarlo por express?",
                "words": [
                    {
                        "english": "How much",
                        "spanish": "¿Cuánto"
                    },
                    {
                        "english": "send it",
                        "spanish": "enviarlo"
                    },
                    {
                        "english": "express",
                        "spanish": "express"
                    }
                ]
            },
            {
                "english": "Express will be $50. Regular will be $30.",
                "spanish": "Express costará $50. Regular costará $30.",
                "words": [
                    {
                        "english": "Express",
                        "spanish": "Express"
                    },
                    {
                        "english": "will be",
                        "spanish": "costará"
                    },
                    {
                        "english": "Regular",
                        "spanish": "Regular"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where is the person? (¿Dónde está la persona?)",
                "questionSpanish": "¿Dónde está la persona?",
                "options": [
                    {
                        "text": "En el supermercado (At the supermarket)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la oficina de correos (At the post office)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el aeropuerto (At the airport)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs to send a package, so they are at the post office. (La persona necesita enviar un paquete, así que está en la oficina de correos)."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the person want to do? (¿Qué quiere hacer la persona?)",
                "questionSpanish": "¿Qué quiere hacer la persona?",
                "options": [
                    {
                        "text": "Enviar una carta (Send a letter)",
                        "isCorrect": false
                    },
                    {
                        "text": "Enviar un paquete (Send a package)",
                        "isCorrect": true
                    },
                    {
                        "text": "Recibir un paquete (Receive a package)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs to send a package. (La persona necesita enviar un paquete)."
            },
            {
                "id": "q3",
                "questionEnglish": "Where is the package going? (¿A dónde va el paquete?)",
                "questionSpanish": "¿A dónde va el paquete?",
                "options": [
                    {
                        "text": "A Argentina (To Argentina)",
                        "isCorrect": true
                    },
                    {
                        "text": "A Brasil (To Brazil)",
                        "isCorrect": false
                    },
                    {
                        "text": "A Chile (To Chile)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The package is going to Argentina. (El paquete va a Argentina)."
            },
            {
                "id": "q4",
                "questionEnglish": "How much does it cost to send it express? (¿Cuánto cuesta enviarlo por express?)",
                "questionSpanish": "¿Cuánto cuesta enviarlo por express?",
                "options": [
                    {
                        "text": "$30 ($30)",
                        "isCorrect": false
                    },
                    {
                        "text": "$50 ($50)",
                        "isCorrect": true
                    },
                    {
                        "text": "$80 ($80)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "It costs $50 to send it express. (Cuesta $50 enviarlo por express)."
            }
        ]
    },
    {
        "id": "talking-about-movies",
        "title": "Hablando de Películas",
        "description": "Dos amigos discuten sobre una película que vieron recientemente.",
        "sentences": [
            {
                "english": "Hey, did you see that new action movie?",
                "spanish": "Oye, ¿viste esa nueva película de acción?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "did you see",
                        "spanish": "¿viste?"
                    },
                    {
                        "english": "action movie",
                        "spanish": "película de acción"
                    }
                ]
            },
            {
                "english": "Yeah, I thought it was pretty good, actually!",
                "spanish": "Sí, ¡pensé que estuvo bastante buena, la verdad!",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "pretty good",
                        "spanish": "bastante buena"
                    },
                    {
                        "english": "actually",
                        "spanish": "la verdad"
                    }
                ]
            },
            {
                "english": "Really? I thought it was kind of boring.",
                "spanish": "¿De verdad? A mí me pareció un poco aburrida.",
                "words": [
                    {
                        "english": "Really?",
                        "spanish": "¿De verdad?"
                    },
                    {
                        "english": "I thought",
                        "spanish": "Me pareció"
                    },
                    {
                        "english": "boring",
                        "spanish": "aburrida"
                    }
                ]
            },
            {
                "english": "Oh, well, to each their own, I guess.",
                "spanish": "Ah, bueno, para gustos, los colores, supongo.",
                "words": [
                    {
                        "english": "Oh, well",
                        "spanish": "Ah, bueno"
                    },
                    {
                        "english": "to each their own",
                        "spanish": "para gustos, los colores"
                    },
                    {
                        "english": "I guess",
                        "spanish": "supongo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Did both friends like the movie?",
                "questionSpanish": "¿A ambos amigos les gustó la película?",
                "options": [
                    {
                        "text": "Sí, a ambos les encantó. (Yes, they both loved it.)",
                        "isCorrect": false
                    },
                    {
                        "text": "No, a uno le gustó y al otro no. (No, one liked it and the other didn't.)",
                        "isCorrect": true
                    },
                    {
                        "text": "No han visto la película todavía. (They haven't seen the movie yet.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One friend thought the movie was good, but the other found it boring. Entonces, no a ambos les gustó."
            },
            {
                "id": "q2",
                "questionEnglish": "What type of movie were they discussing?",
                "questionSpanish": "¿Qué tipo de película estaban discutiendo?",
                "options": [
                    {
                        "text": "Una comedia. (A comedy.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una película de acción. (An action movie.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un documental. (A documentary.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first friend asks 'Did you see that new action movie?' La conversación es sobre una película de acción."
            },
            {
                "id": "q3",
                "questionEnglish": "What does 'to each their own' mean?",
                "questionSpanish": "¿Qué significa 'para gustos, los colores'?",
                "options": [
                    {
                        "text": "Cada quien tiene gustos diferentes. (Everyone has different tastes.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Todos deberían ver las mismas películas. (Everyone should watch the same movies.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Las películas son aburridas. (Movies are boring.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "'To each their own' or 'para gustos, los colores' means that everyone has different preferences. Cada quien tiene gustos diferentes."
            },
            {
                "id": "q4",
                "questionEnglish": "Which word describes the movie from one person's perspective?",
                "questionSpanish": "¿Qué palabra describe la película desde la perspectiva de una persona?",
                "options": [
                    {
                        "text": "Emocionante. (Exciting.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Aburrida. (Boring.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Divertida. (Funny.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One friend said, 'I thought it was kind of boring.'  Uno pensó que era aburrida."
            }
        ]
    },
    {
        "id": "expressing-likes-and-dislikes",
        "title": "Expresando Gustos y Disgustos",
        "description": "Una persona habla sobre sus pasatiempos favoritos.",
        "sentences": [
            {
                "english": "I really love playing the guitar.",
                "spanish": "Me encanta tocar la guitarra.",
                "words": [
                    {
                        "english": "I really love",
                        "spanish": "Me encanta"
                    },
                    {
                        "english": "playing",
                        "spanish": "tocar"
                    },
                    {
                        "english": "the guitar",
                        "spanish": "la guitarra"
                    }
                ]
            },
            {
                "english": "It's so relaxing after a long day.",
                "spanish": "Es tan relajante después de un día largo.",
                "words": [
                    {
                        "english": "relaxing",
                        "spanish": "relajante"
                    },
                    {
                        "english": "after",
                        "spanish": "después de"
                    },
                    {
                        "english": "long day",
                        "spanish": "día largo"
                    }
                ]
            },
            {
                "english": "But I can't stand doing the dishes.",
                "spanish": "Pero no soporto lavar los platos.",
                "words": [
                    {
                        "english": "can't stand",
                        "spanish": "no soporto"
                    },
                    {
                        "english": "doing",
                        "spanish": "lavar"
                    },
                    {
                        "english": "the dishes",
                        "spanish": "los platos"
                    }
                ]
            },
            {
                "english": "Ugh, it's the worst chore ever!",
                "spanish": "¡Uf, es la peor tarea de la historia!",
                "words": [
                    {
                        "english": "Ugh",
                        "spanish": "Uf"
                    },
                    {
                        "english": "worst",
                        "spanish": "peor"
                    },
                    {
                        "english": "chore",
                        "spanish": "tarea"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person love to do?",
                "questionSpanish": "¿Qué le encanta hacer a la persona?",
                "options": [
                    {
                        "text": "Tocar la guitarra. (Play the guitar.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Lavar los platos. (Wash the dishes.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir a trabajar. (Go to work.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said, 'I really love playing the guitar.' Le encanta tocar la guitarra."
            },
            {
                "id": "q2",
                "questionEnglish": "What chore does the person dislike?",
                "questionSpanish": "¿Qué tarea doméstica le disgusta a la persona?",
                "options": [
                    {
                        "text": "Limpiar la casa. (Cleaning the house.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Lavar la ropa. (Doing the laundry.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Lavar los platos. (Washing the dishes.)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person said, 'But I can't stand doing the dishes.' No soporta lavar los platos."
            },
            {
                "id": "q3",
                "questionEnglish": "Why does the person like playing the guitar?",
                "questionSpanish": "¿Por qué le gusta a la persona tocar la guitarra?",
                "options": [
                    {
                        "text": "Es aburrido. (It's boring.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Es relajante. (It's relaxing.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Es difícil. (It's difficult.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They find it relaxing. 'It's so relaxing after a long day.' Es relajante."
            },
            {
                "id": "q4",
                "questionEnglish": "What do they think of doing the dishes?",
                "questionSpanish": "¿Qué piensan sobre lavar los platos?",
                "options": [
                    {
                        "text": "Es divertido. (It's fun.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Es lo peor. (It's the worst.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Está bien. (It's okay.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They said 'Ugh, it's the worst chore ever!' Es lo peor."
            }
        ]
    },
    {
        "id": "describing-a-persons-appearance",
        "title": "Describiendo la Apariencia de una Persona",
        "description": "Dos amigos describen a una persona que vieron en la calle.",
        "sentences": [
            {
                "english": "I saw someone interesting today.",
                "spanish": "Vi a alguien interesante hoy.",
                "words": [
                    {
                        "english": "I saw",
                        "spanish": "Vi"
                    },
                    {
                        "english": "someone",
                        "spanish": "alguien"
                    },
                    {
                        "english": "interesting",
                        "spanish": "interesante"
                    }
                ]
            },
            {
                "english": "Oh yeah? How did they look?",
                "spanish": "¿Ah sí? ¿Cómo se veía?",
                "words": [
                    {
                        "english": "Oh yeah?",
                        "spanish": "¿Ah sí?"
                    },
                    {
                        "english": "How",
                        "spanish": "¿Cómo?"
                    },
                    {
                        "english": "did they look?",
                        "spanish": "se veía?"
                    }
                ]
            },
            {
                "english": "They had long, curly brown hair and glasses.",
                "spanish": "Tenían el pelo largo, castaño rizado y gafas.",
                "words": [
                    {
                        "english": "long",
                        "spanish": "largo"
                    },
                    {
                        "english": "curly",
                        "spanish": "rizado"
                    },
                    {
                        "english": "hair",
                        "spanish": "pelo"
                    }
                ]
            },
            {
                "english": "Sounds like someone I know!",
                "spanish": "¡Suena como alguien que conozco!",
                "words": [
                    {
                        "english": "Sounds like",
                        "spanish": "Suena como"
                    },
                    {
                        "english": "someone",
                        "spanish": "alguien"
                    },
                    {
                        "english": "I know",
                        "spanish": "conozco"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What kind of hair did the person have?",
                "questionSpanish": "¿Qué tipo de cabello tenía la persona?",
                "options": [
                    {
                        "text": "Corto y lacio. (Short and straight.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Largo y rizado. (Long and curly.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Calvo. (Bald.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person had long, curly brown hair. La persona tenía el pelo largo y rizado."
            },
            {
                "id": "q2",
                "questionEnglish": "What color was the person's hair?",
                "questionSpanish": "¿De qué color era el pelo de la persona?",
                "options": [
                    {
                        "text": "Rubio. (Blonde.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Castaño. (Brown.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Rojo. (Red.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person had long, curly brown hair. El pelo era castaño."
            },
            {
                "id": "q3",
                "questionEnglish": "Did the person wear glasses?",
                "questionSpanish": "¿La persona usaba gafas?",
                "options": [
                    {
                        "text": "Sí. (Yes.)",
                        "isCorrect": true
                    },
                    {
                        "text": "No. (No.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás. (Maybe.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The sentence says they had glasses. La oración dice que tenían gafas."
            },
            {
                "id": "q4",
                "questionEnglish": "What did the first person see?",
                "questionSpanish": "¿Qué vio la primera persona?",
                "options": [
                    {
                        "text": "Un perro. (A dog.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alguien interesante. (Someone interesting.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un carro. (A car.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person said, 'I saw someone interesting today.' Vio a alguien interesante."
            }
        ]
    },
    {
        "id": "talking-about-daily-routine",
        "title": "Hablando de la Rutina Diaria",
        "description": "Una persona describe su rutina diaria.",
        "sentences": [
            {
                "english": "I usually wake up around 7 AM.",
                "spanish": "Normalmente me despierto alrededor de las 7 de la mañana.",
                "words": [
                    {
                        "english": "usually",
                        "spanish": "normalmente"
                    },
                    {
                        "english": "wake up",
                        "spanish": "me despierto"
                    },
                    {
                        "english": "around",
                        "spanish": "alrededor de"
                    }
                ]
            },
            {
                "english": "Then, I have some coffee and check my emails.",
                "spanish": "Luego, tomo un café y reviso mis correos electrónicos.",
                "words": [
                    {
                        "english": "Then",
                        "spanish": "Luego"
                    },
                    {
                        "english": "have some coffee",
                        "spanish": "tomo un café"
                    },
                    {
                        "english": "check",
                        "spanish": "reviso"
                    }
                ]
            },
            {
                "english": "After that, I usually go to work.",
                "spanish": "Después de eso, normalmente voy al trabajo.",
                "words": [
                    {
                        "english": "After that",
                        "spanish": "Después de eso"
                    },
                    {
                        "english": "usually",
                        "spanish": "normalmente"
                    },
                    {
                        "english": "go to work",
                        "spanish": "voy al trabajo"
                    }
                ]
            },
            {
                "english": "And finally, I relax at home in the evening.",
                "spanish": "Y finalmente, me relajo en casa por la noche.",
                "words": [
                    {
                        "english": "finally",
                        "spanish": "finalmente"
                    },
                    {
                        "english": "relax",
                        "spanish": "me relajo"
                    },
                    {
                        "english": "in the evening",
                        "spanish": "por la noche"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What time does the person usually wake up?",
                "questionSpanish": "¿A qué hora se despierta normalmente la persona?",
                "options": [
                    {
                        "text": "Alrededor de las 9 de la mañana. (Around 9 AM.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alrededor de las 7 de la mañana. (Around 7 AM.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Alrededor de las 5 de la mañana. (Around 5 AM.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said, 'I usually wake up around 7 AM.' Normalmente se despierta alrededor de las 7 de la mañana."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the person do after waking up?",
                "questionSpanish": "¿Qué hace la persona después de despertarse?",
                "options": [
                    {
                        "text": "Hace ejercicio. (Exercises.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Toma café y revisa correos electrónicos. (Has coffee and checks emails.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Se duerme. (Goes to sleep.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said, 'Then, I have some coffee and check my emails.' Toma café y revisa sus correos."
            },
            {
                "id": "q3",
                "questionEnglish": "Where does the person go after having coffee?",
                "questionSpanish": "¿Adónde va la persona después de tomar café?",
                "options": [
                    {
                        "text": "Al trabajo. (To work.)",
                        "isCorrect": true
                    },
                    {
                        "text": "A la escuela. (To school.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Al parque. (To the park.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said, 'After that, I usually go to work.' Normalmente va al trabajo."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the person do in the evening?",
                "questionSpanish": "¿Qué hace la persona por la noche?",
                "options": [
                    {
                        "text": "Se relaja en casa. (Relaxes at home.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Va a una fiesta. (Goes to a party.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Va al gimnasio. (Goes to the gym.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said, 'And finally, I relax at home in the evening.' Se relaja en casa."
            }
        ]
    },
    {
        "id": "at-the-gym",
        "title": "En el Gimnasio",
        "description": "Una persona le pide ayuda a un entrenador en el gimnasio.",
        "sentences": [
            {
                "english": "Excuse me, can you help me?",
                "spanish": "Disculpa, ¿me puedes ayudar?",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpa"
                    },
                    {
                        "english": "can you help",
                        "spanish": "¿me puedes ayudar?"
                    },
                    {
                        "english": "me",
                        "spanish": "me"
                    }
                ]
            },
            {
                "english": "Sure, what's up?",
                "spanish": "Claro, ¿qué pasa?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "what's up?",
                        "spanish": "¿qué pasa?"
                    },
                    {
                        "english": "up",
                        "spanish": "pasa"
                    }
                ]
            },
            {
                "english": "I'm not sure how to use this machine.",
                "spanish": "No estoy seguro de cómo usar esta máquina.",
                "words": [
                    {
                        "english": "I'm not sure",
                        "spanish": "No estoy seguro"
                    },
                    {
                        "english": "how to use",
                        "spanish": "cómo usar"
                    },
                    {
                        "english": "this machine",
                        "spanish": "esta máquina"
                    }
                ]
            },
            {
                "english": "No problem, I can show you.",
                "spanish": "No hay problema, te puedo mostrar.",
                "words": [
                    {
                        "english": "No problem",
                        "spanish": "No hay problema"
                    },
                    {
                        "english": "I can show",
                        "spanish": "te puedo mostrar"
                    },
                    {
                        "english": "you",
                        "spanish": "te"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where does this conversation take place?",
                "questionSpanish": "¿Dónde tiene lugar esta conversación?",
                "options": [
                    {
                        "text": "En un restaurante. (At a restaurant.)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el gimnasio. (At the gym.)",
                        "isCorrect": true
                    },
                    {
                        "text": "En la biblioteca. (At the library.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is asking for help with a machine, so they are likely at the gym. La persona está pidiendo ayuda con una máquina, así que probablemente están en el gimnasio."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the first person want?",
                "questionSpanish": "¿Qué quiere la primera persona?",
                "options": [
                    {
                        "text": "Ayuda. (Help.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comida. (Food.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dinero. (Money.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks 'Excuse me, can you help me?' La primera persona pide 'Disculpa, ¿me puedes ayudar?'"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the problem?",
                "questionSpanish": "¿Cuál es el problema?",
                "options": [
                    {
                        "text": "No saben cómo usar la máquina. (They don't know how to use the machine.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Están cansados. (They are tired.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tienen hambre. (They are hungry.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says 'I'm not sure how to use this machine.' No saben usar la máquina."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the second person offer to do?",
                "questionSpanish": "¿Qué se ofrece a hacer la segunda persona?",
                "options": [
                    {
                        "text": "Mostrarles cómo usar la máquina. (To show them how to use the machine.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Usar la máquina por ellos. (To use the machine for them.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ignorarlos. (To ignore them.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says 'No problem, I can show you.' La segunda persona dice 'No hay problema, te puedo mostrar.'"
            }
        ]
    },
    {
        "id": "giving-a-gift",
        "title": "Dando un Regalo",
        "description": "Una persona le da un regalo a su amigo por su cumpleaños.",
        "sentences": [
            {
                "english": "Hey Maria, I got you something for your birthday!",
                "spanish": "¡Hola María, te tengo algo para tu cumpleaños!",
                "words": [
                    {
                        "english": "got you",
                        "spanish": "te tengo"
                    },
                    {
                        "english": "something",
                        "spanish": "algo"
                    },
                    {
                        "english": "birthday",
                        "spanish": "cumpleaños"
                    }
                ]
            },
            {
                "english": "Oh wow, really? What is it?",
                "spanish": "¡Oh, guau, ¿de verdad? ¿Qué es?",
                "words": [
                    {
                        "english": "really",
                        "spanish": "de verdad"
                    },
                    {
                        "english": "what",
                        "spanish": "qué"
                    },
                    {
                        "english": "is it",
                        "spanish": "es"
                    }
                ]
            },
            {
                "english": "It's a new book by your favorite author.",
                "spanish": "Es un libro nuevo de tu autor favorito.",
                "words": [
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "book",
                        "spanish": "libro"
                    },
                    {
                        "english": "favorite",
                        "spanish": "favorito"
                    }
                ]
            },
            {
                "english": "That's so thoughtful! Thank you so much!",
                "spanish": "¡Qué considerado! ¡Muchas gracias!",
                "words": [
                    {
                        "english": "thoughtful",
                        "spanish": "considerado"
                    },
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    },
                    {
                        "english": "so much",
                        "spanish": "muchas"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is Maria celebrating? (¿Qué está celebrando María?)",
                "questionSpanish": "¿Qué está celebrando María?",
                "options": [
                    {
                        "text": "Su aniversario (Her anniversary)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su cumpleaños (Her birthday)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su graduación (Her graduation)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Maria is celebrating her birthday. (María está celebrando su cumpleaños.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What did the person give Maria? (¿Qué le dio la persona a María?)",
                "questionSpanish": "¿Qué le dio la persona a María?",
                "options": [
                    {
                        "text": "Un carro nuevo (A new car)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro nuevo (A new book)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un teléfono nuevo (A new phone)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person gave Maria a new book. (La persona le dio a María un libro nuevo.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What does Maria think of the gift? (¿Qué piensa María del regalo?)",
                "questionSpanish": "¿Qué piensa María del regalo?",
                "options": [
                    {
                        "text": "Ella piensa que es aburrido. (She thinks it's boring.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ella piensa que es considerado. (She thinks it's thoughtful.)",
                        "isCorrect": true
                    },
                    {
                        "text": "A ella no le gusta. (She doesn't like it.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Maria thinks the gift is thoughtful. (Maria piensa que el regalo es muy considerado/thoughtful.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What kind of book is it? (¿Qué tipo de libro es?)",
                "questionSpanish": "¿Qué tipo de libro es?",
                "options": [
                    {
                        "text": "Un libro de su autor favorito (A book by her favorite author)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un libro de cocina (A cookbook)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro de texto (A textbook)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "It's a book by her favorite author. (Es un libro de su autor favorito.)"
            }
        ]
    },
    {
        "id": "attending-a-wedding",
        "title": "Asistiendo a una Boda",
        "description": "Dos amigos hablan sobre ir a una boda.",
        "sentences": [
            {
                "english": "Are you going to Sarah and Tom's wedding?",
                "spanish": "¿Vas a ir a la boda de Sarah y Tom?",
                "words": [
                    {
                        "english": "going to",
                        "spanish": "vas a ir"
                    },
                    {
                        "english": "wedding",
                        "spanish": "boda"
                    },
                    {
                        "english": "and",
                        "spanish": "y"
                    }
                ]
            },
            {
                "english": "Yeah, I am! I'm really excited about it.",
                "spanish": "¡Sí, voy! Estoy muy emocionado por eso.",
                "words": [
                    {
                        "english": "yeah",
                        "spanish": "sí"
                    },
                    {
                        "english": "excited",
                        "spanish": "emocionado"
                    },
                    {
                        "english": "about it",
                        "spanish": "por eso"
                    }
                ]
            },
            {
                "english": "Me too! Do you know what you're going to wear?",
                "spanish": "¡Yo también! ¿Sabes qué vas a ponerte?",
                "words": [
                    {
                        "english": "me too",
                        "spanish": "yo también"
                    },
                    {
                        "english": "know",
                        "spanish": "sabes"
                    },
                    {
                        "english": "wear",
                        "spanish": "ponerte"
                    }
                ]
            },
            {
                "english": "I think I'll wear a blue suit. It's pretty formal.",
                "spanish": "Creo que usaré un traje azul. Es bastante formal.",
                "words": [
                    {
                        "english": "think",
                        "spanish": "creo"
                    },
                    {
                        "english": "blue suit",
                        "spanish": "traje azul"
                    },
                    {
                        "english": "formal",
                        "spanish": "formal"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Who is getting married? (¿Quién se va a casar?)",
                "questionSpanish": "¿Quién se va a casar?",
                "options": [
                    {
                        "text": "Sarah y Tom (Sarah and Tom)",
                        "isCorrect": true
                    },
                    {
                        "text": "John y Mary (John and Mary)",
                        "isCorrect": false
                    },
                    {
                        "text": "Lisa y Peter (Lisa and Peter)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Sarah and Tom are getting married. (Sarah y Tom se van a casar.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Is the person excited to go to the wedding? (¿Está la persona emocionada de ir a la boda?)",
                "questionSpanish": "¿Está la persona emocionada de ir a la boda?",
                "options": [
                    {
                        "text": "No, no lo están (No, they are not)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí, lo están (Yes, they are)",
                        "isCorrect": true
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Yes, the person is excited. (Sí, la persona está emocionada.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What will the person likely wear? (¿Qué es probable que la persona se ponga?)",
                "questionSpanish": "¿Qué es probable que la persona se ponga?",
                "options": [
                    {
                        "text": "Un vestido rojo (A red dress)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un traje azul (A blue suit)",
                        "isCorrect": true
                    },
                    {
                        "text": "Jeans y una camiseta (Jeans and a t-shirt)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person will likely wear a blue suit. (La persona probablemente se pondrá un traje azul.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Why will the person wear a suit? (¿Por qué la persona usará un traje?)",
                "questionSpanish": "¿Por qué la persona usará un traje?",
                "options": [
                    {
                        "text": "Porque es cómodo (Because it's comfortable)",
                        "isCorrect": false
                    },
                    {
                        "text": "Porque es formal (Because it's formal)",
                        "isCorrect": true
                    },
                    {
                        "text": "Porque hace frío (Because it's cold)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person will wear a suit because it's formal. (La persona usará un traje porque es formal.)"
            }
        ]
    },
    {
        "id": "handling-a-work-meeting",
        "title": "Manejando una Reunión de Trabajo",
        "description": "Dos compañeros de trabajo hablan antes de una reunión.",
        "sentences": [
            {
                "english": "Are you ready for the meeting with the boss?",
                "spanish": "¿Estás listo para la reunión con el jefe?",
                "words": [
                    {
                        "english": "ready",
                        "spanish": "listo"
                    },
                    {
                        "english": "meeting",
                        "spanish": "reunión"
                    },
                    {
                        "english": "boss",
                        "spanish": "jefe"
                    }
                ]
            },
            {
                "english": "Yeah, I think so. I have all the data.",
                "spanish": "Sí, creo que sí. Tengo todos los datos.",
                "words": [
                    {
                        "english": "think so",
                        "spanish": "creo que sí"
                    },
                    {
                        "english": "have",
                        "spanish": "tengo"
                    },
                    {
                        "english": "data",
                        "spanish": "datos"
                    }
                ]
            },
            {
                "english": "Great! Remember to speak clearly and concisely.",
                "spanish": "¡Genial! Recuerda hablar clara y concisamente.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "genial"
                    },
                    {
                        "english": "remember",
                        "spanish": "recuerda"
                    },
                    {
                        "english": "clearly",
                        "spanish": "clara"
                    }
                ]
            },
            {
                "english": "Okay, I will. Thanks for the reminder!",
                "spanish": "Está bien, lo haré. ¡Gracias por el recordatorio!",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "está bien"
                    },
                    {
                        "english": "will",
                        "spanish": "haré"
                    },
                    {
                        "english": "reminder",
                        "spanish": "recordatorio"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Who are they having a meeting with? (¿Con quién tienen una reunión?)",
                "questionSpanish": "¿Con quién tienen una reunión?",
                "options": [
                    {
                        "text": "Los clientes (The clients)",
                        "isCorrect": false
                    },
                    {
                        "text": "El jefe (The boss)",
                        "isCorrect": true
                    },
                    {
                        "text": "El secretario (The secretary)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are having a meeting with the boss. (Tienen una reunión con el jefe.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Does the person have the necessary information? (¿Tiene la persona la información necesaria?)",
                "questionSpanish": "¿Tiene la persona la información necesaria?",
                "options": [
                    {
                        "text": "Sí, tienen todos los datos (Yes, they have all the data)",
                        "isCorrect": true
                    },
                    {
                        "text": "No, no la tienen (No, they don't)",
                        "isCorrect": false
                    },
                    {
                        "text": "No están seguros (They are not sure)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Yes, they have all the data. (Sí, tienen todos los datos.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What should the person remember to do? (¿Qué debe recordar hacer la persona?)",
                "questionSpanish": "¿Qué debe recordar hacer la persona?",
                "options": [
                    {
                        "text": "Hablar clara y concisamente (Speak clearly and concisely)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hablar en voz alta (Speak loudly)",
                        "isCorrect": false
                    },
                    {
                        "text": "Llegar tarde (Be late)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person should remember to speak clearly and concisely. (La persona debe recordar hablar clara y concisamente.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Is the person thankful for the reminder? (¿Está la persona agradecida por el recordatorio?)",
                "questionSpanish": "¿Está la persona agradecida por el recordatorio?",
                "options": [
                    {
                        "text": "No, están enojados (No, they are angry)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí, están agradecidos (Yes, they are thankful)",
                        "isCorrect": true
                    },
                    {
                        "text": "No les importa (They don't care)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Yes, the person is thankful for the reminder. (Sí, la persona está agradecida por el recordatorio.)"
            }
        ]
    },
    {
        "id": "dealing-with-internet-issues",
        "title": "Lidiando con Problemas de Internet",
        "description": "Una persona llama a su proveedor de internet.",
        "sentences": [
            {
                "english": "Hello, I'm having trouble with my internet connection.",
                "spanish": "Hola, estoy teniendo problemas con mi conexión de internet.",
                "words": [
                    {
                        "english": "hello",
                        "spanish": "hola"
                    },
                    {
                        "english": "having trouble",
                        "spanish": "teniendo problemas"
                    },
                    {
                        "english": "internet connection",
                        "spanish": "conexión de internet"
                    }
                ]
            },
            {
                "english": "I see. Can you tell me your account number?",
                "spanish": "Ya veo. ¿Puede decirme su número de cuenta?",
                "words": [
                    {
                        "english": "I see",
                        "spanish": "ya veo"
                    },
                    {
                        "english": "tell me",
                        "spanish": "decirme"
                    },
                    {
                        "english": "account number",
                        "spanish": "número de cuenta"
                    }
                ]
            },
            {
                "english": "Sure, it's 123456789. The internet is very slow.",
                "spanish": "Claro, es 123456789. El internet está muy lento.",
                "words": [
                    {
                        "english": "sure",
                        "spanish": "claro"
                    },
                    {
                        "english": "is very slow",
                        "spanish": "está muy lento"
                    },
                    {
                        "english": "internet",
                        "spanish": "internet"
                    }
                ]
            },
            {
                "english": "Okay, we'll look into it. Please restart your modem.",
                "spanish": "Está bien, lo investigaremos. Por favor, reinicie su módem.",
                "words": [
                    {
                        "english": "look into it",
                        "spanish": "lo investigaremos"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    },
                    {
                        "english": "restart",
                        "spanish": "reinicie"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What problem is the person having? (¿Qué problema está teniendo la persona?)",
                "questionSpanish": "¿Qué problema está teniendo la persona?",
                "options": [
                    {
                        "text": "Problemas con su televisión (Trouble with their TV)",
                        "isCorrect": false
                    },
                    {
                        "text": "Problemas con su internet (Trouble with their internet)",
                        "isCorrect": true
                    },
                    {
                        "text": "Problemas con su teléfono (Trouble with their phone)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is having trouble with their internet. (La persona está teniendo problemas con su internet.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What does the company ask for? (¿Qué pide la compañía?)",
                "questionSpanish": "¿Qué pide la compañía?",
                "options": [
                    {
                        "text": "Su nombre (Their name)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su número de cuenta (Their account number)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su dirección (Their address)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The company asks for their account number. (La compañía pide su número de cuenta.)"
            },
            {
                "id": "q3",
                "questionEnglish": "How is the internet? (¿Cómo está el internet?)",
                "questionSpanish": "¿Cómo está el internet?",
                "options": [
                    {
                        "text": "Muy rápido (Very fast)",
                        "isCorrect": false
                    },
                    {
                        "text": "Muy lento (Very slow)",
                        "isCorrect": true
                    },
                    {
                        "text": "Normal (Normal)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The internet is very slow. (El internet está muy lento.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What does the company suggest? (¿Qué sugiere la compañía?)",
                "questionSpanish": "¿Qué sugiere la compañía?",
                "options": [
                    {
                        "text": "Reiniciar su módem (Restart their modem)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprar una computadora nueva (Buy a new computer)",
                        "isCorrect": false
                    },
                    {
                        "text": "Llamar a un amigo (Call a friend)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The company suggests to restart the modem. (La compañía sugiere reiniciar el módem.)"
            }
        ]
    },
    {
        "id": "calling-a-plumber-electrician",
        "title": "Llamando a un Plomero/Electricista",
        "description": "Una persona llama a un plomero para arreglar un problema en casa.",
        "sentences": [
            {
                "english": "Hello, I need to schedule a plumber to come to my house.",
                "spanish": "Hola, necesito programar que un plomero venga a mi casa.",
                "words": [
                    {
                        "english": "hello",
                        "spanish": "hola"
                    },
                    {
                        "english": "need to",
                        "spanish": "necesito"
                    },
                    {
                        "english": "plumber",
                        "spanish": "plomero"
                    }
                ]
            },
            {
                "english": "Okay, what seems to be the problem?",
                "spanish": "Está bien, ¿cuál parece ser el problema?",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "está bien"
                    },
                    {
                        "english": "seems to be",
                        "spanish": "parece ser"
                    },
                    {
                        "english": "problem",
                        "spanish": "problema"
                    }
                ]
            },
            {
                "english": "The kitchen sink is completely clogged. It won't drain.",
                "spanish": "El fregadero de la cocina está completamente atascado. No drena.",
                "words": [
                    {
                        "english": "kitchen sink",
                        "spanish": "fregadero de la cocina"
                    },
                    {
                        "english": "clogged",
                        "spanish": "atascado"
                    },
                    {
                        "english": "drain",
                        "spanish": "drena"
                    }
                ]
            },
            {
                "english": "Alright, we can help with that. What's your address?",
                "spanish": "De acuerdo, podemos ayudar con eso. ¿Cuál es su dirección?",
                "words": [
                    {
                        "english": "alright",
                        "spanish": "de acuerdo"
                    },
                    {
                        "english": "can help",
                        "spanish": "podemos ayudar"
                    },
                    {
                        "english": "address",
                        "spanish": "dirección"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What kind of professional does the person need? (¿Qué tipo de profesional necesita la persona?)",
                "questionSpanish": "¿Qué tipo de profesional necesita la persona?",
                "options": [
                    {
                        "text": "Un doctor (A doctor)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un plomero (A plumber)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un electricista (An electrician)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs a plumber. (La persona necesita un plomero.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where is the problem located? (¿Dónde está ubicado el problema?)",
                "questionSpanish": "¿Dónde está ubicado el problema?",
                "options": [
                    {
                        "text": "En el dormitorio (In the bedroom)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la cocina (In the kitchen)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el baño (In the bathroom)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The problem is in the kitchen. (El problema está en la cocina.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the problem with the sink? (¿Cuál es el problema con el fregadero?)",
                "questionSpanish": "¿Cuál es el problema con el fregadero?",
                "options": [
                    {
                        "text": "Está goteando (It's leaking)",
                        "isCorrect": false
                    },
                    {
                        "text": "Está completamente atascado (It's completely clogged)",
                        "isCorrect": true
                    },
                    {
                        "text": "Es demasiado pequeño (It's too small)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The sink is completely clogged. (El fregadero está completamente atascado.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What information does the company ask for next? (¿Qué información pide la compañía a continuación?)",
                "questionSpanish": "¿Qué información pide la compañía a continuación?",
                "options": [
                    {
                        "text": "Su nombre (Their name)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su dirección (Their address)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su número de teléfono (Their phone number)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The company asks for their address. (La compañía pide su dirección.)"
            }
        ]
    },
    {
        "id": "reporting-lost-item",
        "title": "Reportando un Objeto Perdido",
        "description": "Una persona reporta un objeto perdido en un centro comercial.",
        "sentences": [
            {
                "english": "Excuse me, I think I lost my wallet here.",
                "spanish": "Disculpe, creo que perdí mi billetera aquí.",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpe"
                    },
                    {
                        "english": "I think",
                        "spanish": "Creo que"
                    },
                    {
                        "english": "lost",
                        "spanish": "perdí"
                    },
                    {
                        "english": "wallet",
                        "spanish": "billetera"
                    },
                    {
                        "english": "here",
                        "spanish": "aquí"
                    }
                ]
            },
            {
                "english": "Okay, when did you last see it?",
                "spanish": "Okay, ¿cuándo la vio por última vez?",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "when",
                        "spanish": "cuándo"
                    },
                    {
                        "english": "last see",
                        "spanish": "vio por última vez"
                    },
                    {
                        "english": "it",
                        "spanish": "la"
                    }
                ]
            },
            {
                "english": "Maybe about an hour ago, near the food court.",
                "spanish": "Tal vez hace una hora, cerca del patio de comidas.",
                "words": [
                    {
                        "english": "Maybe",
                        "spanish": "Tal vez"
                    },
                    {
                        "english": "about",
                        "spanish": "hace"
                    },
                    {
                        "english": "hour",
                        "spanish": "hora"
                    },
                    {
                        "english": "near",
                        "spanish": "cerca"
                    },
                    {
                        "english": "food court",
                        "spanish": "patio de comidas"
                    }
                ]
            },
            {
                "english": "We'll check. What does it look like?",
                "spanish": "Vamos a revisar. ¿Cómo se ve?",
                "words": [
                    {
                        "english": "We'll check",
                        "spanish": "Vamos a revisar"
                    },
                    {
                        "english": "What",
                        "spanish": "Cómo"
                    },
                    {
                        "english": "look like",
                        "spanish": "se ve"
                    },
                    {
                        "english": "does",
                        "spanish": "hace"
                    },
                    {
                        "english": "it",
                        "spanish": "ella"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where did the person lose their wallet? (¿Dónde perdió la persona su billetera?)",
                "questionSpanish": "¿Dónde perdió la persona su billetera?",
                "options": [
                    {
                        "text": "En el cine (At the movies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca del patio de comidas (Near the food court)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el estacionamiento (In the parking lot)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said they lost their wallet near the food court. (La persona dijo que perdió su billetera cerca del patio de comidas.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the person reporting? (¿Qué está reportando la persona?)",
                "questionSpanish": "¿Qué está reportando la persona?",
                "options": [
                    {
                        "text": "Un teléfono perdido (A lost phone)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una billetera perdida (A lost wallet)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una llave perdida (A lost key)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is reporting a lost wallet. (La persona está reportando una billetera perdida.)"
            },
            {
                "id": "q3",
                "questionEnglish": "About how long ago did the person lose their wallet? (¿Hace cuánto tiempo perdió la persona su billetera?)",
                "questionSpanish": "¿Hace cuánto tiempo perdió la persona su billetera?",
                "options": [
                    {
                        "text": "Hace una hora (About an hour ago)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hace un día (About a day ago)",
                        "isCorrect": false
                    },
                    {
                        "text": "Hace una semana (About a week ago)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said it was about an hour ago. (La persona dijo que fue hace una hora.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What will the other person do? (¿Qué hará la otra persona?)",
                "questionSpanish": "¿Qué hará la otra persona?",
                "options": [
                    {
                        "text": "Revisar si la encontraron (Check if they found it)",
                        "isCorrect": true
                    },
                    {
                        "text": "Llamar a la policía (Call the police)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ignorar a la persona (Ignore the person)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person will check to see if they found the wallet. (La otra persona revisará si encontraron la billetera.)"
            }
        ]
    },
    {
        "id": "exchanging-currency",
        "title": "Cambiando Dinero",
        "description": "Una persona cambia dólares a pesos mexicanos.",
        "sentences": [
            {
                "english": "Hi, I'd like to exchange some US dollars for Mexican pesos, please.",
                "spanish": "Hola, me gustaría cambiar dólares estadounidenses por pesos mexicanos, por favor.",
                "words": [
                    {
                        "english": "I'd like",
                        "spanish": "Me gustaría"
                    },
                    {
                        "english": "exchange",
                        "spanish": "cambiar"
                    },
                    {
                        "english": "US dollars",
                        "spanish": "dólares estadounidenses"
                    },
                    {
                        "english": "Mexican pesos",
                        "spanish": "pesos mexicanos"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Sure. What's the total amount you want to exchange?",
                "spanish": "Claro. ¿Cuál es la cantidad total que quiere cambiar?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "What's",
                        "spanish": "Cuál es"
                    },
                    {
                        "english": "total amount",
                        "spanish": "cantidad total"
                    },
                    {
                        "english": "want",
                        "spanish": "quiere"
                    },
                    {
                        "english": "to exchange",
                        "spanish": "cambiar"
                    }
                ]
            },
            {
                "english": "I have five hundred dollars.",
                "spanish": "Tengo quinientos dólares.",
                "words": [
                    {
                        "english": "I have",
                        "spanish": "Tengo"
                    },
                    {
                        "english": "five hundred",
                        "spanish": "quinientos"
                    },
                    {
                        "english": "dollars",
                        "spanish": "dólares"
                    }
                ]
            },
            {
                "english": "Okay, and the exchange rate is seventeen pesos per dollar.",
                "spanish": "Okay, y el tipo de cambio es de diecisiete pesos por dólar.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "exchange rate",
                        "spanish": "tipo de cambio"
                    },
                    {
                        "english": "seventeen",
                        "spanish": "diecisiete"
                    },
                    {
                        "english": "pesos",
                        "spanish": "pesos"
                    },
                    {
                        "english": "per dollar",
                        "spanish": "por dólar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What currency does the person have? (¿Qué moneda tiene la persona?)",
                "questionSpanish": "¿Qué moneda tiene la persona?",
                "options": [
                    {
                        "text": "Dólares canadienses (Canadian dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dólares estadounidenses (US dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Euros (Euros)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to exchange US dollars. (La persona quiere cambiar dólares estadounidenses.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What currency does the person want? (¿Qué moneda quiere la persona?)",
                "questionSpanish": "¿Qué moneda quiere la persona?",
                "options": [
                    {
                        "text": "Pesos mexicanos (Mexican pesos)",
                        "isCorrect": true
                    },
                    {
                        "text": "Libras esterlinas (British pounds)",
                        "isCorrect": false
                    },
                    {
                        "text": "Yenes japoneses (Japanese yen)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to exchange US dollars for Mexican pesos. (La persona quiere cambiar dólares estadounidenses por pesos mexicanos.)"
            },
            {
                "id": "q3",
                "questionEnglish": "How much money does the person have? (¿Cuánto dinero tiene la persona?)",
                "questionSpanish": "¿Cuánto dinero tiene la persona?",
                "options": [
                    {
                        "text": "Doscientos dólares (Two hundred dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quinientos dólares (Five hundred dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Mil dólares (One thousand dollars)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person has five hundred dollars. (La persona tiene quinientos dólares.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What is the exchange rate? (¿Cuál es el tipo de cambio?)",
                "questionSpanish": "¿Cuál es el tipo de cambio?",
                "options": [
                    {
                        "text": "Diecisiete pesos por dólar (Seventeen pesos per dollar)",
                        "isCorrect": true
                    },
                    {
                        "text": "Diez pesos por dólar (Ten pesos per dollar)",
                        "isCorrect": false
                    },
                    {
                        "text": "Veinte pesos por dólar (Twenty pesos per dollar)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The exchange rate is seventeen pesos per dollar. (El tipo de cambio es de diecisiete pesos por dólar.)"
            }
        ]
    },
    {
        "id": "visiting-a-museum",
        "title": "Visitando un Museo",
        "description": "Una persona visita un museo de arte.",
        "sentences": [
            {
                "english": "Good morning! I'd like a ticket, please.",
                "spanish": "¡Buenos días! Me gustaría un boleto, por favor.",
                "words": [
                    {
                        "english": "Good morning",
                        "spanish": "Buenos días"
                    },
                    {
                        "english": "I'd like",
                        "spanish": "Me gustaría"
                    },
                    {
                        "english": "ticket",
                        "spanish": "boleto"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Certainly! Are you a student or a senior?",
                "spanish": "¡Ciertamente! ¿Es usted estudiante o persona mayor?",
                "words": [
                    {
                        "english": "Certainly",
                        "spanish": "Ciertamente"
                    },
                    {
                        "english": "Are you",
                        "spanish": "¿Es usted?"
                    },
                    {
                        "english": "student",
                        "spanish": "estudiante"
                    },
                    {
                        "english": "or",
                        "spanish": "o"
                    },
                    {
                        "english": "senior",
                        "spanish": "persona mayor"
                    }
                ]
            },
            {
                "english": "Neither, just a regular adult ticket.",
                "spanish": "Ninguno, solo un boleto regular de adulto.",
                "words": [
                    {
                        "english": "Neither",
                        "spanish": "Ninguno"
                    },
                    {
                        "english": "just",
                        "spanish": "solo"
                    },
                    {
                        "english": "regular",
                        "spanish": "regular"
                    },
                    {
                        "english": "adult",
                        "spanish": "adulto"
                    },
                    {
                        "english": "ticket",
                        "spanish": "boleto"
                    }
                ]
            },
            {
                "english": "Okay, that'll be fifteen dollars. Enjoy the museum!",
                "spanish": "Okay, serán quince dólares. ¡Disfrute el museo!",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "that'll be",
                        "spanish": "serán"
                    },
                    {
                        "english": "fifteen",
                        "spanish": "quince"
                    },
                    {
                        "english": "dollars",
                        "spanish": "dólares"
                    },
                    {
                        "english": "Enjoy",
                        "spanish": "Disfrute"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to buy? (¿Qué quiere comprar la persona?)",
                "questionSpanish": "¿Qué quiere comprar la persona?",
                "options": [
                    {
                        "text": "Un mapa (A map)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un boleto (A ticket)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un libro (A book)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to buy a ticket to the museum. (La persona quiere comprar un boleto para el museo.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Is the person a student? (¿Es la persona estudiante?)",
                "questionSpanish": "¿Es la persona estudiante?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": false
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is not a student. (La persona no es estudiante.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Is the person a senior? (¿Es la persona mayor?)",
                "questionSpanish": "¿Es la persona mayor?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": false
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is not a senior. (La persona no es persona mayor.)"
            },
            {
                "id": "q4",
                "questionEnglish": "How much does the ticket cost? (¿Cuánto cuesta el boleto?)",
                "questionSpanish": "¿Cuánto cuesta el boleto?",
                "options": [
                    {
                        "text": "Cinco dólares (Five dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quince dólares (Fifteen dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cincuenta dólares (Fifty dollars)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The ticket costs fifteen dollars. (El boleto cuesta quince dólares.)"
            }
        ]
    },
    {
        "id": "talking-about-holidays",
        "title": "Hablando de las Fiestas",
        "description": "Dos amigos hablan de las fiestas de Thanksgiving y Navidad.",
        "sentences": [
            {
                "english": "Are you doing anything special for Thanksgiving this year?",
                "spanish": "¿Vas a hacer algo especial para el Día de Acción de Gracias este año?",
                "words": [
                    {
                        "english": "Are you doing",
                        "spanish": "¿Vas a hacer"
                    },
                    {
                        "english": "anything special",
                        "spanish": "algo especial"
                    },
                    {
                        "english": "Thanksgiving",
                        "spanish": "Día de Acción de Gracias"
                    },
                    {
                        "english": "this year",
                        "spanish": "este año"
                    }
                ]
            },
            {
                "english": "Yeah, I'm going to my family's house. We're having a big dinner.",
                "spanish": "Sí, voy a la casa de mi familia. Vamos a tener una cena grande.",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "I'm going",
                        "spanish": "Voy a"
                    },
                    {
                        "english": "family's house",
                        "spanish": "casa de mi familia"
                    },
                    {
                        "english": "We're having",
                        "spanish": "Vamos a tener"
                    },
                    {
                        "english": "big dinner",
                        "spanish": "cena grande"
                    }
                ]
            },
            {
                "english": "Sounds fun! What about Christmas? Any plans yet?",
                "spanish": "¡Suena divertido! ¿Y para Navidad? ¿Algún plan ya?",
                "words": [
                    {
                        "english": "Sounds fun",
                        "spanish": "Suena divertido"
                    },
                    {
                        "english": "What about",
                        "spanish": "¿Y para?"
                    },
                    {
                        "english": "Christmas",
                        "spanish": "Navidad"
                    },
                    {
                        "english": "Any plans",
                        "spanish": "¿Algún plan?"
                    },
                    {
                        "english": "yet",
                        "spanish": "ya"
                    }
                ]
            },
            {
                "english": "Not sure yet. Maybe travel somewhere warm.",
                "spanish": "Todavía no estoy seguro. Tal vez viajar a algún lugar cálido.",
                "words": [
                    {
                        "english": "Not sure",
                        "spanish": "No estoy seguro"
                    },
                    {
                        "english": "yet",
                        "spanish": "todavía"
                    },
                    {
                        "english": "Maybe",
                        "spanish": "Tal vez"
                    },
                    {
                        "english": "travel",
                        "spanish": "viajar"
                    },
                    {
                        "english": "somewhere warm",
                        "spanish": "algún lugar cálido"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What holiday is mentioned first? (¿Qué fiesta se menciona primero?)",
                "questionSpanish": "¿Qué fiesta se menciona primero?",
                "options": [
                    {
                        "text": "Navidad (Christmas)",
                        "isCorrect": false
                    },
                    {
                        "text": "Día de Acción de Gracias (Thanksgiving)",
                        "isCorrect": true
                    },
                    {
                        "text": "Año Nuevo (New Year's)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Thanksgiving is mentioned first. (El Día de Acción de Gracias se menciona primero.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first person doing for Thanksgiving? (¿Qué está haciendo la primera persona para el Día de Acción de Gracias?)",
                "questionSpanish": "¿Qué está haciendo la primera persona para el Día de Acción de Gracias?",
                "options": [
                    {
                        "text": "Tener una fiesta pequeña (Having a small party)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir a la casa de su familia para una cena grande (Going to their family's house for a big dinner)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir de vacaciones (Going on vacation)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are going to their family's house for a big dinner. (Van a la casa de su familia para una cena grande.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the second holiday mentioned? (¿Cuál es la segunda fiesta que se menciona?)",
                "questionSpanish": "¿Cuál es la segunda fiesta que se menciona?",
                "options": [
                    {
                        "text": "Pascua (Easter)",
                        "isCorrect": false
                    },
                    {
                        "text": "Navidad (Christmas)",
                        "isCorrect": true
                    },
                    {
                        "text": "Noche de Brujas (Halloween)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second holiday mentioned is Christmas. (La segunda fiesta que se menciona es Navidad.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What might the second person do for Christmas? (¿Qué podría hacer la segunda persona para Navidad?)",
                "questionSpanish": "¿Qué podría hacer la segunda persona para Navidad?",
                "options": [
                    {
                        "text": "Viajar a algún lugar cálido (Travel somewhere warm)",
                        "isCorrect": true
                    },
                    {
                        "text": "Quedarse en casa (Stay home)",
                        "isCorrect": false
                    },
                    {
                        "text": "Trabajar (Work)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They might travel somewhere warm. (Podrían viajar a algún lugar cálido.)"
            }
        ]
    },
    {
        "id": "ordering-takeout-via-app",
        "title": "Pidiendo Comida para Llevar por App",
        "description": "Una persona ordena comida para llevar usando una aplicación móvil.",
        "sentences": [
            {
                "english": "Okay, I'm ready to order some takeout on this app.",
                "spanish": "Okay, estoy listo para pedir comida para llevar en esta aplicación.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "I'm ready",
                        "spanish": "Estoy listo"
                    },
                    {
                        "english": "to order",
                        "spanish": "para pedir"
                    },
                    {
                        "english": "takeout",
                        "spanish": "comida para llevar"
                    },
                    {
                        "english": "this app",
                        "spanish": "esta aplicación"
                    }
                ]
            },
            {
                "english": "Great! What restaurant are you choosing?",
                "spanish": "¡Genial! ¿Qué restaurante estás eligiendo?",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Genial"
                    },
                    {
                        "english": "What restaurant",
                        "spanish": "¿Qué restaurante?"
                    },
                    {
                        "english": "are you choosing",
                        "spanish": "estás eligiendo"
                    }
                ]
            },
            {
                "english": "I think I'll go with that Italian place. Pasta sounds good.",
                "spanish": "Creo que voy a elegir ese lugar italiano. La pasta suena bien.",
                "words": [
                    {
                        "english": "I think",
                        "spanish": "Creo que"
                    },
                    {
                        "english": "I'll go with",
                        "spanish": "Voy a elegir"
                    },
                    {
                        "english": "that Italian place",
                        "spanish": "ese lugar italiano"
                    },
                    {
                        "english": "Pasta",
                        "spanish": "Pasta"
                    },
                    {
                        "english": "sounds good",
                        "spanish": "suena bien"
                    }
                ]
            },
            {
                "english": "Perfect. Just confirm your address and payment method.",
                "spanish": "Perfecto. Solo confirma tu dirección y método de pago.",
                "words": [
                    {
                        "english": "Perfect",
                        "spanish": "Perfecto"
                    },
                    {
                        "english": "Just confirm",
                        "spanish": "Solo confirma"
                    },
                    {
                        "english": "your address",
                        "spanish": "tu dirección"
                    },
                    {
                        "english": "and",
                        "spanish": "y"
                    },
                    {
                        "english": "payment method",
                        "spanish": "método de pago"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person doing? (¿Qué está haciendo la persona?)",
                "questionSpanish": "¿Qué está haciendo la persona?",
                "options": [
                    {
                        "text": "Pidiendo comida para llevar (Ordering takeout)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinando la cena (Cooking dinner)",
                        "isCorrect": false
                    },
                    {
                        "text": "Comprando comida (Grocery shopping)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is ordering takeout using an app. (La persona está pidiendo comida para llevar usando una aplicación.)"
            },
            {
                "id": "q2",
                "questionEnglish": "How are they ordering the food? (¿Cómo está pidiendo la comida?)",
                "questionSpanish": "¿Cómo está pidiendo la comida?",
                "options": [
                    {
                        "text": "Por teléfono (By phone)",
                        "isCorrect": false
                    },
                    {
                        "text": "En persona (In person)",
                        "isCorrect": false
                    },
                    {
                        "text": "Usando una aplicación (Using an app)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "They are ordering the food using a mobile app. (Está pidiendo la comida usando una aplicación móvil.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What kind of restaurant did they choose? (¿Qué tipo de restaurante eligió?)",
                "questionSpanish": "¿Qué tipo de restaurante eligió?",
                "options": [
                    {
                        "text": "Italiano (Italian)",
                        "isCorrect": true
                    },
                    {
                        "text": "Mexicano (Mexican)",
                        "isCorrect": false
                    },
                    {
                        "text": "Chino (Chinese)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They chose an Italian restaurant. (Eligió un restaurante italiano.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What do they need to confirm? (¿Qué necesita confirmar?)",
                "questionSpanish": "¿Qué necesita confirmar?",
                "options": [
                    {
                        "text": "Su dirección y método de pago (Their address and payment method)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su nombre y número de teléfono (Their name and phone number)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su orden (Their order)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They need to confirm their address and payment method. (Necesita confirmar su dirección y método de pago.)"
            }
        ]
    },
    {
        "id": "discussing-traffic",
        "title": "Hablando del Tráfico",
        "description": "Una conversación sobre el tráfico en la ciudad.",
        "sentences": [
            {
                "english": "The traffic is really bad today, isn't it?",
                "spanish": "El tráfico está muy pesado hoy, ¿verdad?",
                "words": [
                    {
                        "english": "traffic",
                        "spanish": "tráfico"
                    },
                    {
                        "english": "really bad",
                        "spanish": "muy pesado"
                    },
                    {
                        "english": "today",
                        "spanish": "hoy"
                    }
                ]
            },
            {
                "english": "Yeah, I think there was an accident downtown.",
                "spanish": "Sí, creo que hubo un accidente en el centro.",
                "words": [
                    {
                        "english": "accident",
                        "spanish": "accidente"
                    },
                    {
                        "english": "downtown",
                        "spanish": "en el centro"
                    },
                    {
                        "english": "think",
                        "spanish": "creo"
                    }
                ]
            },
            {
                "english": "That's probably why everything is so slow.",
                "spanish": "Probablemente por eso todo está tan lento.",
                "words": [
                    {
                        "english": "probably",
                        "spanish": "probablemente"
                    },
                    {
                        "english": "why",
                        "spanish": "por eso"
                    },
                    {
                        "english": "slow",
                        "spanish": "lento"
                    }
                ]
            },
            {
                "english": "I hope I'm not late for my meeting!",
                "spanish": "¡Espero no llegar tarde a mi reunión!",
                "words": [
                    {
                        "english": "I hope",
                        "spanish": "Espero"
                    },
                    {
                        "english": "late",
                        "spanish": "tarde"
                    },
                    {
                        "english": "meeting",
                        "spanish": "reunión"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the conversation mainly about?",
                "questionSpanish": "¿De qué se trata principalmente la conversación?",
                "options": [
                    {
                        "text": "Planear unas vacaciones (Planning a vacation)",
                        "isCorrect": false
                    },
                    {
                        "text": "Hablando del tráfico (Discussing the traffic)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinando la cena (Cooking dinner)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speakers are talking about how bad the traffic is."
            },
            {
                "id": "q2",
                "questionEnglish": "Why is the traffic so bad?",
                "questionSpanish": "¿Por qué está tan pesado el tráfico?",
                "options": [
                    {
                        "text": "Hubo un accidente (There was an accident)",
                        "isCorrect": true
                    },
                    {
                        "text": "Está lloviendo (It's raining)",
                        "isCorrect": false
                    },
                    {
                        "text": "Es hora pico (It's rush hour)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One of the speakers mentions there was an accident downtown."
            },
            {
                "id": "q3",
                "questionEnglish": "What is one of the speakers worried about?",
                "questionSpanish": "¿Qué le preocupa a uno de los hablantes?",
                "options": [
                    {
                        "text": "Llegar tarde a una reunión (Being late for a meeting)",
                        "isCorrect": true
                    },
                    {
                        "text": "Perder el autobús (Missing the bus)",
                        "isCorrect": false
                    },
                    {
                        "text": "El clima (The weather)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One speaker says they hope they won't be late for their meeting."
            },
            {
                "id": "q4",
                "questionEnglish": "Where did the accident occur?",
                "questionSpanish": "¿Dónde ocurrió el accidente?",
                "options": [
                    {
                        "text": "En el aeropuerto (At the airport)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el centro (Downtown)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cerca de la escuela (Near the school)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The accident happened downtown, according to one speaker."
            }
        ]
    },
    {
        "id": "talking-about-pets",
        "title": "Hablando de Mascotas",
        "description": "Una conversación sobre mascotas.",
        "sentences": [
            {
                "english": "I love your dog! What's his name?",
                "spanish": "¡Me encanta tu perro! ¿Cómo se llama?",
                "words": [
                    {
                        "english": "love",
                        "spanish": "me encanta"
                    },
                    {
                        "english": "dog",
                        "spanish": "perro"
                    },
                    {
                        "english": "name",
                        "spanish": "nombre"
                    }
                ]
            },
            {
                "english": "Thanks! His name is Max. He's a good boy.",
                "spanish": "¡Gracias! Se llama Max. Es un buen chico.",
                "words": [
                    {
                        "english": "thanks",
                        "spanish": "gracias"
                    },
                    {
                        "english": "good",
                        "spanish": "bueno"
                    },
                    {
                        "english": "boy",
                        "spanish": "chico"
                    }
                ]
            },
            {
                "english": "He looks very friendly. How old is he?",
                "spanish": "Se ve muy amigable. ¿Cuántos años tiene?",
                "words": [
                    {
                        "english": "looks",
                        "spanish": "se ve"
                    },
                    {
                        "english": "friendly",
                        "spanish": "amigable"
                    },
                    {
                        "english": "old",
                        "spanish": "años"
                    }
                ]
            },
            {
                "english": "He's two years old. He loves to play fetch.",
                "spanish": "Tiene dos años. Le encanta jugar a buscar.",
                "words": [
                    {
                        "english": "years old",
                        "spanish": "años"
                    },
                    {
                        "english": "loves",
                        "spanish": "le encanta"
                    },
                    {
                        "english": "play",
                        "spanish": "jugar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the speakers talking about?",
                "questionSpanish": "¿De qué están hablando los hablantes?",
                "options": [
                    {
                        "text": "El clima (The weather)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un perro (A dog)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un gato (A cat)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about a dog named Max."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the dog's name?",
                "questionSpanish": "¿Cómo se llama el perro?",
                "options": [
                    {
                        "text": "Rex (Rex)",
                        "isCorrect": false
                    },
                    {
                        "text": "Max (Max)",
                        "isCorrect": true
                    },
                    {
                        "text": "Charlie (Charlie)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The dog's name is Max."
            },
            {
                "id": "q3",
                "questionEnglish": "How old is the dog?",
                "questionSpanish": "¿Cuántos años tiene el perro?",
                "options": [
                    {
                        "text": "Un año (One year old)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dos años (Two years old)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tres años (Three years old)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The dog is two years old."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the dog love to do?",
                "questionSpanish": "¿Qué le encanta hacer al perro?",
                "options": [
                    {
                        "text": "Dormir (Sleep)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jugar a buscar (Play fetch)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comer (Eat)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The dog loves to play fetch."
            }
        ]
    },
    {
        "id": "cooking-a-meal",
        "title": "Cocinando una Comida",
        "description": "Una conversación sobre la preparación de una comida.",
        "sentences": [
            {
                "english": "What are we making for dinner tonight?",
                "spanish": "¿Qué vamos a preparar para la cena esta noche?",
                "words": [
                    {
                        "english": "making",
                        "spanish": "preparar"
                    },
                    {
                        "english": "dinner",
                        "spanish": "cena"
                    },
                    {
                        "english": "tonight",
                        "spanish": "esta noche"
                    }
                ]
            },
            {
                "english": "I thought we could make pasta with tomato sauce.",
                "spanish": "Pensé que podríamos hacer pasta con salsa de tomate.",
                "words": [
                    {
                        "english": "thought",
                        "spanish": "pensé"
                    },
                    {
                        "english": "pasta",
                        "spanish": "pasta"
                    },
                    {
                        "english": "tomato sauce",
                        "spanish": "salsa de tomate"
                    }
                ]
            },
            {
                "english": "Sounds good! Do we have all the ingredients?",
                "spanish": "¡Suena bien! ¿Tenemos todos los ingredientes?",
                "words": [
                    {
                        "english": "sounds good",
                        "spanish": "suena bien"
                    },
                    {
                        "english": "have",
                        "spanish": "tenemos"
                    },
                    {
                        "english": "ingredients",
                        "spanish": "ingredientes"
                    }
                ]
            },
            {
                "english": "Yes, I bought everything yesterday at the store.",
                "spanish": "Sí, compré todo ayer en la tienda.",
                "words": [
                    {
                        "english": "bought",
                        "spanish": "compré"
                    },
                    {
                        "english": "everything",
                        "spanish": "todo"
                    },
                    {
                        "english": "store",
                        "spanish": "tienda"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the speakers planning to do?",
                "questionSpanish": "¿Qué planean hacer los hablantes?",
                "options": [
                    {
                        "text": "Ir a un restaurante (Go to a restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cocinar la cena (Cook dinner)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver una película (Watch a movie)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speakers are discussing what to make for dinner."
            },
            {
                "id": "q2",
                "questionEnglish": "What meal are they preparing?",
                "questionSpanish": "¿Qué comida están preparando?",
                "options": [
                    {
                        "text": "Almuerzo (Lunch)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cena (Dinner)",
                        "isCorrect": true
                    },
                    {
                        "text": "Desayuno (Breakfast)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are making dinner."
            },
            {
                "id": "q3",
                "questionEnglish": "What dish are they making?",
                "questionSpanish": "¿Qué plato están preparando?",
                "options": [
                    {
                        "text": "Pizza (Pizza)",
                        "isCorrect": false
                    },
                    {
                        "text": "Pasta con salsa de tomate (Pasta with tomato sauce)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ensalada (Salad)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning to make pasta with tomato sauce."
            },
            {
                "id": "q4",
                "questionEnglish": "Where did they buy the ingredients?",
                "questionSpanish": "¿Dónde compraron los ingredientes?",
                "options": [
                    {
                        "text": "En el mercado (At the market)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la tienda (At the store)",
                        "isCorrect": true
                    },
                    {
                        "text": "En línea (Online)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The ingredients were bought at the store."
            }
        ]
    },
    {
        "id": "at-the-pharmacy",
        "title": "En la Farmacia",
        "description": "Una conversación en la farmacia.",
        "sentences": [
            {
                "english": "I need something for a headache, please.",
                "spanish": "Necesito algo para el dolor de cabeza, por favor.",
                "words": [
                    {
                        "english": "need",
                        "spanish": "necesito"
                    },
                    {
                        "english": "something",
                        "spanish": "algo"
                    },
                    {
                        "english": "headache",
                        "spanish": "dolor de cabeza"
                    }
                ]
            },
            {
                "english": "Sure, I recommend these ibuprofen pills.",
                "spanish": "Claro, le recomiendo estas pastillas de ibuprofeno.",
                "words": [
                    {
                        "english": "sure",
                        "spanish": "claro"
                    },
                    {
                        "english": "recommend",
                        "spanish": "recomiendo"
                    },
                    {
                        "english": "pills",
                        "spanish": "pastillas"
                    }
                ]
            },
            {
                "english": "How often should I take them?",
                "spanish": "¿Con qué frecuencia debo tomarlas?",
                "words": [
                    {
                        "english": "how often",
                        "spanish": "con qué frecuencia"
                    },
                    {
                        "english": "should",
                        "spanish": "debo"
                    },
                    {
                        "english": "take",
                        "spanish": "tomarlas"
                    }
                ]
            },
            {
                "english": "Take one every four to six hours as needed.",
                "spanish": "Tome una cada cuatro a seis horas según sea necesario.",
                "words": [
                    {
                        "english": "every",
                        "spanish": "cada"
                    },
                    {
                        "english": "hours",
                        "spanish": "horas"
                    },
                    {
                        "english": "needed",
                        "spanish": "necesario"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where is the conversation taking place?",
                "questionSpanish": "¿Dónde está ocurriendo la conversación?",
                "options": [
                    {
                        "text": "En un supermercado (At a grocery store)",
                        "isCorrect": false
                    },
                    {
                        "text": "En una farmacia (At a pharmacy)",
                        "isCorrect": true
                    },
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation involves someone looking for medicine, so it's at a pharmacy."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the customer need?",
                "questionSpanish": "¿Qué necesita el cliente?",
                "options": [
                    {
                        "text": "Algo para la tos (Something for a cough)",
                        "isCorrect": false
                    },
                    {
                        "text": "Algo para el dolor de cabeza (Something for a headache)",
                        "isCorrect": true
                    },
                    {
                        "text": "Algo para el dolor de estómago (Something for a stomach ache)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer says they need something for a headache."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the pharmacist recommend?",
                "questionSpanish": "¿Qué recomienda el farmacéutico?",
                "options": [
                    {
                        "text": "Aspirina (Aspirin)",
                        "isCorrect": false
                    },
                    {
                        "text": "Pastillas de ibuprofeno (Ibuprofen pills)",
                        "isCorrect": true
                    },
                    {
                        "text": "Curitas (Band-aids)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The pharmacist recommends ibuprofen pills."
            },
            {
                "id": "q4",
                "questionEnglish": "How often should the customer take the medicine?",
                "questionSpanish": "¿Con qué frecuencia debe tomar el medicamento el cliente?",
                "options": [
                    {
                        "text": "Cada doce horas (Every twelve hours)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cada cuatro a seis horas (Every four to six hours)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cada día (Every day)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The pharmacist says to take one every four to six hours as needed."
            }
        ]
    },
    {
        "id": "returning-a-product",
        "title": "Devolviendo un Producto",
        "description": "Una conversación devolviendo un producto en una tienda.",
        "sentences": [
            {
                "english": "Hi, I'd like to return this shirt, please.",
                "spanish": "Hola, me gustaría devolver esta camisa, por favor.",
                "words": [
                    {
                        "english": "like to",
                        "spanish": "me gustaría"
                    },
                    {
                        "english": "return",
                        "spanish": "devolver"
                    },
                    {
                        "english": "shirt",
                        "spanish": "camisa"
                    }
                ]
            },
            {
                "english": "Okay, do you have the receipt?",
                "spanish": "De acuerdo, ¿tiene el recibo?",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "de acuerdo"
                    },
                    {
                        "english": "have",
                        "spanish": "tiene"
                    },
                    {
                        "english": "receipt",
                        "spanish": "recibo"
                    }
                ]
            },
            {
                "english": "Yes, here it is. It's still new with the tags.",
                "spanish": "Sí, aquí está. Todavía es nueva con las etiquetas.",
                "words": [
                    {
                        "english": "here it is",
                        "spanish": "aquí está"
                    },
                    {
                        "english": "still",
                        "spanish": "todavía"
                    },
                    {
                        "english": "tags",
                        "spanish": "etiquetas"
                    }
                ]
            },
            {
                "english": "Great, I'll process the refund for you now.",
                "spanish": "Genial, procesaré el reembolso para usted ahora.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "genial"
                    },
                    {
                        "english": "process",
                        "spanish": "procesaré"
                    },
                    {
                        "english": "refund",
                        "spanish": "reembolso"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the customer want to do?",
                "questionSpanish": "¿Qué quiere hacer el cliente?",
                "options": [
                    {
                        "text": "Comprar una camisa nueva (Buy a new shirt)",
                        "isCorrect": false
                    },
                    {
                        "text": "Devolver una camisa (Return a shirt)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cambiar una camisa (Exchange a shirt)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer says they'd like to return a shirt."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the employee ask for?",
                "questionSpanish": "¿Qué pide el empleado?",
                "options": [
                    {
                        "text": "La identificación del cliente (The customer's ID)",
                        "isCorrect": false
                    },
                    {
                        "text": "El recibo (The receipt)",
                        "isCorrect": true
                    },
                    {
                        "text": "El nombre del cliente (The customer's name)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee asks if the customer has the receipt."
            },
            {
                "id": "q3",
                "questionEnglish": "Is the shirt new?",
                "questionSpanish": "¿Es nueva la camisa?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer says the shirt is still new with the tags."
            },
            {
                "id": "q4",
                "questionEnglish": "What will the employee do?",
                "questionSpanish": "¿Qué hará el empleado?",
                "options": [
                    {
                        "text": "Procesar el reembolso (Process the refund)",
                        "isCorrect": true
                    },
                    {
                        "text": "Llamar al gerente (Call the manager)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ofrecer un descuento (Offer a discount)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee says they will process the refund."
            }
        ]
    },
    {
        "id": "suggesting-weekend-activity",
        "title": "Sugerir Una Actividad de Fin de Semana",
        "description": "Dos amigos planean qué hacer el fin de semana.",
        "sentences": [
            {
                "english": "Hey, what are you doing this weekend?",
                "spanish": "Oye, ¿qué vas a hacer este fin de semana?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "what",
                        "spanish": "¿qué?"
                    },
                    {
                        "english": "weekend",
                        "spanish": "fin de semana"
                    }
                ]
            },
            {
                "english": "I don't know, maybe just relaxing at home.",
                "spanish": "No sé, quizás solo relajarme en casa.",
                "words": [
                    {
                        "english": "I don't know",
                        "spanish": "No sé"
                    },
                    {
                        "english": "maybe",
                        "spanish": "quizás"
                    },
                    {
                        "english": "relaxing",
                        "spanish": "relajarme"
                    },
                    {
                        "english": "at home",
                        "spanish": "en casa"
                    }
                ]
            },
            {
                "english": "We could go to the park or see a movie!",
                "spanish": "¡Podríamos ir al parque o ver una película!",
                "words": [
                    {
                        "english": "We could",
                        "spanish": "Podríamos"
                    },
                    {
                        "english": "go",
                        "spanish": "ir"
                    },
                    {
                        "english": "park",
                        "spanish": "parque"
                    },
                    {
                        "english": "movie",
                        "spanish": "película"
                    }
                ]
            },
            {
                "english": "That sounds fun! Let's go to the park.",
                "spanish": "¡Eso suena divertido! Vamos al parque.",
                "words": [
                    {
                        "english": "sounds fun",
                        "spanish": "suena divertido"
                    },
                    {
                        "english": "Let's go",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "park",
                        "spanish": "parque"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they discussing?",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Su tarea (Their homework)",
                        "isCorrect": false
                    },
                    {
                        "text": "Planes para el fin de semana (Weekend plans)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su comida favorita (Their favorite food)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning what to do on the weekend. Están planeando que hacer el fin de semana."
            },
            {
                "id": "q2",
                "questionEnglish": "What is one suggestion for the weekend?",
                "questionSpanish": "¿Cuál es una sugerencia para el fin de semana?",
                "options": [
                    {
                        "text": "Visitar un museo (Visiting a museum)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir al parque (Going to the park)",
                        "isCorrect": true
                    },
                    {
                        "text": "Estudiar para un examen (Studying for a test)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One suggestion is going to the park. Una sugerencia es ir al parque."
            },
            {
                "id": "q3",
                "questionEnglish": "What do they decide to do?",
                "questionSpanish": "¿Qué deciden hacer?",
                "options": [
                    {
                        "text": "Quedarse en casa (Stay home)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir al parque (Go to the park)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver una película (See a movie)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They decide to go to the park. Deciden ir al parque."
            },
            {
                "id": "q4",
                "questionEnglish": "How does the other person respond to the suggestion?",
                "questionSpanish": "¿Cómo responde la otra persona a la sugerencia?",
                "options": [
                    {
                        "text": "No les gusta. (They don't like it.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Piensan que suena divertido. (They think it sounds fun.)",
                        "isCorrect": true
                    },
                    {
                        "text": "No están seguros. (They are not sure.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say it sounds fun, showing enthusiasm. Dicen que suena divertido, mostrando entusiasmo."
            }
        ]
    },
    {
        "id": "talking-about-music",
        "title": "Hablando de Música",
        "description": "Dos personas discuten sus gustos musicales.",
        "sentences": [
            {
                "english": "What kind of music do you like?",
                "spanish": "¿Qué tipo de música te gusta?",
                "words": [
                    {
                        "english": "What kind",
                        "spanish": "Qué tipo"
                    },
                    {
                        "english": "music",
                        "spanish": "música"
                    },
                    {
                        "english": "like",
                        "spanish": "gusta"
                    }
                ]
            },
            {
                "english": "I'm really into pop and some electronic music.",
                "spanish": "Me gusta mucho el pop y algo de música electrónica.",
                "words": [
                    {
                        "english": "into",
                        "spanish": "gusta"
                    },
                    {
                        "english": "pop",
                        "spanish": "pop"
                    },
                    {
                        "english": "electronic music",
                        "spanish": "música electrónica"
                    }
                ]
            },
            {
                "english": "Oh, cool! I prefer rock and indie music.",
                "spanish": "¡Oh, genial! Yo prefiero el rock y la música indie.",
                "words": [
                    {
                        "english": "cool",
                        "spanish": "genial"
                    },
                    {
                        "english": "prefer",
                        "spanish": "prefiero"
                    },
                    {
                        "english": "rock",
                        "spanish": "rock"
                    },
                    {
                        "english": "indie music",
                        "spanish": "música indie"
                    }
                ]
            },
            {
                "english": "Maybe we can share some songs sometime!",
                "spanish": "¡Quizás podamos compartir algunas canciones alguna vez!",
                "words": [
                    {
                        "english": "Maybe",
                        "spanish": "Quizás"
                    },
                    {
                        "english": "share",
                        "spanish": "compartir"
                    },
                    {
                        "english": "songs",
                        "spanish": "canciones"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the conversation about?",
                "questionSpanish": "¿De qué se trata la conversación?",
                "options": [
                    {
                        "text": "Películas favoritas (Favorite movies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tipos de música favoritos (Favorite types of music)",
                        "isCorrect": true
                    },
                    {
                        "text": "Libros favoritos (Favorite books)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about the different types of music they like. La conversación es sobre los diferentes tipos de música que les gusta."
            },
            {
                "id": "q2",
                "questionEnglish": "What type of music does one person like?",
                "questionSpanish": "¿Qué tipo de música le gusta a una persona?",
                "options": [
                    {
                        "text": "Pop y electrónica (Pop and electronic)",
                        "isCorrect": true
                    },
                    {
                        "text": "Clásica (Classical)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jazz (Jazz)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person likes pop and electronic music. A una persona le gusta la música pop y electrónica."
            },
            {
                "id": "q3",
                "questionEnglish": "What other type of music is mentioned?",
                "questionSpanish": "¿Qué otro tipo de música se menciona?",
                "options": [
                    {
                        "text": "Country (Country)",
                        "isCorrect": false
                    },
                    {
                        "text": "Rock (Rock)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hip-hop (Hip-hop)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Rock is mentioned as a preferred type of music. Se menciona el rock como un tipo de música preferido."
            },
            {
                "id": "q4",
                "questionEnglish": "What do they suggest doing?",
                "questionSpanish": "¿Qué sugieren hacer?",
                "options": [
                    {
                        "text": "Ir a un concierto (Going to a concert)",
                        "isCorrect": false
                    },
                    {
                        "text": "Compartir canciones (Sharing songs)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tocar instrumentos (Playing instruments)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They suggest sharing songs. Sugieren compartir canciones."
            }
        ]
    },
    {
        "id": "describing-your-hometown",
        "title": "Describiendo Tu Ciudad Natal",
        "description": "Una persona describe su ciudad natal a otra.",
        "sentences": [
            {
                "english": "Where did you grow up?",
                "spanish": "¿Dónde creciste?",
                "words": [
                    {
                        "english": "Where",
                        "spanish": "Dónde"
                    },
                    {
                        "english": "grow up",
                        "spanish": "creciste"
                    }
                ]
            },
            {
                "english": "I grew up in a small town near the mountains.",
                "spanish": "Crecí en un pueblo pequeño cerca de las montañas.",
                "words": [
                    {
                        "english": "small town",
                        "spanish": "pueblo pequeño"
                    },
                    {
                        "english": "near",
                        "spanish": "cerca de"
                    },
                    {
                        "english": "mountains",
                        "spanish": "montañas"
                    }
                ]
            },
            {
                "english": "It's really quiet and peaceful there.",
                "spanish": "Es muy tranquilo y pacífico allí.",
                "words": [
                    {
                        "english": "quiet",
                        "spanish": "tranquilo"
                    },
                    {
                        "english": "peaceful",
                        "spanish": "pacífico"
                    },
                    {
                        "english": "there",
                        "spanish": "allí"
                    }
                ]
            },
            {
                "english": "I miss it sometimes, especially the fresh air!",
                "spanish": "A veces lo extraño, ¡especialmente el aire fresco!",
                "words": [
                    {
                        "english": "miss",
                        "spanish": "extraño"
                    },
                    {
                        "english": "especially",
                        "spanish": "especialmente"
                    },
                    {
                        "english": "fresh air",
                        "spanish": "aire fresco"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person describing?",
                "questionSpanish": "¿Qué está describiendo la persona?",
                "options": [
                    {
                        "text": "Su comida favorita (Their favorite food)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su ciudad natal (Their hometown)",
                        "isCorrect": true
                    },
                    {
                        "text": "Su trabajo (Their job)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is describing their hometown. La persona está describiendo su ciudad natal."
            },
            {
                "id": "q2",
                "questionEnglish": "Where is their hometown located?",
                "questionSpanish": "¿Dónde está ubicada su ciudad natal?",
                "options": [
                    {
                        "text": "Cerca del océano (Near the ocean)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca de las montañas (Near the mountains)",
                        "isCorrect": true
                    },
                    {
                        "text": "En una gran ciudad (In a big city)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Their hometown is located near the mountains. Su ciudad natal está ubicada cerca de las montañas."
            },
            {
                "id": "q3",
                "questionEnglish": "How do they describe their hometown?",
                "questionSpanish": "¿Cómo describen su ciudad natal?",
                "options": [
                    {
                        "text": "Ruidosa y ocupada (Loud and busy)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tranquila y pacífica (Quiet and peaceful)",
                        "isCorrect": true
                    },
                    {
                        "text": "Emocionante y moderna (Exciting and modern)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They describe their hometown as quiet and peaceful. Describen su ciudad natal como tranquila y pacífica."
            },
            {
                "id": "q4",
                "questionEnglish": "What do they miss about their hometown?",
                "questionSpanish": "¿Qué extrañan de su ciudad natal?",
                "options": [
                    {
                        "text": "El aire fresco (The fresh air)",
                        "isCorrect": true
                    },
                    {
                        "text": "Los centros comerciales (The shopping malls)",
                        "isCorrect": false
                    },
                    {
                        "text": "La vida nocturna (The nightlife)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They miss the fresh air of their hometown. Extrañan el aire fresco de su ciudad natal."
            }
        ]
    },
    {
        "id": "discussing-future-goals",
        "title": "Discutiendo Metas Futuras",
        "description": "Dos amigos hablan sobre lo que quieren hacer en el futuro.",
        "sentences": [
            {
                "english": "What are your goals for the future?",
                "spanish": "¿Cuáles son tus metas para el futuro?",
                "words": [
                    {
                        "english": "What are",
                        "spanish": "Cuáles son"
                    },
                    {
                        "english": "goals",
                        "spanish": "metas"
                    },
                    {
                        "english": "future",
                        "spanish": "futuro"
                    }
                ]
            },
            {
                "english": "I want to travel the world and learn a new language.",
                "spanish": "Quiero viajar por el mundo y aprender un nuevo idioma.",
                "words": [
                    {
                        "english": "travel",
                        "spanish": "viajar"
                    },
                    {
                        "english": "world",
                        "spanish": "mundo"
                    },
                    {
                        "english": "learn",
                        "spanish": "aprender"
                    },
                    {
                        "english": "language",
                        "spanish": "idioma"
                    }
                ]
            },
            {
                "english": "That's awesome! I hope to start my own business.",
                "spanish": "¡Eso es increíble! Espero comenzar mi propio negocio.",
                "words": [
                    {
                        "english": "awesome",
                        "spanish": "increíble"
                    },
                    {
                        "english": "hope",
                        "spanish": "espero"
                    },
                    {
                        "english": "start",
                        "spanish": "comenzar"
                    },
                    {
                        "english": "business",
                        "spanish": "negocio"
                    }
                ]
            },
            {
                "english": "Good luck! I'm sure you'll do great.",
                "spanish": "¡Buena suerte! Estoy seguro de que lo harás genial.",
                "words": [
                    {
                        "english": "Good luck",
                        "spanish": "Buena suerte"
                    },
                    {
                        "english": "sure",
                        "spanish": "seguro"
                    },
                    {
                        "english": "do great",
                        "spanish": "lo harás genial"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the friends talking about?",
                "questionSpanish": "¿De qué están hablando los amigos?",
                "options": [
                    {
                        "text": "Sus experiencias pasadas (Their past experiences)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sus metas futuras (Their future goals)",
                        "isCorrect": true
                    },
                    {
                        "text": "Sus trabajos actuales (Their current jobs)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The friends are discussing their future goals. Los amigos están discutiendo sus metas futuras."
            },
            {
                "id": "q2",
                "questionEnglish": "What does one person want to do?",
                "questionSpanish": "¿Qué quiere hacer una persona?",
                "options": [
                    {
                        "text": "Convertirse en médico (Become a doctor)",
                        "isCorrect": false
                    },
                    {
                        "text": "Viajar por el mundo (Travel the world)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprar una casa (Buy a house)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person wants to travel the world. Una persona quiere viajar por el mundo."
            },
            {
                "id": "q3",
                "questionEnglish": "What is the other person's goal?",
                "questionSpanish": "¿Cuál es la meta de la otra persona?",
                "options": [
                    {
                        "text": "Comenzar un negocio (Start a business)",
                        "isCorrect": true
                    },
                    {
                        "text": "Escribir un libro (Write a book)",
                        "isCorrect": false
                    },
                    {
                        "text": "Aprender a cocinar (Learn to cook)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person's goal is to start their own business. La meta de la otra persona es comenzar su propio negocio."
            },
            {
                "id": "q4",
                "questionEnglish": "What does one friend wish the other?",
                "questionSpanish": "¿Qué le desea un amigo al otro?",
                "options": [
                    {
                        "text": "Buena suerte (Good luck)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un feliz cumpleaños (A happy birthday)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un viaje seguro (A safe trip)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One friend wishes the other good luck. Un amigo le desea buena suerte al otro."
            }
        ]
    },
    {
        "id": "at-the-library",
        "title": "En la Biblioteca",
        "description": "Una persona pide ayuda en la biblioteca.",
        "sentences": [
            {
                "english": "Excuse me, where can I find books about history?",
                "spanish": "Disculpe, ¿dónde puedo encontrar libros sobre historia?",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpe"
                    },
                    {
                        "english": "find",
                        "spanish": "encontrar"
                    },
                    {
                        "english": "books",
                        "spanish": "libros"
                    },
                    {
                        "english": "history",
                        "spanish": "historia"
                    }
                ]
            },
            {
                "english": "They're on the second floor, section C.",
                "spanish": "Están en el segundo piso, sección C.",
                "words": [
                    {
                        "english": "second floor",
                        "spanish": "segundo piso"
                    },
                    {
                        "english": "section",
                        "spanish": "sección"
                    }
                ]
            },
            {
                "english": "Great, thank you so much!",
                "spanish": "¡Genial, muchas gracias!",
                "words": [
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    },
                    {
                        "english": "so much",
                        "spanish": "muchas"
                    }
                ]
            },
            {
                "english": "You're welcome! Let me know if you need anything else.",
                "spanish": "¡De nada! Avísame si necesitas algo más.",
                "words": [
                    {
                        "english": "You're welcome",
                        "spanish": "De nada"
                    },
                    {
                        "english": "Let me know",
                        "spanish": "Avísame"
                    },
                    {
                        "english": "anything else",
                        "spanish": "algo más"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where are they?",
                "questionSpanish": "¿Dónde están?",
                "options": [
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la biblioteca (At the library)",
                        "isCorrect": true
                    },
                    {
                        "text": "En un parque (At a park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation takes place at the library. La conversación tiene lugar en la biblioteca."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the person looking for?",
                "questionSpanish": "¿Qué está buscando la persona?",
                "options": [
                    {
                        "text": "Libros sobre ciencia (Books about science)",
                        "isCorrect": false
                    },
                    {
                        "text": "Libros sobre historia (Books about history)",
                        "isCorrect": true
                    },
                    {
                        "text": "Libros sobre arte (Books about art)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is looking for books about history. La persona está buscando libros sobre historia."
            },
            {
                "id": "q3",
                "questionEnglish": "Where can they find the books?",
                "questionSpanish": "¿Dónde pueden encontrar los libros?",
                "options": [
                    {
                        "text": "En el primer piso (On the first floor)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el segundo piso (On the second floor)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el sótano (In the basement)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The books are on the second floor. Los libros están en el segundo piso."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the librarian offer?",
                "questionSpanish": "¿Qué ofrece el bibliotecario?",
                "options": [
                    {
                        "text": "Más ayuda si es necesario (More help if needed)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una merienda (A snack)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un viaje a casa (A ride home)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The librarian offers more help if needed. El bibliotecario ofrece más ayuda si es necesario."
            }
        ]
    },
    {
        "id": "borrowing-money",
        "title": "Pidiendo Dinero Prestado",
        "description": "Una conversación corta sobre pedir dinero prestado a un amigo.",
        "sentences": [
            {
                "english": "Hey, could I borrow some money?",
                "spanish": "Oye, ¿me podrías prestar algo de dinero?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "borrow",
                        "spanish": "prestar"
                    },
                    {
                        "english": "some",
                        "spanish": "algo de"
                    }
                ]
            },
            {
                "english": "How much do you need?",
                "spanish": "¿Cuánto necesitas?",
                "words": [
                    {
                        "english": "How much",
                        "spanish": "Cuánto"
                    },
                    {
                        "english": "need",
                        "spanish": "necesitas"
                    }
                ]
            },
            {
                "english": "Just twenty dollars, I'll pay you back tomorrow.",
                "spanish": "Sólo veinte dólares, te pago mañana.",
                "words": [
                    {
                        "english": "Just",
                        "spanish": "Sólo"
                    },
                    {
                        "english": "dollars",
                        "spanish": "dólares"
                    },
                    {
                        "english": "pay you back",
                        "spanish": "te pago"
                    },
                    {
                        "english": "tomorrow",
                        "spanish": "mañana"
                    }
                ]
            },
            {
                "english": "Okay, here you go. Don't forget!",
                "spanish": "Está bien, aquí tienes. ¡No se te olvide!",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "here you go",
                        "spanish": "aquí tienes"
                    },
                    {
                        "english": "forget",
                        "spanish": "olvide"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the first person want to do? (¿Qué quiere hacer la primera persona?)",
                "questionSpanish": "¿Qué quiere hacer la primera persona?",
                "options": [
                    {
                        "text": "Pedir prestado algo de dinero (Borrow some money)",
                        "isCorrect": true
                    },
                    {
                        "text": "Prestar algo de dinero (Lend some money)",
                        "isCorrect": false
                    },
                    {
                        "text": "Comprar un coche (Buy a car)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks to borrow money (La primera persona pide prestado dinero)"
            },
            {
                "id": "q2",
                "questionEnglish": "How much money does the person need? (¿Cuánto dinero necesita la persona?)",
                "questionSpanish": "¿Cuánto dinero necesita la persona?",
                "options": [
                    {
                        "text": "Diez dólares (Ten dollars)",
                        "isCorrect": false
                    },
                    {
                        "text": "Veinte dólares (Twenty dollars)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cincuenta dólares (Fifty dollars)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs twenty dollars (La persona necesita veinte dólares)."
            },
            {
                "id": "q3",
                "questionEnglish": "When will the person pay back the money? (¿Cuándo pagará la persona el dinero?)",
                "questionSpanish": "¿Cuándo pagará la persona el dinero?",
                "options": [
                    {
                        "text": "Hoy (Today)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mañana (Tomorrow)",
                        "isCorrect": true
                    },
                    {
                        "text": "La semana que viene (Next week)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person will pay back the money tomorrow (La persona pagará el dinero mañana)."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the second person say at the end? (¿Qué dice la segunda persona al final?)",
                "questionSpanish": "¿Qué dice la segunda persona al final?",
                "options": [
                    {
                        "text": "¡No se te olvide! (Don't forget!)",
                        "isCorrect": true
                    },
                    {
                        "text": "¡Gracias! (Thank you!)",
                        "isCorrect": false
                    },
                    {
                        "text": "¡Adiós! (Goodbye!)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says, \"Don't forget!\" (La segunda persona dice, \"¡No se te olvide!\")"
            }
        ]
    },
    {
        "id": "refusing-an-invitation-politely",
        "title": "Rechazando una Invitación Amablemente",
        "description": "Una conversación sobre rechazar una invitación de manera educada.",
        "sentences": [
            {
                "english": "Hey, do you want to go to the movies tonight?",
                "spanish": "Oye, ¿quieres ir al cine esta noche?",
                "words": [
                    {
                        "english": "want",
                        "spanish": "quieres"
                    },
                    {
                        "english": "movies",
                        "spanish": "cine"
                    },
                    {
                        "english": "tonight",
                        "spanish": "esta noche"
                    }
                ]
            },
            {
                "english": "That sounds fun, but I can't.",
                "spanish": "Eso suena divertido, pero no puedo.",
                "words": [
                    {
                        "english": "sounds",
                        "spanish": "suena"
                    },
                    {
                        "english": "fun",
                        "spanish": "divertido"
                    },
                    {
                        "english": "can't",
                        "spanish": "no puedo"
                    }
                ]
            },
            {
                "english": "Oh, that's too bad! Why not?",
                "spanish": "¡Oh, qué lástima! ¿Por qué no?",
                "words": [
                    {
                        "english": "too bad",
                        "spanish": "qué lástima"
                    },
                    {
                        "english": "why",
                        "spanish": "por qué"
                    },
                    {
                        "english": "not",
                        "spanish": "no"
                    }
                ]
            },
            {
                "english": "I have to work late. Thanks for asking though!",
                "spanish": "Tengo que trabajar hasta tarde. ¡Gracias por preguntar de todos modos!",
                "words": [
                    {
                        "english": "work",
                        "spanish": "trabajar"
                    },
                    {
                        "english": "late",
                        "spanish": "tarde"
                    },
                    {
                        "english": "thanks for asking",
                        "spanish": "gracias por preguntar"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the first person want to do? (¿Qué quiere hacer la primera persona?)",
                "questionSpanish": "¿Qué quiere hacer la primera persona?",
                "options": [
                    {
                        "text": "Ir a trabajar (Go to work)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir al cine (Go to the movies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Quedarse en casa (Stay home)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person wants to go to the movies (La primera persona quiere ir al cine)."
            },
            {
                "id": "q2",
                "questionEnglish": "Why can't the second person go? (¿Por qué no puede ir la segunda persona?)",
                "questionSpanish": "¿Por qué no puede ir la segunda persona?",
                "options": [
                    {
                        "text": "Están cansados (They are tired)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tienen que trabajar hasta tarde (They have to work late)",
                        "isCorrect": true
                    },
                    {
                        "text": "No les gustan las películas (They don't like movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person has to work late (La segunda persona tiene que trabajar hasta tarde)."
            },
            {
                "id": "q3",
                "questionEnglish": "How does the second person respond to the invitation? (¿Cómo responde la segunda persona a la invitación?)",
                "questionSpanish": "¿Cómo responde la segunda persona a la invitación?",
                "options": [
                    {
                        "text": "Amablemente (Politely)",
                        "isCorrect": true
                    },
                    {
                        "text": "Groseramente (Rudely)",
                        "isCorrect": false
                    },
                    {
                        "text": "Enojado (Angrily)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person responds politely, thanking them for asking (La segunda persona responde amablemente, agradeciéndoles por preguntar)."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the second person say to acknowledge the invitation? (¿Qué dice la segunda persona para reconocer la invitación?)",
                "questionSpanish": "¿Qué dice la segunda persona para reconocer la invitación?",
                "options": [
                    {
                        "text": "Eso suena divertido (That sounds fun)",
                        "isCorrect": true
                    },
                    {
                        "text": "Odio las películas (I hate movies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Las películas son aburridas (Movies are boring)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says, \"That sounds fun\" (La segunda persona dice, \"Eso suena divertido\")."
            }
        ]
    },
    {
        "id": "explaining-a-cultural-difference",
        "title": "Explicando una Diferencia Cultural",
        "description": "Una conversación sobre una diferencia cultural entre países.",
        "sentences": [
            {
                "english": "Why are you eating with a fork and knife?",
                "spanish": "¿Por qué estás comiendo con tenedor y cuchillo?",
                "words": [
                    {
                        "english": "Why",
                        "spanish": "Por qué"
                    },
                    {
                        "english": "eating",
                        "spanish": "comiendo"
                    },
                    {
                        "english": "fork",
                        "spanish": "tenedor"
                    },
                    {
                        "english": "knife",
                        "spanish": "cuchillo"
                    }
                ]
            },
            {
                "english": "Because in my country, we always use them.",
                "spanish": "Porque en mi país, siempre los usamos.",
                "words": [
                    {
                        "english": "country",
                        "spanish": "país"
                    },
                    {
                        "english": "always",
                        "spanish": "siempre"
                    },
                    {
                        "english": "use",
                        "spanish": "usamos"
                    }
                ]
            },
            {
                "english": "Oh, I see. Here, we usually just use a fork.",
                "spanish": "Ah, ya veo. Aquí, normalmente solo usamos un tenedor.",
                "words": [
                    {
                        "english": "see",
                        "spanish": "veo"
                    },
                    {
                        "english": "usually",
                        "spanish": "normalmente"
                    },
                    {
                        "english": "just",
                        "spanish": "solo"
                    }
                ]
            },
            {
                "english": "That's interesting! Every culture is different.",
                "spanish": "¡Qué interesante! Cada cultura es diferente.",
                "words": [
                    {
                        "english": "interesting",
                        "spanish": "interesante"
                    },
                    {
                        "english": "every",
                        "spanish": "cada"
                    },
                    {
                        "english": "different",
                        "spanish": "diferente"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the first person asking about? (¿Sobre qué está preguntando la primera persona?)",
                "questionSpanish": "¿Sobre qué está preguntando la primera persona?",
                "options": [
                    {
                        "text": "El clima (The weather)",
                        "isCorrect": false
                    },
                    {
                        "text": "Hábitos alimenticios (Eating habits)",
                        "isCorrect": true
                    },
                    {
                        "text": "Deportes (Sports)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person is asking about eating habits (La primera persona está preguntando sobre hábitos alimenticios)."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the second person say about their country? (¿Qué dice la segunda persona sobre su país?)",
                "questionSpanish": "¿Qué dice la segunda persona sobre su país?",
                "options": [
                    {
                        "text": "Siempre usan tenedor y cuchillo (They always use a fork and knife)",
                        "isCorrect": true
                    },
                    {
                        "text": "Nunca usan un tenedor (They never use a fork)",
                        "isCorrect": false
                    },
                    {
                        "text": "Solo comen con las manos (They only eat with their hands)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says they always use a fork and knife in their country (La segunda persona dice que siempre usan tenedor y cuchillo en su país)."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the first person usually use? (¿Qué usa normalmente la primera persona?)",
                "questionSpanish": "¿Qué usa normalmente la primera persona?",
                "options": [
                    {
                        "text": "Una cuchara (A spoon)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un tenedor (A fork)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un cuchillo (A knife)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person usually uses a fork (La primera persona normalmente usa un tenedor)."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the second person say about culture? (¿Qué dice la segunda persona sobre la cultura?)",
                "questionSpanish": "¿Qué dice la segunda persona sobre la cultura?",
                "options": [
                    {
                        "text": "Cada cultura es igual (Every culture is the same)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cada cultura es diferente (Every culture is different)",
                        "isCorrect": true
                    },
                    {
                        "text": "La cultura es aburrida (Culture is boring)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says every culture is different (La segunda persona dice que cada cultura es diferente)."
            }
        ]
    },
    {
        "id": "talking-about-sports",
        "title": "Hablando de Deportes",
        "description": "Una conversación corta sobre deportes.",
        "sentences": [
            {
                "english": "Do you like to play any sports?",
                "spanish": "¿Te gusta practicar algún deporte?",
                "words": [
                    {
                        "english": "like",
                        "spanish": "gusta"
                    },
                    {
                        "english": "play",
                        "spanish": "practicar"
                    },
                    {
                        "english": "sports",
                        "spanish": "deporte"
                    }
                ]
            },
            {
                "english": "Yeah, I love basketball and soccer.",
                "spanish": "Sí, me encanta el baloncesto y el fútbol.",
                "words": [
                    {
                        "english": "love",
                        "spanish": "encanta"
                    },
                    {
                        "english": "basketball",
                        "spanish": "baloncesto"
                    },
                    {
                        "english": "soccer",
                        "spanish": "fútbol"
                    }
                ]
            },
            {
                "english": "That's cool! I prefer swimming and tennis.",
                "spanish": "¡Qué bien! Yo prefiero la natación y el tenis.",
                "words": [
                    {
                        "english": "cool",
                        "spanish": "qué bien"
                    },
                    {
                        "english": "prefer",
                        "spanish": "prefiero"
                    },
                    {
                        "english": "swimming",
                        "spanish": "natación"
                    },
                    {
                        "english": "tennis",
                        "spanish": "tenis"
                    }
                ]
            },
            {
                "english": "Nice! Sports are a great way to stay healthy.",
                "spanish": "¡Bueno! Los deportes son una buena manera de mantenerse saludable.",
                "words": [
                    {
                        "english": "Nice",
                        "spanish": "Bueno"
                    },
                    {
                        "english": "great",
                        "spanish": "buena"
                    },
                    {
                        "english": "healthy",
                        "spanish": "saludable"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the conversation about? (¿De qué se trata la conversación?)",
                "questionSpanish": "¿De qué se trata la conversación?",
                "options": [
                    {
                        "text": "Comida (Food)",
                        "isCorrect": false
                    },
                    {
                        "text": "Deportes (Sports)",
                        "isCorrect": true
                    },
                    {
                        "text": "Películas (Movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about sports (La conversación es sobre deportes)."
            },
            {
                "id": "q2",
                "questionEnglish": "What sports does the second person like? (¿Qué deportes le gustan a la segunda persona?)",
                "questionSpanish": "¿Qué deportes le gustan a la segunda persona?",
                "options": [
                    {
                        "text": "Baloncesto y Fútbol (Basketball and Soccer)",
                        "isCorrect": true
                    },
                    {
                        "text": "Natación y Tenis (Swimming and Tennis)",
                        "isCorrect": false
                    },
                    {
                        "text": "Béisbol y Fútbol Americano (Baseball and Football)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person likes basketball and soccer (A la segunda persona le gustan el baloncesto y el fútbol)."
            },
            {
                "id": "q3",
                "questionEnglish": "What sports does the first person prefer? (¿Qué deportes prefiere la primera persona?)",
                "questionSpanish": "¿Qué deportes prefiere la primera persona?",
                "options": [
                    {
                        "text": "Natación y Tenis (Swimming and Tennis)",
                        "isCorrect": true
                    },
                    {
                        "text": "Baloncesto y Fútbol (Basketball and Soccer)",
                        "isCorrect": false
                    },
                    {
                        "text": "Voleibol y Hockey (Volleyball and Hockey)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person prefers swimming and tennis (La primera persona prefiere la natación y el tenis)."
            },
            {
                "id": "q4",
                "questionEnglish": "What is a good thing about sports? (¿Qué es algo bueno de los deportes?)",
                "questionSpanish": "¿Qué es algo bueno de los deportes?",
                "options": [
                    {
                        "text": "Son aburridos (They are boring)",
                        "isCorrect": false
                    },
                    {
                        "text": "Son caros (They are expensive)",
                        "isCorrect": false
                    },
                    {
                        "text": "Son una buena manera de mantenerse saludable (They are a great way to stay healthy)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "Sports are a great way to stay healthy (Los deportes son una buena manera de mantenerse saludable)."
            }
        ]
    },
    {
        "id": "cheering-for-a-team",
        "title": "Animando a un Equipo",
        "description": "Una conversación sobre animar a un equipo deportivo.",
        "sentences": [
            {
                "english": "Let's go, team! We can do this!",
                "spanish": "¡Vamos, equipo! ¡Podemos hacerlo!",
                "words": [
                    {
                        "english": "Let's go",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "team",
                        "spanish": "equipo"
                    },
                    {
                        "english": "can do",
                        "spanish": "podemos"
                    }
                ]
            },
            {
                "english": "Yeah! Come on, score a goal!",
                "spanish": "¡Sí! ¡Vamos, marca un gol!",
                "words": [
                    {
                        "english": "Come on",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "score",
                        "spanish": "marca"
                    },
                    {
                        "english": "goal",
                        "spanish": "gol"
                    }
                ]
            },
            {
                "english": "Great shot! Almost there!",
                "spanish": "¡Buen tiro! ¡Casi lo logran!",
                "words": [
                    {
                        "english": "Great",
                        "spanish": "Buen"
                    },
                    {
                        "english": "shot",
                        "spanish": "tiro"
                    },
                    {
                        "english": "almost",
                        "spanish": "casi"
                    },
                    {
                        "english": "there",
                        "spanish": "logran"
                    }
                ]
            },
            {
                "english": "Yes! They won! That was awesome!",
                "spanish": "¡Sí! ¡Ganaron! ¡Eso fue increíble!",
                "words": [
                    {
                        "english": "won",
                        "spanish": "ganaron"
                    },
                    {
                        "english": "awesome",
                        "spanish": "increíble"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the people doing? (¿Qué están haciendo las personas?)",
                "questionSpanish": "¿Qué están haciendo las personas?",
                "options": [
                    {
                        "text": "Estudiando (Studying)",
                        "isCorrect": false
                    },
                    {
                        "text": "Animando a un equipo (Cheering for a team)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinando (Cooking)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The people are cheering for a team (Las personas están animando a un equipo)."
            },
            {
                "id": "q2",
                "questionEnglish": "What do they want the team to do? (¿Qué quieren que haga el equipo?)",
                "questionSpanish": "¿Qué quieren que haga el equipo?",
                "options": [
                    {
                        "text": "Marcar un gol (Score a goal)",
                        "isCorrect": true
                    },
                    {
                        "text": "Rendirse (Give up)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dormir (Sleep)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They want the team to score a goal (Quieren que el equipo marque un gol)."
            },
            {
                "id": "q3",
                "questionEnglish": "What happened in the end? (¿Qué pasó al final?)",
                "questionSpanish": "¿Qué pasó al final?",
                "options": [
                    {
                        "text": "Perdieron (They lost)",
                        "isCorrect": false
                    },
                    {
                        "text": "Empataron (They tied)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ganaron (They won)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "They won in the end (Ganaron al final)."
            },
            {
                "id": "q4",
                "questionEnglish": "How did they feel about the game? (¿Cómo se sintieron sobre el juego?)",
                "questionSpanish": "¿Cómo se sintieron sobre el juego?",
                "options": [
                    {
                        "text": "Aburridos (Bored)",
                        "isCorrect": false
                    },
                    {
                        "text": "Increíble (Awesome)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tristes (Sad)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They thought the game was awesome (Pensaron que el juego fue increíble)."
            }
        ]
    },
    {
        "id": "complaining-about-noise",
        "title": "Quejándose del Ruido",
        "description": "Una persona se queja del ruido a su vecino.",
        "sentences": [
            {
                "english": "Excuse me, I can hear a lot of noise coming from your apartment.",
                "spanish": "Disculpa, puedo escuchar mucho ruido que viene de tu apartamento.",
                "words": [
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpa"
                    },
                    {
                        "english": "hear",
                        "spanish": "escuchar"
                    },
                    {
                        "english": "noise",
                        "spanish": "ruido"
                    },
                    {
                        "english": "coming from",
                        "spanish": "que viene de"
                    }
                ]
            },
            {
                "english": "Oh, I'm so sorry! We're having a small get-together.",
                "spanish": "¡Ay, lo siento mucho! Estamos teniendo una pequeña reunión.",
                "words": [
                    {
                        "english": "Oh",
                        "spanish": "Ay"
                    },
                    {
                        "english": "sorry",
                        "spanish": "lo siento"
                    },
                    {
                        "english": "small",
                        "spanish": "pequeña"
                    },
                    {
                        "english": "get-together",
                        "spanish": "reunión"
                    }
                ]
            },
            {
                "english": "Could you please keep it down a little? It's quite loud.",
                "spanish": "¿Podrían bajarle un poco al volumen, por favor? Está bastante fuerte.",
                "words": [
                    {
                        "english": "Could you",
                        "spanish": "¿Podrían"
                    },
                    {
                        "english": "keep it down",
                        "spanish": "bajarle"
                    },
                    {
                        "english": "little",
                        "spanish": "un poco"
                    },
                    {
                        "english": "loud",
                        "spanish": "fuerte"
                    }
                ]
            },
            {
                "english": "Yes, of course. We'll try to be quieter. Thanks for letting me know.",
                "spanish": "Sí, por supuesto. Trataremos de hacer menos ruido. Gracias por avisarme.",
                "words": [
                    {
                        "english": "of course",
                        "spanish": "por supuesto"
                    },
                    {
                        "english": "try",
                        "spanish": "trataremos"
                    },
                    {
                        "english": "quieter",
                        "spanish": "menos ruido"
                    },
                    {
                        "english": "letting me know",
                        "spanish": "avisarme"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person complaining about? (¿De qué se está quejando la persona?)",
                "questionSpanish": "¿De qué se está quejando la persona?",
                "options": [
                    {
                        "text": "El clima frío (The cold weather)",
                        "isCorrect": false
                    },
                    {
                        "text": "El ruido del vecino (The noise from the neighbor)",
                        "isCorrect": true
                    },
                    {
                        "text": "La mala comida (The bad food)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they hear a lot of noise from the neighbor's apartment. (La persona dice que escucha mucho ruido del apartamento del vecino.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the neighbor doing? (¿Qué está haciendo el vecino?)",
                "questionSpanish": "¿Qué está haciendo el vecino?",
                "options": [
                    {
                        "text": "Teniendo una fiesta (Having a party)",
                        "isCorrect": false
                    },
                    {
                        "text": "Teniendo una pequeña reunión (Having a small get-together)",
                        "isCorrect": true
                    },
                    {
                        "text": "Durmiendo (Sleeping)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The neighbor says they are having a small get-together. (El vecino dice que están teniendo una pequeña reunión.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What does the person ask the neighbor to do? (¿Qué le pide la persona al vecino que haga?)",
                "questionSpanish": "¿Qué le pide la persona al vecino que haga?",
                "options": [
                    {
                        "text": "Apagar las luces (To turn off the lights)",
                        "isCorrect": false
                    },
                    {
                        "text": "Bajarle un poco al volumen (To keep it down a little)",
                        "isCorrect": true
                    },
                    {
                        "text": "Invitarlos a pasar (To invite them over)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person asks the neighbor to please keep it down a little. (La persona le pide al vecino que por favor le baje un poco al volumen.)"
            },
            {
                "id": "q4",
                "questionEnglish": "How does the neighbor respond? (¿Cómo responde el vecino?)",
                "questionSpanish": "¿Cómo responde el vecino?",
                "options": [
                    {
                        "text": "Se niegan (They refuse)",
                        "isCorrect": false
                    },
                    {
                        "text": "Aceptan hacer menos ruido (They agree to be quieter)",
                        "isCorrect": true
                    },
                    {
                        "text": "Se enojan (They get angry)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The neighbor agrees to be quieter and thanks the person for letting them know. (El vecino acepta hacer menos ruido y le agradece a la persona por avisarle.)"
            }
        ]
    },
    {
        "id": "asking-for-wifi-password",
        "title": "Pidiendo la Contraseña del WiFi",
        "description": "Una persona pregunta por la contraseña del WiFi en un café.",
        "sentences": [
            {
                "english": "Hi, excuse me, do you have WiFi here?",
                "spanish": "Hola, disculpa, ¿tienen WiFi aquí?",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "Excuse me",
                        "spanish": "Disculpa"
                    },
                    {
                        "english": "have",
                        "spanish": "tienen"
                    },
                    {
                        "english": "here",
                        "spanish": "aquí"
                    }
                ]
            },
            {
                "english": "Yes, we do. The password is 'coffee123'.",
                "spanish": "Sí, tenemos. La contraseña es 'coffee123'.",
                "words": [
                    {
                        "english": "yes",
                        "spanish": "sí"
                    },
                    {
                        "english": "we do",
                        "spanish": "tenemos"
                    },
                    {
                        "english": "password",
                        "spanish": "contraseña"
                    },
                    {
                        "english": "is",
                        "spanish": "es"
                    }
                ]
            },
            {
                "english": "Could you spell that for me, please?",
                "spanish": "¿Podrías deletrearlo, por favor?",
                "words": [
                    {
                        "english": "Could you",
                        "spanish": "¿Podrías"
                    },
                    {
                        "english": "spell",
                        "spanish": "deletrear"
                    },
                    {
                        "english": "for me",
                        "spanish": "para mí"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Sure, it's C-O-F-F-E-E one two three.",
                "spanish": "Claro, es C-O-F-F-E-E uno dos tres.",
                "words": [
                    {
                        "english": "sure",
                        "spanish": "claro"
                    },
                    {
                        "english": "it's",
                        "spanish": "es"
                    },
                    {
                        "english": "one",
                        "spanish": "uno"
                    },
                    {
                        "english": "three",
                        "spanish": "tres"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where is the person asking for the WiFi? (¿Dónde está la persona preguntando por el WiFi?)",
                "questionSpanish": "¿Dónde está la persona preguntando por el WiFi?",
                "options": [
                    {
                        "text": "En una biblioteca (At a library)",
                        "isCorrect": false
                    },
                    {
                        "text": "En un café (At a café)",
                        "isCorrect": true
                    },
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation implies it's happening at a café. (La conversación implica que está sucediendo en un café.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the WiFi password? (¿Cuál es la contraseña del WiFi?)",
                "questionSpanish": "¿Cuál es la contraseña del WiFi?",
                "options": [
                    {
                        "text": "coffee123 ('coffee123')",
                        "isCorrect": true
                    },
                    {
                        "text": "password123 ('password123')",
                        "isCorrect": false
                    },
                    {
                        "text": "wifi123 ('wifi123')",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee says the password is 'coffee123'. (El empleado dice que la contraseña es 'coffee123'.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Why does the person ask to spell the password? (¿Por qué la persona pide que deletreen la contraseña?)",
                "questionSpanish": "¿Por qué la persona pide que deletreen la contraseña?",
                "options": [
                    {
                        "text": "Porque no pueden oír bien (Because they can't hear well)",
                        "isCorrect": false
                    },
                    {
                        "text": "Porque quieren asegurarse de entender correctamente (Because they want to make sure they understand correctly)",
                        "isCorrect": true
                    },
                    {
                        "text": "Porque no saben inglés (Because they don't know English)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to confirm they heard the password correctly. (La persona quiere confirmar que escuchó la contraseña correctamente.)"
            },
            {
                "id": "q4",
                "questionEnglish": "How does the employee spell the password? (¿Cómo deletrea el empleado la contraseña?)",
                "questionSpanish": "¿Cómo deletrea el empleado la contraseña?",
                "options": [
                    {
                        "text": "C-O-F-F-E-E uno dos tres (C-O-F-F-E-E one two three)",
                        "isCorrect": true
                    },
                    {
                        "text": "W-I-F-I uno dos tres (W-I-F-I one two three)",
                        "isCorrect": false
                    },
                    {
                        "text": "P-A-S-S-W-O-R-D uno dos tres (P-A-S-S-W-O-R-D one two three)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee spells the password as C-O-F-F-E-E one two three. (El empleado deletrea la contraseña como C-O-F-F-E-E uno dos tres.)"
            }
        ]
    },
    {
        "id": "setting-up-an-alarm",
        "title": "Configurando una Alarma",
        "description": "Una persona configura una alarma en su teléfono.",
        "sentences": [
            {
                "english": "Okay, I need to set an alarm for 7 AM tomorrow.",
                "spanish": "Okay, necesito poner una alarma para las 7 AM mañana.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "need",
                        "spanish": "necesito"
                    },
                    {
                        "english": "set",
                        "spanish": "poner"
                    },
                    {
                        "english": "alarm",
                        "spanish": "alarma"
                    }
                ]
            },
            {
                "english": "Let me find the alarm app on my phone.",
                "spanish": "Déjame encontrar la aplicación de alarma en mi teléfono.",
                "words": [
                    {
                        "english": "Let me",
                        "spanish": "Déjame"
                    },
                    {
                        "english": "find",
                        "spanish": "encontrar"
                    },
                    {
                        "english": "alarm app",
                        "spanish": "aplicación de alarma"
                    },
                    {
                        "english": "phone",
                        "spanish": "teléfono"
                    }
                ]
            },
            {
                "english": "Alright, now I'll set the time and save it.",
                "spanish": "Bien, ahora voy a poner la hora y guardarla.",
                "words": [
                    {
                        "english": "Alright",
                        "spanish": "Bien"
                    },
                    {
                        "english": "now",
                        "spanish": "ahora"
                    },
                    {
                        "english": "set",
                        "spanish": "poner"
                    },
                    {
                        "english": "save",
                        "spanish": "guardar"
                    }
                ]
            },
            {
                "english": "Perfect! Now I won't be late for my appointment.",
                "spanish": "¡Perfecto! Ahora no llegaré tarde a mi cita.",
                "words": [
                    {
                        "english": "Perfect",
                        "spanish": "Perfecto"
                    },
                    {
                        "english": "won't be",
                        "spanish": "no llegaré"
                    },
                    {
                        "english": "late",
                        "spanish": "tarde"
                    },
                    {
                        "english": "appointment",
                        "spanish": "cita"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person need to do? (¿Qué necesita hacer la persona?)",
                "questionSpanish": "¿Qué necesita hacer la persona?",
                "options": [
                    {
                        "text": "Poner una alarma (Set an alarm)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hacer el desayuno (Make breakfast)",
                        "isCorrect": false
                    },
                    {
                        "text": "Irse a dormir (Go to sleep)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they need to set an alarm. (La persona dice que necesita poner una alarma.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What time does the person set the alarm for? (¿A qué hora pone la persona la alarma?)",
                "questionSpanish": "¿A qué hora pone la persona la alarma?",
                "options": [
                    {
                        "text": "8 AM (8 AM)",
                        "isCorrect": false
                    },
                    {
                        "text": "7 AM (7 AM)",
                        "isCorrect": true
                    },
                    {
                        "text": "9 AM (9 AM)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person sets the alarm for 7 AM. (La persona pone la alarma para las 7 AM.)"
            },
            {
                "id": "q3",
                "questionEnglish": "Where does the person find the alarm app? (¿Dónde encuentra la persona la aplicación de alarma?)",
                "questionSpanish": "¿Dónde encuentra la persona la aplicación de alarma?",
                "options": [
                    {
                        "text": "En su computadora (On their computer)",
                        "isCorrect": false
                    },
                    {
                        "text": "En su teléfono (On their phone)",
                        "isCorrect": true
                    },
                    {
                        "text": "En su reloj (On their watch)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person looks for the alarm app on their phone. (La persona busca la aplicación de alarma en su teléfono.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Why does the person set the alarm? (¿Por qué la persona pone la alarma?)",
                "questionSpanish": "¿Por qué la persona pone la alarma?",
                "options": [
                    {
                        "text": "Para no llegar tarde a su cita (So they won't be late for their appointment)",
                        "isCorrect": true
                    },
                    {
                        "text": "Porque están aburridos (Because they are bored)",
                        "isCorrect": false
                    },
                    {
                        "text": "Para despertar a su amigo (To wake up their friend)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person sets the alarm so they won't be late for their appointment. (La persona pone la alarma para no llegar tarde a su cita.)"
            }
        ]
    },
    {
        "id": "talking-about-technology",
        "title": "Hablando de Tecnología",
        "description": "Dos amigos hablan sobre sus nuevos dispositivos tecnológicos.",
        "sentences": [
            {
                "english": "Hey, I just got a new smart watch. It's really cool.",
                "spanish": "Oye, me acabo de comprar un nuevo reloj inteligente. Es muy genial.",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "just got",
                        "spanish": "acabo de comprar"
                    },
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "smart watch",
                        "spanish": "reloj inteligente"
                    }
                ]
            },
            {
                "english": "Oh, nice! I've been thinking about getting a new tablet.",
                "spanish": "¡Oh, qué bien! He estado pensando en comprar una nueva tableta.",
                "words": [
                    {
                        "english": "nice",
                        "spanish": "qué bien"
                    },
                    {
                        "english": "been thinking",
                        "spanish": "he estado pensando"
                    },
                    {
                        "english": "getting",
                        "spanish": "comprar"
                    },
                    {
                        "english": "tablet",
                        "spanish": "tableta"
                    }
                ]
            },
            {
                "english": "Tablets are great for reading and watching movies on the go.",
                "spanish": "Las tabletas son geniales para leer y ver películas sobre la marcha.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "geniales"
                    },
                    {
                        "english": "reading",
                        "spanish": "leer"
                    },
                    {
                        "english": "watching movies",
                        "spanish": "ver películas"
                    },
                    {
                        "english": "on the go",
                        "spanish": "sobre la marcha"
                    }
                ]
            },
            {
                "english": "Yeah, that's exactly why I want one. Plus, for taking notes.",
                "spanish": "Sí, exactamente por eso quiero una. Además, para tomar apuntes.",
                "words": [
                    {
                        "english": "exactly",
                        "spanish": "exactamente"
                    },
                    {
                        "english": "why",
                        "spanish": "por eso"
                    },
                    {
                        "english": "plus",
                        "spanish": "además"
                    },
                    {
                        "english": "taking notes",
                        "spanish": "tomar apuntes"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What did the first person buy? (¿Qué compró la primera persona?)",
                "questionSpanish": "¿Qué compró la primera persona?",
                "options": [
                    {
                        "text": "Un nuevo teléfono (A new phone)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un nuevo reloj inteligente (A new smart watch)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una nueva tableta (A new tablet)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says they just got a new smart watch. (La primera persona dice que se acaba de comprar un nuevo reloj inteligente.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What is the second person thinking about buying? (¿Qué está pensando en comprar la segunda persona?)",
                "questionSpanish": "¿Qué está pensando en comprar la segunda persona?",
                "options": [
                    {
                        "text": "Una nueva computadora portátil (A new laptop)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una nueva tableta (A new tablet)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un nuevo reloj inteligente (A new smart watch)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says they have been thinking about getting a new tablet. (La segunda persona dice que ha estado pensando en comprar una nueva tableta.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What are tablets good for? (¿Para qué son buenas las tabletas?)",
                "questionSpanish": "¿Para qué son buenas las tabletas?",
                "options": [
                    {
                        "text": "Para cocinar (For cooking)",
                        "isCorrect": false
                    },
                    {
                        "text": "Para leer y ver películas (For reading and watching movies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Para practicar deportes (For playing sports)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Tablets are great for reading and watching movies on the go. (Las tabletas son geniales para leer y ver películas sobre la marcha.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Why does the second person want a tablet? (¿Por qué la segunda persona quiere una tableta?)",
                "questionSpanish": "¿Por qué la segunda persona quiere una tableta?",
                "options": [
                    {
                        "text": "Para tomar fotos (For taking photos)",
                        "isCorrect": false
                    },
                    {
                        "text": "Para leer, ver películas y tomar apuntes (For reading, watching movies, and taking notes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Para jugar videojuegos (For playing video games)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person wants a tablet for reading, watching movies, and taking notes. (La segunda persona quiere una tableta para leer, ver películas y tomar apuntes.)"
            }
        ]
    },
    {
        "id": "planning-a-birthday-party",
        "title": "Planeando una Fiesta de Cumpleaños",
        "description": "Dos amigos planean una fiesta de cumpleaños para un amigo en común.",
        "sentences": [
            {
                "english": "We need to plan a birthday party for Maria. What should we do?",
                "spanish": "Necesitamos planear una fiesta de cumpleaños para María. ¿Qué deberíamos hacer?",
                "words": [
                    {
                        "english": "need",
                        "spanish": "necesitamos"
                    },
                    {
                        "english": "plan",
                        "spanish": "planear"
                    },
                    {
                        "english": "birthday party",
                        "spanish": "fiesta de cumpleaños"
                    },
                    {
                        "english": "should we do",
                        "spanish": "deberíamos hacer"
                    }
                ]
            },
            {
                "english": "Let's have it at my house. I have a big backyard.",
                "spanish": "Tengámosla en mi casa. Tengo un patio trasero grande.",
                "words": [
                    {
                        "english": "Let's have it",
                        "spanish": "Tengámosla"
                    },
                    {
                        "english": "my house",
                        "spanish": "mi casa"
                    },
                    {
                        "english": "big",
                        "spanish": "grande"
                    },
                    {
                        "english": "backyard",
                        "spanish": "patio trasero"
                    }
                ]
            },
            {
                "english": "Great idea! We can decorate it with balloons and streamers.",
                "spanish": "¡Qué buena idea! Podemos decorarlo con globos y serpentinas.",
                "words": [
                    {
                        "english": "Great idea",
                        "spanish": "Qué buena idea"
                    },
                    {
                        "english": "decorate",
                        "spanish": "decorar"
                    },
                    {
                        "english": "balloons",
                        "spanish": "globos"
                    },
                    {
                        "english": "streamers",
                        "spanish": "serpentinas"
                    }
                ]
            },
            {
                "english": "And we should order a cake and some pizza for everyone.",
                "spanish": "Y deberíamos pedir un pastel y algo de pizza para todos.",
                "words": [
                    {
                        "english": "should",
                        "spanish": "deberíamos"
                    },
                    {
                        "english": "order",
                        "spanish": "pedir"
                    },
                    {
                        "english": "cake",
                        "spanish": "pastel"
                    },
                    {
                        "english": "pizza",
                        "spanish": "pizza"
                    },
                    {
                        "english": "everyone",
                        "spanish": "todos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the people planning? (¿Qué están planeando las personas?)",
                "questionSpanish": "¿Qué están planeando las personas?",
                "options": [
                    {
                        "text": "Una boda (A wedding)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una fiesta de cumpleaños (A birthday party)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un viaje (A trip)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning a birthday party for Maria. (Están planeando una fiesta de cumpleaños para María.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where will the party be held? (¿Dónde se celebrará la fiesta?)",
                "questionSpanish": "¿Dónde se celebrará la fiesta?",
                "options": [
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "En la casa de alguien (At someone's house)",
                        "isCorrect": true
                    },
                    {
                        "text": "En un parque (At a park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The party will be held at someone's house because they have a big backyard. (La fiesta se celebrará en la casa de alguien porque tienen un patio trasero grande.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What will they decorate with? (¿Con qué decorarán?)",
                "questionSpanish": "¿Con qué decorarán?",
                "options": [
                    {
                        "text": "Flores y luces (Flowers and lights)",
                        "isCorrect": false
                    },
                    {
                        "text": "Globos y serpentinas (Balloons and streamers)",
                        "isCorrect": true
                    },
                    {
                        "text": "Pósters e imágenes (Posters and pictures)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They will decorate with balloons and streamers. (Decorarán con globos y serpentinas.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What food will they order? (¿Qué comida pedirán?)",
                "questionSpanish": "¿Qué comida pedirán?",
                "options": [
                    {
                        "text": "Pastel y pizza (Cake and pizza)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hamburguesas y papas fritas (Burgers and fries)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ensalada y sándwiches (Salad and sandwiches)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They should order a cake and some pizza for everyone. (Deberían pedir un pastel y algo de pizza para todos.)"
            }
        ]
    },
    {
        "id": "at-the-bakery",
        "title": "En la Panadería",
        "description": "Una conversación sencilla al comprar pan en una panadería.",
        "sentences": [
            {
                "english": "Good morning, I'd like a baguette, please.",
                "spanish": "Buenos días, quisiera una baguette, por favor.",
                "words": [
                    {
                        "english": "Good morning",
                        "spanish": "Buenos días"
                    },
                    {
                        "english": "I'd like",
                        "spanish": "Quisiera"
                    },
                    {
                        "english": "baguette",
                        "spanish": "baguette"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Sure, anything else today?",
                "spanish": "Claro, ¿algo más hoy?",
                "words": [
                    {
                        "english": "Sure",
                        "spanish": "Claro"
                    },
                    {
                        "english": "anything else",
                        "spanish": "algo más"
                    },
                    {
                        "english": "today",
                        "spanish": "hoy"
                    }
                ]
            },
            {
                "english": "Yes, I also want two croissants.",
                "spanish": "Sí, también quiero dos croissants.",
                "words": [
                    {
                        "english": "Yes",
                        "spanish": "Sí"
                    },
                    {
                        "english": "also",
                        "spanish": "también"
                    },
                    {
                        "english": "want",
                        "spanish": "quiero"
                    },
                    {
                        "english": "croissants",
                        "spanish": "croissants"
                    }
                ]
            },
            {
                "english": "Okay, that's $5.50, please.",
                "spanish": "Está bien, son $5.50, por favor.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "that's",
                        "spanish": "son"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the customer want to buy?",
                "questionSpanish": "¿Qué quiere comprar el cliente?",
                "options": [
                    {
                        "text": "Una baguette y dos croissants (One baguette and two croissants)",
                        "isCorrect": true
                    },
                    {
                        "text": "Dos baguettes y un croissant (Two baguettes and one croissant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Solo una baguette (Just a baguette)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer asks for 'a baguette' and 'two croissants'."
            },
            {
                "id": "q2",
                "questionEnglish": "What time of day is it?",
                "questionSpanish": "¿Qué hora del día es?",
                "options": [
                    {
                        "text": "Tarde (Afternoon)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mañana (Morning)",
                        "isCorrect": true
                    },
                    {
                        "text": "Noche (Evening)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer says 'Good morning'."
            },
            {
                "id": "q3",
                "questionEnglish": "How much does the order cost?",
                "questionSpanish": "¿Cuánto cuesta la orden?",
                "options": [
                    {
                        "text": "Seis dólares con cincuenta centavos ($6.50)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cuatro dólares con cincuenta centavos ($4.50)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cinco dólares con cincuenta centavos ($5.50)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The baker says 'That's $5.50'."
            },
            {
                "id": "q4",
                "questionEnglish": "Is the customer buying fruit?",
                "questionSpanish": "¿El cliente está comprando fruta?",
                "options": [
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": true
                    },
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer buys bread products, not fruit."
            }
        ]
    },
    {
        "id": "ordering-food-from-a-food-truck",
        "title": "Ordenando Comida en un Camión de Comida",
        "description": "Un pedido en un camión de comida callejero.",
        "sentences": [
            {
                "english": "Hi, I'll take the fish tacos, please.",
                "spanish": "Hola, me da los tacos de pescado, por favor.",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "I'll take",
                        "spanish": "Me da"
                    },
                    {
                        "english": "fish tacos",
                        "spanish": "tacos de pescado"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Coming right up! What to drink?",
                "spanish": "¡Enseguida! ¿Qué va a tomar?",
                "words": [
                    {
                        "english": "Coming right up",
                        "spanish": "Enseguida"
                    },
                    {
                        "english": "What to drink",
                        "spanish": "¿Qué va a tomar?"
                    }
                ]
            },
            {
                "english": "I'll just have water, thanks.",
                "spanish": "Solo agua, gracias.",
                "words": [
                    {
                        "english": "I'll just have",
                        "spanish": "Solo"
                    },
                    {
                        "english": "water",
                        "spanish": "agua"
                    },
                    {
                        "english": "thanks",
                        "spanish": "gracias"
                    }
                ]
            },
            {
                "english": "Sounds good. That's $8.50 total.",
                "spanish": "Suena bien. Son $8.50 en total.",
                "words": [
                    {
                        "english": "Sounds good",
                        "spanish": "Suena bien"
                    },
                    {
                        "english": "That's",
                        "spanish": "Son"
                    },
                    {
                        "english": "total",
                        "spanish": "en total"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What kind of food does the customer order?",
                "questionSpanish": "¿Qué tipo de comida ordena el cliente?",
                "options": [
                    {
                        "text": "Tacos de pollo (Chicken tacos)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tacos de pescado (Fish tacos)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tacos de carne (Beef tacos)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer says 'fish tacos'."
            },
            {
                "id": "q2",
                "questionEnglish": "What does the customer order to drink?",
                "questionSpanish": "¿Qué pide el cliente para beber?",
                "options": [
                    {
                        "text": "Refresco (Soda)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jugo (Juice)",
                        "isCorrect": false
                    },
                    {
                        "text": "Agua (Water)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The customer says 'water'."
            },
            {
                "id": "q3",
                "questionEnglish": "How much does the customer pay?",
                "questionSpanish": "¿Cuánto paga el cliente?",
                "options": [
                    {
                        "text": "Siete dólares con cincuenta centavos ($7.50)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ocho dólares con cincuenta centavos ($8.50)",
                        "isCorrect": true
                    },
                    {
                        "text": "Nueve dólares con cincuenta centavos ($9.50)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The food truck worker says '$8.50 total'."
            },
            {
                "id": "q4",
                "questionEnglish": "Where are they buying food from?",
                "questionSpanish": "¿Dónde están comprando comida?",
                "options": [
                    {
                        "text": "Restaurante (Restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Camión de comida (Food Truck)",
                        "isCorrect": true
                    },
                    {
                        "text": "Supermercado (Supermarket)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The title says 'Food Truck'."
            }
        ]
    },
    {
        "id": "talking-about-your-studies",
        "title": "Hablando de tus Estudios",
        "description": "Una breve charla sobre lo que uno estudia.",
        "sentences": [
            {
                "english": "What are you studying at the university?",
                "spanish": "¿Qué estás estudiando en la universidad?",
                "words": [
                    {
                        "english": "What",
                        "spanish": "Qué"
                    },
                    {
                        "english": "are you studying",
                        "spanish": "estás estudiando"
                    },
                    {
                        "english": "university",
                        "spanish": "universidad"
                    }
                ]
            },
            {
                "english": "I'm studying computer science, it's pretty interesting.",
                "spanish": "Estoy estudiando ciencias de la computación, es bastante interesante.",
                "words": [
                    {
                        "english": "I'm studying",
                        "spanish": "Estoy estudiando"
                    },
                    {
                        "english": "computer science",
                        "spanish": "ciencias de la computación"
                    },
                    {
                        "english": "interesting",
                        "spanish": "interesante"
                    }
                ]
            },
            {
                "english": "Oh cool! What year are you in?",
                "spanish": "¡Ah, qué bien! ¿En qué año estás?",
                "words": [
                    {
                        "english": "cool",
                        "spanish": "bien"
                    },
                    {
                        "english": "What year",
                        "spanish": "¿En qué año"
                    },
                    {
                        "english": "are you in",
                        "spanish": "estás"
                    }
                ]
            },
            {
                "english": "I'm in my second year.",
                "spanish": "Estoy en mi segundo año.",
                "words": [
                    {
                        "english": "I'm in",
                        "spanish": "Estoy en"
                    },
                    {
                        "english": "second year",
                        "spanish": "segundo año"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person studying?",
                "questionSpanish": "¿Qué está estudiando la persona?",
                "options": [
                    {
                        "text": "Matemáticas (Math)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ciencias de la Computación (Computer Science)",
                        "isCorrect": true
                    },
                    {
                        "text": "Historia (History)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they are studying 'computer science'."
            },
            {
                "id": "q2",
                "questionEnglish": "What year of university is the person in?",
                "questionSpanish": "¿En qué año de la universidad está la persona?",
                "options": [
                    {
                        "text": "Primer año (First year)",
                        "isCorrect": false
                    },
                    {
                        "text": "Segundo año (Second year)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tercer año (Third year)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I'm in my second year'."
            },
            {
                "id": "q3",
                "questionEnglish": "Does the person like what they are studying?",
                "questionSpanish": "¿Le gusta a la persona lo que está estudiando?",
                "options": [
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say it's 'pretty interesting'."
            },
            {
                "id": "q4",
                "questionEnglish": "Where are they studying?",
                "questionSpanish": "¿Dónde están estudiando?",
                "options": [
                    {
                        "text": "Escuela (School)",
                        "isCorrect": false
                    },
                    {
                        "text": "Universidad (University)",
                        "isCorrect": true
                    },
                    {
                        "text": "Casa (Home)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The question refers to studying 'at the university'."
            }
        ]
    },
    {
        "id": "discussing-news",
        "title": "Discutiendo Noticias",
        "description": "Una conversación corta sobre un evento noticioso.",
        "sentences": [
            {
                "english": "Did you hear about the new park downtown?",
                "spanish": "¿Escuchaste sobre el nuevo parque en el centro?",
                "words": [
                    {
                        "english": "Did you hear",
                        "spanish": "¿Escuchaste"
                    },
                    {
                        "english": "new park",
                        "spanish": "nuevo parque"
                    },
                    {
                        "english": "downtown",
                        "spanish": "en el centro"
                    }
                ]
            },
            {
                "english": "No, I didn't! What's it like?",
                "spanish": "¡No, no escuché! ¿Cómo es?",
                "words": [
                    {
                        "english": "No",
                        "spanish": "No"
                    },
                    {
                        "english": "What's it like",
                        "spanish": "¿Cómo es?"
                    }
                ]
            },
            {
                "english": "It's huge! They have a playground and a dog park.",
                "spanish": "¡Es enorme! Tiene un parque infantil y un parque para perros.",
                "words": [
                    {
                        "english": "huge",
                        "spanish": "enorme"
                    },
                    {
                        "english": "playground",
                        "spanish": "parque infantil"
                    },
                    {
                        "english": "dog park",
                        "spanish": "parque para perros"
                    }
                ]
            },
            {
                "english": "Wow, that sounds great! I'll have to visit.",
                "spanish": "¡Wow, eso suena genial! Tendré que visitarlo.",
                "words": [
                    {
                        "english": "sounds great",
                        "spanish": "suena genial"
                    },
                    {
                        "english": "I'll have to",
                        "spanish": "Tendré que"
                    },
                    {
                        "english": "visit",
                        "spanish": "visitarlo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about?",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Un restaurante nuevo (A new restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un parque nuevo (A new park)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una película nueva (A new movie)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They mention 'new park downtown'."
            },
            {
                "id": "q2",
                "questionEnglish": "Where is the new thing located?",
                "questionSpanish": "¿Dónde está ubicado lo nuevo?",
                "options": [
                    {
                        "text": "En la parte alta de la ciudad (Uptown)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el centro (Downtown)",
                        "isCorrect": true
                    },
                    {
                        "text": "En los suburbios (In the suburbs)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "It's located 'downtown'."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the new place have?",
                "questionSpanish": "¿Qué tiene el lugar nuevo?",
                "options": [
                    {
                        "text": "Solo un parque infantil (Only a playground)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un parque infantil y un parque para perros (A playground and a dog park)",
                        "isCorrect": true
                    },
                    {
                        "text": "Solo un parque para perros (Only a dog park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "It has 'a playground and a dog park'."
            },
            {
                "id": "q4",
                "questionEnglish": "Does one of the people want to go there?",
                "questionSpanish": "¿Una de las personas quiere ir allí?",
                "options": [
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person says 'I'll have to visit'."
            }
        ]
    },
    {
        "id": "at-the-cinema",
        "title": "En el Cine",
        "description": "Una conversación para comprar entradas en el cine.",
        "sentences": [
            {
                "english": "Two tickets for 'Action Movie 5', please.",
                "spanish": "Dos boletos para 'Película de Acción 5', por favor.",
                "words": [
                    {
                        "english": "Two tickets",
                        "spanish": "Dos boletos"
                    },
                    {
                        "english": "for",
                        "spanish": "para"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Which showtime, sir?",
                "spanish": "¿Qué horario, señor?",
                "words": [
                    {
                        "english": "Which",
                        "spanish": "¿Qué"
                    },
                    {
                        "english": "showtime",
                        "spanish": "horario"
                    }
                ]
            },
            {
                "english": "The 7:30 PM show, thanks.",
                "spanish": "La función de las 7:30 PM, gracias.",
                "words": [
                    {
                        "english": "The",
                        "spanish": "La"
                    },
                    {
                        "english": "show",
                        "spanish": "función"
                    },
                    {
                        "english": "thanks",
                        "spanish": "gracias"
                    }
                ]
            },
            {
                "english": "Okay, that's $24. Enjoy the movie!",
                "spanish": "Está bien, son $24. ¡Disfruten la película!",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "that's",
                        "spanish": "son"
                    },
                    {
                        "english": "Enjoy",
                        "spanish": "Disfruten"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they buying?",
                "questionSpanish": "¿Qué están comprando?",
                "options": [
                    {
                        "text": "Palomitas de maíz (Popcorn)",
                        "isCorrect": false
                    },
                    {
                        "text": "Boletos de cine (Movie tickets)",
                        "isCorrect": true
                    },
                    {
                        "text": "Refresco (Soda)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer asks for 'two tickets'."
            },
            {
                "id": "q2",
                "questionEnglish": "What time is the movie?",
                "questionSpanish": "¿A qué hora es la película?",
                "options": [
                    {
                        "text": "6:30 PM (6:30 PM)",
                        "isCorrect": false
                    },
                    {
                        "text": "7:30 PM (7:30 PM)",
                        "isCorrect": true
                    },
                    {
                        "text": "8:30 PM (8:30 PM)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer asks for the '7:30 PM show'."
            },
            {
                "id": "q3",
                "questionEnglish": "How many tickets are they buying?",
                "questionSpanish": "¿Cuántos boletos están comprando?",
                "options": [
                    {
                        "text": "Uno (One)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dos (Two)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tres (Three)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The customer asks for 'two tickets'."
            },
            {
                "id": "q4",
                "questionEnglish": "How much do the tickets cost?",
                "questionSpanish": "¿Cuánto cuestan los boletos?",
                "options": [
                    {
                        "text": "Veinte dólares ($20)",
                        "isCorrect": false
                    },
                    {
                        "text": "Veinticuatro dólares ($24)",
                        "isCorrect": true
                    },
                    {
                        "text": "Veintiocho dólares ($28)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The employee says 'that's $24'."
            }
        ]
    },
    {
        "id": "reserving-a-table",
        "title": "Reservando una Mesa",
        "description": "Una persona llama a un restaurante para reservar una mesa para cenar.",
        "sentences": [
            {
                "english": "Hello, I'd like to reserve a table for two, please.",
                "spanish": "Hola, me gustaría reservar una mesa para dos, por favor.",
                "words": [
                    {
                        "english": "Hello",
                        "spanish": "Hola"
                    },
                    {
                        "english": "reserve",
                        "spanish": "reservar"
                    },
                    {
                        "english": "table",
                        "spanish": "mesa"
                    },
                    {
                        "english": "for two",
                        "spanish": "para dos"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            },
            {
                "english": "Of course. What day and time would you like it for?",
                "spanish": "Por supuesto. ¿Para qué día y hora le gustaría?",
                "words": [
                    {
                        "english": "Of course",
                        "spanish": "Por supuesto"
                    },
                    {
                        "english": "What day",
                        "spanish": "Qué día"
                    },
                    {
                        "english": "What time",
                        "spanish": "Qué hora"
                    },
                    {
                        "english": "would you like",
                        "spanish": "le gustaría"
                    }
                ]
            },
            {
                "english": "This Saturday at 7:30 PM.",
                "spanish": "Este sábado a las siete y media de la noche.",
                "words": [
                    {
                        "english": "This",
                        "spanish": "Este"
                    },
                    {
                        "english": "Saturday",
                        "spanish": "sábado"
                    },
                    {
                        "english": "at",
                        "spanish": "a las"
                    },
                    {
                        "english": "PM",
                        "spanish": "de la noche"
                    }
                ]
            },
            {
                "english": "Perfect. Your name, please?",
                "spanish": "Perfecto. ¿Su nombre, por favor?",
                "words": [
                    {
                        "english": "Perfect",
                        "spanish": "Perfecto"
                    },
                    {
                        "english": "Your name",
                        "spanish": "Su nombre"
                    },
                    {
                        "english": "please",
                        "spanish": "por favor"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to do? (¿Qué quiere hacer la persona?)",
                "questionSpanish": "¿Qué quiere hacer la persona?",
                "options": [
                    {
                        "text": "Cancelar una mesa (Cancel a table.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Reservar una mesa (Reserve a table.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ordenar comida (Order food.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they want to 'reserve a table' - reservar una mesa."
            },
            {
                "id": "q2",
                "questionEnglish": "How many people is the table for? (¿Para cuántas personas es la mesa?)",
                "questionSpanish": "¿Para cuántas personas es la mesa?",
                "options": [
                    {
                        "text": "Uno (One)",
                        "isCorrect": false
                    },
                    {
                        "text": "Dos (Two)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tres (Three)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'a table for two' - una mesa para dos."
            },
            {
                "id": "q3",
                "questionEnglish": "What day does the person want the reservation for? (¿Para qué día quiere la persona la reservación?)",
                "questionSpanish": "¿Para qué día quiere la persona la reservación?",
                "options": [
                    {
                        "text": "El próximo viernes (Next Friday)",
                        "isCorrect": false
                    },
                    {
                        "text": "Este sábado (This Saturday)",
                        "isCorrect": true
                    },
                    {
                        "text": "Mañana (Tomorrow)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'This Saturday' - Este sábado."
            },
            {
                "id": "q4",
                "questionEnglish": "What is the last thing the restaurant asks for? (¿Qué es lo último que pide el restaurante?)",
                "questionSpanish": "¿Qué es lo último que pide el restaurante?",
                "options": [
                    {
                        "text": "La dirección de la persona (The person's address)",
                        "isCorrect": false
                    },
                    {
                        "text": "El número de teléfono de la persona (The person's phone number)",
                        "isCorrect": false
                    },
                    {
                        "text": "El nombre de la persona (The person's name)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The restaurant asks 'Your name, please?' - ¿Su nombre, por favor?"
            }
        ]
    },
    {
        "id": "canceling-an-appointment",
        "title": "Cancelando una Cita",
        "description": "Una persona llama al médico para cancelar una cita.",
        "sentences": [
            {
                "english": "Hi, I need to cancel my appointment for tomorrow.",
                "spanish": "Hola, necesito cancelar mi cita para mañana.",
                "words": [
                    {
                        "english": "Hi",
                        "spanish": "Hola"
                    },
                    {
                        "english": "need",
                        "spanish": "necesito"
                    },
                    {
                        "english": "cancel",
                        "spanish": "cancelar"
                    },
                    {
                        "english": "appointment",
                        "spanish": "cita"
                    },
                    {
                        "english": "tomorrow",
                        "spanish": "mañana"
                    }
                ]
            },
            {
                "english": "Okay, what's your name and date of birth?",
                "spanish": "Está bien, ¿cuál es su nombre y fecha de nacimiento?",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Está bien"
                    },
                    {
                        "english": "What's your name",
                        "spanish": "Cuál es su nombre"
                    },
                    {
                        "english": "date of birth",
                        "spanish": "fecha de nacimiento"
                    }
                ]
            },
            {
                "english": "It's Maria Rodriguez, January 1st, 1990.",
                "spanish": "Es Maria Rodriguez, primero de enero de mil novecientos noventa.",
                "words": [
                    {
                        "english": "It's",
                        "spanish": "Es"
                    },
                    {
                        "english": "January",
                        "spanish": "Enero"
                    },
                    {
                        "english": "1st",
                        "spanish": "primero"
                    }
                ]
            },
            {
                "english": "Alright, your appointment is cancelled. Thank you.",
                "spanish": "De acuerdo, su cita está cancelada. Gracias.",
                "words": [
                    {
                        "english": "Alright",
                        "spanish": "De acuerdo"
                    },
                    {
                        "english": "cancelled",
                        "spanish": "cancelada"
                    },
                    {
                        "english": "Thank you",
                        "spanish": "Gracias"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person calling to do? (¿Para qué llama la persona?)",
                "questionSpanish": "¿Para qué llama la persona?",
                "options": [
                    {
                        "text": "Para hacer una cita (To make an appointment.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Para cancelar una cita (To cancel an appointment.)",
                        "isCorrect": true
                    },
                    {
                        "text": "Para reprogramar una cita (To reschedule an appointment.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I need to cancel my appointment' - Necesito cancelar mi cita."
            },
            {
                "id": "q2",
                "questionEnglish": "When was the appointment scheduled for? (¿Para cuándo estaba programada la cita?)",
                "questionSpanish": "¿Para cuándo estaba programada la cita?",
                "options": [
                    {
                        "text": "Hoy (Today)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mañana (Tomorrow)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ayer (Yesterday)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'cancel my appointment for tomorrow' - cancelar mi cita para mañana."
            },
            {
                "id": "q3",
                "questionEnglish": "What information does the office ask for? (¿Qué información pide la oficina?)",
                "questionSpanish": "¿Qué información pide la oficina?",
                "options": [
                    {
                        "text": "Nombre y número de teléfono (Name and phone number)",
                        "isCorrect": false
                    },
                    {
                        "text": "Nombre y fecha de nacimiento (Name and date of birth)",
                        "isCorrect": true
                    },
                    {
                        "text": "Dirección y correo electrónico (Address and email)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The office asks for 'name and date of birth' - nombre y fecha de nacimiento."
            },
            {
                "id": "q4",
                "questionEnglish": "Is the appointment canceled? (¿La cita está cancelada?)",
                "questionSpanish": "¿La cita está cancelada?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The office says 'your appointment is cancelled' - su cita está cancelada."
            }
        ]
    },
    {
        "id": "asking-for-a-recommendation",
        "title": "Pidiendo una Recomendación",
        "description": "Una persona le pregunta a un amigo por una recomendación de un restaurante.",
        "sentences": [
            {
                "english": "Hey, do you know any good restaurants around here?",
                "spanish": "Oye, ¿conoces algún buen restaurante por aquí?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "Do you know",
                        "spanish": "Conoces"
                    },
                    {
                        "english": "any",
                        "spanish": "algún"
                    },
                    {
                        "english": "good",
                        "spanish": "buen"
                    },
                    {
                        "english": "restaurants",
                        "spanish": "restaurantes"
                    },
                    {
                        "english": "around here",
                        "spanish": "por aquí"
                    }
                ]
            },
            {
                "english": "Yeah, there's 'El Sabor Latino' - great Latin food.",
                "spanish": "Sí, hay 'El Sabor Latino' - muy buena comida latina.",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "There's",
                        "spanish": "Hay"
                    },
                    {
                        "english": "great",
                        "spanish": "muy buena"
                    },
                    {
                        "english": "Latin food",
                        "spanish": "comida latina"
                    }
                ]
            },
            {
                "english": "Oh, that sounds delicious. What kind of food do they have?",
                "spanish": "Oh, eso suena delicioso. ¿Qué tipo de comida tienen?",
                "words": [
                    {
                        "english": "sounds",
                        "spanish": "suena"
                    },
                    {
                        "english": "delicious",
                        "spanish": "delicioso"
                    },
                    {
                        "english": "What kind",
                        "spanish": "Qué tipo"
                    },
                    {
                        "english": "food",
                        "spanish": "comida"
                    },
                    {
                        "english": "they have",
                        "spanish": "tienen"
                    }
                ]
            },
            {
                "english": "They have dishes from all over Latin America, like tacos and arepas.",
                "spanish": "Tienen platos de toda América Latina, como tacos y arepas.",
                "words": [
                    {
                        "english": "They have",
                        "spanish": "Tienen"
                    },
                    {
                        "english": "dishes",
                        "spanish": "platos"
                    },
                    {
                        "english": "all over",
                        "spanish": "toda"
                    },
                    {
                        "english": "like",
                        "spanish": "como"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person asking for? (¿Qué está pidiendo la persona?)",
                "questionSpanish": "¿Qué está pidiendo la persona?",
                "options": [
                    {
                        "text": "Direcciones a un restaurante (Directions to a restaurant.)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una recomendación de un restaurante (A restaurant recommendation.)",
                        "isCorrect": true
                    },
                    {
                        "text": "El menú de un restaurante (The menu of a restaurant.)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person asks 'do you know any good restaurants around here?' - ¿conoces algún buen restaurante por aquí?"
            },
            {
                "id": "q2",
                "questionEnglish": "What type of food does 'El Sabor Latino' serve? (¿Qué tipo de comida sirve 'El Sabor Latino'?)",
                "questionSpanish": "¿Qué tipo de comida sirve 'El Sabor Latino'?",
                "options": [
                    {
                        "text": "Comida italiana (Italian food)",
                        "isCorrect": false
                    },
                    {
                        "text": "Comida latina (Latin food)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comida china (Chinese food)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "'El Sabor Latino' serves 'great Latin food' - muy buena comida latina."
            },
            {
                "id": "q3",
                "questionEnglish": "What are some examples of dishes they serve? (¿Cuáles son algunos ejemplos de platos que sirven?)",
                "questionSpanish": "¿Cuáles son algunos ejemplos de platos que sirven?",
                "options": [
                    {
                        "text": "Hamburguesas y papas fritas (Burgers and fries)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tacos y arepas (Tacos and arepas)",
                        "isCorrect": true
                    },
                    {
                        "text": "Pizza y pasta (Pizza and pasta)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They serve 'dishes from all over Latin America, like tacos and arepas' - Platos de toda América Latina, como tacos y arepas."
            },
            {
                "id": "q4",
                "questionEnglish": "How does the person feel about the restaurant recommendation? (¿Cómo se siente la persona sobre la recomendación del restaurante?)",
                "questionSpanish": "¿Cómo se siente la persona sobre la recomendación del restaurante?",
                "options": [
                    {
                        "text": "Emocionado/a (Excited)",
                        "isCorrect": true
                    },
                    {
                        "text": "Enojado/a (Angry)",
                        "isCorrect": false
                    },
                    {
                        "text": "Triste (Sad)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'that sounds delicious' - eso suena delicioso."
            }
        ]
    },
    {
        "id": "talking-about-stress",
        "title": "Hablando del Estrés",
        "description": "Dos amigos conversan sobre el estrés en sus vidas.",
        "sentences": [
            {
                "english": "I'm so stressed lately with work and everything.",
                "spanish": "Estoy muy estresado/a últimamente con el trabajo y todo.",
                "words": [
                    {
                        "english": "I'm",
                        "spanish": "Estoy"
                    },
                    {
                        "english": "stressed",
                        "spanish": "estresado/a"
                    },
                    {
                        "english": "lately",
                        "spanish": "últimamente"
                    },
                    {
                        "english": "work",
                        "spanish": "trabajo"
                    },
                    {
                        "english": "everything",
                        "spanish": "todo"
                    }
                ]
            },
            {
                "english": "I know, right? Me too. It's been tough.",
                "spanish": "Lo sé, ¿verdad? Yo también. Ha sido difícil.",
                "words": [
                    {
                        "english": "I know",
                        "spanish": "Lo sé"
                    },
                    {
                        "english": "right?",
                        "spanish": "¿verdad?"
                    },
                    {
                        "english": "Me too",
                        "spanish": "Yo también"
                    },
                    {
                        "english": "tough",
                        "spanish": "difícil"
                    }
                ]
            },
            {
                "english": "What do you do to relieve the stress?",
                "spanish": "¿Qué haces para aliviar el estrés?",
                "words": [
                    {
                        "english": "What do you do",
                        "spanish": "Qué haces"
                    },
                    {
                        "english": "relieve",
                        "spanish": "aliviar"
                    },
                    {
                        "english": "the stress",
                        "spanish": "el estrés"
                    }
                ]
            },
            {
                "english": "I like to go for a run or listen to music. It helps a lot.",
                "spanish": "Me gusta salir a correr o escuchar música. Ayuda mucho.",
                "words": [
                    {
                        "english": "I like",
                        "spanish": "Me gusta"
                    },
                    {
                        "english": "go for a run",
                        "spanish": "salir a correr"
                    },
                    {
                        "english": "listen to music",
                        "spanish": "escuchar música"
                    },
                    {
                        "english": "helps",
                        "spanish": "ayuda"
                    },
                    {
                        "english": "a lot",
                        "spanish": "mucho"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the main topic of their conversation? (¿Cuál es el tema principal de su conversación?)",
                "questionSpanish": "¿Cuál es el tema principal de su conversación?",
                "options": [
                    {
                        "text": "Felicidad (Happiness)",
                        "isCorrect": false
                    },
                    {
                        "text": "Estrés (Stress)",
                        "isCorrect": true
                    },
                    {
                        "text": "Vacaciones (Vacations)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about being stressed - estresado/a."
            },
            {
                "id": "q2",
                "questionEnglish": "How does the first person feel? (¿Cómo se siente la primera persona?)",
                "questionSpanish": "¿Cómo se siente la primera persona?",
                "options": [
                    {
                        "text": "Relajado/a (Relaxed)",
                        "isCorrect": false
                    },
                    {
                        "text": "Estresado/a (Stressed)",
                        "isCorrect": true
                    },
                    {
                        "text": "Feliz (Happy)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says 'I'm so stressed' - Estoy muy estresado/a."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the second person suggest for relieving stress? (¿Qué sugiere la segunda persona para aliviar el estrés?)",
                "questionSpanish": "¿Qué sugiere la segunda persona para aliviar el estrés?",
                "options": [
                    {
                        "text": "Ir a caminar (Going for a walk)",
                        "isCorrect": false
                    },
                    {
                        "text": "Salir a correr (Going for a run)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir al cine (Going to the movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person likes to 'go for a run' - salir a correr."
            },
            {
                "id": "q4",
                "questionEnglish": "Besides running, what else helps the second person? (Además de correr, ¿qué más ayuda a la segunda persona?)",
                "questionSpanish": "Además de correr, ¿qué más ayuda a la segunda persona?",
                "options": [
                    {
                        "text": "Leer libros (Reading books)",
                        "isCorrect": false
                    },
                    {
                        "text": "Escuchar música (Listening to music)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver televisión (Watching TV)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person likes to 'listen to music' - escuchar música."
            }
        ]
    },
    {
        "id": "relaxing-after-work",
        "title": "Relajándose Después del Trabajo",
        "description": "Una persona describe cómo se relaja después de un largo día de trabajo.",
        "sentences": [
            {
                "english": "After work, I just want to relax and unwind.",
                "spanish": "Después del trabajo, solo quiero relajarme y desconectar.",
                "words": [
                    {
                        "english": "After work",
                        "spanish": "Después del trabajo"
                    },
                    {
                        "english": "just want",
                        "spanish": "solo quiero"
                    },
                    {
                        "english": "relax",
                        "spanish": "relajarme"
                    },
                    {
                        "english": "unwind",
                        "spanish": "desconectar"
                    }
                ]
            },
            {
                "english": "First, I take a long, hot shower.",
                "spanish": "Primero, me tomo una ducha larga y caliente.",
                "words": [
                    {
                        "english": "First",
                        "spanish": "Primero"
                    },
                    {
                        "english": "take",
                        "spanish": "me tomo"
                    },
                    {
                        "english": "long",
                        "spanish": "larga"
                    },
                    {
                        "english": "hot shower",
                        "spanish": "ducha caliente"
                    }
                ]
            },
            {
                "english": "Then, I make some tea and read a book.",
                "spanish": "Luego, preparo un poco de té y leo un libro.",
                "words": [
                    {
                        "english": "Then",
                        "spanish": "Luego"
                    },
                    {
                        "english": "make",
                        "spanish": "preparo"
                    },
                    {
                        "english": "some tea",
                        "spanish": "un poco de té"
                    },
                    {
                        "english": "read a book",
                        "spanish": "leo un libro"
                    }
                ]
            },
            {
                "english": "It's the perfect way to end the day.",
                "spanish": "Es la manera perfecta de terminar el día.",
                "words": [
                    {
                        "english": "perfect",
                        "spanish": "perfecta"
                    },
                    {
                        "english": "way",
                        "spanish": "manera"
                    },
                    {
                        "english": "end the day",
                        "spanish": "terminar el día"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to do after work? (¿Qué quiere hacer la persona después del trabajo?)",
                "questionSpanish": "¿Qué quiere hacer la persona después del trabajo?",
                "options": [
                    {
                        "text": "Relajarse (Relax)",
                        "isCorrect": true
                    },
                    {
                        "text": "Trabajar más (Work more)",
                        "isCorrect": false
                    },
                    {
                        "text": "Salir (Go out)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to 'relax and unwind' - relajarme y desconectar."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first thing the person does to relax? (¿Qué es lo primero que hace la persona para relajarse?)",
                "questionSpanish": "¿Qué es lo primero que hace la persona para relajarse?",
                "options": [
                    {
                        "text": "Toma una ducha (Takes a shower)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cena (Eats dinner)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ve televisión (Watches TV)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person first 'takes a long, hot shower' - me tomo una ducha larga y caliente."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the person drink after showering? (¿Qué bebe la persona después de ducharse?)",
                "questionSpanish": "¿Qué bebe la persona después de ducharse?",
                "options": [
                    {
                        "text": "Café (Coffee)",
                        "isCorrect": false
                    },
                    {
                        "text": "Té (Tea)",
                        "isCorrect": true
                    },
                    {
                        "text": "Jugo (Juice)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person makes 'some tea' - preparo un poco de té."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the person read? (¿Qué lee la persona?)",
                "questionSpanish": "¿Qué lee la persona?",
                "options": [
                    {
                        "text": "Un periódico (A newspaper)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro (A book)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una revista (A magazine)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person 'reads a book' - leo un libro."
            }
        ]
    },
    {
        "id": "describing-a-dream",
        "title": "Describiendo un Sueño",
        "description": "Una persona describe un sueño extraño que tuvo.",
        "sentences": [
            {
                "english": "Last night, I had a really weird dream.",
                "spanish": "Anoche, tuve un sueño muy raro.",
                "words": [
                    {
                        "english": "Last night",
                        "spanish": "Anoche"
                    },
                    {
                        "english": "had",
                        "spanish": "tuve"
                    },
                    {
                        "english": "dream",
                        "spanish": "sueño"
                    },
                    {
                        "english": "weird",
                        "spanish": "raro"
                    }
                ]
            },
            {
                "english": "I was flying over the city, but all the buildings were made of cheese.",
                "spanish": "Estaba volando sobre la ciudad, pero todos los edificios eran de queso.",
                "words": [
                    {
                        "english": "flying",
                        "spanish": "volando"
                    },
                    {
                        "english": "over",
                        "spanish": "sobre"
                    },
                    {
                        "english": "city",
                        "spanish": "ciudad"
                    },
                    {
                        "english": "buildings",
                        "spanish": "edificios"
                    },
                    {
                        "english": "cheese",
                        "spanish": "queso"
                    }
                ]
            },
            {
                "english": "Then, a giant cat started chasing me!",
                "spanish": "¡Luego, un gato gigante empezó a perseguirme!",
                "words": [
                    {
                        "english": "Then",
                        "spanish": "Luego"
                    },
                    {
                        "english": "giant",
                        "spanish": "gigante"
                    },
                    {
                        "english": "cat",
                        "spanish": "gato"
                    },
                    {
                        "english": "chasing",
                        "spanish": "persiguiendo"
                    }
                ]
            },
            {
                "english": "It was so strange, I woke up laughing.",
                "spanish": "Fue tan extraño que me desperté riendo.",
                "words": [
                    {
                        "english": "strange",
                        "spanish": "extraño"
                    },
                    {
                        "english": "woke up",
                        "spanish": "desperté"
                    },
                    {
                        "english": "laughing",
                        "spanish": "riendo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What did the person dream about?",
                "questionSpanish": "¿Con qué soñó la persona?",
                "options": [
                    {
                        "text": "Volando sobre una ciudad de queso (Flying over a city of cheese)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comiendo mucho queso (Eating a lot of cheese)",
                        "isCorrect": false
                    },
                    {
                        "text": "Visitando una fábrica de queso (Visiting a cheese factory)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person dreamed of flying over a city where the buildings were made of cheese."
            },
            {
                "id": "q2",
                "questionEnglish": "What was chasing the person in the dream?",
                "questionSpanish": "¿Qué estaba persiguiendo a la persona en el sueño?",
                "options": [
                    {
                        "text": "Un ratón pequeño (A small mouse)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un gato gigante (A giant cat)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un perro amigable (A friendly dog)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "A giant cat was chasing the person in their dream (un gato gigante)."
            },
            {
                "id": "q3",
                "questionEnglish": "How did the person feel when they woke up?",
                "questionSpanish": "¿Cómo se sintió la persona cuando se despertó?",
                "options": [
                    {
                        "text": "Triste (Sad)",
                        "isCorrect": false
                    },
                    {
                        "text": "Asustado/a (Scared)",
                        "isCorrect": false
                    },
                    {
                        "text": "Riendo (Laughing)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person woke up laughing because the dream was so strange (riendo porque el sueño fue extraño)."
            },
            {
                "id": "q4",
                "questionEnglish": "When did the person have this dream?",
                "questionSpanish": "¿Cuándo tuvo la persona este sueño?",
                "options": [
                    {
                        "text": "Ayer (Yesterday)",
                        "isCorrect": false
                    },
                    {
                        "text": "Anoche (Last night)",
                        "isCorrect": true
                    },
                    {
                        "text": "Hace una semana (A week ago)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said they had the dream \"last night\" (anoche)."
            }
        ]
    },
    {
        "id": "talking-about-childhood",
        "title": "Hablando de la Infancia",
        "description": "Dos amigos recuerdan sus infancias.",
        "sentences": [
            {
                "english": "When I was a kid, I used to climb trees all the time.",
                "spanish": "Cuando era niño/a, solía treparme a los árboles todo el tiempo.",
                "words": [
                    {
                        "english": "When I was",
                        "spanish": "Cuando era"
                    },
                    {
                        "english": "kid",
                        "spanish": "niño/a"
                    },
                    {
                        "english": "used to",
                        "spanish": "solía"
                    },
                    {
                        "english": "climb",
                        "spanish": "treparme"
                    },
                    {
                        "english": "trees",
                        "spanish": "árboles"
                    }
                ]
            },
            {
                "english": "Really? I spent most of my time playing video games inside.",
                "spanish": "¿En serio? Yo pasaba la mayor parte de mi tiempo jugando videojuegos adentro.",
                "words": [
                    {
                        "english": "Really?",
                        "spanish": "¿En serio?"
                    },
                    {
                        "english": "spent",
                        "spanish": "pasaba"
                    },
                    {
                        "english": "most",
                        "spanish": "mayor parte"
                    },
                    {
                        "english": "video games",
                        "spanish": "videojuegos"
                    },
                    {
                        "english": "inside",
                        "spanish": "adentro"
                    }
                ]
            },
            {
                "english": "That's funny, we were so different!",
                "spanish": "¡Qué gracioso, éramos tan diferentes!",
                "words": [
                    {
                        "english": "That's funny",
                        "spanish": "Qué gracioso"
                    },
                    {
                        "english": "different",
                        "spanish": "diferentes"
                    }
                ]
            },
            {
                "english": "Yeah, but we were still best friends.",
                "spanish": "Sí, pero aún así éramos mejores amigos.",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "still",
                        "spanish": "aún así"
                    },
                    {
                        "english": "best friends",
                        "spanish": "mejores amigos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What did the first person do as a kid?",
                "questionSpanish": "¿Qué hacía la primera persona de niño/a?",
                "options": [
                    {
                        "text": "Jugar videojuegos (Play video games)",
                        "isCorrect": false
                    },
                    {
                        "text": "Trepar árboles (Climb trees)",
                        "isCorrect": true
                    },
                    {
                        "text": "Leer libros (Read books)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person said they \"used to climb trees all the time\" (solía treparse a los árboles todo el tiempo)."
            },
            {
                "id": "q2",
                "questionEnglish": "What did the second person do as a kid?",
                "questionSpanish": "¿Qué hacía la segunda persona de niño/a?",
                "options": [
                    {
                        "text": "Trepar árboles (Climb trees)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jugar videojuegos (Play video games)",
                        "isCorrect": true
                    },
                    {
                        "text": "Jugar afuera (Play outside)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person said they \"spent most of their time playing video games inside\" (pasaba la mayor parte de su tiempo jugando videojuegos adentro)."
            },
            {
                "id": "q3",
                "questionEnglish": "What is the relationship between the two people?",
                "questionSpanish": "¿Cuál es la relación entre las dos personas?",
                "options": [
                    {
                        "text": "Desconocidos (Strangers)",
                        "isCorrect": false
                    },
                    {
                        "text": "Compañeros de clase (Classmates)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mejores amigos (Best friends)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "They were \"still best friends\" (aún así éramos mejores amigos), despite having different childhood activities."
            },
            {
                "id": "q4",
                "questionEnglish": "Were they similar or different as kids?",
                "questionSpanish": "¿Eran similares o diferentes de niños/as?",
                "options": [
                    {
                        "text": "Similares (Similar)",
                        "isCorrect": false
                    },
                    {
                        "text": "Diferentes (Different)",
                        "isCorrect": true
                    },
                    {
                        "text": "No dijeron (They didn't say)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They said \"we were so different!\" (éramos tan diferentes!) because they had very different hobbies as children."
            }
        ]
    },
    {
        "id": "discussing-favorite-books",
        "title": "Discutiendo Libros Favoritos",
        "description": "Dos personas hablan sobre sus libros favoritos.",
        "sentences": [
            {
                "english": "What's your favorite book of all time?",
                "spanish": "¿Cuál es tu libro favorito de todos los tiempos?",
                "words": [
                    {
                        "english": "What's",
                        "spanish": "¿Cuál es?"
                    },
                    {
                        "english": "favorite",
                        "spanish": "favorito"
                    },
                    {
                        "english": "book",
                        "spanish": "libro"
                    },
                    {
                        "english": "all time",
                        "spanish": "todos los tiempos"
                    }
                ]
            },
            {
                "english": "That's a tough question! I really love 'One Hundred Years of Solitude'.",
                "spanish": "¡Esa es una pregunta difícil! Realmente me encanta 'Cien Años de Soledad'.",
                "words": [
                    {
                        "english": "tough question",
                        "spanish": "pregunta difícil"
                    },
                    {
                        "english": "really love",
                        "spanish": "realmente me encanta"
                    }
                ]
            },
            {
                "english": "Oh, I've heard of it, but I haven't read it yet. What's it about?",
                "spanish": "Oh, he oído hablar de él, pero aún no lo he leído. ¿De qué se trata?",
                "words": [
                    {
                        "english": "heard of",
                        "spanish": "oído hablar de"
                    },
                    {
                        "english": "haven't read",
                        "spanish": "no he leído"
                    },
                    {
                        "english": "What's it about?",
                        "spanish": "¿De qué se trata?"
                    }
                ]
            },
            {
                "english": "It's a story about a family over many generations in Colombia.",
                "spanish": "Es una historia sobre una familia a lo largo de muchas generaciones en Colombia.",
                "words": [
                    {
                        "english": "story",
                        "spanish": "historia"
                    },
                    {
                        "english": "family",
                        "spanish": "familia"
                    },
                    {
                        "english": "generations",
                        "spanish": "generaciones"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the first person asking?",
                "questionSpanish": "¿Qué está preguntando la primera persona?",
                "options": [
                    {
                        "text": "El mejor libro para comprar (The best book to buy)",
                        "isCorrect": false
                    },
                    {
                        "text": "El libro favorito de la otra persona (The other person's favorite book)",
                        "isCorrect": true
                    },
                    {
                        "text": "Si a la otra persona le gusta leer (If the other person likes to read)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks: \"What's your favorite book of all time?\" (¿Cuál es tu libro favorito de todos los tiempos?)"
            },
            {
                "id": "q2",
                "questionEnglish": "What book does the second person like?",
                "questionSpanish": "¿Qué libro le gusta a la segunda persona?",
                "options": [
                    {
                        "text": "'Cien Años de Soledad' ('One Hundred Years of Solitude')",
                        "isCorrect": true
                    },
                    {
                        "text": "No mencionan un libro (They don't mention a book)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro sobre animales (A book about animals)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says, \"I really love 'One Hundred Years of Solitude'\" (Realmente me encanta 'Cien Años de Soledad')."
            },
            {
                "id": "q3",
                "questionEnglish": "Has the first person read the book?",
                "questionSpanish": "¿Ha leído la primera persona el libro?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": false
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": true
                    },
                    {
                        "text": "Quizás (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says, \"I haven't read it yet\" (aún no lo he leído)."
            },
            {
                "id": "q4",
                "questionEnglish": "What is the book about?",
                "questionSpanish": "¿De qué se trata el libro?",
                "options": [
                    {
                        "text": "Una familia en Colombia (A family in Colombia)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una ciudad hecha de queso (A city made of cheese)",
                        "isCorrect": false
                    },
                    {
                        "text": "Aprendiendo a conducir (Learning to drive)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The book is \"a story about a family over many generations in Colombia\" (una historia sobre una familia a lo largo de muchas generaciones en Colombia)."
            }
        ]
    },
    {
        "id": "at-the-zoo",
        "title": "En el Zoológico",
        "description": "Dos amigos visitan el zoológico.",
        "sentences": [
            {
                "english": "Wow, look at that huge elephant!",
                "spanish": "¡Guau, mira ese elefante enorme!",
                "words": [
                    {
                        "english": "Wow",
                        "spanish": "Guau"
                    },
                    {
                        "english": "look at",
                        "spanish": "mira"
                    },
                    {
                        "english": "huge",
                        "spanish": "enorme"
                    },
                    {
                        "english": "elephant",
                        "spanish": "elefante"
                    }
                ]
            },
            {
                "english": "I know, it's amazing! And those monkeys are so playful.",
                "spanish": "Lo sé, ¡es increíble! Y esos monos son tan juguetones.",
                "words": [
                    {
                        "english": "I know",
                        "spanish": "Lo sé"
                    },
                    {
                        "english": "amazing",
                        "spanish": "increíble"
                    },
                    {
                        "english": "monkeys",
                        "spanish": "monos"
                    },
                    {
                        "english": "playful",
                        "spanish": "juguetones"
                    }
                ]
            },
            {
                "english": "I think my favorite animals are the penguins.",
                "spanish": "Creo que mis animales favoritos son los pingüinos.",
                "words": [
                    {
                        "english": "I think",
                        "spanish": "Creo"
                    },
                    {
                        "english": "favorite",
                        "spanish": "favoritos"
                    },
                    {
                        "english": "animals",
                        "spanish": "animales"
                    },
                    {
                        "english": "penguins",
                        "spanish": "pingüinos"
                    }
                ]
            },
            {
                "english": "Me too! Let's go see them next.",
                "spanish": "¡A mí también! Vamos a verlos ahora.",
                "words": [
                    {
                        "english": "Me too",
                        "spanish": "A mí también"
                    },
                    {
                        "english": "Let's go",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "next",
                        "spanish": "ahora"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where are the two friends?",
                "questionSpanish": "¿Dónde están los dos amigos?",
                "options": [
                    {
                        "text": "En el parque (At the park)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el zoológico (At the zoo)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el cine (At the movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is titled \"At the Zoo\" (En el Zoológico), so they are at the zoo."
            },
            {
                "id": "q2",
                "questionEnglish": "What animal does the first person point out?",
                "questionSpanish": "¿Qué animal señala la primera persona?",
                "options": [
                    {
                        "text": "Un mono (A monkey)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un elefante (An elephant)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un pingüino (A penguin)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says, \"look at that huge elephant!\" (mira ese elefante enorme!)."
            },
            {
                "id": "q3",
                "questionEnglish": "What animal does the second person say is playful?",
                "questionSpanish": "¿Qué animal dice la segunda persona que es juguetón?",
                "options": [
                    {
                        "text": "Los monos (The monkeys)",
                        "isCorrect": true
                    },
                    {
                        "text": "Los elefantes (The elephants)",
                        "isCorrect": false
                    },
                    {
                        "text": "Los pingüinos (The penguins)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says, \"those monkeys are so playful\" (esos monos son tan juguetones)."
            },
            {
                "id": "q4",
                "questionEnglish": "What animal do they both want to see next?",
                "questionSpanish": "¿Qué animal quieren ver los dos ahora?",
                "options": [
                    {
                        "text": "Los leones (The lions)",
                        "isCorrect": false
                    },
                    {
                        "text": "Los pingüinos (The penguins)",
                        "isCorrect": true
                    },
                    {
                        "text": "Las jirafas (The giraffes)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They both want to see the \"penguins\" (pingüinos) next."
            }
        ]
    },
    {
        "id": "learning-to-drive",
        "title": "Aprendiendo a Conducir",
        "description": "Una persona recibe su primera lección de manejo.",
        "sentences": [
            {
                "english": "Okay, first, put your seatbelt on.",
                "spanish": "Okay, primero, ponte el cinturón de seguridad.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Okay"
                    },
                    {
                        "english": "first",
                        "spanish": "primero"
                    },
                    {
                        "english": "put on",
                        "spanish": "ponte"
                    },
                    {
                        "english": "seatbelt",
                        "spanish": "cinturón de seguridad"
                    }
                ]
            },
            {
                "english": "Got it. Now what?",
                "spanish": "Entendido. ¿Ahora qué?",
                "words": [
                    {
                        "english": "Got it",
                        "spanish": "Entendido"
                    },
                    {
                        "english": "Now what?",
                        "spanish": "¿Ahora qué?"
                    }
                ]
            },
            {
                "english": "Next, start the engine and put it in drive.",
                "spanish": "Luego, enciende el motor y ponlo en marcha.",
                "words": [
                    {
                        "english": "Next",
                        "spanish": "Luego"
                    },
                    {
                        "english": "start",
                        "spanish": "enciende"
                    },
                    {
                        "english": "engine",
                        "spanish": "motor"
                    },
                    {
                        "english": "in drive",
                        "spanish": "en marcha"
                    }
                ]
            },
            {
                "english": "Okay, I'm a little nervous, but here we go!",
                "spanish": "Okay, estoy un poco nervioso/a, ¡pero allá vamos!",
                "words": [
                    {
                        "english": "a little",
                        "spanish": "un poco"
                    },
                    {
                        "english": "nervous",
                        "spanish": "nervioso/a"
                    },
                    {
                        "english": "here we go",
                        "spanish": "allá vamos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they doing?",
                "questionSpanish": "¿Qué están haciendo?",
                "options": [
                    {
                        "text": "Aprendiendo a cocinar (Learning to cook)",
                        "isCorrect": false
                    },
                    {
                        "text": "Aprendiendo a conducir (Learning to drive)",
                        "isCorrect": true
                    },
                    {
                        "text": "Aprendiendo a nadar (Learning to swim)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is titled \"Learning to Drive\" (Aprendiendo a Conducir)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first thing the person needs to do?",
                "questionSpanish": "¿Qué es lo primero que la persona necesita hacer?",
                "options": [
                    {
                        "text": "Encender el motor (Start the engine)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ponerse el cinturón de seguridad (Put on the seatbelt)",
                        "isCorrect": true
                    },
                    {
                        "text": "Poner el coche en marcha (Put the car in drive)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first instruction is to \"put your seatbelt on\" (ponte el cinturón de seguridad)."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the person need to do after putting on their seatbelt?",
                "questionSpanish": "¿Qué necesita hacer la persona después de ponerse el cinturón de seguridad?",
                "options": [
                    {
                        "text": "Encender el motor (Start the engine)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tocar la bocina (Honk the horn)",
                        "isCorrect": false
                    },
                    {
                        "text": "Encender las luces (Turn on the lights)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The next step is to \"start the engine\" (enciende el motor)."
            },
            {
                "id": "q4",
                "questionEnglish": "How does the person feel about driving?",
                "questionSpanish": "¿Cómo se siente la persona acerca de conducir?",
                "options": [
                    {
                        "text": "Emocionado/a (Excited)",
                        "isCorrect": false
                    },
                    {
                        "text": "Nervioso/a (Nervous)",
                        "isCorrect": true
                    },
                    {
                        "text": "Aburrido/a (Bored)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says, \"I'm a little nervous\" (estoy un poco nervioso/a)."
            }
        ]
    },
    {
        "id": "talking-about-pollution",
        "title": "Hablando de Contaminación",
        "description": "Una conversación sobre la contaminación en la ciudad y sus efectos.",
        "sentences": [
            {
                "english": "The pollution is really bad today, isn't it?",
                "spanish": "La contaminación está muy mal hoy, ¿verdad?",
                "words": [
                    {
                        "english": "pollution",
                        "spanish": "contaminación"
                    },
                    {
                        "english": "really bad",
                        "spanish": "muy mal"
                    },
                    {
                        "english": "today",
                        "spanish": "hoy"
                    }
                ]
            },
            {
                "english": "Yeah, I can barely breathe with all this smog.",
                "spanish": "Sí, apenas puedo respirar con todo este smog.",
                "words": [
                    {
                        "english": "barely",
                        "spanish": "apenas"
                    },
                    {
                        "english": "breathe",
                        "spanish": "respirar"
                    },
                    {
                        "english": "smog",
                        "spanish": "smog"
                    }
                ]
            },
            {
                "english": "We should really do something about it.",
                "spanish": "Deberíamos hacer algo al respecto.",
                "words": [
                    {
                        "english": "should",
                        "spanish": "deberíamos"
                    },
                    {
                        "english": "really",
                        "spanish": "de verdad"
                    },
                    {
                        "english": "something",
                        "spanish": "algo"
                    }
                ]
            },
            {
                "english": "I agree. Maybe start using public transport more often.",
                "spanish": "Estoy de acuerdo. Tal vez empezar a usar el transporte público más seguido.",
                "words": [
                    {
                        "english": "I agree",
                        "spanish": "Estoy de acuerdo"
                    },
                    {
                        "english": "public transport",
                        "spanish": "transporte público"
                    },
                    {
                        "english": "more often",
                        "spanish": "más seguido"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the main problem they are talking about? (¿Cuál es el problema principal del que están hablando?)",
                "questionSpanish": "¿Cuál es el problema principal del que están hablando?",
                "options": [
                    {
                        "text": "El clima (The weather)",
                        "isCorrect": false
                    },
                    {
                        "text": "La contaminación (The pollution)",
                        "isCorrect": true
                    },
                    {
                        "text": "El tráfico (Traffic)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They specifically mention 'pollution' and 'smog'. (Mencionan específicamente 'contaminación' y 'smog'.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What can't the speaker do? (¿Qué no puede hacer el hablante?)",
                "questionSpanish": "¿Qué no puede hacer el hablante?",
                "options": [
                    {
                        "text": "Apenas respirar (Barely breathe)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver claramente (See clearly)",
                        "isCorrect": false
                    },
                    {
                        "text": "Hablar fuerte (Talk loudly)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speaker says, 'I can barely breathe'. (El hablante dice 'Apenas puedo respirar.')"
            },
            {
                "id": "q3",
                "questionEnglish": "What do they suggest doing to improve the situation? (¿Qué sugieren hacer para mejorar la situación?)",
                "questionSpanish": "¿Qué sugieren hacer para mejorar la situación?",
                "options": [
                    {
                        "text": "Manejar menos (Driving less)",
                        "isCorrect": false
                    },
                    {
                        "text": "Usar transporte público (Using public transport)",
                        "isCorrect": true
                    },
                    {
                        "text": "Mudarse al campo (Moving to the country)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person suggests using public transport more often. (Una persona sugiere usar el transporte público más seguido.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Do they agree about the pollution being bad? (¿Están de acuerdo en que la contaminación es mala?)",
                "questionSpanish": "¿Están de acuerdo en que la contaminación es mala?",
                "options": [
                    {
                        "text": "No, no lo están (No, they don't)",
                        "isCorrect": false
                    },
                    {
                        "text": "Solo una persona piensa que es mala (Only one person thinks it's bad)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí, están de acuerdo (Yes, they agree)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The other person says 'I agree' (La otra persona dice 'Estoy de acuerdo')"
            }
        ]
    },
    {
        "id": "recycling-and-trash",
        "title": "Reciclaje y Basura",
        "description": "Una conversación sobre cómo reciclar y dónde tirar la basura.",
        "sentences": [
            {
                "english": "Do you know where I can recycle these bottles?",
                "spanish": "¿Sabes dónde puedo reciclar estas botellas?",
                "words": [
                    {
                        "english": "do you know",
                        "spanish": "¿sabes"
                    },
                    {
                        "english": "where",
                        "spanish": "dónde"
                    },
                    {
                        "english": "recycle",
                        "spanish": "reciclar"
                    }
                ]
            },
            {
                "english": "There's a recycling bin around the corner, by the park.",
                "spanish": "Hay un contenedor de reciclaje a la vuelta de la esquina, cerca del parque.",
                "words": [
                    {
                        "english": "recycling bin",
                        "spanish": "contenedor de reciclaje"
                    },
                    {
                        "english": "around the corner",
                        "spanish": "a la vuelta de la esquina"
                    },
                    {
                        "english": "by the park",
                        "spanish": "cerca del parque"
                    }
                ]
            },
            {
                "english": "And where should I throw away this trash?",
                "spanish": "¿Y dónde debo tirar esta basura?",
                "words": [
                    {
                        "english": "throw away",
                        "spanish": "tirar"
                    },
                    {
                        "english": "this",
                        "spanish": "esta"
                    },
                    {
                        "english": "trash",
                        "spanish": "basura"
                    }
                ]
            },
            {
                "english": "That goes in the black bin outside.",
                "spanish": "Eso va en el contenedor negro afuera.",
                "words": [
                    {
                        "english": "goes in",
                        "spanish": "va en"
                    },
                    {
                        "english": "black bin",
                        "spanish": "contenedor negro"
                    },
                    {
                        "english": "outside",
                        "spanish": "afuera"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the first person trying to do? (¿Qué está tratando de hacer la primera persona?)",
                "questionSpanish": "¿Qué está tratando de hacer la primera persona?",
                "options": [
                    {
                        "text": "Comprar algo (Buy something)",
                        "isCorrect": false
                    },
                    {
                        "text": "Reciclar botellas (Recycle bottles)",
                        "isCorrect": true
                    },
                    {
                        "text": "Limpiar el parque (Clean the park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks where they can recycle bottles. (La primera persona pregunta dónde puede reciclar botellas.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Where is the recycling bin located? (¿Dónde está ubicado el contenedor de reciclaje?)",
                "questionSpanish": "¿Dónde está ubicado el contenedor de reciclaje?",
                "options": [
                    {
                        "text": "Dentro de la casa (Inside the house)",
                        "isCorrect": false
                    },
                    {
                        "text": "A la vuelta de la esquina, cerca del parque (Around the corner, by the park)",
                        "isCorrect": true
                    },
                    {
                        "text": "Al lado del contenedor negro (Next to the black bin)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The answer states 'around the corner, by the park' (La respuesta dice 'a la vuelta de la esquina, cerca del parque')"
            },
            {
                "id": "q3",
                "questionEnglish": "What color is the trash bin mentioned? (¿De qué color es el contenedor de basura mencionado?)",
                "questionSpanish": "¿De qué color es el contenedor de basura mencionado?",
                "options": [
                    {
                        "text": "Verde (Green)",
                        "isCorrect": false
                    },
                    {
                        "text": "Azul (Blue)",
                        "isCorrect": false
                    },
                    {
                        "text": "Negro (Black)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The text says the trash goes in the 'black bin'. (El texto dice que la basura va en el 'contenedor negro'.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Where is the trash bin located? (¿Dónde está ubicado el contenedor de basura?)",
                "questionSpanish": "¿Dónde está ubicado el contenedor de basura?",
                "options": [
                    {
                        "text": "Afuera (Outside)",
                        "isCorrect": true
                    },
                    {
                        "text": "Adentro (Inside)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el parque (In the park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The answer states 'That goes in the black bin outside.' (La respuesta dice 'Eso va en el contenedor negro afuera.')"
            }
        ]
    },
    {
        "id": "visiting-a-relative",
        "title": "Visitando a un Familiar",
        "description": "Una conversación sobre una visita a un miembro de la familia.",
        "sentences": [
            {
                "english": "Are you going to visit your grandma this weekend?",
                "spanish": "¿Vas a visitar a tu abuela este fin de semana?",
                "words": [
                    {
                        "english": "are you going",
                        "spanish": "¿vas a"
                    },
                    {
                        "english": "visit",
                        "spanish": "visitar"
                    },
                    {
                        "english": "this weekend",
                        "spanish": "este fin de semana"
                    }
                ]
            },
            {
                "english": "Yeah, I'm taking her some flowers and cookies.",
                "spanish": "Sí, le llevo algunas flores y galletas.",
                "words": [
                    {
                        "english": "taking",
                        "spanish": "llevo"
                    },
                    {
                        "english": "some",
                        "spanish": "algunas"
                    },
                    {
                        "english": "flowers",
                        "spanish": "flores"
                    }
                ]
            },
            {
                "english": "That's nice of you. She'll be happy to see you.",
                "spanish": "Qué amable de tu parte. Ella estará feliz de verte.",
                "words": [
                    {
                        "english": "that's nice",
                        "spanish": "qué amable"
                    },
                    {
                        "english": "happy",
                        "spanish": "feliz"
                    },
                    {
                        "english": "to see you",
                        "spanish": "de verte"
                    }
                ]
            },
            {
                "english": "I hope so. I haven't seen her in a while.",
                "spanish": "Eso espero. No la he visto en un tiempo.",
                "words": [
                    {
                        "english": "I hope so",
                        "spanish": "eso espero"
                    },
                    {
                        "english": "haven't seen",
                        "spanish": "no he visto"
                    },
                    {
                        "english": "in a while",
                        "spanish": "en un tiempo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Who are they talking about visiting? (¿A quién están hablando de visitar?)",
                "questionSpanish": "¿A quién están hablando de visitar?",
                "options": [
                    {
                        "text": "Un amigo (A friend)",
                        "isCorrect": false
                    },
                    {
                        "text": "Su abuela (Their grandma)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un vecino (A neighbor)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The question specifically mentions 'your grandma'. (La pregunta menciona específicamente 'tu abuela'.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What are they taking to the person they're visiting? (¿Qué le están llevando a la persona que están visitando?)",
                "questionSpanish": "¿Qué le están llevando a la persona que están visitando?",
                "options": [
                    {
                        "text": "Flores y galletas (Flowers and cookies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Pastel y fruta (Cake and fruit)",
                        "isCorrect": false
                    },
                    {
                        "text": "Libros y juegos (Books and games)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speaker mentions taking 'flowers and cookies'. (El hablante menciona llevar 'flores y galletas'.)"
            },
            {
                "id": "q3",
                "questionEnglish": "How does the other person feel about the visit? (¿Cómo se siente la otra persona sobre la visita?)",
                "questionSpanish": "¿Cómo se siente la otra persona sobre la visita?",
                "options": [
                    {
                        "text": "Piensan que es una mala idea (They think it's a bad idea)",
                        "isCorrect": false
                    },
                    {
                        "text": "Piensan que es amable (They think it's nice)",
                        "isCorrect": true
                    },
                    {
                        "text": "No les importa (They don't care)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says 'That's nice of you'. (La otra persona dice 'Qué amable de tu parte'.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Has the speaker seen their relative recently? (¿El hablante ha visto a su familiar recientemente?)",
                "questionSpanish": "¿El hablante ha visto a su familiar recientemente?",
                "options": [
                    {
                        "text": "Sí, muy recientemente (Yes, very recently)",
                        "isCorrect": false
                    },
                    {
                        "text": "No, no en un tiempo (No, not in a while)",
                        "isCorrect": true
                    },
                    {
                        "text": "No dijeron (They didn't say)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speaker says 'I haven't seen her in a while'. (El hablante dice 'No la he visto en un tiempo'.)"
            }
        ]
    },
    {
        "id": "helping-a-stranger",
        "title": "Ayudando a un Desconocido",
        "description": "Una conversación sobre ayudar a alguien que no conoces.",
        "sentences": [
            {
                "english": "Excuse me, are you lost? Can I help you?",
                "spanish": "Disculpe, ¿está perdido? ¿Puedo ayudarle?",
                "words": [
                    {
                        "english": "excuse me",
                        "spanish": "disculpe"
                    },
                    {
                        "english": "lost",
                        "spanish": "perdido"
                    },
                    {
                        "english": "help",
                        "spanish": "ayudar"
                    }
                ]
            },
            {
                "english": "Yes, I am. I'm looking for the train station.",
                "spanish": "Sí, lo estoy. Estoy buscando la estación de tren.",
                "words": [
                    {
                        "english": "looking for",
                        "spanish": "buscando"
                    },
                    {
                        "english": "train station",
                        "spanish": "estación de tren"
                    },
                    {
                        "english": "yes",
                        "spanish": "sí"
                    }
                ]
            },
            {
                "english": "It's that way, about two blocks straight ahead.",
                "spanish": "Es por allá, como dos cuadras derecho.",
                "words": [
                    {
                        "english": "that way",
                        "spanish": "por allá"
                    },
                    {
                        "english": "about",
                        "spanish": "como"
                    },
                    {
                        "english": "straight ahead",
                        "spanish": "derecho"
                    }
                ]
            },
            {
                "english": "Thank you so much! I really appreciate it.",
                "spanish": "¡Muchas gracias! Lo aprecio mucho.",
                "words": [
                    {
                        "english": "thank you",
                        "spanish": "gracias"
                    },
                    {
                        "english": "so much",
                        "spanish": "muchas"
                    },
                    {
                        "english": "appreciate",
                        "spanish": "aprecio"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the first person ask the other person? (¿Qué le pregunta la primera persona a la otra persona?)",
                "questionSpanish": "¿Qué le pregunta la primera persona a la otra persona?",
                "options": [
                    {
                        "text": "Si necesitan dinero (If they need money)",
                        "isCorrect": false
                    },
                    {
                        "text": "Si están perdidos (If they are lost)",
                        "isCorrect": true
                    },
                    {
                        "text": "Si quieren comida (If they want food)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person asks, 'are you lost?' (La primera persona pregunta, '¿está perdido?') "
            },
            {
                "id": "q2",
                "questionEnglish": "What is the second person looking for? (¿Qué está buscando la segunda persona?)",
                "questionSpanish": "¿Qué está buscando la segunda persona?",
                "options": [
                    {
                        "text": "Una parada de autobús (A bus stop)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un restaurante (A restaurant)",
                        "isCorrect": false
                    },
                    {
                        "text": "La estación de tren (The train station)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The second person replies, 'I'm looking for the train station' (La segunda persona responde 'Estoy buscando la estación de tren')"
            },
            {
                "id": "q3",
                "questionEnglish": "How far away is the place they are looking for? (¿A qué distancia está el lugar que están buscando?)",
                "questionSpanish": "¿A qué distancia está el lugar que están buscando?",
                "options": [
                    {
                        "text": "Como dos cuadras (About two blocks)",
                        "isCorrect": true
                    },
                    {
                        "text": "Justo al lado de ellos (Right next to them)",
                        "isCorrect": false
                    },
                    {
                        "text": "Muy lejos (Very far away)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The answer is 'about two blocks straight ahead' (La respuesta es 'como dos cuadras derecho')"
            },
            {
                "id": "q4",
                "questionEnglish": "How does the person who was lost feel? (¿Cómo se siente la persona que estaba perdida?)",
                "questionSpanish": "¿Cómo se siente la persona que estaba perdida?",
                "options": [
                    {
                        "text": "Molesto (Annoyed)",
                        "isCorrect": false
                    },
                    {
                        "text": "Agradecido (Grateful)",
                        "isCorrect": true
                    },
                    {
                        "text": "Confundido (Confused)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say 'Thank you so much! I really appreciate it'. (Dicen '¡Muchas gracias! Lo aprecio mucho.')"
            }
        ]
    },
    {
        "id": "talking-about-zodiac-signs",
        "title": "Hablando de Signos Zodiacales",
        "description": "Una conversación sobre los signos del zodiaco y sus características.",
        "sentences": [
            {
                "english": "What's your zodiac sign? Are you a Taurus?",
                "spanish": "¿Cuál es tu signo zodiacal? ¿Eres Tauro?",
                "words": [
                    {
                        "english": "zodiac sign",
                        "spanish": "signo zodiacal"
                    },
                    {
                        "english": "are you",
                        "spanish": "¿eres"
                    },
                    {
                        "english": "Taurus",
                        "spanish": "Tauro"
                    }
                ]
            },
            {
                "english": "No, I'm a Gemini. We're supposed to be curious and adaptable.",
                "spanish": "No, soy Géminis. Se supone que somos curiosos y adaptables.",
                "words": [
                    {
                        "english": "Gemini",
                        "spanish": "Géminis"
                    },
                    {
                        "english": "supposed to be",
                        "spanish": "se supone que somos"
                    },
                    {
                        "english": "curious",
                        "spanish": "curiosos"
                    }
                ]
            },
            {
                "english": "That's interesting! I don't really know much about astrology.",
                "spanish": "¡Qué interesante! Realmente no sé mucho sobre astrología.",
                "words": [
                    {
                        "english": "that's interesting",
                        "spanish": "qué interesante"
                    },
                    {
                        "english": "don't know",
                        "spanish": "no sé"
                    },
                    {
                        "english": "astrology",
                        "spanish": "astrología"
                    }
                ]
            },
            {
                "english": "It's just for fun anyway. Don't take it too seriously.",
                "spanish": "Es solo por diversión de todas formas. No te lo tomes muy en serio.",
                "words": [
                    {
                        "english": "just for fun",
                        "spanish": "solo por diversión"
                    },
                    {
                        "english": "anyway",
                        "spanish": "de todas formas"
                    },
                    {
                        "english": "too seriously",
                        "spanish": "muy en serio"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the first person ask the other person? (¿Qué le pregunta la primera persona a la otra persona?)",
                "questionSpanish": "¿Qué le pregunta la primera persona a la otra persona?",
                "options": [
                    {
                        "text": "Cuál es su color favorito? (What's their favorite color?)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cuál es su signo zodiacal? (What's their zodiac sign?)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cuál es su trabajo? (What's their job?)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first sentence asks, 'What's your zodiac sign?'. (La primera oración pregunta '¿Cuál es tu signo zodiacal?') "
            },
            {
                "id": "q2",
                "questionEnglish": "What zodiac sign is the second person? (¿Cuál es el signo zodiacal de la segunda persona?)",
                "questionSpanish": "¿Cuál es el signo zodiacal de la segunda persona?",
                "options": [
                    {
                        "text": "Tauro (Taurus)",
                        "isCorrect": false
                    },
                    {
                        "text": "Géminis (Gemini)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cáncer (Cancer)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person responds, 'I'm a Gemini'. (La segunda persona responde 'Soy Géminis')"
            },
            {
                "id": "q3",
                "questionEnglish": "What are people of that zodiac sign supposed to be like? (¿Cómo se supone que son las personas de ese signo zodiacal?)",
                "questionSpanish": "¿Cómo se supone que son las personas de ese signo zodiacal?",
                "options": [
                    {
                        "text": "Valientes y fuertes (Brave and strong)",
                        "isCorrect": false
                    },
                    {
                        "text": "Curiosos y adaptables (Curious and adaptable)",
                        "isCorrect": true
                    },
                    {
                        "text": "Amables y generosos (Kind and generous)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say 'We're supposed to be curious and adaptable'. (Dicen 'Se supone que somos curiosos y adaptables')"
            },
            {
                "id": "q4",
                "questionEnglish": "Should you take astrology too seriously? (¿Deberías tomar la astrología demasiado en serio?)",
                "questionSpanish": "¿Deberías tomar la astrología demasiado en serio?",
                "options": [
                    {
                        "text": "Sí, absolutamente! (Yes, absolutely!)",
                        "isCorrect": false
                    },
                    {
                        "text": "No, es solo por diversión (No, it's just for fun)",
                        "isCorrect": true
                    },
                    {
                        "text": "Solo a veces (Only sometimes)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They say 'It's just for fun anyway. Don't take it too seriously'. (Dicen 'Es solo por diversión de todas formas. No te lo tomes muy en serio.')"
            }
        ]
    },
    {
        "id": "discussing-layout-of-a-house",
        "title": "La Distribución de la Casa",
        "description": "Dos amigos hablan sobre la distribución de una casa nueva.",
        "sentences": [
            {
                "english": "The living room is next to the kitchen, right?",
                "spanish": "La sala está al lado de la cocina, ¿verdad?",
                "words": [
                    {
                        "english": "living room",
                        "spanish": "sala"
                    },
                    {
                        "english": "next to",
                        "spanish": "al lado de"
                    },
                    {
                        "english": "kitchen",
                        "spanish": "cocina"
                    }
                ]
            },
            {
                "english": "Yes, and the bedrooms are upstairs.",
                "spanish": "Sí, y las habitaciones están arriba.",
                "words": [
                    {
                        "english": "yes",
                        "spanish": "sí"
                    },
                    {
                        "english": "bedrooms",
                        "spanish": "habitaciones"
                    },
                    {
                        "english": "upstairs",
                        "spanish": "arriba"
                    }
                ]
            },
            {
                "english": "Is there a bathroom on the first floor?",
                "spanish": "¿Hay un baño en el primer piso?",
                "words": [
                    {
                        "english": "bathroom",
                        "spanish": "baño"
                    },
                    {
                        "english": "first floor",
                        "spanish": "primer piso"
                    },
                    {
                        "english": "is there",
                        "spanish": "¿hay?"
                    }
                ]
            },
            {
                "english": "Yes, there's a small one near the entrance.",
                "spanish": "Sí, hay uno pequeño cerca de la entrada.",
                "words": [
                    {
                        "english": "yes",
                        "spanish": "sí"
                    },
                    {
                        "english": "small",
                        "spanish": "pequeño"
                    },
                    {
                        "english": "entrance",
                        "spanish": "entrada"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where are the bedrooms located? (¿Dónde están ubicadas las habitaciones?)",
                "questionSpanish": "¿Dónde están ubicadas las habitaciones?",
                "options": [
                    {
                        "text": "Abajo (Downstairs)",
                        "isCorrect": false
                    },
                    {
                        "text": "Arriba (Upstairs)",
                        "isCorrect": true
                    },
                    {
                        "text": "Al lado de la cocina (Next to the kitchen)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The story mentions that the bedrooms are upstairs. (La historia menciona que las habitaciones están arriba.)"
            },
            {
                "id": "q2",
                "questionEnglish": "Is there a bathroom on the first floor? (¿Hay un baño en el primer piso?)",
                "questionSpanish": "¿Hay un baño en el primer piso?",
                "options": [
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí, uno grande (Yes, a big one)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sí, uno pequeño (Yes, a small one)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The story confirms there's a small bathroom near the entrance. (La historia confirma que hay un baño pequeño cerca de la entrada.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What is next to the kitchen? (¿Qué está al lado de la cocina?)",
                "questionSpanish": "¿Qué está al lado de la cocina?",
                "options": [
                    {
                        "text": "El dormitorio (The bedroom)",
                        "isCorrect": false
                    },
                    {
                        "text": "La sala (The living room)",
                        "isCorrect": true
                    },
                    {
                        "text": "El baño (The bathroom)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The living room is next to the kitchen. (La sala está al lado de la cocina.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Where is the small bathroom located? (¿Dónde está ubicado el baño pequeño?)",
                "questionSpanish": "¿Dónde está ubicado el baño pequeño?",
                "options": [
                    {
                        "text": "Cerca de la cocina (Near the kitchen)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca de las habitaciones (Near the bedrooms)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca de la entrada (Near the entrance)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The small bathroom is located near the entrance. (El baño pequeño está ubicado cerca de la entrada.)"
            }
        ]
    },
    {
        "id": "moving-house",
        "title": "Mudanza",
        "description": "Una persona habla sobre su mudanza a una nueva casa.",
        "sentences": [
            {
                "english": "I'm moving to a new apartment next week.",
                "spanish": "Me mudo a un nuevo apartamento la próxima semana.",
                "words": [
                    {
                        "english": "moving",
                        "spanish": "mudo"
                    },
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "apartment",
                        "spanish": "apartamento"
                    }
                ]
            },
            {
                "english": "That's great! Do you need any help?",
                "spanish": "¡Qué bueno! ¿Necesitas ayuda?",
                "words": [
                    {
                        "english": "great",
                        "spanish": "qué bueno"
                    },
                    {
                        "english": "need",
                        "spanish": "necesitas"
                    },
                    {
                        "english": "help",
                        "spanish": "ayuda"
                    }
                ]
            },
            {
                "english": "Yes, I need to pack all my boxes.",
                "spanish": "Sí, necesito empacar todas mis cajas.",
                "words": [
                    {
                        "english": "yes",
                        "spanish": "sí"
                    },
                    {
                        "english": "pack",
                        "spanish": "empacar"
                    },
                    {
                        "english": "boxes",
                        "spanish": "cajas"
                    }
                ]
            },
            {
                "english": "Okay, I can help you on Saturday morning.",
                "spanish": "Está bien, puedo ayudarte el sábado por la mañana.",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "está bien"
                    },
                    {
                        "english": "help",
                        "spanish": "ayudarte"
                    },
                    {
                        "english": "morning",
                        "spanish": "mañana"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person doing next week? (¿Qué hará la persona la próxima semana?)",
                "questionSpanish": "¿Qué hará la persona la próxima semana?",
                "options": [
                    {
                        "text": "Viajar (Traveling)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mudarse (Moving)",
                        "isCorrect": true
                    },
                    {
                        "text": "Trabajar (Working)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is moving to a new apartment next week. (La persona se muda a un nuevo apartamento la próxima semana.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What does the person need help with? (¿Con qué necesita ayuda la persona?)",
                "questionSpanish": "¿Con qué necesita ayuda la persona?",
                "options": [
                    {
                        "text": "Limpiar (Cleaning)",
                        "isCorrect": false
                    },
                    {
                        "text": "Empacar cajas (Packing boxes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinar (Cooking)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person needs help to pack all of their boxes. (La persona necesita ayuda para empacar todas sus cajas.)"
            },
            {
                "id": "q3",
                "questionEnglish": "When will the friend help? (¿Cuándo ayudará el amigo?)",
                "questionSpanish": "¿Cuándo ayudará el amigo?",
                "options": [
                    {
                        "text": "El sábado por la mañana (Saturday morning)",
                        "isCorrect": true
                    },
                    {
                        "text": "El domingo por la tarde (Sunday afternoon)",
                        "isCorrect": false
                    },
                    {
                        "text": "El viernes por la noche (Friday evening)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The friend will help on Saturday morning. (El amigo ayudará el sábado por la mañana.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Where is the person moving to? (¿A dónde se muda la persona?)",
                "questionSpanish": "¿A dónde se muda la persona?",
                "options": [
                    {
                        "text": "Una casa nueva (A new house)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un apartamento nuevo (A new apartment)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una ciudad nueva (A new city)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is moving to a new apartment. (La persona se muda a un nuevo apartamento.)"
            }
        ]
    },
    {
        "id": "renovating-a-room",
        "title": "Renovando un Cuarto",
        "description": "Una conversación sobre la renovación de una habitación.",
        "sentences": [
            {
                "english": "I want to repaint my bedroom this weekend.",
                "spanish": "Quiero volver a pintar mi habitación este fin de semana.",
                "words": [
                    {
                        "english": "repaint",
                        "spanish": "volver a pintar"
                    },
                    {
                        "english": "bedroom",
                        "spanish": "habitación"
                    },
                    {
                        "english": "weekend",
                        "spanish": "fin de semana"
                    }
                ]
            },
            {
                "english": "What color are you going to choose?",
                "spanish": "¿Qué color vas a elegir?",
                "words": [
                    {
                        "english": "color",
                        "spanish": "color"
                    },
                    {
                        "english": "going to choose",
                        "spanish": "vas a elegir"
                    },
                    {
                        "english": "what",
                        "spanish": "¿qué?"
                    }
                ]
            },
            {
                "english": "I'm thinking about a light blue or green.",
                "spanish": "Estoy pensando en un azul claro o verde.",
                "words": [
                    {
                        "english": "thinking",
                        "spanish": "pensando"
                    },
                    {
                        "english": "light blue",
                        "spanish": "azul claro"
                    },
                    {
                        "english": "green",
                        "spanish": "verde"
                    }
                ]
            },
            {
                "english": "Great! Those colors are very relaxing.",
                "spanish": "¡Genial! Esos colores son muy relajantes.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "genial"
                    },
                    {
                        "english": "colors",
                        "spanish": "colores"
                    },
                    {
                        "english": "relaxing",
                        "spanish": "relajantes"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person want to do this weekend? (¿Qué quiere hacer la persona este fin de semana?)",
                "questionSpanish": "¿Qué quiere hacer la persona este fin de semana?",
                "options": [
                    {
                        "text": "Limpiar su cocina (Clean their kitchen)",
                        "isCorrect": false
                    },
                    {
                        "text": "Volver a pintar su habitación (Repaint their bedroom)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprar muebles nuevos (Buy new furniture)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to repaint their bedroom this weekend. (La persona quiere volver a pintar su habitación este fin de semana.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What color is the person considering? (¿Qué color está considerando la persona?)",
                "questionSpanish": "¿Qué color está considerando la persona?",
                "options": [
                    {
                        "text": "Rojo o naranja (Red or orange)",
                        "isCorrect": false
                    },
                    {
                        "text": "Negro o blanco (Black or white)",
                        "isCorrect": false
                    },
                    {
                        "text": "Azul claro o verde (Light blue or green)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person is thinking about a light blue or green color. (La persona está pensando en un color azul claro o verde.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the characteristic of the colors mentioned? (¿Cuál es la característica de los colores mencionados?)",
                "questionSpanish": "¿Cuál es la característica de los colores mencionados?",
                "options": [
                    {
                        "text": "Son muy brillantes (They are very bright)",
                        "isCorrect": false
                    },
                    {
                        "text": "Son muy relajantes (They are very relaxing)",
                        "isCorrect": true
                    },
                    {
                        "text": "Son muy caros (They are very expensive)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The colors are very relaxing. (Los colores son muy relajantes.)"
            },
            {
                "id": "q4",
                "questionEnglish": "When is the person going to repaint the bedroom? (¿Cuándo va a volver a pintar la habitación la persona?)",
                "questionSpanish": "¿Cuándo va a volver a pintar la habitación la persona?",
                "options": [
                    {
                        "text": "La próxima semana (Next week)",
                        "isCorrect": false
                    },
                    {
                        "text": "Este fin de semana (This weekend)",
                        "isCorrect": true
                    },
                    {
                        "text": "El próximo mes (Next month)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person wants to repaint the bedroom this weekend. (La persona quiere volver a pintar la habitación este fin de semana.)"
            }
        ]
    },
    {
        "id": "gardening",
        "title": "Jardinería",
        "description": "Una persona habla sobre su jardín y plantas.",
        "sentences": [
            {
                "english": "I love spending time in my garden.",
                "spanish": "Me encanta pasar tiempo en mi jardín.",
                "words": [
                    {
                        "english": "love",
                        "spanish": "encanta"
                    },
                    {
                        "english": "spending time",
                        "spanish": "pasar tiempo"
                    },
                    {
                        "english": "garden",
                        "spanish": "jardín"
                    }
                ]
            },
            {
                "english": "What kind of plants do you have?",
                "spanish": "¿Qué tipo de plantas tienes?",
                "words": [
                    {
                        "english": "what kind",
                        "spanish": "¿qué tipo?"
                    },
                    {
                        "english": "plants",
                        "spanish": "plantas"
                    },
                    {
                        "english": "have",
                        "spanish": "tienes"
                    }
                ]
            },
            {
                "english": "I have roses, tomatoes, and some herbs.",
                "spanish": "Tengo rosas, tomates y algunas hierbas.",
                "words": [
                    {
                        "english": "roses",
                        "spanish": "rosas"
                    },
                    {
                        "english": "tomatoes",
                        "spanish": "tomates"
                    },
                    {
                        "english": "herbs",
                        "spanish": "hierbas"
                    }
                ]
            },
            {
                "english": "That's great! Fresh tomatoes are the best.",
                "spanish": "¡Qué bueno! Los tomates frescos son lo mejor.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "qué bueno"
                    },
                    {
                        "english": "fresh",
                        "spanish": "frescos"
                    },
                    {
                        "english": "best",
                        "spanish": "lo mejor"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What does the person love doing? (¿Qué le encanta hacer a la persona?)",
                "questionSpanish": "¿Qué le encanta hacer a la persona?",
                "options": [
                    {
                        "text": "Pasar tiempo en el jardín (Spending time in the garden)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinar la cena (Cooking dinner)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ver televisión (Watching TV)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person loves spending time in their garden. (A la persona le encanta pasar tiempo en su jardín.)"
            },
            {
                "id": "q2",
                "questionEnglish": "What are the plants the person has? (¿Cuáles son las plantas que tiene la persona?)",
                "questionSpanish": "¿Cuáles son las plantas que tiene la persona?",
                "options": [
                    {
                        "text": "Manzanas, plátanos y uvas (Apples, bananas, and grapes)",
                        "isCorrect": false
                    },
                    {
                        "text": "Rosas, tomates y hierbas (Roses, tomatoes, and herbs)",
                        "isCorrect": true
                    },
                    {
                        "text": "Lechuga, zanahorias y cebollas (Lettuce, carrots, and onions)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person has roses, tomatoes, and some herbs. (La persona tiene rosas, tomates y algunas hierbas.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What is the best thing according to the other person? (¿Qué es lo mejor según la otra persona?)",
                "questionSpanish": "¿Qué es lo mejor según la otra persona?",
                "options": [
                    {
                        "text": "Hierbas frescas (Fresh herbs)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tomates frescos (Fresh tomatoes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Rosas hermosas (Beautiful roses)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Fresh tomatoes are the best, according to the other person. (Los tomates frescos son lo mejor, según la otra persona.)"
            },
            {
                "id": "q4",
                "questionEnglish": "What does the person mention they have in their garden? (¿Qué menciona la persona que tiene en su jardín?)",
                "questionSpanish": "¿Qué menciona la persona que tiene en su jardín?",
                "options": [
                    {
                        "text": "Solo flores (Only flowers)",
                        "isCorrect": false
                    },
                    {
                        "text": "Solo vegetales (Only vegetables)",
                        "isCorrect": false
                    },
                    {
                        "text": "Flores, vegetales y hierbas (Flowers, vegetables, and herbs)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The person has roses (flowers), tomatoes (vegetables), and herbs. (La persona tiene rosas (flores), tomates (vegetales) y hierbas.)"
            }
        ]
    },
    {
        "id": "playing-video-games",
        "title": "Jugando Videojuegos",
        "description": "Dos amigos hablan sobre jugar videojuegos.",
        "sentences": [
            {
                "english": "Do you like playing video games?",
                "spanish": "¿Te gusta jugar videojuegos?",
                "words": [
                    {
                        "english": "like",
                        "spanish": "gusta"
                    },
                    {
                        "english": "playing",
                        "spanish": "jugar"
                    },
                    {
                        "english": "video games",
                        "spanish": "videojuegos"
                    }
                ]
            },
            {
                "english": "Yes, I play them every weekend.",
                "spanish": "Sí, los juego todos los fines de semana.",
                "words": [
                    {
                        "english": "yes",
                        "spanish": "sí"
                    },
                    {
                        "english": "play",
                        "spanish": "juego"
                    },
                    {
                        "english": "weekend",
                        "spanish": "fines de semana"
                    }
                ]
            },
            {
                "english": "What's your favorite game?",
                "spanish": "¿Cuál es tu juego favorito?",
                "words": [
                    {
                        "english": "what's",
                        "spanish": "¿cuál es?"
                    },
                    {
                        "english": "favorite",
                        "spanish": "favorito"
                    },
                    {
                        "english": "game",
                        "spanish": "juego"
                    }
                ]
            },
            {
                "english": "I really like the new racing game.",
                "spanish": "Me gusta mucho el nuevo juego de carreras.",
                "words": [
                    {
                        "english": "really like",
                        "spanish": "gusta mucho"
                    },
                    {
                        "english": "new",
                        "spanish": "nuevo"
                    },
                    {
                        "english": "racing game",
                        "spanish": "juego de carreras"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What activity is being discussed? (¿Qué actividad se está discutiendo?)",
                "questionSpanish": "¿Qué actividad se está discutiendo?",
                "options": [
                    {
                        "text": "Practicar deportes (Playing sports)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jugar videojuegos (Playing video games)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ver películas (Watching movies)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about playing video games. (La conversación es sobre jugar videojuegos.)"
            },
            {
                "id": "q2",
                "questionEnglish": "When does the person play video games? (¿Cuándo juega videojuegos la persona?)",
                "questionSpanish": "¿Cuándo juega videojuegos la persona?",
                "options": [
                    {
                        "text": "Todos los días (Every day)",
                        "isCorrect": false
                    },
                    {
                        "text": "Todos los fines de semana (Every weekend)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una vez al mes (Once a month)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person plays video games every weekend. (La persona juega videojuegos todos los fines de semana.)"
            },
            {
                "id": "q3",
                "questionEnglish": "What kind of game does the person like? (¿Qué tipo de juego le gusta a la persona?)",
                "questionSpanish": "¿Qué tipo de juego le gusta a la persona?",
                "options": [
                    {
                        "text": "Un nuevo juego de carreras (A new racing game)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un juego de estrategia (A strategy game)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un juego de rompecabezas (A puzzle game)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person really likes the new racing game. (A la persona le gusta mucho el nuevo juego de carreras.)"
            },
            {
                "id": "q4",
                "questionEnglish": "Does the person like video games? (¿Le gustan los videojuegos a la persona?)",
                "questionSpanish": "¿Le gustan los videojuegos a la persona?",
                "options": [
                    {
                        "text": "Sí (Yes)",
                        "isCorrect": true
                    },
                    {
                        "text": "No (No)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tal vez (Maybe)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person confirms that they like video games. (La persona confirma que le gustan los videojuegos.)"
            }
        ]
    },
    {
        "id": "using-social-media",
        "title": "Usando Redes Sociales",
        "description": "Una conversación corta sobre el uso de las redes sociales.",
        "sentences": [
            {
                "english": "Hey, are you on Instagram?",
                "spanish": "Oye, ¿estás en Instagram?",
                "words": [
                    {
                        "english": "Hey",
                        "spanish": "Oye"
                    },
                    {
                        "english": "are you on",
                        "spanish": "¿estás en"
                    },
                    {
                        "english": "Instagram",
                        "spanish": "Instagram"
                    }
                ]
            },
            {
                "english": "Yeah, I use it sometimes. What's your username?",
                "spanish": "Sí, lo uso a veces. ¿Cuál es tu nombre de usuario?",
                "words": [
                    {
                        "english": "Yeah",
                        "spanish": "Sí"
                    },
                    {
                        "english": "use it",
                        "spanish": "lo uso"
                    },
                    {
                        "english": "username",
                        "spanish": "nombre de usuario"
                    }
                ]
            },
            {
                "english": "It's @MyCoolPhotos. Follow me!",
                "spanish": "Es @MisFotosGeniales. ¡Sígueme!",
                "words": [
                    {
                        "english": "It's",
                        "spanish": "Es"
                    },
                    {
                        "english": "Follow me",
                        "spanish": "Sígueme"
                    }
                ]
            },
            {
                "english": "Okay, cool! I'll follow you right now.",
                "spanish": "¡Ok, genial! Te sigo ahora mismo.",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Ok"
                    },
                    {
                        "english": "cool",
                        "spanish": "genial"
                    },
                    {
                        "english": "right now",
                        "spanish": "ahora mismo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about? (¿De qué están hablando?)",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Seguirse en Instagram (Following each other on Instagram)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir al cine (Going to the movies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cenar (Having dinner)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are exchanging Instagram usernames to follow each other (Están intercambiando nombres de usuario de Instagram para seguirse)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first person's Instagram username? (¿Cuál es el nombre de usuario de Instagram de la primera persona?)",
                "questionSpanish": "¿Cuál es el nombre de usuario de Instagram de la primera persona?",
                "options": [
                    {
                        "text": "Tu Nombre (@YourName)",
                        "isCorrect": false
                    },
                    {
                        "text": "Mis Fotos Geniales (@MyCoolPhotos)",
                        "isCorrect": true
                    },
                    {
                        "text": "Fotos Geniales (@CoolPictures)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first person says their username is @MyCoolPhotos (La primera persona dice que su nombre de usuario es @MyCoolPhotos)."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the second person say they will do? (¿Qué dice la segunda persona que hará?)",
                "questionSpanish": "¿Qué dice la segunda persona que hará?",
                "options": [
                    {
                        "text": "Dejar de seguir a la primera persona (Unfollow the first person)",
                        "isCorrect": false
                    },
                    {
                        "text": "Seguir a la primera persona (Follow the first person)",
                        "isCorrect": true
                    },
                    {
                        "text": "Bloquear a la primera persona (Block the first person)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person agrees to follow the first person (La segunda persona acepta seguir a la primera persona)."
            },
            {
                "id": "q4",
                "questionEnglish": "When will the second person follow the first person? (¿Cuándo seguirá la segunda persona a la primera persona?)",
                "questionSpanish": "¿Cuándo seguirá la segunda persona a la primera persona?",
                "options": [
                    {
                        "text": "Mañana (Tomorrow)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ahora mismo (Right now)",
                        "isCorrect": true
                    },
                    {
                        "text": "La semana que viene (Next week)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The second person says they will follow the first person right now (La segunda persona dice que seguirá a la primera persona ahora mismo)."
            }
        ]
    },
    {
        "id": "talking-about-photography",
        "title": "Hablando de Fotografía",
        "description": "Una conversación sobre fotografía y fotos.",
        "sentences": [
            {
                "english": "That's a really nice photo. Did you take it?",
                "spanish": "Esa es una foto muy bonita. ¿La tomaste tú?",
                "words": [
                    {
                        "english": "nice photo",
                        "spanish": "foto bonita"
                    },
                    {
                        "english": "Did you take it?",
                        "spanish": "¿La tomaste tú?"
                    }
                ]
            },
            {
                "english": "Thanks! Yeah, I took it last summer on vacation.",
                "spanish": "¡Gracias! Sí, la tomé el verano pasado de vacaciones.",
                "words": [
                    {
                        "english": "Thanks",
                        "spanish": "Gracias"
                    },
                    {
                        "english": "last summer",
                        "spanish": "el verano pasado"
                    },
                    {
                        "english": "on vacation",
                        "spanish": "de vacaciones"
                    }
                ]
            },
            {
                "english": "Wow, it's beautiful. What kind of camera do you use?",
                "spanish": "Wow, es hermosa. ¿Qué tipo de cámara usas?",
                "words": [
                    {
                        "english": "beautiful",
                        "spanish": "hermosa"
                    },
                    {
                        "english": "What kind",
                        "spanish": "¿Qué tipo"
                    },
                    {
                        "english": "camera",
                        "spanish": "cámara"
                    }
                ]
            },
            {
                "english": "I use a DSLR. It's a bit old but still works great.",
                "spanish": "Uso una DSLR. Es un poco vieja pero todavía funciona bien.",
                "words": [
                    {
                        "english": "I use",
                        "spanish": "Uso"
                    },
                    {
                        "english": "a bit old",
                        "spanish": "un poco vieja"
                    },
                    {
                        "english": "works great",
                        "spanish": "funciona bien"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about? (¿De qué están hablando?)",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Fotografía (Photography)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cocinar (Cooking)",
                        "isCorrect": false
                    },
                    {
                        "text": "Jardinería (Gardening)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about a photo and the camera used to take it (La conversación es sobre una foto y la cámara utilizada para tomarla)."
            },
            {
                "id": "q2",
                "questionEnglish": "When was the photo taken? (¿Cuándo se tomó la foto?)",
                "questionSpanish": "¿Cuándo se tomó la foto?",
                "options": [
                    {
                        "text": "El invierno pasado (Last winter)",
                        "isCorrect": false
                    },
                    {
                        "text": "El verano pasado (Last summer)",
                        "isCorrect": true
                    },
                    {
                        "text": "La primavera pasada (Last spring)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says they took the photo last summer (La persona dice que tomó la foto el verano pasado)."
            },
            {
                "id": "q3",
                "questionEnglish": "Where was the photo taken? (¿Dónde se tomó la foto?)",
                "questionSpanish": "¿Dónde se tomó la foto?",
                "options": [
                    {
                        "text": "En casa (At home)",
                        "isCorrect": false
                    },
                    {
                        "text": "De vacaciones (On vacation)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el trabajo (At work)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The photo was taken on vacation (La foto fue tomada de vacaciones)."
            },
            {
                "id": "q4",
                "questionEnglish": "What type of camera does the person use? (¿Qué tipo de cámara usa la persona?)",
                "questionSpanish": "¿Qué tipo de cámara usa la persona?",
                "options": [
                    {
                        "text": "Una cámara de teléfono (A phone camera)",
                        "isCorrect": false
                    },
                    {
                        "text": "Una DSLR (A DSLR)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una cámara desechable (A disposable camera)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person uses a DSLR camera (La persona usa una cámara DSLR)."
            }
        ]
    },
    {
        "id": "going-for-a-hike",
        "title": "Yendo de Excursión",
        "description": "Una conversación sobre ir de excursión.",
        "sentences": [
            {
                "english": "Are you free this weekend? Wanna go for a hike?",
                "spanish": "¿Estás libre este fin de semana? ¿Quieres ir de excursión?",
                "words": [
                    {
                        "english": "Are you free",
                        "spanish": "¿Estás libre?"
                    },
                    {
                        "english": "this weekend",
                        "spanish": "este fin de semana"
                    },
                    {
                        "english": "go for a hike",
                        "spanish": "ir de excursión"
                    }
                ]
            },
            {
                "english": "That sounds great! Where should we go?",
                "spanish": "¡Eso suena genial! ¿A dónde deberíamos ir?",
                "words": [
                    {
                        "english": "sounds great",
                        "spanish": "suena genial"
                    },
                    {
                        "english": "Where",
                        "spanish": "¿A dónde?"
                    },
                    {
                        "english": "should we go",
                        "spanish": "deberíamos ir"
                    }
                ]
            },
            {
                "english": "Let's go to the mountains. The view is amazing.",
                "spanish": "Vamos a las montañas. La vista es increíble.",
                "words": [
                    {
                        "english": "Let's go",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "mountains",
                        "spanish": "montañas"
                    },
                    {
                        "english": "amazing",
                        "spanish": "increíble"
                    }
                ]
            },
            {
                "english": "Perfect! I'll pack some snacks and water.",
                "spanish": "¡Perfecto! Empacaré algunos bocadillos y agua.",
                "words": [
                    {
                        "english": "Perfect",
                        "spanish": "Perfecto"
                    },
                    {
                        "english": "pack",
                        "spanish": "empacaré"
                    },
                    {
                        "english": "snacks",
                        "spanish": "bocadillos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they planning to do? (¿Qué están planeando hacer?)",
                "questionSpanish": "¿Qué están planeando hacer?",
                "options": [
                    {
                        "text": "Ir a nadar (Go swimming)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir de excursión (Go for a hike)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir a la playa (Go to the beach)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning to go for a hike (Están planeando ir de excursión)."
            },
            {
                "id": "q2",
                "questionEnglish": "When are they planning to do it? (¿Cuándo están planeando hacerlo?)",
                "questionSpanish": "¿Cuándo están planeando hacerlo?",
                "options": [
                    {
                        "text": "Este fin de semana (This weekend)",
                        "isCorrect": true
                    },
                    {
                        "text": "La semana que viene (Next week)",
                        "isCorrect": false
                    },
                    {
                        "text": "El mes que viene (Next month)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning to go this weekend (Están planeando ir este fin de semana)."
            },
            {
                "id": "q3",
                "questionEnglish": "Where are they planning to go? (¿A dónde están planeando ir?)",
                "questionSpanish": "¿A dónde están planeando ir?",
                "options": [
                    {
                        "text": "A la playa (To the beach)",
                        "isCorrect": false
                    },
                    {
                        "text": "A las montañas (To the mountains)",
                        "isCorrect": true
                    },
                    {
                        "text": "Al parque (To the park)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning to go to the mountains (Están planeando ir a las montañas)."
            },
            {
                "id": "q4",
                "questionEnglish": "What will one of them pack? (¿Qué empacará uno de ellos?)",
                "questionSpanish": "¿Qué empacará uno de ellos?",
                "options": [
                    {
                        "text": "Protector solar (Sunscreen)",
                        "isCorrect": false
                    },
                    {
                        "text": "Bocadillos y agua (Snacks and water)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una tienda de campaña (A tent)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One of them will pack snacks and water (Uno de ellos empacará bocadillos y agua)."
            }
        ]
    },
    {
        "id": "camping-trip",
        "title": "Viaje de Camping",
        "description": "Una conversación sobre un viaje de camping.",
        "sentences": [
            {
                "english": "I'm so excited about our camping trip next week!",
                "spanish": "¡Estoy tan emocionado por nuestro viaje de camping la semana que viene!",
                "words": [
                    {
                        "english": "so excited",
                        "spanish": "tan emocionado"
                    },
                    {
                        "english": "camping trip",
                        "spanish": "viaje de camping"
                    },
                    {
                        "english": "next week",
                        "spanish": "la semana que viene"
                    }
                ]
            },
            {
                "english": "Me too! Did you buy the firewood?",
                "spanish": "¡Yo también! ¿Compraste la leña?",
                "words": [
                    {
                        "english": "Me too",
                        "spanish": "Yo también"
                    },
                    {
                        "english": "Did you buy",
                        "spanish": "¿Compraste"
                    },
                    {
                        "english": "firewood",
                        "spanish": "leña"
                    }
                ]
            },
            {
                "english": "Yeah, it's in the car. Don't forget the marshmallows!",
                "spanish": "Sí, está en el coche. ¡No olvides los malvaviscos!",
                "words": [
                    {
                        "english": "in the car",
                        "spanish": "en el coche"
                    },
                    {
                        "english": "Don't forget",
                        "spanish": "No olvides"
                    },
                    {
                        "english": "marshmallows",
                        "spanish": "malvaviscos"
                    }
                ]
            },
            {
                "english": "Okay, I got them! Let's have some fun!",
                "spanish": "¡Ok, los tengo! ¡Vamos a divertirnos!",
                "words": [
                    {
                        "english": "Okay",
                        "spanish": "Ok"
                    },
                    {
                        "english": "I got them",
                        "spanish": "los tengo"
                    },
                    {
                        "english": "have some fun",
                        "spanish": "divertirnos"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they excited about? (¿Por qué están emocionados?)",
                "questionSpanish": "¿Por qué están emocionados?",
                "options": [
                    {
                        "text": "Unas vacaciones en la playa (A beach vacation)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un viaje de camping (A camping trip)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un viaje por carretera (A road trip)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are excited about their camping trip (Están emocionados por su viaje de camping)."
            },
            {
                "id": "q2",
                "questionEnglish": "When is the camping trip? (¿Cuándo es el viaje de camping?)",
                "questionSpanish": "¿Cuándo es el viaje de camping?",
                "options": [
                    {
                        "text": "Esta semana (This week)",
                        "isCorrect": false
                    },
                    {
                        "text": "La semana que viene (Next week)",
                        "isCorrect": true
                    },
                    {
                        "text": "En dos semanas (In two weeks)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The camping trip is next week (El viaje de camping es la semana que viene)."
            },
            {
                "id": "q3",
                "questionEnglish": "What did one person buy? (¿Qué compró una persona?)",
                "questionSpanish": "¿Qué compró una persona?",
                "options": [
                    {
                        "text": "Leña (Firewood)",
                        "isCorrect": true
                    },
                    {
                        "text": "Una tienda de campaña (A tent)",
                        "isCorrect": false
                    },
                    {
                        "text": "Sacos de dormir (Sleeping bags)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person bought firewood (Una persona compró leña)."
            },
            {
                "id": "q4",
                "questionEnglish": "What did the other person get? (¿Qué consiguió la otra persona?)",
                "questionSpanish": "¿Qué consiguió la otra persona?",
                "options": [
                    {
                        "text": "Malvaviscos (Marshmallows)",
                        "isCorrect": true
                    },
                    {
                        "text": "Chocolate (Chocolate)",
                        "isCorrect": false
                    },
                    {
                        "text": "Galletas (Crackers)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person got marshmallows (La otra persona consiguió malvaviscos)."
            }
        ]
    },
    {
        "id": "beach-vacation",
        "title": "Vacaciones en la Playa",
        "description": "Una conversación sobre unas vacaciones en la playa.",
        "sentences": [
            {
                "english": "I can't wait for our beach vacation!",
                "spanish": "¡No puedo esperar para nuestras vacaciones en la playa!",
                "words": [
                    {
                        "english": "I can't wait",
                        "spanish": "No puedo esperar"
                    },
                    {
                        "english": "beach vacation",
                        "spanish": "vacaciones en la playa"
                    }
                ]
            },
            {
                "english": "Me neither! Did you pack your swimsuit?",
                "spanish": "¡Yo tampoco! ¿Empacaste tu traje de baño?",
                "words": [
                    {
                        "english": "Me neither",
                        "spanish": "Yo tampoco"
                    },
                    {
                        "english": "Did you pack",
                        "spanish": "¿Empacaste"
                    },
                    {
                        "english": "swimsuit",
                        "spanish": "traje de baño"
                    }
                ]
            },
            {
                "english": "Yes, and sunscreen. What about you?",
                "spanish": "Sí, y protector solar. ¿Y tú?",
                "words": [
                    {
                        "english": "Yes",
                        "spanish": "Sí"
                    },
                    {
                        "english": "sunscreen",
                        "spanish": "protector solar"
                    },
                    {
                        "english": "What about you",
                        "spanish": "¿Y tú?"
                    }
                ]
            },
            {
                "english": "I'm all set! Let's go have some fun in the sun!",
                "spanish": "¡Estoy listo! ¡Vamos a divertirnos bajo el sol!",
                "words": [
                    {
                        "english": "I'm all set",
                        "spanish": "Estoy listo"
                    },
                    {
                        "english": "Let's go",
                        "spanish": "Vamos"
                    },
                    {
                        "english": "in the sun",
                        "spanish": "bajo el sol"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they looking forward to? (¿Qué están esperando con ansias?)",
                "questionSpanish": "¿Qué están esperando con ansias?",
                "options": [
                    {
                        "text": "Un viaje de esquí (A ski trip)",
                        "isCorrect": false
                    },
                    {
                        "text": "Unas vacaciones en la playa (A beach vacation)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un recorrido por la ciudad (A city tour)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are looking forward to their beach vacation (Están esperando con ansias sus vacaciones en la playa)."
            },
            {
                "id": "q2",
                "questionEnglish": "What did one person pack? (¿Qué empacó una persona?)",
                "questionSpanish": "¿Qué empacó una persona?",
                "options": [
                    {
                        "text": "Un traje de baño (A swimsuit)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un abrigo de invierno (A winter coat)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un suéter (A sweater)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One person packed a swimsuit (Una persona empacó un traje de baño)."
            },
            {
                "id": "q3",
                "questionEnglish": "What else did that person pack? (¿Qué más empacó esa persona?)",
                "questionSpanish": "¿Qué más empacó esa persona?",
                "options": [
                    {
                        "text": "Protector solar (Sunscreen)",
                        "isCorrect": true
                    },
                    {
                        "text": "Botas para la nieve (Snow boots)",
                        "isCorrect": false
                    },
                    {
                        "text": "Guantes (Gloves)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "That person also packed sunscreen (Esa persona también empacó protector solar)."
            },
            {
                "id": "q4",
                "questionEnglish": "What are they going to do? (¿Qué van a hacer?)",
                "questionSpanish": "¿Qué van a hacer?",
                "options": [
                    {
                        "text": "Ir a esquiar (Go skiing)",
                        "isCorrect": false
                    },
                    {
                        "text": "Divertirse bajo el sol (Have fun in the sun)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir a patinar sobre hielo (Go ice skating)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are going to have fun in the sun (Van a divertirse bajo el sol)."
            }
        ]
    },
    {
        "id": "skiing-trip",
        "title": "Viaje de Esquí",
        "description": "Dos amigos planean un viaje para esquiar.",
        "sentences": [
            {
                "english": "Hey, are you excited about our skiing trip next week?",
                "spanish": "Oye, ¿estás emocionado por nuestro viaje de esquí la semana que viene?",
                "words": [
                    {
                        "english": "excited",
                        "spanish": "emocionado"
                    },
                    {
                        "english": "skiing trip",
                        "spanish": "viaje de esquí"
                    },
                    {
                        "english": "next week",
                        "spanish": "la semana que viene"
                    }
                ]
            },
            {
                "english": "Yeah, I am! I need to rent skis though.",
                "spanish": "¡Sí, lo estoy! Pero necesito alquilar esquíes.",
                "words": [
                    {
                        "english": "yeah",
                        "spanish": "sí"
                    },
                    {
                        "english": "rent",
                        "spanish": "alquilar"
                    },
                    {
                        "english": "skis",
                        "spanish": "esquíes"
                    }
                ]
            },
            {
                "english": "Okay, there's a good rental place near the mountain.",
                "spanish": "Vale, hay un buen lugar de alquiler cerca de la montaña.",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "vale"
                    },
                    {
                        "english": "rental place",
                        "spanish": "lugar de alquiler"
                    },
                    {
                        "english": "mountain",
                        "spanish": "montaña"
                    }
                ]
            },
            {
                "english": "Great! Let's meet there on Saturday morning.",
                "spanish": "¡Genial! Reunámonos allí el sábado por la mañana.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "genial"
                    },
                    {
                        "english": "meet",
                        "spanish": "reunámonos"
                    },
                    {
                        "english": "Saturday morning",
                        "spanish": "sábado por la mañana"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are the friends planning to do?",
                "questionSpanish": "¿Qué planean hacer los amigos?",
                "options": [
                    {
                        "text": "Ir de excursión (Go hiking)",
                        "isCorrect": false
                    },
                    {
                        "text": "Ir a esquiar (Go skiing)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ir a nadar (Go swimming)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are planning a skiing trip, viaje de esquí."
            },
            {
                "id": "q2",
                "questionEnglish": "What does one of the friends need to do?",
                "questionSpanish": "¿Qué necesita hacer uno de los amigos?",
                "options": [
                    {
                        "text": "Comprar un coche nuevo (Buy a new car)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alquilar esquíes (Rent skis)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprar una casa (Buy a house)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "One friend needs to rent skis (alquilar esquíes) for the trip."
            },
            {
                "id": "q3",
                "questionEnglish": "Where is the rental place located?",
                "questionSpanish": "¿Dónde está ubicado el lugar de alquiler?",
                "options": [
                    {
                        "text": "Cerca de la playa (Near the beach)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cerca de la montaña (Near the mountain)",
                        "isCorrect": true
                    },
                    {
                        "text": "En el centro de la ciudad (In the city center)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The rental place is near the mountain (cerca de la montaña)."
            },
            {
                "id": "q4",
                "questionEnglish": "When are they planning to meet?",
                "questionSpanish": "¿Cuándo planean reunirse?",
                "options": [
                    {
                        "text": "Sábado por la mañana (Saturday morning)",
                        "isCorrect": true
                    },
                    {
                        "text": "Domingo por la tarde (Sunday afternoon)",
                        "isCorrect": false
                    },
                    {
                        "text": "Viernes por la noche (Friday night)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They plan to meet on Saturday morning (sábado por la mañana)."
            }
        ]
    },
    {
        "id": "talking-about-food-allergies",
        "title": "Alergias Alimentarias",
        "description": "Una persona le cuenta a otra sobre sus alergias alimentarias.",
        "sentences": [
            {
                "english": "Hi, I have some food allergies, so I need to be careful.",
                "spanish": "Hola, tengo algunas alergias alimentarias, así que necesito tener cuidado.",
                "words": [
                    {
                        "english": "food allergies",
                        "spanish": "alergias alimentarias"
                    },
                    {
                        "english": "careful",
                        "spanish": "cuidado"
                    },
                    {
                        "english": "some",
                        "spanish": "algunas"
                    }
                ]
            },
            {
                "english": "Oh, really? What are you allergic to?",
                "spanish": "¿Ah, de verdad? ¿A qué eres alérgico?",
                "words": [
                    {
                        "english": "really",
                        "spanish": "de verdad"
                    },
                    {
                        "english": "allergic",
                        "spanish": "alérgico"
                    },
                    {
                        "english": "what",
                        "spanish": "¿qué?"
                    }
                ]
            },
            {
                "english": "I'm allergic to peanuts and shellfish.",
                "spanish": "Soy alérgico al maní y a los mariscos.",
                "words": [
                    {
                        "english": "peanuts",
                        "spanish": "maní"
                    },
                    {
                        "english": "shellfish",
                        "spanish": "mariscos"
                    },
                    {
                        "english": "and",
                        "spanish": "y"
                    }
                ]
            },
            {
                "english": "Okay, good to know. I'll make sure there's nothing like that in the food.",
                "spanish": "Vale, qué bueno saberlo. Me aseguraré de que no haya nada de eso en la comida.",
                "words": [
                    {
                        "english": "good to know",
                        "spanish": "qué bueno saberlo"
                    },
                    {
                        "english": "make sure",
                        "spanish": "aseguraré"
                    },
                    {
                        "english": "food",
                        "spanish": "comida"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the conversation about?",
                "questionSpanish": "¿De qué se trata la conversación?",
                "options": [
                    {
                        "text": "Alergias alimentarias (Food allergies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comidas favoritas (Favorite foods)",
                        "isCorrect": false
                    },
                    {
                        "text": "Recetas de cocina (Cooking recipes)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation is about food allergies (alergias alimentarias)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the person allergic to?",
                "questionSpanish": "¿A qué es alérgica la persona?",
                "options": [
                    {
                        "text": "Leche y huevos (Milk and eggs)",
                        "isCorrect": false
                    },
                    {
                        "text": "Maní y mariscos (Peanuts and shellfish)",
                        "isCorrect": true
                    },
                    {
                        "text": "Trigo y soya (Wheat and soy)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is allergic to peanuts and shellfish (maní y mariscos)."
            },
            {
                "id": "q3",
                "questionEnglish": "Why does the person need to be careful?",
                "questionSpanish": "¿Por qué la persona necesita tener cuidado?",
                "options": [
                    {
                        "text": "Porque están enfermos (Because they are sick)",
                        "isCorrect": false
                    },
                    {
                        "text": "Porque tienen alergias alimentarias (Because they have food allergies)",
                        "isCorrect": true
                    },
                    {
                        "text": "Porque están a dieta (Because they are on a diet)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They need to be careful because they have food allergies (alergias alimentarias)."
            },
            {
                "id": "q4",
                "questionEnglish": "What will the other person do?",
                "questionSpanish": "¿Qué hará la otra persona?",
                "options": [
                    {
                        "text": "Ignorar las alergias (Ignore the allergies)",
                        "isCorrect": false
                    },
                    {
                        "text": "Asegurarse de que no haya nada de eso en la comida (Make sure there's nothing like that in the food)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ofrecer medicina (Offer medicine)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person will make sure there's nothing like that in the food (asegurarse de que no haya nada de eso en la comida)."
            }
        ]
    },
    {
        "id": "dietary-restrictions",
        "title": "Restricciones Alimentarias",
        "description": "Una persona explica sus restricciones alimentarias en un restaurante.",
        "sentences": [
            {
                "english": "Excuse me, I have some dietary restrictions. I'm vegetarian.",
                "spanish": "Disculpe, tengo algunas restricciones alimentarias. Soy vegetariano.",
                "words": [
                    {
                        "english": "dietary restrictions",
                        "spanish": "restricciones alimentarias"
                    },
                    {
                        "english": "vegetarian",
                        "spanish": "vegetariano"
                    },
                    {
                        "english": "excuse me",
                        "spanish": "disculpe"
                    }
                ]
            },
            {
                "english": "Okay, no problem. We have several vegetarian options.",
                "spanish": "Vale, no hay problema. Tenemos varias opciones vegetarianas.",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "vale"
                    },
                    {
                        "english": "no problem",
                        "spanish": "no hay problema"
                    },
                    {
                        "english": "options",
                        "spanish": "opciones"
                    }
                ]
            },
            {
                "english": "Great! Also, I can't eat anything with dairy.",
                "spanish": "¡Genial! Además, no puedo comer nada con lácteos.",
                "words": [
                    {
                        "english": "great",
                        "spanish": "genial"
                    },
                    {
                        "english": "dairy",
                        "spanish": "lácteos"
                    },
                    {
                        "english": "anything",
                        "spanish": "nada"
                    }
                ]
            },
            {
                "english": "Alright. I'll point out the dairy-free dishes on the menu.",
                "spanish": "De acuerdo. Le señalaré los platos sin lácteos en el menú.",
                "words": [
                    {
                        "english": "alright",
                        "spanish": "de acuerdo"
                    },
                    {
                        "english": "dairy-free",
                        "spanish": "sin lácteos"
                    },
                    {
                        "english": "menu",
                        "spanish": "menú"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where does this conversation likely take place?",
                "questionSpanish": "¿Dónde es probable que tenga lugar esta conversación?",
                "options": [
                    {
                        "text": "En un hospital (At a hospital)",
                        "isCorrect": false
                    },
                    {
                        "text": "En un restaurante (At a restaurant)",
                        "isCorrect": true
                    },
                    {
                        "text": "En una tienda de comestibles (At a grocery store)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation likely takes place at a restaurant (en un restaurante) because they are talking about dietary restrictions and menu options."
            },
            {
                "id": "q2",
                "questionEnglish": "What are the person's dietary restrictions?",
                "questionSpanish": "¿Cuáles son las restricciones alimentarias de la persona?",
                "options": [
                    {
                        "text": "Vegetariano y sin gluten (Vegetarian and gluten-free)",
                        "isCorrect": false
                    },
                    {
                        "text": "Vegetariano y sin lácteos (Vegetarian and dairy-free)",
                        "isCorrect": true
                    },
                    {
                        "text": "Vegano y sin azúcar (Vegan and sugar-free)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is vegetarian (vegetariano) and dairy-free (sin lácteos)."
            },
            {
                "id": "q3",
                "questionEnglish": "What does 'dairy' mean?",
                "questionSpanish": "¿Qué significa 'dairy'?",
                "options": [
                    {
                        "text": "Productos cárnicos (Meat products)",
                        "isCorrect": false
                    },
                    {
                        "text": "Productos hechos de leche (Products made from milk)",
                        "isCorrect": true
                    },
                    {
                        "text": "Productos de grano (Grain products)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "'Dairy' (lácteos) means products made from milk (productos hechos de leche)."
            },
            {
                "id": "q4",
                "questionEnglish": "What will the server do?",
                "questionSpanish": "¿Qué hará el camarero?",
                "options": [
                    {
                        "text": "Recomendar solo platos de carne (Recommend only meat dishes)",
                        "isCorrect": false
                    },
                    {
                        "text": "Señalar los platos sin lácteos (Point out the dairy-free dishes)",
                        "isCorrect": true
                    },
                    {
                        "text": "Traerle a la persona un vaso de leche (Bring the person a glass of milk)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The server will point out the dairy-free dishes (señalar los platos sin lácteos) on the menu."
            }
        ]
    },
    {
        "id": "learning-a-new-skill",
        "title": "Aprendiendo una Nueva Habilidad",
        "description": "Una persona está aprendiendo a tocar la guitarra.",
        "sentences": [
            {
                "english": "I'm trying to learn how to play the guitar. It's hard!",
                "spanish": "Estoy intentando aprender a tocar la guitarra. ¡Es difícil!",
                "words": [
                    {
                        "english": "trying to learn",
                        "spanish": "intentando aprender"
                    },
                    {
                        "english": "play the guitar",
                        "spanish": "tocar la guitarra"
                    },
                    {
                        "english": "hard",
                        "spanish": "difícil"
                    }
                ]
            },
            {
                "english": "Yeah, it takes practice. Start with simple chords.",
                "spanish": "Sí, requiere práctica. Comienza con acordes simples.",
                "words": [
                    {
                        "english": "takes practice",
                        "spanish": "requiere práctica"
                    },
                    {
                        "english": "start with",
                        "spanish": "comienza con"
                    },
                    {
                        "english": "chords",
                        "spanish": "acordes"
                    }
                ]
            },
            {
                "english": "Okay, I'm trying to learn the C chord right now.",
                "spanish": "Vale, estoy intentando aprender el acorde de Do ahora mismo.",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "vale"
                    },
                    {
                        "english": "chord",
                        "spanish": "acorde"
                    },
                    {
                        "english": "right now",
                        "spanish": "ahora mismo"
                    }
                ]
            },
            {
                "english": "Keep practicing! You'll get it eventually.",
                "spanish": "¡Sigue practicando! Eventualmente lo lograrás.",
                "words": [
                    {
                        "english": "keep practicing",
                        "spanish": "sigue practicando"
                    },
                    {
                        "english": "eventually",
                        "spanish": "eventualmente"
                    },
                    {
                        "english": "get it",
                        "spanish": "lo lograrás"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the person learning?",
                "questionSpanish": "¿Qué está aprendiendo la persona?",
                "options": [
                    {
                        "text": "Cómo cocinar (How to cook)",
                        "isCorrect": false
                    },
                    {
                        "text": "Cómo tocar la guitarra (How to play the guitar)",
                        "isCorrect": true
                    },
                    {
                        "text": "Cómo bailar (How to dance)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person is learning how to play the guitar (cómo tocar la guitarra)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first chord they are learning?",
                "questionSpanish": "¿Cuál es el primer acorde que están aprendiendo?",
                "options": [
                    {
                        "text": "El acorde de La (The A chord)",
                        "isCorrect": false
                    },
                    {
                        "text": "El acorde de Do (The C chord)",
                        "isCorrect": true
                    },
                    {
                        "text": "El acorde de Sol (The G chord)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are trying to learn the C chord (el acorde de Do)."
            },
            {
                "id": "q3",
                "questionEnglish": "What does the other person say it takes?",
                "questionSpanish": "¿Qué dice la otra persona que se necesita?",
                "options": [
                    {
                        "text": "Talento (Talent)",
                        "isCorrect": false
                    },
                    {
                        "text": "Práctica (Practice)",
                        "isCorrect": true
                    },
                    {
                        "text": "Dinero (Money)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person says it takes practice (práctica)."
            },
            {
                "id": "q4",
                "questionEnglish": "What does the other person recommend to start with?",
                "questionSpanish": "¿Qué recomienda la otra persona para empezar?",
                "options": [
                    {
                        "text": "Canciones difíciles (Difficult songs)",
                        "isCorrect": false
                    },
                    {
                        "text": "Acordes simples (Simple chords)",
                        "isCorrect": true
                    },
                    {
                        "text": "Ritmos complejos (Complex rhythms)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The other person recommends starting with simple chords (acordes simples)."
            }
        ]
    },
    {
        "id": "teaching-someone-something",
        "title": "Enseñando a Alguien Algo",
        "description": "Una persona le enseña a otra cómo usar una aplicación en su teléfono.",
        "sentences": [
            {
                "english": "I can show you how to use this app. It's pretty easy.",
                "spanish": "Te puedo mostrar cómo usar esta aplicación. Es bastante fácil.",
                "words": [
                    {
                        "english": "show you",
                        "spanish": "mostrarte"
                    },
                    {
                        "english": "use this app",
                        "spanish": "usar esta aplicación"
                    },
                    {
                        "english": "pretty easy",
                        "spanish": "bastante fácil"
                    }
                ]
            },
            {
                "english": "Oh, great! I always get confused.",
                "spanish": "¡Oh, genial! Siempre me confundo.",
                "words": [
                    {
                        "english": "oh, great",
                        "spanish": "oh, genial"
                    },
                    {
                        "english": "always",
                        "spanish": "siempre"
                    },
                    {
                        "english": "confused",
                        "spanish": "confundo"
                    }
                ]
            },
            {
                "english": "First, tap this icon. Then, enter your password.",
                "spanish": "Primero, toca este icono. Luego, ingresa tu contraseña.",
                "words": [
                    {
                        "english": "first",
                        "spanish": "primero"
                    },
                    {
                        "english": "tap",
                        "spanish": "toca"
                    },
                    {
                        "english": "password",
                        "spanish": "contraseña"
                    }
                ]
            },
            {
                "english": "Okay, I think I understand now. Thanks for your help!",
                "spanish": "Vale, creo que entiendo ahora. ¡Gracias por tu ayuda!",
                "words": [
                    {
                        "english": "okay",
                        "spanish": "vale"
                    },
                    {
                        "english": "understand",
                        "spanish": "entiendo"
                    },
                    {
                        "english": "thanks",
                        "spanish": "gracias"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about?",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Usando un coche nuevo (Using a new car)",
                        "isCorrect": false
                    },
                    {
                        "text": "Usando una aplicación (Using an app)",
                        "isCorrect": true
                    },
                    {
                        "text": "Usando una computadora nueva (Using a new computer)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are talking about using an app (usando una aplicación)."
            },
            {
                "id": "q2",
                "questionEnglish": "What is the first step?",
                "questionSpanish": "¿Cuál es el primer paso?",
                "options": [
                    {
                        "text": "Ingresar tu contraseña (Enter your password)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tocar el icono (Tap the icon)",
                        "isCorrect": true
                    },
                    {
                        "text": "Encender el teléfono (Turn on the phone)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The first step is to tap the icon (tocar el icono)."
            },
            {
                "id": "q3",
                "questionEnglish": "What should you enter after tapping the icon?",
                "questionSpanish": "¿Qué debes ingresar después de tocar el icono?",
                "options": [
                    {
                        "text": "Tu correo electrónico (Your email)",
                        "isCorrect": false
                    },
                    {
                        "text": "Tu contraseña (Your password)",
                        "isCorrect": true
                    },
                    {
                        "text": "Tu nombre de usuario (Your username)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "After tapping the icon, you should enter your password (tu contraseña)."
            },
            {
                "id": "q4",
                "questionEnglish": "How does the person feel at the end?",
                "questionSpanish": "¿Cómo se siente la persona al final?",
                "options": [
                    {
                        "text": "Confundido (Confused)",
                        "isCorrect": false
                    },
                    {
                        "text": "Entendiendo (Understanding)",
                        "isCorrect": true
                    },
                    {
                        "text": "Enojado (Angry)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person feels understanding (entendiendo) at the end."
            }
        ]
    },
    {
        "id": "hablando-de-la-inflacion",
        "title": "Hablando de la Inflación",
        "description": "Una conversación corta sobre los precios altos en la tienda.",
        "sentences": [
            {
                "english": "Wow, everything is so expensive these days, isn't it?",
                "spanish": "¡Wow, todo está tan caro estos días, verdad?",
                "words": [
                    {
                        "english": "everything",
                        "spanish": "todo"
                    },
                    {
                        "english": "expensive",
                        "spanish": "caro"
                    },
                    {
                        "english": "these days",
                        "spanish": "estos días"
                    }
                ]
            },
            {
                "english": "Yeah, inflation is really hitting hard. Even the price of milk went up!",
                "spanish": "Sí, la inflación está pegando fuerte. ¡Hasta el precio de la leche subió!",
                "words": [
                    {
                        "english": "inflation",
                        "spanish": "inflación"
                    },
                    {
                        "english": "hitting hard",
                        "spanish": "pegando fuerte"
                    },
                    {
                        "english": "price",
                        "spanish": "precio"
                    },
                    {
                        "english": "went up",
                        "spanish": "subió"
                    }
                ]
            },
            {
                "english": "I know! I used to buy groceries for $50, now it's almost $80.",
                "spanish": "¡Lo sé! Antes compraba comida por $50, ahora cuesta casi $80.",
                "words": [
                    {
                        "english": "I know!",
                        "spanish": "¡Lo sé!"
                    },
                    {
                        "english": "used to buy",
                        "spanish": "compraba"
                    },
                    {
                        "english": "groceries",
                        "spanish": "comida"
                    },
                    {
                        "english": "almost",
                        "spanish": "casi"
                    }
                ]
            },
            {
                "english": "It's crazy. We need to find ways to save money.",
                "spanish": "Es una locura. Necesitamos encontrar formas de ahorrar dinero.",
                "words": [
                    {
                        "english": "crazy",
                        "spanish": "locura"
                    },
                    {
                        "english": "need to find",
                        "spanish": "necesitamos encontrar"
                    },
                    {
                        "english": "save money",
                        "spanish": "ahorrar dinero"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What is the main topic of the conversation?",
                "questionSpanish": "¿Cuál es el tema principal de la conversación?",
                "options": [
                    {
                        "text": "Ahorrar dinero (Saving money)",
                        "isCorrect": false
                    },
                    {
                        "text": "Precios altos (High prices)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprando leche (Buying milk)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The main topic is the high cost of living due to inflation, or 'precios altos'."
            },
            {
                "id": "q2",
                "questionEnglish": "How much more does the person spend on groceries now?",
                "questionSpanish": "¿Cuánto más gasta la persona en comida ahora?",
                "options": [
                    {
                        "text": "Casi $30 más (Almost $30 more)",
                        "isCorrect": true
                    },
                    {
                        "text": "Exactamente $50 más (Exactly $50 more)",
                        "isCorrect": false
                    },
                    {
                        "text": "Alrededor de $10 más (About $10 more)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person used to spend $50 and now spends almost $80, so that's almost $30 more."
            },
            {
                "id": "q3",
                "questionEnglish": "What specific product was mentioned to have increased in price?",
                "questionSpanish": "¿Qué producto específico se mencionó que ha aumentado de precio?",
                "options": [
                    {
                        "text": "Huevos (Eggs)",
                        "isCorrect": false
                    },
                    {
                        "text": "Pan (Bread)",
                        "isCorrect": false
                    },
                    {
                        "text": "Leche (Milk)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The speakers mentioned that the price of milk went up due to inflation ('el precio de la leche subió')."
            },
            {
                "id": "q4",
                "questionEnglish": "What do they need to do as a result of the inflation?",
                "questionSpanish": "¿Qué necesitan hacer como resultado de la inflación?",
                "options": [
                    {
                        "text": "Comprar más leche (Buy more milk)",
                        "isCorrect": false
                    },
                    {
                        "text": "Encontrar formas de ahorrar dinero (Find ways to save money)",
                        "isCorrect": true
                    },
                    {
                        "text": "Gastar más dinero (Spend more money)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The speakers need to find ways to save money because groceries are costing almost $30 more each trip."
            }
        ]
    },
    {
        "id": "discutiendo-un-programa-de-television",
        "title": "Discutiendo un Programa de Televisión",
        "description": "Una breve charla sobre un programa de televisión popular.",
        "sentences": [
            {
                "english": "Did you see the latest episode of 'Cosmic Adventures'?",
                "spanish": "¿Viste el último episodio de 'Aventuras Cósmicas'?",
                "words": [
                    {
                        "english": "did you see",
                        "spanish": "viste"
                    },
                    {
                        "english": "latest episode",
                        "spanish": "último episodio"
                    }
                ]
            },
            {
                "english": "Yeah! The plot twist was totally unexpected, right?",
                "spanish": "¡Sí! El giro de la trama fue totalmente inesperado, ¿verdad?",
                "words": [
                    {
                        "english": "plot twist",
                        "spanish": "giro de la trama"
                    },
                    {
                        "english": "totally",
                        "spanish": "totalmente"
                    },
                    {
                        "english": "unexpected",
                        "spanish": "inesperado"
                    },
                    {
                        "english": "right?",
                        "spanish": "¿verdad?"
                    }
                ]
            },
            {
                "english": "Totally! I can't believe what happened to Captain Eva.",
                "spanish": "¡Totalmente! No puedo creer lo que le pasó a la Capitana Eva.",
                "words": [
                    {
                        "english": "I can't believe",
                        "spanish": "no puedo creer"
                    },
                    {
                        "english": "what happened",
                        "spanish": "lo que le pasó"
                    }
                ]
            },
            {
                "english": "Me neither! I'm already excited for the next one.",
                "spanish": "¡Yo tampoco! Ya estoy emocionado por el próximo.",
                "words": [
                    {
                        "english": "Me neither!",
                        "spanish": "¡Yo tampoco!"
                    },
                    {
                        "english": "already",
                        "spanish": "ya"
                    },
                    {
                        "english": "excited",
                        "spanish": "emocionado"
                    },
                    {
                        "english": "next one",
                        "spanish": "próximo"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "What are they talking about?",
                "questionSpanish": "¿De qué están hablando?",
                "options": [
                    {
                        "text": "Una película (A movie)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un libro (A book)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un programa de televisión (A TV show)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The conversation is about the latest episode of the TV show 'Cosmic Adventures'."
            },
            {
                "id": "q2",
                "questionEnglish": "What did they think of the plot twist?",
                "questionSpanish": "¿Qué pensaron del giro de la trama?",
                "options": [
                    {
                        "text": "Fue esperado (It was expected)",
                        "isCorrect": false
                    },
                    {
                        "text": "Fue aburrido (It was boring)",
                        "isCorrect": false
                    },
                    {
                        "text": "Fue inesperado (It was unexpected)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "They thought the plot twist was totally unexpected."
            },
            {
                "id": "q3",
                "questionEnglish": "Who is Captain Eva?",
                "questionSpanish": "¿Quién es la Capitana Eva?",
                "options": [
                    {
                        "text": "Un personaje principal (A main character)",
                        "isCorrect": true
                    },
                    {
                        "text": "Un director (A director)",
                        "isCorrect": false
                    },
                    {
                        "text": "Un lugar (A place)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "Captain Eva is likely a character in the TV show."
            },
            {
                "id": "q4",
                "questionEnglish": "How do they feel about the next episode?",
                "questionSpanish": "¿Cómo se sienten sobre el próximo episodio?",
                "options": [
                    {
                        "text": "Aburridos (Bored)",
                        "isCorrect": false
                    },
                    {
                        "text": "Emocionados (Excited)",
                        "isCorrect": true
                    },
                    {
                        "text": "Preocupados (Worried)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "They are already excited for the next episode."
            }
        ]
    },
    {
        "id": "despidiendose-en-el-aeropuerto",
        "title": "Despidiéndose en el Aeropuerto",
        "description": "Una conversación de despedida en el aeropuerto.",
        "sentences": [
            {
                "english": "Well, this is it. Have a safe flight!",
                "spanish": "Bueno, esto es todo. ¡Que tengas un vuelo seguro!",
                "words": [
                    {
                        "english": "this is it",
                        "spanish": "esto es todo"
                    },
                    {
                        "english": "have a safe flight",
                        "spanish": "que tengas un vuelo seguro"
                    }
                ]
            },
            {
                "english": "Thanks! I'll call you when I land.",
                "spanish": "¡Gracias! Te llamaré cuando aterrice.",
                "words": [
                    {
                        "english": "thanks!",
                        "spanish": "gracias"
                    },
                    {
                        "english": "I'll call you",
                        "spanish": "te llamaré"
                    },
                    {
                        "english": "when I land",
                        "spanish": "cuando aterrice"
                    }
                ]
            },
            {
                "english": "Sounds good. Don't forget to send me pictures!",
                "spanish": "Suena bien. ¡No olvides enviarme fotos!",
                "words": [
                    {
                        "english": "Sounds good",
                        "spanish": "Suena bien"
                    },
                    {
                        "english": "don't forget",
                        "spanish": "no olvides"
                    },
                    {
                        "english": "send me",
                        "spanish": "enviarme"
                    },
                    {
                        "english": "pictures",
                        "spanish": "fotos"
                    }
                ]
            },
            {
                "english": "I won't. Bye for now, I have to go through security.",
                "spanish": "No lo haré. Adiós por ahora, tengo que pasar por seguridad.",
                "words": [
                    {
                        "english": "I won't",
                        "spanish": "No lo haré"
                    },
                    {
                        "english": "bye for now",
                        "spanish": "adiós por ahora"
                    },
                    {
                        "english": "have to go through",
                        "spanish": "tengo que pasar por"
                    },
                    {
                        "english": "security",
                        "spanish": "seguridad"
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "q1",
                "questionEnglish": "Where are they?",
                "questionSpanish": "¿Dónde están?",
                "options": [
                    {
                        "text": "En la estación de tren (At the train station)",
                        "isCorrect": false
                    },
                    {
                        "text": "En el aeropuerto (At the airport)",
                        "isCorrect": true
                    },
                    {
                        "text": "En la estación de autobús (At the bus station)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The conversation mentions 'flight' and 'security,' so they are at the airport."
            },
            {
                "id": "q2",
                "questionEnglish": "What will the person do when they land?",
                "questionSpanish": "¿Qué hará la persona cuando aterrice?",
                "options": [
                    {
                        "text": "Enviar una carta (Send a letter)",
                        "isCorrect": false
                    },
                    {
                        "text": "Llamar (Call)",
                        "isCorrect": true
                    },
                    {
                        "text": "Enviar un mensaje de texto (Send a text message)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person said 'I'll call you when I land.'"
            },
            {
                "id": "q3",
                "questionEnglish": "What does the other person want them to do?",
                "questionSpanish": "¿Qué quiere la otra persona que haga?",
                "options": [
                    {
                        "text": "Enviar dinero (Send money)",
                        "isCorrect": false
                    },
                    {
                        "text": "Enviar comida (Send food)",
                        "isCorrect": false
                    },
                    {
                        "text": "Enviar fotos (Send pictures)",
                        "isCorrect": true
                    }
                ],
                "answerExplanation": "The other person said 'Don't forget to send me pictures!'"
            },
            {
                "id": "q4",
                "questionEnglish": "What does the person have to do before their flight?",
                "questionSpanish": "¿Qué tiene que hacer la persona antes de su vuelo?",
                "options": [
                    {
                        "text": "Pasar por seguridad (Go through security)",
                        "isCorrect": true
                    },
                    {
                        "text": "Comprar un boleto (Buy a ticket)",
                        "isCorrect": false
                    },
                    {
                        "text": "Almorzar (Eat lunch)",
                        "isCorrect": false
                    }
                ],
                "answerExplanation": "The person says 'I have to go through security.'"
            }
        ]
    }

];
