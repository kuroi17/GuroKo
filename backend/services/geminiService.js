import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config/env.js";

class GeminiService {
  constructor() {
    if (!config.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set in environment variables");
    }
    this.client = new GoogleGenerativeAI(config.GEMINI_API_KEY);
    this.model = this.client.getGenerativeModel({ model: "gemini-pro" });
  }

  async generateResponse(userPrompt) {
    try {
      if (!userPrompt || typeof userPrompt !== "string") {
        throw new Error("Invalid prompt: must be a non-empty string");
      }

      const result = await this.model.generateContent(userPrompt);
      const responseText = result.response.text();

      return {
        success: true,
        response: responseText,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Gemini API Error:", error);
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}

// Create singleton instance
export const geminiService = new GeminiService();
