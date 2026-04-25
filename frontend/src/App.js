import React, { useState } from "react";
import { sendPromptToGemini } from "./utils/apiClient";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse("");
    setLoading(true);

    try {
      const result = await sendPromptToGemini(prompt);

      if (result.success) {
        setResponse(result.response);
      } else {
        setError(result.error || "Failed to get response");
      }
    } catch (err) {
      setError(err.message || "Error communicating with backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 Hackathon AI
          </h1>
          <p className="text-gray-600 mb-8">
            Powered by Gemini AI + React + Node.js + Supabase
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Prompt
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask anything..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              {loading ? "⏳ Loading..." : "✨ Send to Gemini"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">❌ Error</p>
              <p>{error}</p>
            </div>
          )}

          {response && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-gray-800 rounded-lg">
              <p className="font-semibold text-green-700 mb-2">✅ Response</p>
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium">Frontend</p>
                <ul className="text-xs">
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Supabase Client</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Backend</p>
                <ul className="text-xs">
                  <li>Node.js + Express</li>
                  <li>Gemini API</li>
                  <li>Supabase Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
