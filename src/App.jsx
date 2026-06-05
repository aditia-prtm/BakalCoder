import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Courses from './pages/Courses';
import ProblemSet from './pages/ProblemSet';
import Leaderboard from './pages/Leaderboard';
import HomePage from './pages/HomePage';

export default function App() {
  const [user, setUser] = useState(null); 
  const [activeTab, setActiveTab] = useState('home'); 

  const handleLogin = (username) => {
    setUser(username);
    setActiveTab('courses'); 
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. KONDISI NAVBAR: Hanya tampil jika halaman BUKAN login DAN tab aktif BUKAN home */}
      {activeTab !== 'login' && activeTab !== 'home' && (
        <Navbar 
          user={user} 
          onLogout={handleLogout} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      )}

      {/* 2. KONDISI HALAMAN LOGIN */}
      {activeTab === 'login' ? (
        <LoginPage onLogin={handleLogin} onCancel={() => setActiveTab('home')} />
      ) : (
        /* 3. KONDISI KONTEN UTAMA */
        <div className="max-w-6xl mx-auto px-6 py-8 pt-30">
          
          {/* TAB: HOME (Sekarang bersih tanpa navbar) */}
          {activeTab === 'home' && <HomePage user={user} setActiveTab={setActiveTab}/>}

          {/* TAB: COURSES */}
          {activeTab === 'courses' && <Courses />}

          {/* TAB: PROBLEM SET */}
          {activeTab === 'problems' && <ProblemSet />}

          {/* TAB: LEADERBOARD */}
          {activeTab === 'leaderboard' && <Leaderboard />}

        </div>
      )}
    </div>
  );
}