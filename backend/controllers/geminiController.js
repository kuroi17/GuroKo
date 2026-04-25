import { geminiService } from "../services/geminiService.js";

export const handleGeminiRequest = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    const result = await geminiService.generateResponse(prompt);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(result);
    }
  } catch (error) {
    console.error("Controller Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
