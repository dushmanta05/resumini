import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatController = async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error('No API key provided');
    }
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const prompt = "If the next sentence is a question related to health then reply with appropriated solutions as answers otherwise send a message to ask only about health. Question starts: What are car keys";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = result.response;

        console.log(response?.candidates[0]?.content?.parts[0]?.text)
        return res.json({
            success: true,
            response: response
        })
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        })
    }
};

export default ChatController;  