import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Equal, 
  Clock, 
  Calendar, 
  RotateCcw, 
  ShieldCheck, 
  TrendingUp, 
  Star,
  ChevronRight,
  Zap,
  ArrowRight
} from 'lucide-react';

const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

const FlagshipPrograms = () => {
  const tryModules = [
    {
      title: "Revision Class",
      tag: "Consistency",
      icon: <RotateCcw className="w-5 h-5" />,
      desc: "Synchronizing daily school lessons and homework to ensure academic alignment and zero learning gaps."
    },
    {
      title: "Remedial Class",
      tag: "Foundational",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Personalized learning roadmaps focused on core subjects and languages to bridge history-heavy gaps."
    },
    {
      title: "Upskilling",
      tag: "Future-Ready",
      icon: <TrendingUp className="w-5 h-5" />,
      desc: "Mastering AI, Data Analysis, and Personal Branding to thrive in the 21st-century job market."
    },
    {
      title: "Inner World Talents",
      tag: "Identity",
      icon: <Star className="w-5 h-5" />,
      desc: "Expert guidance to transform unique inner talents into practical, real-world implementations."
    }
  ];

  const metamorphosis = [
    {
      stage: "01",
      name: "Caterpillar",
      age: "8–11",
      grades: "3–5",
      focus: "Experiential Interaction",
      outcomes: ["Reading Fluency", "Basic Numeracy", "Study Habits"],
      color: "border-amber-400"
    },
    {
      stage: "02",
      name: "Cocoon",
      age: "11–14",
      grades: "6–8",
      focus: "Abstract Reasoning",
      outcomes: ["Logical Problem Solving", "Soft Skills", "Guided Independence"],
      color: "border-blue-500"
    },
    {
      stage: "03",
      name: "Butterfly",
      age: "14–18",
      grades: "9–12",
      focus: "Mastery & Readiness",
      outcomes: ["Board Mastery", "Career Pathing", "Employability"],
      color: "border-slate-900"
    }
  ];

  return (
    <section className="bg-white py-32 px-6 selection:bg-amber-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1: THE EQUATION --- */}
        <div className="mb-40 text-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            <div className="group">
              <h3 className="text-xl font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">Study Centre</h3>
              <p className="text-[10px] font-bold text-amber-500 uppercase mt-2 italic">Foundational Hubs</p>
            </div>
            <Plus className="text-slate-200 w-8 h-8 hidden md:block" />
            <div className="group">
              <h3 className="text-xl font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">Mobilization</h3>
              <p className="text-[10px] font-bold text-amber-500 uppercase mt-2 italic">Community Outreach</p>
            </div>
            <Equal className="text-slate-900 w-10 h-10 hidden md:block" />
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-400/10 blur-2xl rounded-full" />
              <h2 className="relative text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Equitable <br /> <span className="text-amber-500 italic">Student Centre</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 2: TRY PROGRAM ARCHITECTURE --- */}
        <div className="grid lg:grid-cols-12 gap-20 mb-40">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition}>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 block mb-6">Flagship Ecosystem</span>
              <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
                TRY <br /> <span className="text-slate-300 italic font-serif lowercase">program.</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-12">
                "Time To Re-Invent Yourself" is an intensive intervention model providing a safe haven for children from government schools and school dropouts.
              </p>
              
              {/* OPERATIONAL BOX */}
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Timings</p>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">4:30 PM — 8:30 PM IST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Schedule</p>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">Monday — Friday</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {tryModules.map((module, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 border border-slate-100 bg-white rounded-[2.5rem] shadow-xl shadow-slate-100/50 flex flex-col justify-between group transition-all duration-500"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-white transition-colors">
                      {module.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">{module.tag}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{module.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: THE NEP STAGES (METAMORPHOSIS) --- */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12"><Zap className="w-96 h-96 text-white" /></div>
          
          <div className="relative z-10 text-center mb-24">
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Human <span className="text-amber-400 italic font-serif pr-2">Metamorphosis</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em]">Class Structure Aligned with NEP 2020</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 relative z-10">
            {metamorphosis.map((stage, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 border-l-2 ${stage.color} bg-white/5 backdrop-blur-md rounded-br-[3rem] group`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-black text-white/10 group-hover:text-amber-400/20 transition-colors">{stage.stage}</span>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.3em]">Ages {stage.age}</span>
                </div>
                
                <h4 className="text-3xl font-black text-white uppercase mb-2 tracking-tighter group-hover:italic transition-all">{stage.name}</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-8 italic">Grades {stage.grades}</p>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-amber-400 text-[9px] font-black uppercase tracking-widest mb-2">Primary Focus</p>
                    <p className="text-white text-sm font-medium leading-relaxed">{stage.focus}</p>
                  </div>
                  <div>
                    <p className="text-amber-400 text-[9px] font-black uppercase tracking-widest mb-3">Key Outcomes</p>
                    <ul className="space-y-2">
                      {stage.outcomes.map((o, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/60 text-xs font-bold uppercase tracking-wider">
                          <div className="w-1 h-1 bg-amber-400 rounded-full" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FINAL ENROLLMENT CALLOUT --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-20 bg-amber-400 rounded-[3rem] shadow-2xl shadow-amber-100"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
              Start Your <br /><span className="italic">Re-Invention</span>
            </h2>
            <p className="text-slate-900/60 text-lg font-bold">Applications are now open for the 2025-26 academic cycle.</p>
          </div>
          <button className="bg-slate-900 text-white px-12 py-7 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl shadow-slate-400 flex items-center gap-4 active:scale-95 group">
            Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FlagshipPrograms;