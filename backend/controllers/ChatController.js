import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatController = async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("No API key provided");
  }

  const prompt = req.body?.prompt;
  console.log(prompt);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const concatenatedPrompt = `If the next sentence is a question related to health then reply with appropriated solutions as answers otherwise send a message to ask only about health. Question starts: ${prompt}`;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(concatenatedPrompt);
    const response = result.response;
    const textResponse = response?.candidates[0]?.content?.parts[0]?.text;
    console.log(textResponse);
    return res.json({
      success: true,
      response,
      text: textResponse,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};

export default ChatController;
