import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini Client
// Note: In a real production build, ensure process.env.API_KEY is defined.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Virtual Assistant for the National Science and Technology Fund of Mongolia (Үндэсний Шинжлэх ухаан, технологийн сан).
Your role is to help researchers, students, and the public find information about grants, funding regulations, and scientific projects.
The user might ask in Mongolian, Russian, or English. Reply in the same language as the user.
Keep answers concise, professional, and helpful.
If you don't know the specific details of a real-time grant, explain that you are a demo assistant and guide them to the 'News' section.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return result.text || "Уучлаарай, би хариулж чадсангүй. Дахин оролдоно уу."; // Sorry, I couldn't answer. Please try again.
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Connection failed");
  }
};