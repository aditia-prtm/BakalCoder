import React from 'react';

export default function Courses() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Learning Path</h2>
      <div className="grid md:grid-cols-2 gap-14">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">BASIC</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Struktur Data Linear & Notasi Big O</h3>
          <p className="text-amber-50 text-sm mb-4">Pelajari cara penyimpanan data berurutan di memori serta dasar pengukuran efisiensi kode program menggunakan Notasi Big O</p>
          <h5 className="text-sm text-cyan-300 font-semibold"><span className="font-bold">Materi : </span>Array, Linked List, Stack, Queue</h5>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">INTERMEDIATE</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Struktur Non-Linear & Pencarian</h3>
          <p className="text-amber-50 text-sm mb-4">Pahami representasi data hierarkis dan bercabang untuk efisiensi pencarian data serta implementasi berbagai metode sorting</p>
          <h5 className="text-sm text-cyan-300 font-semibold"><span className="font-bold">Materi : </span>Tree, BST, Hashing, Merge/Quick Sort</h5>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">ADVANCE</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Graf & Teknik Optimasi</h3>
          <p className="text-amber-50 text-sm mb-4">Pelajari pemodelan jaringan, pencarian rute terpendek, dan teknik pemecahan masalah kompleks secara optimal</p>
          <h5 className="text-sm text-cyan-300 font-semibold"><span className="font-bold">Materi : </span>Graph (BFS/DFS), Dijkstra, Dynamic Programming</h5>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">EXPERT</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">Struktur Data Tingkat Lanjut & Teorema Angka</h3>
          <p className="text-amber-50 text-sm mb-4">Fokus pada penyelesaian kasus kompleks berstandar kompetisi dengan optimasi batasan memori dan waktu yang sangat ketat</p>
          <h5 className="text-sm text-cyan-300 font-semibold"><span className="font-bold">Materi : </span>Segment Tree, Fenwick Tree, String Automata, Number Theory</h5>
        </div>
      </div>
    </div>
  );
}