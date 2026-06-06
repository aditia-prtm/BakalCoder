import React from 'react';
import CourseCard from '../components/reusable/CourseCard';

export default function Courses() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-500 border-b border-slate-800 pb-3">Learning Path</h2>
      <div className="grid md:grid-cols-2 gap-14">
        
        <CourseCard 
          level={"BASIC"} 
          title={"Struktur Data Linear & Notasi Big O"} 
          descryption={"Pelajari cara penyimpanan data berurutan di memori serta dasar pengukuran efisiensi kode program menggunakan Notasi Big O"}
          topics={"Array, Linked List, Stack, Queue"}/>

        <CourseCard 
          level={"INTERMEDIATE"} 
          title={"Struktur Non-Linear & Pencarian"} 
          descryption={"Pahami representasi data hierarkis dan bercabang untuk efisiensi pencarian data serta implementasi berbagai metode sorting"}
          topics={"Tree, BST, Hashing, Merge/Quick Sort"}/>

        <CourseCard 
          level={"ADVANCE"} 
          title={"Graf & Teknik Optimasi"} 
          descryption={"Pelajari pemodelan jaringan, pencarian rute terpendek, dan teknik pemecahan masalah kompleks secara optimal"}
          topics={"Graph (BFS/DFS), Dijkstra, Dynamic Programming"}/>

        <CourseCard 
          level={"EXPERT"} 
          title={"Struktur Data Tingkat Lanjut & Teorema Angka"} 
          descryption={"Fokus pada penyelesaian kasus kompleks berstandar kompetisi dengan optimasi batasan memori dan waktu yang sangat ketat"}
          topics={"Segment Tree, Fenwick Tree, String Automata, Number Theory"}/>

      </div>
    </div>
  );
}