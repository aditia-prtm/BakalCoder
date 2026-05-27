import React from 'react';

export default function Courses() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Daftar Silabus Kelas</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">LEVEL 1</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Basic & Complexity</h3>
          <p className="text-amber-50 text-sm mb-4">Pengenalan C++, standard library (STL), analisis waktu (Big O), manipulasi array dan string.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">LEVEL 2</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Fundamental Techniques</h3>
          <p className="text-amber-50 text-sm mb-4">Penerapan teknik Greedy, Brute Force yang efisien, Binary Search, Sorting, dan konsep Matematika Dasar CP.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">LEVEL 3</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Advanced Structures</h3>
          <p className="text-amber-50 text-sm mb-4">Pendalaman Graph (DFS/BFS), Tree, Dynamic Programming (DP) dasar, hingga Segment Tree.</p>
        </div>
      </div>
    </div>
  );
}