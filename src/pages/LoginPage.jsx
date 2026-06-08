import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, User } from 'lucide-react';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim() === '' || password.trim() === '') {
      setError('Username dan password harus diisi!');
    } else if (password.trim().length < 8) {
      setError('Password harus memiliki setidaknya 8 karakter!');
      return;
    } else if (!(/^(?=.*[a-zA-Z])(?=.*\d)/.test(password))) {
      setError('Password harus mengandung kombinasi angka dan huruf!');
      return;
    } else {
      onLogin(username);
      navigate('/courses');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(34,211,238,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_70%,rgba(245,158,11,0.12),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-md">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="bg-slate-900/80 border border-slate-700 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-cyan-500/30 rounded-full px-4 py-1 mb-4">
              <Lock className="text-cyan-400" size={18} />
              <span className="text-xs font-mono tracking-widest text-cyan-400">SECURE LOGIN</span>
            </div>
            <div className='flex justify-center items-center my-2'>
              <img src="public/icon-bakalcoder.png" alt="bakalcoder" className='h-16 rounded-sm'/>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400">Masuk untuk melanjutkan perjalananmu</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-4 rounded-2xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm mb-2 font-medium">USERNAME</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-11 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                  placeholder="Masukkan username"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2 font-medium">PASSWORD</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-11 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                  placeholder="Masukkan password"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-400 to-amber-400 hover:from-cyan-500 hover:to-amber-500 text-slate-950 font-bold py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}