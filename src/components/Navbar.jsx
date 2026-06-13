import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CodeXml} from 'lucide-react';

export default function Navbar({ user, onLogout }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setIsClosing(true);
    // Tunggu animasi selesai baru tutup
    setTimeout(() => {
      setMobileNav(false);
      setIsClosing(false);
    }, 300); // sesuai durasi animasi di CSS
  };

  const toggleMenu = () => {
    if (mobileNav) {
      closeMenu();
    } else {
      setMobileNav(true);
      setIsClosing(false);
    }
  };

  // Close menu when clicking link
  const handleLinkClick = (path) => {
    // Optional: close only if path different
    // closeMenu();
  };

  return (
    <div className='flex flex-col fixed w-full z-50'>
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white px-6 md:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="group flex justify-center items-center text-2xl font-bold tracking-wider text-cyan-400 cursor-pointer hover:scale-105 transition">
          <CodeXml size={30} className='text-amber-500 group-hover:rotate-12 transition' />
          <span className='pl-1'>Bakal</span>
          <span className='text-amber-500'>Coder</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {['/courses', '/problems', '/leaderboard'].map((path, i) => {
            const labels = ['COURSES', 'PROBLEM', 'LEADERBOARD'];
            return (
              <Link 
                key={i}
                to={path} 
                className={`font-medium tracking-wider transition-all duration-300 hover:text-cyan-400 ${isActive(path) ? 'text-cyan-400' : 'text-slate-300'}`}
              >
                {labels[i]}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 pl-6 border-l border-slate-700">
            <span className="text-sm text-slate-400">
              Halo, <strong className="text-amber-400">{user}</strong>
            </span>
            <button 
              onClick={onLogout} 
              className="bg-red-500/10 hover:bg-red-500 hover:text-white text-red-400 px-4 py-2 rounded-xl text-sm transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-xl transition"
        >
          {mobileNav ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu dengan Enter & Exit Animation */}
      {mobileNav && (
        <div className="md:hidden absolute top-[73px] right-4 z-50">
          <div 
            className={`bg-slate-900 border border-slate-700 rounded-3xl py-6 px-7 w-52 shadow-2xl 
                       ${isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}
          >
            <div className="w-full text-md pb-5 border-b border-slate-700 mb-5">
              Halo, <strong className="text-amber-400">{user}</strong>
            </div>

            <Link 
              to="/courses" 
              onClick={() => handleLinkClick('/courses')}
              className={`block w-full text-left py-3 px-4 rounded-2xl mb-1 transition ${isActive('/courses') ? 'bg-cyan-500/10 text-cyan-400' : 'hover:bg-slate-800 text-slate-300'}`}
            >
              COURSES
            </Link>
            
            <Link 
              to="/problems" 
              onClick={() => handleLinkClick('/problems')}
              className={`block w-full text-left py-3 px-4 rounded-2xl mb-1 transition ${isActive('/problems') ? 'bg-cyan-500/10 text-cyan-400' : 'hover:bg-slate-800 text-slate-300'}`}
            >
              PROBLEM
            </Link>
            
            <Link 
              to="/leaderboard" 
              onClick={() => handleLinkClick('/leaderboard')}
              className={`block w-full text-left py-3 px-4 rounded-2xl mb-1 transition ${isActive('/leaderboard') ? 'bg-cyan-500/10 text-cyan-400' : 'hover:bg-slate-800 text-slate-300'}`}
            >
              LEADERBOARD
            </Link>

            <button 
              onClick={() => { 
                onLogout(); 
                closeMenu(); 
              }} 
              className="w-full mt-6 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white py-3 rounded-2xl text-sm transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}