import React from 'react';

export default function Leaderboard() {
  const dataUser = [
    {rank: 1, nama: "Khvicha Kvaratskhelia", institusi: "Paris Saint-Germain", poin: 300},
    {rank: 2, nama: "Ousmane Dembélé", institusi: "Paris Saint-Germain", poin: 286},
    {rank: 3, nama: "Declan Rice", institusi: "Arsenal", poin: 241},
    {rank: 4, nama: "Michael Olise", institusi: "FC Bayern München", poin: 215},
    {rank: 5, nama: "Vitinha", institusi: "Paris Saint-Germain", poin: 212},
    {rank: 6, nama: "Harry Kane", institusi: "FC Bayern München", poin: 188},
    {rank: 7, nama: "Lamine Yamal", institusi: "FC Barcelona", poin: 172},
    {rank: 8, nama: "Kylian Mbappé", institusi: "Real Madrid", poin: 125},
    {rank: 9, nama: "João Neves", institusi: "Paris Saint-Germain", poin: 112},
    {rank: 10, nama: "Bruno Fernandes", institusi: "Manchester United", poin: 96}
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Top Users</h2>
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
      <p className="italic text-amber-400 px-5 flex justify-center">Note: Peringkat diatas adalah prediksi saya terhadap hasil Ballon d'Or 2026</p>      
    </div>
  );
} 