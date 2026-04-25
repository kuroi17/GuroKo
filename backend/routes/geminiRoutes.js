import express from "express";
import { handleGeminiRequest } from "../controllers/geminiController.js";

const router = express.Router();

// POST /api/gemini - Send prompt to Gemini AI
router.post("/gemini", handleGeminiRequest);

export default router;
