import { Handlers } from "$fresh/server.ts";

const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY") || "";
const GROQ_API_MODEL = Deno.env.get("GROQ_API_MODEL") || "";

export const handler: Handlers = {
  async POST(req) {
    try {
      const formData = await req.formData();
      const audioFile = formData.get("audio") as File;

      if (!audioFile) {
        return new Response("No audio file uploaded", { status: 400 });
      }

      // Create new FormData for the Groq API request
      const groqFormData = new FormData();
      groqFormData.append("file", audioFile);
      groqFormData.append("model", GROQ_API_MODEL);

      // Make the fetch request to Groq API
      const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: groqFormData,
      });

      if (!response.ok) {
        throw new Error(`Groq API responded with status: ${response.status}`);
      }

      const transcription = await response.json();

      return new Response(transcription.text, {
        status: 200,
        headers: { "Content-Type": "application/text" },
      });
    } catch (error) {
      console.error("Error transcribing audio file:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
