import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  BarChart3, 
  BookOpen, 
  Search, 
  ArrowUpRight, 
  Activity,
  History,
  CheckCircle2
} from 'lucide-react';

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const ImpactSection = () => {
  const roadmapSteps = [
    {
      id: "01",
      title: "Setup",
      icon: <Target className="w-6 h-6 text-amber-500" />,
      desc: "Establishing clear individual objectives and student mobilization frameworks."
    },
    {
      id: "02",
      title: "Assessments",
      icon: <Search className="w-6 h-6 text-blue-500" />,
      desc: "Pinpointing specific cognitive strengths and academic growth areas."
    },
    {
      id: "03",
      title: "Teaching",
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      desc: "Targeted, individualized instruction designed for 21st-century mastery."
    },
    {
      id: "04",
      title: "Evaluation",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      desc: "Ongoing optimization to measure progress and refine student roadmaps."
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 overflow-hidden relative">
      {/* Background Accent Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER: EDITORIAL SCALE --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-amber-400">
                <History className="w-5 h-5" />
              </div>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.6em]">A Decade of Devotion</span>
            </div>
            <h2 className="text-6xl md:text-[120px] font-black text-white leading-none tracking-[calc(-0.05em)] uppercase">
              Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-slate-500">Impact.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...transition }}
            className="text-right mt-12 md:mt-0"
          >
            <p className="text-amber-500 font-mono text-xl tracking-tighter mb-2">2010 — 2025</p>
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Audit Period: March Cycle</p>
          </motion.div>
        </div>

        {/* --- NARRATIVE STATEMENTS --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-4xl text-white font-medium leading-[1.3] tracking-tight italic">
              "We guide each learner through a <span className="text-amber-400">precision-engineered</span> roadmap to ensure the moment potential meets opportunity, it thrives."
            </p>
          </div>
          <div className="lg:col-span-5 flex items-start lg:justify-end">
            <p className="text-white/40 text-lg leading-relaxed max-w-sm border-l border-white/10 pl-8 font-medium">
              Our structured methodology delivers proven student results by establishing objectives and pinpointing individual strengths.
            </p>
          </div>
        </div>

        {/* --- THE INTERVENTION ROADMAP: KINETIC CARDS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ...transition }}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-amber-400/30 transition-all duration-700"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-white/20 font-black text-6xl italic group-hover:text-amber-400 transition-colors duration-500 select-none leading-none">
                    {step.id}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:italic transition-all">
                    {step.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PERFORMANCE STRIP --- */}
        <div className="mt-40 grid md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-[3.5rem] overflow-hidden backdrop-blur-sm">
          {[
            { val: "100%", label: "Academic Success", detail: "Average score 76% in final board exams" },
            { val: "3500+", label: "Professionals Trained", detail: "Value-added soft skills and employability" },
            { val: "12000+", label: "Kits Distributed", detail: "Direct material support to Bengaluru families" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-12 text-center group"
            >
              <h5 className="text-5xl md:text-7xl font-black text-amber-400 tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-700">
                {stat.val}
              </h5>
              <p className="text-white font-black uppercase text-xs tracking-widest mb-4 italic underline decoration-amber-500 decoration-2 underline-offset-8">
                {stat.label}
              </p>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] max-w-[200px] mx-auto leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- INTERACTIVE FOOTER --- */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-white/5">
          <div className="flex items-center gap-4">
            <Activity className="text-amber-500 animate-pulse w-5 h-5" />
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest tracking-tighter">
              Status: Active Intervention in 7 Critical Zones
            </p>
          </div>
          <button className="flex items-center gap-6 group">
            <span className="text-white font-black uppercase text-xs tracking-[0.4em] group-hover:text-amber-400 transition-colors">
              Access Full Audit
            </span>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;