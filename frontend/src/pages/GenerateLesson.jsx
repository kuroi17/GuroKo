import React, { useState } from 'react';
import { generateLessonWithAI } from '../services/geminiService';
import { saveLessonLocally } from '../services/offlineDB';

const GenerateLesson = () => {
  const [formData, setFormData] = useState({
    gradeLevel: '1',
    subject: '',
    topic: '',
    language: 'English'
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateLessonWithAI(formData);
      if (result.success) {
        setGenerated(result.data);
        await saveLessonLocally(result.data);
        alert("Lesson generated and saved locally!");
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      alert("Unexpected error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">✨ AI Lesson Generator</h1>
      
      {!generated ? (
        <form onSubmit={handleGenerate} className="space-y-4 bg-white p-6 shadow rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Grade Level</label>
            <select 
              className="w-full border p-2 rounded"
              value={formData.gradeLevel}
              onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
            >
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(g => <option key={g} value={g}>Grade {g}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input 
              type="text" 
              className="w-full border p-2 rounded" 
              placeholder="e.g. Science, Mathematics"
              required
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Topic</label>
            <input 
              type="text" 
              className="w-full border p-2 rounded" 
              placeholder="e.g. Water Cycle, Solar System"
              required
              value={formData.topic}
              onChange={(e) => setFormData({...formData, topic: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select 
              className="w-full border p-2 rounded"
              value={formData.language}
              onChange={(e) => setFormData({...formData, language: e.target.value})}
            >
              <option>English</option>
              <option>Filipino</option>
              <option>Mother Tongue</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Generating Lesson Plan..." : "Generate Lesson"}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-bold mb-2">{generated.title}</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600">Objectives:</h3>
              <ul className="list-disc ml-5">
                {generated.objectives.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
            <div className="prose max-w-none">
              <h3 className="font-semibold text-blue-600">Lesson Content:</h3>
              <p className="whitespace-pre-wrap">{generated.lesson}</p>
            </div>
          </div>
          <button 
            onClick={() => setGenerated(null)}
            className="text-blue-600 font-semibold"
          >
            ← Generate another one
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateLesson;
