import React, { useState } from 'react';

export default function LoginPage({ onLogin, onCancel }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Username dan password harus diisi!');
      return;
    }
    onLogin(username);
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 flex items-center justify-center p-12">
      <div className="bg-slate-900 border border-slate-800 p-8 mt-20 rounded-xl w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold text-amber-500 mb-2 text-center">WELCOME !</h2>
        <p className="text-slate-400 text-sm text-center mb-6">Login untuk mengakses materi dan soal</p>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-cyan-500 transition"
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-cyan-500 transition"
              placeholder="Masukkan password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-2.5 rounded transition duration-300 mt-2"
          >
            Login
          </button>
          <button 
            type="button" 
            onClick={onCancel}
            className="w-full bg-transparent hover:bg-slate-800 border border-cyan-500 text-slate-400 py-2 rounded text-sm transition duration-300"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}