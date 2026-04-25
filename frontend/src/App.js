import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LayoutDashboard, BookOpen, PenTool, GraduationCap } from "lucide-react";

import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import GenerateLesson from "./pages/GenerateLesson";
import MaterialsLibrary from "./pages/MaterialsLibrary";

// Initialize background sync service
import "./services/syncService";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center sticky top-0 z-10">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">GuroKo</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/teacher" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Teacher</Link>
            <Link to="/student" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Student</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<HomeMenu />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/generate" element={<GenerateLesson />} />
            <Route path="/library" element={<MaterialsLibrary />} />
          </Routes>
        </main>

        {/* Mobile Bottom Nav (for easier use on low-end devices) */}
        <div className="md:hidden bg-white border-t flex justify-around py-3 sticky bottom-0">
          <Link to="/teacher" className="flex flex-col items-center text-gray-500">
            <LayoutDashboard size={20} />
            <span className="text-[10px] mt-1">Dashboard</span>
          </Link>
          <Link to="/generate" className="flex flex-col items-center text-blue-600">
            <PenTool size={20} />
            <span className="text-[10px] mt-1">Generate</span>
          </Link>
          <Link to="/library" className="flex flex-col items-center text-gray-500">
            <BookOpen size={20} />
            <span className="text-[10px] mt-1">Library</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}

function HomeMenu() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Mabuhay, Guro! 👋</h1>
        <p className="opacity-90">Ready to save 2 hours of work today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/generate" className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition group">
          <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition">
            <PenTool className="text-orange-600" />
          </div>
          <h2 className="text-xl font-bold mb-1">Generate Lesson</h2>
          <p className="text-gray-500 text-sm">Create AI-powered lesson plans and quizzes instantly.</p>
        </Link>

        <Link to="/library" className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition group">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
            <BookOpen className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold mb-1">Materials Library</h2>
          <p className="text-gray-500 text-sm">Access all your created lessons even without internet.</p>
        </Link>
      </div>
    </div>
  );
}

export default App;
