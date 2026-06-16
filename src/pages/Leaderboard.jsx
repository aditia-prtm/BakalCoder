import React from 'react';
import dataUser from './data/usersData';

export default function Leaderboard() {

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_40%_60%,rgba(245,158,11,0.1),transparent)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">Top Users</h2>
          <p className="text-amber-400 italic text-lg">Ayooo... Jangan mau ketinggalan!</p>
        </div>

        <div className="bg-slate-900/70 border border-slate-700 rounded-3xl text-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-800 to-slate-900 text-amber-400">
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Nama</th>
                <th className="p-4 text-left hidden md:table-cell">Institusi</th>
                <th className="p-4 text-right">Poin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {dataUser.map((user, idx) => (
                <tr key={idx} className="hover:bg-slate-800/80 transition group">
                  <td className="p-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-amber-500 text-slate-950 font-bold">
                      #{user.rank}
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-white group-hover:text-amber-300">{user.nama}</td>
                  <td className="p-4 text-slate-400 hidden md:table-cell">{user.institusi}</td>
                  <td className="p-4 text-right font-mono text-xl font-bold text-amber-400">{user.poin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 italic text-lg">Note: Peringkat di atas adalah prediksi saya terhadap hasil Ballon d'Or 2026</p>
        </div>
        
      </div>
    </div>
  );
}