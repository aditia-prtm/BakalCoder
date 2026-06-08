import React from 'react';
import CourseCard from '../components/reusable/CourseCard';

export default function Courses() {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_20%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_70%,rgba(245,158,11,0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-cyan-500/30 rounded-full px-5 py-2 mb-6">
            <span className="text-xs font-mono tracking-[3px] text-cyan-400">LEARNING PATH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">Pilih Levelmu</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dari basic hingga expert yang disertai dengan visualisasi. Siap jadi calon engineer?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CourseCard 
            level="BASIC"
            title="Foundations of Programming & Algorithmic Thinking" 
            description="Pengenalan dasar logika pemrograman dan sintaksis dasar komputer untuk membangun fondasi berpikir logis bagi pemula" 
            topics="Basic Syntax, Control Flow, Functions, Arrays"/>
          <CourseCard 
            level="INTERMEDIATE" 
            title="Core Data Structures & Complexity Analysis" 
            description="Pembelajaran mengenai struktur data standar industri serta metode analisis efisiensi performa kode program" 
            topics="Big-O Notation, Linear Structures, Sorting & Searching, Hash Tables"/>
          <CourseCard 
            level="ADVANCE" 
            title="Advanced Algorithms & Non-Linear Data Structures" 
            description="Penyelesaian masalah kompleks menggunakan struktur data non-linear dan strategi algoritma tingkat lanjut untuk optimasi sistem" 
            topics="Recursion, Tree Graph Structures, Graph Traversal, Dynamic Programming"/>
          <CourseCard 
            level="EXPERT" 
            title="Expert Algorithm" 
            description="Penguasaan struktur data tingkat tinggi dan algoritma kompleks." 
            topics="Advanced Data Structures, Network Flow & Graph, DP Optimization, Computational Math"/>
        </div>
      </div>
    </div>
  );
}