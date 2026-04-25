import React, { useState } from 'react';
import { Bell, HelpCircle, Settings, LogOut, ChevronRight } from 'lucide-react';

const StudentDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'tasks', 'ai-assistant'


  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      icon: '📐',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      modules: 4,
      progress: 75,
      progressColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Science',
      icon: '🔬',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      modules: 2,
      progress: 50,
      progressColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Filipino',
      icon: '🌴',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      modules: 0,
      progress: 100,
      progressColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'English',
      icon: '📚',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      modules: 1,
      progress: 25,
      progressColor: 'bg-yellow-500'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'FILIPINO: Pagsulat ng Maikling Kwento',
      subject: 'Filipino',
      deadline: 'Today, 5:00 PM',
      status: 'MALAPIT NA',
      description: 'Sulumit ng kwentong may 500 na salita tungkol sa kalikasan.',
      priority: 'high'
    },
    {
      id: 2,
      title: 'MATHEMATICS: Division of Whole Numbers',
      subject: 'Mathematics',
      deadline: 'Aug 23, 2024',
      status: 'NAKABITIN',
      description: 'Sagutan ang mga pagsasanay sa pahina 45-50 ng iyong module.',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'SCIENCE: The Water Cycle',
      subject: 'Science',
      deadline: 'Submitted on: Aug 18, 2024',
      status: 'TAPOS NA',
      description: 'Module 3 Assessment: Drawing the 4 stages of water cycle.',
      priority: 'low'
    }
  ];

  const aiSessions = [
    { id: 1, title: 'Math: Fractions...', timestamp: 'Recent' },
    { id: 2, title: 'Science Quiz prep', timestamp: '2 hours ago' }
  ];

  const aiResources = [
    { id: 1, title: 'E-Textbooks', icon: '📖' },
    { id: 2, title: 'Study Plan', icon: '📋' },
    { id: 3, title: 'Feedback', icon: '💬' }
  ];

  const getTaskStatusColor = (status) => {
    switch (status) {
      case 'MALAPIT NA':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'NAKABITIN':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'TAPOS NA':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getTaskIcon = (status) => {
    switch (status) {
      case 'MALAPIT NA':
        return '🚨';
      case 'NAKABITIN':
        return '⏱️';
      case 'TAPOS NA':
        return '✓';
      default:
        return '•';
    }
  };

  // Main Dashboard View
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-2 font-bold">GK</div>
              <span className="font-bold text-gray-900">GuroKo</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
                ● Synced & Working Online
              </span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <HelpCircle className="w-5 h-5 text-gray-600" />
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
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-600 font-semibold">Academic Year 2024</p>
              </div>
              <h3 className="font-bold text-gray-900">Kamusta, Juan! 👋</h3>
              <p className="text-sm text-gray-600">Grade 4 - Narra</p>
            </div>

            <nav className="space-y-2 mb-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold flex items-center gap-2"
              >
                <span>📊</span> Dashboard
              </button>
              <button
                onClick={() => setCurrentView('tasks')}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <span>📋</span> Tasks
              </button>
              <button
                onClick={() => setCurrentView('ai-assistant')}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <span>🤖</span> AI Assistant
              </button>
            </nav>

            <div className="border-t border-gray-200 pt-6 space-y-2">
              <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2 text-sm">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 text-sm">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Kamusta, Juan! 👋</h1>
              <p className="text-gray-600">Welcome back to your learning journey.</p>
            </div>

            {/* Motivational Banner */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 -mr-20 -mt-20" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">May tanong ka ba sa iyong assignment?</h2>
                <p className="text-blue-100 mb-6">
                  Nandito ako para tulungan ka sa iyong mga aralin ngayong araw!
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentView('ai-assistant')}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition flex items-center gap-2"
                  >
                    📚 Magtanong sa AI
                  </button>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition">
                    Alamin ang Iyong Progress
                  </button>
                </div>
              </div>
            </div>

            {/* Subjects Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ang Iyong Mga Aralin</h2>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  Tingnan lahat <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center text-2xl mb-4`}>
                      {subject.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{subject.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {subject.modules} {subject.modules === 1 ? 'Gawain' : 'Gawain'}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${subject.progressColor} h-2 rounded-full transition`}
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Subject Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Mathematics 4</h3>
                  <p className="text-gray-600">Ika-apat na Baitang • Quarter 2</p>
                </div>
                <button className="text-gray-600 hover:text-gray-900 text-lg">
                  Bumalik sa Lahat
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Modules Section */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    📚 Mga Modyul
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">📄</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900">Modyul 3: Multiplication of Whole Numbers</h5>
                          <p className="text-sm text-gray-600">PDF • 4.2 MB</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">⬇</button>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition cursor-pointer opacity-50">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">🔒</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900">Modyul 4: Division Concepts</h5>
                          <p className="text-sm text-gray-600">Pararing na</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activities Section */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    ✓ Gawain (Activities)
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">📝</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900">Pagsasanay 3.1</h5>
                          <p className="text-sm text-red-600 font-semibold">Due: Bukas, 5:00 PM</p>
                          <p className="text-xs text-gray-600 mt-1">KAILANGAN TAPUSIN</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">✓</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900">Pagsasanay 3.2</h5>
                          <p className="text-sm text-green-600 font-semibold">Naisumite noong Nob 12</p>
                          <p className="text-xs text-gray-600 mt-1">TAPOS NA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tasks & Deadlines View
  if (currentView === 'tasks') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-2 font-bold">GK</div>
              <span className="font-bold text-gray-900">GuroKo</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                JD
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 bg-white border-r border-gray-200 p-6 min-h-screen">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-600 font-semibold">Malakas Masigasig</p>
                <p className="text-sm font-bold text-gray-900">Grade 10 - Section A</p>
              </div>
            </div>

            <nav className="space-y-2 mb-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <span>📊</span> Dashboard
              </button>
              <button
                onClick={() => setCurrentView('tasks')}
                className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold flex items-center gap-2"
              >
                <span>📋</span> Tasks
              </button>
              <button
                onClick={() => setCurrentView('ai-assistant')}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2"
              >
                <span>🤖</span> AI Assistant
              </button>
              <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <span>📅</span> Calendar
              </button>
            </nav>

            <div className="border-t border-gray-200 pt-6">
              <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2">
                ⊕ New Inquiry
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search tasks, modules..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition">
                  ⊕ Filter
                </button>
                <button className="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition">
                  ⬇ Download ang Report
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 inline-block">
                <span className="text-sm text-blue-700 font-semibold">📅 Agosto 2024</span>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-7 gap-4 mb-6">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <div key={day} className="text-center">
                    <p className="text-xs font-bold text-gray-600 uppercase">{day}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-4">
                {[19, 20, 21, 22, 23, 24, 25].map((date) => (
                  <button
                    key={date}
                    className={`p-4 rounded-lg text-center font-bold transition ${
                      date === 21
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Tasks List */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mga Tatapusin</h2>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-white rounded-lg border-2 p-6 hover:shadow-md transition cursor-pointer ${
                      task.priority === 'high' ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{getTaskIcon(task.status)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900 text-lg">{task.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTaskStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{task.deadline}</span>
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">→</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivational Section */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-10 -mr-20 -mt-20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Mahusay, Malakas!</h3>
                <p className="text-blue-100 mb-4">
                  Nakatapas ka na ng 85% ng iyong mga gawain para sa buwan ng Agosto. Panatilihin ang sipag!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-700 bg-opacity-50 rounded-lg p-4">
                    <p className="text-xs text-blue-100 font-semibold">CONSISTENCY</p>
                    <p className="text-2xl font-bold text-white">12 Araw</p>
                  </div>
                  <div className="bg-blue-700 bg-opacity-50 rounded-lg p-4">
                    <p className="text-xs text-blue-100 font-semibold">MODULES CLEARED</p>
                    <p className="text-2xl font-bold text-white">8 / 10</p>
                  </div>
                </div>
              </div>
              <button className="absolute bottom-4 right-4 bg-yellow-400 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center font-bold hover:bg-yellow-300 transition">
                💡
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI Assistant View
  if (currentView === 'ai-assistant') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-900">GuroKo AI Assistant</span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">● SYNCED</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <HelpCircle className="w-5 h-5 text-gray-600" />
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

        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="w-56 bg-white border-r border-gray-200 p-6 overflow-y-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-6 transition">
              ⊕ New Session
            </button>

            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">CHAT HISTORY</h3>
              <div className="space-y-2">
                {aiSessions.map((session) => (
                  <button
                    key={session.id}
                    className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm border-l-2 border-transparent hover:border-blue-600 transition"
                  >
                    <p className="font-semibold truncate">{session.title}</p>
                    <p className="text-xs text-gray-500">{session.timestamp}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">RESOURCES</h3>
              <div className="space-y-2">
                {aiResources.map((resource) => (
                  <button
                    key={resource.id}
                    className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">{resource.icon}</span>
                    {resource.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs text-gray-700 font-semibold">Student AI</p>
                <p className="text-xs text-gray-600">Learning Assistant</p>
              </div>
              <button className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm mt-4 flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8">
              {/* Session Banner */}
              <div className="bg-yellow-300 text-gray-900 rounded-full px-4 py-2 inline-block mb-8 font-bold">
                Nagsimula ang session: Math Homework
              </div>

              {/* AI Message */}
              <div className="mb-6 flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  👨
                </div>
                <div className="bg-blue-100 rounded-2xl p-6 max-w-2xl">
                  <p className="font-bold text-blue-900 mb-2">GUROKO AI ASSISTANT</p>
                  <p className="text-gray-800">
                    Oo naman! Huwag kang mag-atala, madali lang iyong kapag nakuha mo ang pattern. Halimbawa, subukan nating pagsahin ang:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 my-4 border-l-4 border-blue-600">
                    <p className="text-gray-900 font-semibold">1/2 + 1/3 = ?</p>
                  </div>
                  <p className="text-gray-800">
                    Ang unang hakbang ay hanapin ang <strong>Least Common Denominator (LCD)</strong>. Ano sa tingin mo ang LCD ng 2 at 3?
                  </p>
                  <div className="mt-4 space-y-2">
                    <button className="block text-left px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition text-blue-600 font-semibold">
                      Tulungan mo ako sa Math
                    </button>
                    <button className="block text-left px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition text-blue-600 font-semibold">
                      Ipaliwan ang Water Cycle
                    </button>
                    <button className="block text-left px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition text-blue-600 font-semibold">
                      Tips sa pag-aaral
                    </button>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="mb-6 flex gap-4 justify-end">
                <div className="bg-blue-600 text-white rounded-2xl p-6 max-w-2xl">
                  <p className="text-right">Ang LCD ba nila ay 6?</p>
                </div>
                <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  IKAW
                </div>
              </div>

              {/* AI Response */}
              <div className="mb-6 flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  👨
                </div>
                <div className="bg-blue-100 rounded-2xl p-6 max-w-2xl">
                  <p className="font-bold text-blue-900 mb-2">GUROKO AI ASSISTANT</p>
                  <p className="text-gray-800">
                    Tama! Napakahusay. Dahil 6 ang ating LCD, kailangan nating i-multiply:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 my-4 border-l-4 border-blue-600">
                    <p className="text-gray-900 font-semibold">Tama! Napakahusay. Dahil 6 ang ating LCD, kailangan nating i-multiply:</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition text-gray-600 font-semibold">
                    Bigyan mo ng clue
                  </button>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 p-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Itanong mo kay GuroKo..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold transition">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StudentDashboard;
