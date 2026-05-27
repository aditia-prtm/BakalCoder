import React from 'react';

export default function ProblemSet() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Bank Soal Latihan</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-amber-500 text-sm border-b border-slate-800">
              <th className="p-4">ID Soal</th>
              <th className="p-4">Nama Soal</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Tingkat Kesulitan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">CP-101</td>
              <td className="p-4 font-semibold text-white">Angklung Ajaib - (A) GEMASTIK 2025 Final Pemrograman</td>
              <td className="p-4">Implementation</td>
              <td className="p-4"><span className="text-green-400 px-2 py-0.5 rounded bg-green-400/10">Easy</span></td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">CP-201</td>
              <td className="p-4 font-semibold text-white">Pembangkit Listrik - OSNP Informatika 2023 B3</td>
              <td className="p-4">Graph / DFS</td>
              <td className="p-4"><span className="text-yellow-400 px-2 py-0.5 rounded bg-yellow-400/10">Medium</span></td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">CP-301</td>
              <td className="p-4 font-semibold text-white">Bogor Defence - OSN Informatika 2023 1A</td>
              <td className="p-4">Dynamic Programming</td>
              <td className="p-4"><span className="text-red-400 px-2 py-0.5 rounded bg-red-400/10">Hard</span></td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">CP-302</td>
              <td className="p-4 font-semibold text-white">Manual Car - OSN Informatika 2024 2A</td>
              <td className="p-4">Greedy / Binary Search / Segment Tree</td>
              <td className="p-4"><span className="text-red-400 px-2 py-0.5 rounded bg-red-400/10">Hard</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}