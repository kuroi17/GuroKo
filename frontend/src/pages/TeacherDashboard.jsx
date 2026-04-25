import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold">Recent Materials</h2>
          <p className="text-gray-500">No materials created yet.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold">Student Submissions</h2>
          <p className="text-gray-500">No submissions yet.</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
