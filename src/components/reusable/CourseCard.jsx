export default function CourseCard({level, title, descryption, topics}){
    return (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 duration-300 cursor-pointer">
          <div className="text-cyan-400 font-mono text-sm mb-2">{level}</div>
          <h3 className="text-xl font-bold mb-3 text-amber-500">{title}</h3>
          <p className="text-amber-50 text-sm mb-4">{descryption}</p>
          <h5 className="text-sm text-cyan-300 font-semibold"><span className="font-bold">Materi : </span>{topics}</h5>
        </div>
    );
}