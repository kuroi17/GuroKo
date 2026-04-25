import React, { useEffect, useState } from 'react';
import { getLocalLessons } from '../services/offlineDB';

const MaterialsLibrary = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const localData = await getLocalLessons();
      setLessons(localData);
    };
    fetchLessons();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📚 Materials Library</h1>
      
      {lessons.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
          <p className="text-gray-500">No lessons found. Generate one to see it here!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white p-4 shadow rounded-lg border-l-4 border-blue-500">
              <h2 className="font-bold text-lg mb-1 truncate">{lesson.title}</h2>
              <div className="text-xs text-gray-500 mb-3 space-x-2">
                <span>Grade {lesson.gradeLevel}</span>
                <span>•</span>
                <span>{lesson.subject}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {lesson.lesson}
              </p>
              <button className="text-blue-600 text-sm font-semibold hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MaterialsLibrary;
