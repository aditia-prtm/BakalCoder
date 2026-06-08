import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import ProblemSet from './pages/ProblemSet';
import Leaderboard from './pages/Leaderboard';
import { AsteriskSquare } from 'lucide-react';

function App() {
  const [user, setUser] = useState(null);

  // Load user dari localStorage saat aplikasi pertama kali dijalankan
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('user', username);   // Simpan ke localStorage
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');         // Hapus dari localStorage
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        <Routes>
          {/* Home */}
          <Route 
            path="/" 
            element={<HomePage user={user} />} 
          />

          {/* Login */}
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/courses" replace /> : 
              <LoginPage onLogin={handleLogin} />
            } 
          />

          {/* Protected Routes */}
          <Route 
            path="/courses" 
            element={
              user ? (
                <>
                  <Navbar user={user} onLogout={handleLogout} />
                  <div className="w-full">
                    <Courses />
                  </div>
                </>
              ) : <Navigate to="/login" replace />
            } 
          />

          <Route 
            path="/problems" 
            element={
              user ? (
                <>
                  <Navbar user={user} onLogout={handleLogout} />
                  <div className="w-full">
                    <ProblemSet />
                  </div>
                </>
              ) : <Navigate to="/login" replace />
            } 
          />

          <Route 
            path="/leaderboard" 
            element={
              user ? (
                <>
                  <Navbar user={user} onLogout={handleLogout} />
                  <div className="w-full">
                    <Leaderboard />
                  </div>
                </>
              ) : <Navigate to="/login" replace />
            } 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;