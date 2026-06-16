import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import problemsets from './data/problemsData';

export default function ProblemSet() {
  
 
  const diffStyles = {
    Easy: "text-green-400 bg-green-500/10 border border-green-500/30",
    Medium: "text-yellow-400 bg-yellow-500/10 border border-yellow-500/30",
    Hard: "text-red-400 bg-red-500/10 border border-red-500/30"
  };
  
  
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(34,211,238,0.1),transparent)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">Problem Set</h2>
          <p className="text-slate-400 text-lg">Soal-soal berkualitas dari dasar hingga kompetisi nasional</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problemsets.map((problem) => (
            <div key={problem.id} className="group bg-slate-900/70 border border-slate-700 hover:border-cyan-500/30 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-3xl font-bold text-cyan-400">#{problem.id}</div>
                <a href={problem.source} target="_blank" className="text-slate-400 group-hover:text-cyan-400 transition">
                  <ArrowUpRight size={24} />
                </a>
              </div>

              <a href={problem.source} target="_blank" className="block text-lg font-semibold text-white hover:text-cyan-300 mb-4 transition line-clamp-2">
                {problem.name}
              </a>

              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-4 py-2 bg-slate-800 rounded-full text-slate-400">{problem.tag}</span>
                <span className={`text-xs px-5 py-2 rounded-2xl font-semibold ${diffStyles[problem.diff]}`}>
                  {problem.diff}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}