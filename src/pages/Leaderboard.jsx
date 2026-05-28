import React from 'react';

export default function Leaderboard() {
  const dataUser = [
    {rank: 1, nama: "Khvicha Kvaratskhelia", institusi: "Paris Saint-Germain", poin: 300},
    {rank: 2, nama: "Ousmane Dembele", institusi: "Paris Saint-Germain", poin: 286},
    {rank: 3, nama: "Harry Kane", institusi: "FC Bayern Munchen", poin: 261},
    {rank: 4, nama: "Declan Rice", institusi: "Arsenal", poin: 215},
    {rank: 5, nama: "Michael Olise", institusi: "FC Bayern Munchen", poin: 196},
    {rank: 6, nama: "Lamine Yamal", institusi: "FC Barcelona", poin: 172},
    {rank: 7, nama: "Vitinha", institusi: "Paris Saint-Germain", poin: 127},
    {rank: 8, nama: "Kylian Mbappe", institusi: "Real Madrid", poin: 125},
    {rank: 9, nama: "Bruno Fernandes", institusi: "Manhester United", poin: 96},
    {rank: 10, nama: "Erling Haaland", institusi: "Manhester City", poin: 90}
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Leaderboard</h2>
      <p className="italic text-amber-400">Ayooo!... Jangan mau ketinggalan sama temen kamu</p>
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
          {dataUser.map((user) => {
            return (
            <tr className="hover:bg-slate-800/30">
              <td className="p-4">{user.rank}</td>
              <td className="p-4 font-semibold text-white">{user.nama}</td>
              <td className="p-4">{user.institusi}</td>
              <td className="p-4 font-mono text-cyan-500">{user.poin}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}