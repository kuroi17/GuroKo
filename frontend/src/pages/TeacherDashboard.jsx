import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BarChart3, Users, BookOpen, Settings, LogOut, Bell, Zap } from 'lucide-react';

const TeacherDashboard = () => {
  const [expandedSubject, setExpandedSubject] = useState('mathematics');
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'classes'

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '📐',
      sections: 2,
      students: 85,
      classes: [
        {
          id: 1,
          grade: 'Grade 4',
          section: 'Rizal',
          schedule: '08:00 AM - 09:00 AM',
          attendance: 98,
          assignments: 12,
          status: 'On Track'
        },
        {
          id: 2,
          grade: 'Grade 5',
          section: 'Bonifacio',
          schedule: '10:30 AM - 11:30 AM',
          attendance: 92,
          assignments: 10,
          status: 'Reviewing'
        }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      sections: 3,
      students: 120,
      classes: []
    },
    {
      id: 'filipino',
      name: 'Filipino',
      icon: '🌴',
      sections: 1,
      students: 42,
      classes: []
    }
  ];

  const classData = {
    averageGrade: 88.4,
    gradeChange: '+2.1%',
    passRate: 94.5,
    passStudents: 35,
    totalStudents: 37,
    outstanding: 12,
    syncStatus: 'All Synced',
    lastUpdated: '5m ago'
  };

  const students = [
    { id: '2023-00412', initials: 'AA', name: 'Abad, Antonio G.', q1: 89, q2: 91, q3: '—', final: 90.0, status: 'PASSED' },
    { id: '2023-00415', initials: 'BC', name: 'Bautista, Clara M.', q1: 94, q2: 96, q3: '—', final: 95.0, status: 'PASSED' },
    { id: '2023-00421', initials: 'DR', name: 'Dela Rosa, Juan P.', q1: 74, q2: 78, q3: '—', final: 76.0, status: 'NEAR PASS' },
    { id: '2023-00428', initials: 'GM', name: 'Garcia, Maria S.', q1: 98, q2: 97, q3: '—', final: 97.5, status: 'PASSED' },
    { id: '2023-00432', initials: 'LM', name: 'Luna, Mateo V.', q1: 68, q2: 72, q3: '—', final: 70.0, status: 'AT RISK' },
    { id: '2023-00440', initials: 'RR', name: 'Reyes, Ricardo F.', q1: 85, q2: 84, q3: '—', final: 84.5, status: 'PASSED' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'PASSED':
        return 'bg-green-100 text-green-700';
      case 'NEAR PASS':
        return 'bg-yellow-100 text-yellow-700';
      case 'AT RISK':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getInitialsBg = (initials) => {
    const colors = {
      'AA': 'bg-purple-200 text-purple-700',
      'BC': 'bg-yellow-200 text-yellow-700',
      'DR': 'bg-red-200 text-red-700',
      'GM': 'bg-blue-200 text-blue-700',
      'LM': 'bg-gray-300 text-gray-700',
      'RR': 'bg-indigo-200 text-indigo-700'
    };
    return colors[initials] || 'bg-gray-200 text-gray-700';
  };

  // Dashboard View
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-2 font-bold">GK</div>
              <div>
                <h1 className="font-bold text-gray-900">GuroKo Portal</h1>
                <p className="text-sm text-gray-600">Department of Education</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
                ● Synced
              </span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Zap className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                JD
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 bg-white border-r border-gray-200 p-6 min-h-screen">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Dashboard
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Lesson Plans
                </button>
              </nav>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Subjects</h2>
                  <p className="text-gray-600">
                    Manage your classroom materials, student progress, and daily lesson logs across all assigned grade levels.
                  </p>
                </div>
                <div className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
                  SY 2023-2024
                </div>
              </div>
            </div>

            {/* Subjects List */}
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  {/* Subject Header */}
                  <button
                    onClick={() => setExpandedSubject(expandedSubject === subject.id ? null : subject.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{subject.icon}</div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">{subject.name}</h3>
                        <p className="text-sm text-gray-600">{subject.sections} Sections • {subject.students} Students</p>
                      </div>
                    </div>
                    {expandedSubject === subject.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedSubject === subject.id && subject.classes.length > 0 && (
                    <div className="bg-gray-50 border-t border-gray-200 p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {subject.classes.map((cls) => (
                          <button
                            key={cls.id}
                            onClick={() => setCurrentView('classes')}
                            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition text-left"
                          >
                            <h4 className="font-bold text-gray-900 mb-1">{cls.grade} - {cls.section}</h4>
                            <p className="text-sm text-gray-600 mb-4">Class Schedule: {cls.schedule}</p>
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <p className="text-xs text-gray-600 font-semibold">ATTENDANCE</p>
                                <p className="text-lg font-bold text-gray-900">{cls.attendance}%</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 font-semibold">ASSIGNMENTS</p>
                                <p className="text-lg font-bold text-gray-900">{cls.assignments}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 font-semibold">STATUS</p>
                                <p className={`text-lg font-bold ${cls.status === 'On Track' ? 'text-green-600' : 'text-yellow-600'}`}>
                                  {cls.status}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Class Progress Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* Progress Chart */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-6">Class Progress Overview</h3>
                <div className="flex items-end justify-around h-64">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, idx) => (
                    <div key={day} className="flex flex-col items-center gap-2">
                      <div
                        className={`w-12 rounded-lg transition ${
                          day === 'WED' ? 'bg-yellow-400 h-32' : 'bg-blue-600 h-40'
                        }`}
                      />
                      <span className="text-xs font-semibold text-gray-600">{day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher's Spotlight */}
              <div className="bg-blue-600 text-white rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 -mr-20 -mt-20" />
                <h3 className="font-bold text-lg mb-2 relative z-10">Teacher's Spotlight</h3>
                <p className="text-blue-100 text-sm mb-6 relative z-10">
                  You've completed 95% of your lesson plans for this week. Great job, Teacher Sarah!
                </p>
                <div className="bg-blue-700 bg-opacity-50 rounded-lg p-4 relative z-10">
                  <p className="text-xs text-blue-100 font-semibold mb-1">NEXT ACTIVITY</p>
                  <p className="font-bold text-white">Parent-Teacher Meeting</p>
                  <p className="text-sm text-blue-100">2:00 PM • Room 302</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-yellow-400 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center font-bold hover:bg-yellow-300 transition">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Classes/Grading View
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white rounded-lg p-2 font-bold">GK</div>
            <div>
              <h1 className="font-bold text-gray-900">GuroKo Portal</h1>
              <p className="text-sm text-gray-600">Department of Education</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
              ● Synced
            </span>
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              JD
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 bg-white border-r border-gray-200 p-6 min-h-screen">
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Academic Year</h3>
            <p className="text-sm font-semibold text-gray-900">AY 2023-2024</p>
          </div>

          <nav className="space-y-2 mb-8">
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Classes
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Students
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Reports
            </button>
          </nav>

          <div className="border-t border-gray-200 pt-6">
            <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Classes</span> / <span>Grade 4 - Rizal</span> / <span className="font-semibold text-gray-900">Mathematics</span>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mathematics</h1>
            <p className="text-gray-600">Grade 4 - Rizal • Section A</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition">
              ⊕ Input New Grades
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition">
              ↓ Export Record
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-xs text-gray-600 font-semibold mb-2">AVERAGE GRADE</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{classData.averageGrade}%</p>
              <p className="text-sm text-green-600 font-semibold">{classData.gradeChange} from last quarter</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-xs text-gray-600 font-semibold mb-2">PASS RATE</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{classData.passRate}%</p>
              <p className="text-sm text-gray-600">{classData.passStudents} of {classData.totalStudents} students passing</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-xs text-gray-600 font-semibold mb-2">OUTSTANDING</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{classData.outstanding}</p>
              <p className="text-sm text-gray-600">Students above 95%</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-xs text-gray-600 font-semibold mb-2">SYNC STATUS</p>
              <p className="text-lg font-bold text-green-600 mb-1">{classData.syncStatus}</p>
              <p className="text-sm text-gray-600">Last updated {classData.lastUpdated}</p>
            </div>
          </div>

          {/* Student Roster & Grading Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Student Roster & Grading</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                  ⊕ Filter
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                  ⇅ Sort
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">STUDENT ID</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">FULL NAME</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">QUARTER 1</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">QUARTER 2</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">QUARTER 3</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">FINAL GRADE</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">STATUS</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-600">{student.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getInitialsBg(student.initials)}`}>
                            {student.initials}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{student.q1}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{student.q2}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{student.q3}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{student.final}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-gray-600 hover:text-gray-900 transition">✎</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-600">
              <span>Showing 6 of 37 students</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">←</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded font-semibold">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">3</button>
                <span className="px-2 py-1">...</span>
                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">7</button>
                <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition">→</button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-xs text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            CONNECTED TO DEPED CLOUD
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
