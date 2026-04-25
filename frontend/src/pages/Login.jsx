import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // 'teacher' or 'student'
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleBackToRoleSelection = () => {
    setRole(null);
    setEmail('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    if (role === 'teacher') {
      navigate('/teacher');
    } else if (role === 'student') {
      navigate('/student');
    }
  };

  // Role Selection Screen
  if (role === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Offline Banner */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 mb-6">
              <span className="text-sm text-blue-700 font-medium">☁️ Ready to work offline</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-3">Maligayang Pagdating sa GuroKo</h1>
            <p className="text-gray-600 text-lg">Pumili ng iyong papel upang magpatuloy sa iyong karanasan sa pag-aaral.</p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Teacher Card */}
            <button
              onClick={() => handleRoleSelect('teacher')}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600 group"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ako ay Guro</h2>
              <p className="text-gray-600 mb-6">Pamahalaan ang iyong mga klase, i-encode ang mga marka, at i-access ang mga opisyal na mapagkukunan ng DepEd.</p>
              <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Magsimula Narito →
              </div>
            </button>

            {/* Student Card */}
            <button
              onClick={() => handleRoleSelect('student')}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-600 group"
            >
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition">
                <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ako ay Mag-aaral</h2>
              <p className="text-gray-600 mb-6">Tingnan ang iyong mga takdang-aralin, makipag-ugnayan sa iyong mga guro, at tuklasin ang mga bagong aralin.</p>
              <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Pumasok sa Silid-Aralan →
              </div>
            </button>
          </div>

          {/* Security Badges */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span className="text-sm text-gray-600">OFFICIAL DEPED<br /><strong>LIGTAS Platform</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span className="text-sm text-gray-600">DATA SECURITY<br /><strong>Encrypted & Secure</strong></span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span><strong>REPUBLIKA NG PILIPINAS</strong><br />Kagawaran ng Edukasyon</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">Security Standards</a>
              <a href="#" className="hover:text-blue-600">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Teacher Login Screen
  if (role === 'teacher') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="bg-white rounded-t-2xl p-8 border-b-2 border-gray-100 text-center">
            <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">GuroKo</h1>
            <p className="text-gray-600">Teacher Portal Login</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-b-2xl p-8 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  DepEd Email / Username
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="juan.delacruz@deped.gov.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Password
                  </label>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Stay Logged In */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="stayLoggedIn"
                  checked={stayLoggedIn}
                  onChange={(e) => setStayLoggedIn(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-gray-300 cursor-pointer"
                />
                <label htmlFor="stayLoggedIn" className="text-sm text-gray-700 cursor-pointer">
                  Stay Logged In
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                Mag-login 🔐
              </button>
            </form>

            {/* Support Link */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have access?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Contact School Admin
              </button>
            </div>

            {/* Back Button */}
            <button
              onClick={handleBackToRoleSelection}
              className="w-full mt-4 text-blue-600 hover:text-blue-700 font-semibold py-2 transition"
            >
              ← Back to Role Selection
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Student Login Screen
  if (role === 'student') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration */}
            <div className="text-white hidden lg:block">
              <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-4">Handa ka na bang matuto, Bayani?</h2>
                <p className="text-blue-100 text-lg mb-8">
                  I-access ang iyong mga aralin at gawain sa kahit saan, kahit kailan.
                </p>
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h1 className="text-3xl font-bold text-blue-900 mb-2">Mag-login sa iyong account</h1>
              <p className="text-gray-600 mb-8">Gamitin ang iyong LRN at kaarawan.</p>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* LRN Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Learner Reference Number (LRN)
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Halimbawa: 123456789012"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Birth Date Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Birth Date (Kaarawan)
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </svg>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition duration-200"
                >
                  Pumasok na!
                </button>
              </form>

              {/* Help Links */}
              <div className="mt-6 space-y-3 text-center text-sm">
                <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer w-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  <span className="font-semibold">Paano mag-login?</span>
                </button>
                <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer w-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                  <span className="font-semibold">Nakalimutan ang LRN?</span>
                </button>
              </div>

              {/* Back Button */}
              <button
                onClick={handleBackToRoleSelection}
                className="w-full mt-6 text-blue-600 hover:text-blue-700 font-semibold py-2 transition"
              >
                ← Back to Role Selection
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-sm border-t border-white border-opacity-20 p-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-white">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span><strong>REPUBLIKA NG PILIPINAS</strong><br />Kagawaran ng Edukasyon</span>
            </div>
            <div className="flex gap-4 text-opacity-80 text-sm">
              <span className="flex items-center gap-1">🔒 LIGTAS NA KONEKSYON</span>
              <span className="flex items-center gap-1">✓ DATA PROTECTED</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
