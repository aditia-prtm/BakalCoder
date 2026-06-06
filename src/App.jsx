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
      
      {/* navbar akan tampil dengan kondisi if(activeTab != 'login' && activeTab != 'home') */}
      {activeTab !== 'login' && activeTab !== 'home' && (
        <Navbar 
          user={user} 
          onLogout={handleLogout} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      )}

       
      {/* if(activeTab === 'login') arahkan ke loginPage */}
      {/* else masuk ke page dari activeTab */}
      {activeTab === 'login' ? (
        <LoginPage onLogin={handleLogin} onCancel={() => setActiveTab('home')} />
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-8 pt-30">
          
          {activeTab === 'home' && <HomePage user={user} setActiveTab={setActiveTab}/>}

          {activeTab === 'courses' && <Courses />}

          {activeTab === 'problems' && <ProblemSet />}

          {activeTab === 'leaderboard' && <Leaderboard />}

        </div>
      )}
    </div>
  );
}