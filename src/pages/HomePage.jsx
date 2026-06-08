import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Trophy, Users, Zap, ArrowRight } from 'lucide-react';

const FloatingCode = ({ code, delay, left, top }) => (
  <div 
    className="absolute text-[10px] font-mono text-cyan-400/30 pointer-events-none select-none animate-float-code"
    style={{ 
      left: `${left}%`, 
      top: `${top}%`,
      animationDelay: `${delay}s`
    }}
  >
    {code}
  </div>
);

export default function HomePage({ user }) {
  const navigate = useNavigate();

  const codeSnippets = [
    { code: "const graph = new Graph();", left: 8, top: 25, delay: 0 },
    { code: "dp[i][j] = max(dp[i-1][j], ...", left: 85, top: 35, delay: 2.3 },
    { code: "while(!pq.empty()) {", left: 12, top: 65, delay: 1.1 },
    { code: "sort(arr.begin(), arr.end());", left: 78, top: 72, delay: 3.7 },
    { code: "dfs(node, visited);", left: 22, top: 45, delay: 4.2 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_70%,rgba(245,158,11,0.15),transparent_60%)]" />

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode 
          key={i}
          code={snippet.code}
          left={snippet.left}
          top={snippet.top}
          delay={snippet.delay}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-cyan-500/30 rounded-full px-5 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-300 rounded-full animate-pulse" />
          <span className="text-xs font-mono tracking-[3px] text-cyan-400">BAKALCODER</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tighter leading-none mb-6">
          Master
          <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-300 bg-clip-text h-full text-transparent">
            Algorithms &amp; Data Structures
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Platform privat untuk belajar dan mengasah logika pemrograman
        </p>

        {/* CTA */}
        {!user ? (
          <div className="flex flex-col sm:flex-row gap-4 px-2 justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="group bg-white hover:bg-cyan-400 text-slate-950 font-semibold px-10 py-4 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
            >
              Mulai Perjalananmu
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            
            <button 
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-2xl text-lg transition"
            >
              Jelajahi Program
            </button>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/courses')}
            className="bg-gradient-to-r from-cyan-400 to-amber-400 text-slate-950 font-semibold px-12 py-4 rounded-2xl text-xl flex items-center gap-3 mx-auto transition hover:scale-105"
          >
            Lanjut Belajar <Zap className="w-6 h-6" />
          </button>
        )}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-5xl font-mono font-bold text-cyan-400">10+</div>
            <div className="text-xs text-slate-500 mt-1">PROBLEM</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-mono font-bold text-amber-400">4</div>
            <div className="text-xs text-slate-500 mt-1">LEVEL</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-mono font-bold text-orange-400">∞</div>
            <div className="text-xs text-slate-500 mt-1">POTENSI</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mengapa BakalCoder?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Code2, color: "cyan", title: "Kurikulum Terstruktur", desc: "Dari Basic Syntax hingga Advanced Algorithm" },
            { icon: Trophy, color: "amber", title: "Soal Contest Level", desc: "Problem set dari level dasar hingga kompleks" },
            { icon: Users, color: "violet", title: "Private & Eksklusif", desc: "Belajar bersama komunitas kecil yang serius" }
          ].map((item, i) => (
            <div key={i} className="group bg-slate-900/70 border border-slate-800 hover:border-slate-600 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3">
              <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <item.icon className={`w-8 h-8 text-${item.color}-400`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}