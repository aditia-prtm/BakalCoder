import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Courses from './pages/Courses';
import ProblemSet from './pages/ProblemSet';
import Leaderboard from './pages/Leaderboard';
import HomePage from './pages/HomePage';

export default function App() {
  const [user, setUser] = useState(null); 
  const [page, setPage] = useState('landing'); 
  const [activeTab, setActiveTab] = useState('home'); 

  const handleLogin = (username) => {
    setUser(username);
    setPage('landing');
    setActiveTab('courses'); 
  };

  const handleLogout = () => {
    setUser(null);
    setPage('landing');
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. KONDISI NAVBAR: Hanya tampil jika halaman BUKAN login DAN tab aktif BUKAN home */}
      {page !== 'login' && activeTab !== 'home' && (
        <Navbar 
          user={user} 
          onLogout={handleLogout} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setPage={setPage} 
        />
      )}

      {/* 2. KONDISI HALAMAN LOGIN */}
      {page === 'login' ? (
        <LoginPage onLogin={handleLogin} onCancel={() => setPage('landing')} />
      ) : (
        /* 3. KONDISI KONTEN UTAMA */
        <div className="max-w-6xl mx-auto px-6 py-8">
          
          {/* TAB: HOME (Sekarang bersih tanpa navbar) */}
          {activeTab === 'home' && <HomePage user={user} setPage={setPage} />}

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