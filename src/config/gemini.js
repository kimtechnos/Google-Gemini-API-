import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyBJaw44XDNjHXFoB50aNzEwP8Ntw9mIpLM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt, retries = 3, delay = 3000) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  for (let i = 0; i < retries; i++) {
    try {
      const result = await chatSession.sendMessage(prompt);
      const response = result.response;
      console.log(response.text());
      return response.text();
    } catch (error) {
      if (error.message.includes("429")) {
        console.warn(`Rate limit hit, retrying in ${delay / 1000} seconds...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("Error:", error);
        throw error;
      }
    }
  }

  throw new Error("Max retries reached.");
}

export default run;
