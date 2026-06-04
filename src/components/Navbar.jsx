import React from 'react';

export default function Navbar({ user, onLogout, activeTab, setActiveTab }) {
  return (
    <>
      {user && (
        <nav className="bg-slate-900 border-b border-slate-800 text-white px-16 py-6 flex justify-center md:justify-between items-center sticky top-0 z-50 ">
          <div className="hidden md:flex text-2xl pr-10 font-bold tracking-wider text-cyan-400 cursor-pointer">
            <span className='text-amber-500'>&lt;</span>
            <span>/</span>
            <span className='text-amber-500'>&gt;</span>
            <span>AD</span>
            <span className='text-amber-500'>TX</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-12">
            <button 
              onClick={() => setActiveTab('courses')} 
              className={`hover:text-cyan-400 transition duration-300 cursor-pointer ${activeTab === 'courses' ? 'text-cyan-400 font-semibold' : 'text-slate-300'}`}
            >
              COURSES
            </button>
            <button 
              onClick={() => setActiveTab('problems')} 
              className={`hover:text-cyan-400 transition duration-300 cursor-pointer ${activeTab === 'problems' ? 'text-cyan-400 font-semibold' : 'text-slate-300'}`}
            >
              PROBLEM
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')} 
              className={`hover:text-cyan-400 transition duration-300 cursor-pointer ${activeTab === 'leaderboard' ? 'text-cyan-400 font-semibold' : 'text-slate-300'}`}
            >
              LEADERBOARD
            </button>
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-700">
              <span className="hidden md:flex text-sm text-slate-400">Halo, <strong className="text-amber-500">{user}</strong></span>
              <button 
                onClick={onLogout} 
                className="bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1.5 rounded text-sm transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}