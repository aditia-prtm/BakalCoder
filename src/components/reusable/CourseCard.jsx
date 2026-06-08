import React from 'react';
import { SquareArrowOutUpRight, BookOpen } from "lucide-react";

export default function CourseCard({ level, title, description, topics }) {
  const levelConfig = {
    BASIC: { 
      color: "cyan", 
      bg: "bg-cyan-500/10 border-cyan-500/30",
      text: "text-cyan-400"
    },
    INTERMEDIATE: { 
      color: "amber", 
      bg: "bg-amber-500/10 border-amber-500/30",
      text: "text-amber-400"
    },
    ADVANCE: { 
      color: "orange", 
      bg: "bg-orange-500/10 border-orange-500/30",
      text: "text-orange-400"
    },
    EXPERT: { 
      color: "violet", 
      bg: "bg-violet-500/10 border-violet-500/30",
      text: "text-violet-400"
    },
  };

  const config = levelConfig[level] || levelConfig.BASIC;

  return (
    <div className="group bg-slate-900/70 border border-slate-800 hover:border-slate-600 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
      
      {/* Level Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl text-xs font-mono font-bold tracking-widest mb-6 ${config.bg} ${config.text}`}>
        {level}
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700`}>
        <BookOpen className={`w-8 h-8 ${config.text}`} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-amber-300 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
        {description}
      </p>

      {/* Topics */}
      <div className="pt-6 border-t border-slate-800">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Materi yang dipelajari</p>
        <p className="text-cyan-300 font-medium w-11/12 text-sm">
          {topics}
        </p>
      </div>

      {/* Hover Indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <SquareArrowOutUpRight className="w-5 h-5 text-cyan-400" />
      </div>
    </div>
  );
}