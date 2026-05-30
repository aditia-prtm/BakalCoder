import React from 'react';

export default function ProblemSet() {
  const problemsets = [
    // EASY
    {id : "101", name : "Perkenalan Pencarian Linear", tag: "Searching", diff: "Easy", source: "https://tlx.toki.id/courses/competitive-1/chapters/03/problems/A"},
    {id : "102", name : "Perkenalan Pengurutan", tag: "Sorting", diff: "Easy", source: "https://tlx.toki.id/courses/competitive-1/chapters/03/problems/B"},
    {id : "103", name : "BIlangan Agak Prima", tag: "Implementation / Math", diff: "Easy", source: "https://tlx.toki.id/courses/competitive-1/chapters/02/problems/A"},
    {id : "104", name : "Tupai Loncat - (J) GEMASTIK 2024 Penyisihan Pemrograman", tag: "Sorting", diff: "Easy", source: "https://tlx.toki.id/problems/gemastik-2024-pemrograman-penyisihan/J"},
    {id : "105", name : "Angklung Ajaib - (A) GEMASTIK 2025 Final Pemrograman", tag: "Implementation", diff: "Easy", source: "https://tlx.toki.id/problems/gemastik-2025-pemrograman-final/A"},
    {id : "106", name : "Mencari Bendera - (D) Find IT 2025 Final CP (UGM)", tag: "Math", diff: "Easy", source: "https://tlx.toki.id/problems/find-it-2025-cp-final/D"},

    // MEDIUM
    {id : "201", name : "Tebas Tebang Pohon - (C) OSNP Informatika 2024", tag: "Binary Search", diff: "Medium", source: "https://tlx.toki.id/problems/osnp-2024/C"},
    {id : "202", name : "Pembangkit Listrik - (B3) OSNP Informatika 2023", tag: "Graph / DFS", diff: "Medium", source: "https://tlx.toki.id/problems/osnp-2023/B3"},

    // HARD
    {id : "301", name : "Bogor Defence - (1A) OSN Informatika 2023", tag: "Dynamic Programming", diff: "Hard", source: "https://tlx.toki.id/problems/osn-2023/1A"},
    {id : "302", name : "Manual Car - (2A) OSN Informatika 2024", tag: "Greedy / Binary Search / Segment Tree", diff: "Hard", source: "https://tlx.toki.id/problems/osn-2024/2A"},
    {id : "303", name : "Djo, Djo, dan Tusuk Gigi - (D) BNPCHS 2022 Final (BINUS)", tag: "Segment Tree", diff: "Hard", source: "https://tlx.toki.id/problems/bnpchs-2022-final/D"}
  ];

  const diffStyles = {
    Easy: "text-green-400 bg-green-400/10 border border-green-500/20",
    Medium: "text-yellow-400 bg-yellow-400/10 border border-yellow-500/20",
    Hard: "text-red-400 bg-red-400/10 border border-red-500/20"
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Problem Set</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-amber-500 text-sm border-b border-slate-800">
              <th className="p-4">ID</th>
              <th className="p-4">Nama Soal</th>
              <th className="p-4 hidden md:flex">Kategori</th>
              <th className="p-4">Tingkat Kesulitan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
            {problemsets.map((problem, index) => {
              return (
                <tr className="hover:bg-slate-800/30">
                  <td className="p-4 font-mono text-cyan-400">
                    {problem.id}
                  </td>
                  <td className="p-4 font-semibold text-white cursor-pointer">
                    <a href={problem.source} className="hover:text-cyan-500 duration-200">
                      {problem.name}
                    </a>
                  </td>
                  <td className="p-4 hidden md:flex">
                    {problem.tag}
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-semibold ${diffStyles[problem.diff] || "text-slate-400 bg-slate-400/10"}`}>
                      {problem.diff}
                    </span>
                  </td>
                </tr>
              ); 
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}