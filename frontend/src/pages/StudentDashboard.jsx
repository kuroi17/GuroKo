import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-2">Available Lessons</h2>
        <p className="text-gray-500">No lessons available offline.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
