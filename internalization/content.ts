export const headerContent: InternalizationContent = {
  en: {
    overTitle: "Experimental",
    title: "Bud-E!",
  },
  de: {
    overTitle: "Experimenteller",
    title: "Bud-E!",
  },
};

export const agreementContent: InternalizationContent = {
  en: {
    title: "Welcome to Bud-E!",
    content:
      "Please read and accept the following terms and conditions to continue using Bud-E.",
    termsAndConditionsTitle: "Terms and Conditions",
    temsAndConditionsContent: "Placeholder Terms and Conditions",
    agree: "I agree to the terms and conditions",
    accept: "Accept",
  },
  de: {
    title: "Willkommen bei Bud-E!",
    content:
      "Bitte lesen und akzeptieren Sie die folgenden Nutzungsbedingungen, um mit der Nutzung von Bud-E fortzufahren.",
    termsAndConditionsTitle: "Nutzungsbedingungen",
    temsAndConditionsContent: "Platzhalter Nutzungsbedingungen",
    agree: "Ich stimme den Nutzungsbedingungen zu",
    accept: "Akzeptieren",
  },
};

export const menuContent: InternalizationContent = {
  en: {
    about: "About Bud-E",
    imprint: "Imprint",
  },
  de: {
    about: "Über Bud-E",
    imprint: "Impressum",
  },
};

export const warningContent: InternalizationContent = {
  en: {
    title: "🚧 Experimental Demo Version 🚧",
    content:
      "Please note that this is an early prototype application that may provide inaccurate answers or generate content that is not suitable for all audiences. We advise caution and encourage you to report any issues you encounter to us.",
    usage:
      "**Bud-E Features**\n1.: Wikipedia search (**#wikipedia**: search term)\n2.: Paper search (**#papers**: search term)\n3.: Document analysis (**#analyze**: search term)\n4.: Text correction (only **#correction** or **#korrektur** with image upload)\n\n Points 1 to 3 can optionally be followed by :top_n to limit the number of results.\nExample: **#wikipedia: Artificial Intelligence:3**\n\n Alternatively to #wikipedia, you can also use **#wikipedia_de** or **#wikipedia_en** to set the language of the Wikipedia search.\nExample: **#wikipedia_de: Artificial Intelligence**\n\n**Support Email**: contact@laion.ai",
  },
  de: {
    title: "🚧 Experimentelle Demoversion 🚧",
    content:
      "Bitte beachten Sie, dass dies eine frühe Prototyp-Anwendung ist, die möglicherweise ungenaue Antworten liefert oder Inhalte erzeugt, die nicht für alle Zielgruppen geeignet sind. Wir raten zur Vorsicht und raten Ihnen uns alle Probleme, die Sie feststellen, mitzuteilen.",
    usage:
      "**Bud-E Funktionen**\n1.: Wikipedia-Suche (**#wikipedia**: Suchbegriff)\n2.: Paper-Suche (**#papers**: Suchbegriff)\n3.: Dokumentenanalyse (**#analyze**: Suchbegriff)\n4.: Textkorrektur (nur **#korrektur** oder **#correction** mit Bilderupload)\n\n Punkte 1 bis 3 können optional mit einem :top_n am Ende versehen werden, um die Anzahl der Ergebnisse zu begrenzen.\nBeispiel: **#wikipedia: Künstliche Intelligenz:3**\n\n Alternativ zu #wikipedia, kann auch **#wikipedia_de** oder **#wikipedia_en** verwendet werden, um die Sprache der Wikipedia-Suche festzulegen.\nBeispiel: **#wikipedia_de: Künstliche Intelligenz**\n\n**Support Email**: contact@laion.ai",
  },
};

export const chatIslandContent: InternalizationContent = {
  en: {
    welcomeMessage:
      "Hello! I am Bud-E, your personal AI assistant. How can I help you today?",
    deleteCurrentChat: "current chat",
    deleteAllChats: "all chats",
    backupChat: "Download",
    restoreChat: "Upload",
    placeholderText: "Chat with Bud-E...",
    wikipediaTitle: "Title",
    wikipediaContent: "Content",
    wikipediaURL: "URL",
    wikipediaScore: "Score",
    papersDOI: "DOI",
    papersTitle: "Title",
    papersSubjects: "Type",
    papersAuthors: "Authors",
    papersAbstract: "Abstract",
    papersDate: "Date",
    result: "Result",
    of: "of",
    noSettings: "⚠️ The minimum requirement to run the chat is missing. You need to open the settings and either provide an Universal API key or a custom API key with the corresponding url and model. ⚠️",
  },
  de: {
    welcomeMessage:
      "Hallo! Ich bin Bud-E, dein persönlicher Assistent. Wie kann ich dir helfen?",
    deleteCurrentChat: "diesen Chat",
    deleteAllChats: "alle Chats",
    backupChat: "Download",
    restoreChat: "Upload",
    placeholderText: "Schreibe mit Bud-E...",
    wikipediaTitle: "Titel",
    wikipediaContent: "Inhalt",
    wikipediaURL: "URL",
    wikipediaScore: "Score",
    papersDOI: "DOI",
    papersTitle: "Titel",
    papersSubjects: "Typ",
    papersAuthors: "Autoren",
    papersAbstract: "Abstract",
    papersDate: "Datum",
    result: "Ergebnis",
    of: "von",
    noSettings: "⚠️ Die Mindestanforderung zum Ausführen des Chats fehlt. Du musst die Einstellungen öffnen und entweder einen Universal-API-Schlüssel oder einen benutzerdefinierten API-Schlüssel mit der entsprechender URL und dem Modell eintragen. ⚠️",
  },
};

export const chatTemplateContent: InternalizationContent = {
  "en": {
    readOutText: "Read out text",
    silent: "Silent",
    autoScrollOn: "Auto scroll",
    autoScrollOff: "Manual scroll",
  },
  "de": {
    readOutText: "Text vorlesen",
    silent: "Stumm",
    autoScrollOn: "Automatisch scrollen",
    autoScrollOff: "Manuelles scrollen",
  },
};

export const chatContent: InternalizationContent = {
  en: {
    systemPrompt:
      "You are an intelligent and empathetic AI assistant. Always respond empathetically, friendly, and curiously. Respond briefly and to the point. Your name is Bud-E and you were created by LAION. LAION is a non-profit organization for the democratization of open source AI. Try to keep the conversation friendly and entertaining while taking into account previously said information. Respond briefly, concisely and to the point. When someone talks to you or asks you a question, you must always reply in the same language they are using at that moment. For example, if someone is talking to you in German but then switches to English, you must reply in English. If someone asks you something in Chinese, you must reply in Chinese. It's important to always use the language the person last spoke in. Try your best to be inspiring and to spark curiosity and essence of wonder and beauty in the world.",
    correctionSystemPrompt:
      `This Vision Language Model is specialized in analyzing and providing feedback on documents. It accurately analyzes the submitted documents, transcribes them with the highest accuracy, and creates well-founded, empathetic, and customizable suggestions. It can help with proofreading, analysis, and providing constructive feedback on various types of documents.`
  },
  de: {
    systemPrompt:
      "Du bist ein sehr intelligenter und empathischer KI-Assistent. Antworte immer empathisch, freundlich und neugierig. Antworte kurz und auf den Punkt gebracht. Dein Name ist Bud-E und Du wurdest von LAION erschaffen. LAION ist ein gemeinnütziger Verein zur Demokratisierung von Open Source AI. Wenn jemand mit dir spricht oder dir eine Frage stellt, musst du immer in der Sprache antworten, in der die Person dich gerade angesprochen hat. Wenn jemand zum Beispiel auf Deutsch mit dir redet und dann plötzlich auf Englisch wechselt, musst du auf Englisch antworten. Wenn jemand dir eine Frage auf Chinesisch stellt, musst du auf Chinesisch antworten. Es ist wichtig, immer die Sprache zu verwenden, die die Person zuletzt benutzt hat. Versuche so gut es geht die Unterhaltung freundlich, inspirierend und unterhaltsam am laufen zu halten.",
    correctionSystemPrompt:
      `Dieses Vision Language Model ist darauf spezialisiert, Dokumente zu analysieren und Feedback zu geben. Es analysiert präzise die eingereichten Dokumente, transkribiert sie mit höchster Genauigkeit und erstellt fundierte, empathische und anpassbare Vorschläge. Es kann bei der Korrektur, Analyse und dem Geben von konstruktivem Feedback für verschiedene Arten von Dokumenten helfen.`
  },
};

export const aboutContent: InternalizationContent = {
  en: {
    title: "About Bud-E",
    partOneOne:
      "In today's rapidly evolving digital world, Bud-E emerges as an empathetic AI assistant designed for versatile interaction needs. Developed by",
    partOneTwo:
      "in collaboration with the ELLIS Institute Tübingen, Collabora, and the Tübingen AI Center, Bud-E enhances user experience with a focus on empathy, natural interaction, and",
    headingOne: "Redefining AI Interaction",
    partTwoOne:
      "Bud-E is not just an AI assistant; it is a digital companion that supports users through:",
    partTwoTwo:
      "Real-time responses to queries that facilitate immediate assistance.",
    partTwoThree:
      "Emotionally intelligent interactions that recognize the user's emotional state and adapt accordingly.",
    partTwoFour:
      "Maintaining conversation context across sessions, enabling personalized experiences that build over time.",
    partTwoFive:
      "Handling complex multi-speaker scenarios in multiple languages.",
    partTwoSix:
      "Operating on local, consumer-grade hardware, ensuring privacy and accessibility.",
    headingTwo: "Technological Innovation for Education",
    partThreeOne:
      "At the core of Bud-E's development is the pursuit of low latency and maximum conversational naturalness. Through rigorous testing and evaluating various speech-to-text, speech understanding, and text-to-speech models, the team has achieved remarkable responsiveness and quality on devices common in schools.",
    partThreeTwo:
      "Since January 2024, Bud-E has been operating with latencies between 300 and 500 ms, promising near-instant interaction that is crucial to keeping students engaged and supporting educators in real time.",
    headingThree: "Supporting the Education Revolution",
    partFourOne:
      "The development of Bud-E is an ongoing collaboration. We are committed to continuously enhancing its capabilities to better serve students and educators alike. From reducing system requirements and latency to enriching its understanding of conversational nuances, each update aims to make Bud-E an indispensable asset in educational institutions. At the same time, we are building an architecture that enables the technology to be implemented in various educational environments, to scale, and to integrate modules tailored to the specific needs of students and educators in different learning settings.",
    partFourTwo:
      "Are you interested in contributing to the Bud-E project or integrating it into your suite of educational technologies? Then join our",
    partFourThree: "or contact us directly at",
  },
  de: {
    title: "Über Bud-E",
    partOneOne:
      "In der heutigen, sich schnell entwickelnden digitalen Welt tritt Bud-E als empathischer KI-Assistent hervor, der für vielseitige Interaktionsbedürfnisse entwickelt wurde. Entwickelt von",
    partOneTwo:
      "in Zusammenarbeit mit dem ELLIS-Institut Tübingen, Collabora und dem Tübinger KI-Zentrum, verbessert Bud-E das Benutzererlebnis mit einem Schwerpunkt auf Empathie, natürliche Interaktion und",
    headingOne: "KI-Interaktion neu definieren",
    partTwoOne:
      "Bud-E ist nicht nur ein KI-Assistent; es ist ein digitaler Begleiter, der Benutzer unterstützt durch:",
    partTwoTwo:
      "Echtzeit-Antworten auf Anfragen, die sofortige Unterstützung ermöglichen.",
    partTwoThree:
      "Emotional intelligente Interaktionen, die den emotionalen Zustand des Benutzers erkennen und sich entsprechend anpassen.",
    partTwoFour:
      "Beibehaltung des Gesprächskontexts über Sitzungen hinweg, was personalisierte Erfahrungen ermöglicht, die sich im Laufe der Zeit aufbauen.",
    partTwoFive:
      "Bewältigung von komplexen Mehrsprecher-Szenarien in mehreren Sprachen.",
    partTwoSix:
      "Betrieb auf lokaler, verbraucherüblicher Hardware, gewährleistet Datenschutz und Zugänglichkeit.",
    headingTwo: "Technologische Innovation für die Bildung",
    partThreeOne:
      "Im Mittelpunkt der Entwicklung von Bud-E steht das Streben nach geringer Latenz und maximaler Natürlichkeit im Gespräch. Durch rigoroses Testen und Evaluieren verschiedener Sprach-zu-Text-, Sprachverständnis- und Text-zu-Sprach-Modelle hat das Team eine bemerkenswerte Reaktionsfähigkeit und Qualität auf Geräten erreicht, die in Schulen üblich sind.",
    partThreeTwo:
      "Seit Januar 2024 arbeitet Bud-E mit Latenzen zwischen 300 und 500 ms und verspricht eine nahezu sofortige Interaktion, die entscheidend ist, um Schüler engagiert zu halten und Pädagogen in Echtzeit zu unterstützen.",
    headingThree: "Unterstützt die Bildungsrevolution",
    partFourOne:
      "Die Entwicklung von Bud-E ist eine fortwährende Zusammenarbeit. Wir sind darauf bedacht, seine Fähigkeiten kontinuierlich zu verbessern, um Schülern und Pädagogen gleichermaßen besser zu dienen. Von der Reduzierung der Systemanforderungen und Latenz bis zur Bereicherung seines Verständnisses für konversationelle Nuancen zielt jedes Update darauf ab, Bud-E zu einem unverzichtbaren Vermögenswert in Bildungseinrichtungen zu machen. Gleichzeitig erschaffen bauen wir eine Architektur, die es ermöglicht, die Technologie in verschiedenen Bildungsumgebungen zu implementieren, zu skalieren und Module zu integrieren, die auf die spezifischen Bedürfnisse von Schülern und Pädagogen in verschiedenen Lernsettings zugeschnitten sind.",
    partFourTwo:
      "Sind Sie interessiert, am Bud-E Projekt mitzuarbeiten oder es in Ihre Suite von Bildungstechnologien zu integrieren? Dann treten Sie unserem",
    partFourThree: "bei oder kontaktieren Sie uns direkt unter",
  },
};

export const settingsContent: InternalizationContent = {
  en: {
    title: "Settings",
    apiUrlLabel: "LLM API URL (url containing /v1/chat/completions)",
    apiUrlPlaceholder: "Enter API URL",
    apiKeyLabel: "LLM API Key",
    apiKeyPlaceholder: "Enter API Key",
    modelLabel: "LLM Model",
    modelPlaceholder: "Enter Model Name",
    ttsUrlLabel: "TTS API URL",
    ttsUrlPlaceholder: "Enter TTS API URL",
    ttsKeyLabel: "TTS API Key",
    ttsKeyPlaceholder: "Enter TTS API Key",
    ttsModelLabel: "TTS Model",
    ttsModelPlaceholder: "Enter TTS Model Name",
    sttUrlLabel: "STT API URL (url containing /v1/audio/transcriptions)",
    sttUrlPlaceholder: "Enter STT API URL",
    sttKeyLabel: "STT API Key",
    sttKeyPlaceholder: "Enter STT API Key",
    sttModelLabel: "STT Model",
    sttModelPlaceholder: "Enter STT Model Name",
    vlmUrlLabel: "VLM API URL (url containing /v1/chat/completions)",
    vlmUrlPlaceholder: "Enter VLM API URL",
    vlmKeyLabel: "VLM API Key",
    vlmKeyPlaceholder: "Enter VLM API Key",
    vlmModelLabel: "VLM Model",
    vlmModelPlaceholder: "Enter VLM Model Name",
    vlmCorrectionModelLabel: "VLM Correction Model",
    vlmCorrectionModelPlaceholder: "Enter VLM Correction Model Name",
    cancel: "Cancel",
    save: "Save",
    systemPromptLabel: "System Prompt",
    back: "Back",
    universalApiKeyLabel: "Universal API Key",
    universalApiKeyPlaceholder: "Enter your API key",
    advancedSettings: "Advanced Settings",
    lessSettings: "Less Settings",
    chatApiTitle: "Chat API",
    ttsTitle: "Text-to-Speech",
    sttTitle: "Speech-to-Text",
    vlmTitle: "Vision Language Model"
  },
  de: {
    title: "Einstellungen",
    apiUrlLabel: "LLM API URL (URL mit /v1/chat/completions)",
    apiUrlPlaceholder: "API URL eingeben",
    apiKeyLabel: "LLM API Schlüssel",
    apiKeyPlaceholder: "API Schlüssel eingeben",
    modelLabel: "LLM Modell",
    modelPlaceholder: "Modellname eingeben",
    ttsUrlLabel: "TTS API URL",
    ttsUrlPlaceholder: "TTS API URL eingeben",
    ttsKeyLabel: "TTS API Schlüssel",
    ttsKeyPlaceholder: "TTS API Schlüssel eingeben",
    ttsModelLabel: "TTS Modell",
    ttsModelPlaceholder: "TTS Modellname eingeben",
    sttUrlLabel: "STT API URL (URL mit /v1/audio/transcriptions)",
    sttUrlPlaceholder: "STT API URL eingeben",
    sttKeyLabel: "STT API Schlüssel",
    sttKeyPlaceholder: "STT API Schlüssel eingeben",
    sttModelLabel: "STT Modell",
    sttModelPlaceholder: "STT Modellname eingeben",
    vlmUrlLabel: "VLM API URL (URL mit /v1/chat/completions)",
    vlmUrlPlaceholder: "VLM API URL eingeben",
    vlmKeyLabel: "VLM API Schlüssel",
    vlmKeyPlaceholder: "VLM API Schlüssel eingeben",
    vlmModelLabel: "VLM Modell",
    vlmModelPlaceholder: "VLM Modellname eingeben",
    vlmCorrectionModelLabel: "VLM Korrektur Modell",
    vlmCorrectionModelPlaceholder: "VLM Korrektur Modellname eingeben",
    cancel: "Abbrechen",
    save: "Speichern",
    systemPromptLabel: "System Prompt",
    back: "Zurück",
    universalApiKeyLabel: "Universal API-Schlüssel",
    universalApiKeyPlaceholder: "Geben Sie Ihren API-Schlüssel ein",
    advancedSettings: "Erweiterte Einstellungen",
    lessSettings: "Weniger Einstellungen",
    chatApiTitle: "Chat API",
    ttsTitle: "Text-zu-Sprache",
    sttTitle: "Sprache-zu-Text",
    vlmTitle: "Bildverarbeitung"
  },
};
