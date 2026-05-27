import React from 'react';

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Leaderboard</h2>
      <p className="italic text-amber-400">Ayo!... Jangan mau ketinggalan sama temen kamu</p>
       <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-amber-500 text-sm border-b border-slate-800">
              <th className="p-4">Rank</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Institusi</th>
              <th className="p-4">Poin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">1</td>
              <td className="p-4 font-semibold text-white">Khvicha Kvaratskhelia</td>
              <td className="p-4">Paris Saint-Germain</td>
              <td className="p-4">300</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">2</td>
              <td className="p-4 font-semibold text-white">Ousmane Dembele</td>
              <td className="p-4">Paris Saint-Germain</td>
              <td className="p-4">286</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">3</td>
              <td className="p-4 font-semibold text-white">Harry Kane</td>
              <td className="p-4">FC Bayern Munchen</td>
              <td className="p-4">280</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">4</td>
              <td className="p-4 font-semibold text-white">Declan Rice</td>
              <td className="p-4">Arsenal</td>
              <td className="p-4">241</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">5</td>
              <td className="p-4 font-semibold text-white">Michael Olise</td>
              <td className="p-4">FC Bayern Munchen</td>
              <td className="p-4">217</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">6</td>
              <td className="p-4 font-semibold text-white">Lamine Yamal</td>
              <td className="p-4">FC Barcelona</td>
              <td className="p-4">181</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">7</td>
              <td className="p-4 font-semibold text-white">Vitinha</td>
              <td className="p-4">Paris Saint-Germain</td>
              <td className="p-4">167</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">8</td>
              <td className="p-4 font-semibold text-white">Kylian Mbappe</td>
              <td className="p-4">Real Madrid</td>
              <td className="p-4">164</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">9</td>
              <td className="p-4 font-semibold text-white">Bruno Fernandes</td>
              <td className="p-4">Manchester United</td>
              <td className="p-4 text-white">109</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-mono text-cyan-400">10</td>
              <td className="p-4 font-semibold text-white">Erling Haaland</td>
              <td className="p-4">Manchester City</td>
              <td className="p-4 text-white">97</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}