import { sendPromptToGemini } from './apiClient';

/**
 * Generates a structured lesson plan and quiz using Gemini AI via the backend.
 * 
 * @param {Object} params 
 * @param {string} params.gradeLevel
 * @param {string} params.subject
 * @param {string} params.topic
 * @param {string} params.language
 */
export const generateLessonWithAI = async ({ gradeLevel, subject, topic, language }) => {
  const prompt = `
    As an expert educator, generate a structured lesson plan in ${language} for Grade ${gradeLevel} ${subject} on the topic: "${topic}".
    
    The output must be a valid JSON object with the following structure:
    {
      "title": "Clear lesson title",
      "objectives": ["Objective 1", "Objective 2"],
      "lesson": "Detailed lesson content suitable for students",
      "activity": "Instructions for a hands-on activity",
      "quiz": [
        {
          "question": "Question text",
          "choices": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "answer": "The correct choice"
        }
      ]
    }
    
    Ensure the content is age-appropriate and the JSON is perfectly formatted.
  `;

  try {
    const result = await sendPromptToGemini(prompt);
    
    if (!result.success) {
      throw new Error(result.error || "Failed to generate lesson");
    }

    // The backend might return a string that we need to parse if it's not already parsed
    let parsedResponse = result.response;
    if (typeof result.response === 'string') {
      // Basic cleaning in case Gemini wraps in ```json ... ```
      const cleanJson = result.response.replace(/```json|```/g, '').trim();
      parsedResponse = JSON.parse(cleanJson);
    }

    return {
      success: true,
      data: {
        ...parsedResponse,
        gradeLevel,
        subject,
        topic,
        language
      }
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
