import React from 'react';

export default function HomePage({user, setActiveTab}){
    return (
        <div className="text-center py-20 space-y-6 mt-24">
            <h1 className="text-8xl font-extrabold text-cyan-500">AD<span className="text-amber-500">TX</span> Course</h1>
            <h1 className="text-5xl font-bold text-white tracking-tight">
                Kuasai Algoritma & <span className="text-amber-500">Struktur Data</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Platform privat untuk belajar dan mengasah logika coding
            </p>
            {!user && (
            <button 
                onClick={() => setActiveTab('login')}
                className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 text-slate-950 font-bold px-8 py-3 rounded-lg text-lg transition shadow-lg shadow-cyan-500/20 duration-300"
            >
                Mulai Belajar Sekarang
            </button>
            )}
        </div>
    );
}