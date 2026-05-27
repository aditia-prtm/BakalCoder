import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Courses from './pages/Courses';
import ProblemSet from './pages/ProblemSet';
import Leaderboard from './pages/Leaderboard';

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
    setActiveTab('home');
    setPage('landing');
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
          {activeTab === 'home' && (
            <div className="text-center py-20 space-y-6 mt-36">
              <h1 className="text-5xl font-extrabold text-white tracking-tight">
                Kuasai Algoritma & <span className="text-cyan-400">Struktur Data</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Platform privat untuk belajar dan mengasah logika coding
              </p>
              {!user && (
                <button 
                  onClick={() => setPage('login')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-3 rounded-lg text-lg transition shadow-lg shadow-cyan-500/20"
                >
                  Mulai Belajar Sekarang
                </button>
              )}
            </div>
          )}

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