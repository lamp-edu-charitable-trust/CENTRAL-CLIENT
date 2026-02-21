import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowDownRight, Globe2, Zap, MoveRight, Leaf } from 'lucide-react';

const transition = { duration: 1.4, ease: [0.19, 1, 0.22, 1] };

const ReviveEarthHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden bg-[#FCFCFC] selection:bg-emerald-500 selection:text-white">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-20" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -z-10" />
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-between px-12 opacity-[0.03] pointer-events-none -z-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-black" />
        ))}
      </div>

      <div className="max-w-[1700px] mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {/* --- TOP STATUS BAR --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, ...transition }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                Sustainability_Briefing_2026
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, ...transition }}
              className="flex items-center gap-8 text-[9px] font-mono text-slate-300 uppercase tracking-widest"
            >
              <span>Lat: 12.9716° N</span>
              <span>Long: 77.5946° E</span>
            </motion.div>
          </div>

          {/* --- MAIN EDITORIAL HEADLINE --- */}
          <div className="relative mb-24">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={transition}
              className="text-[15vw] md:text-[12vw] font-black leading-[0.75] tracking-[-0.06em] uppercase text-slate-900"
            >
              REVIVE <br />
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, ...transition }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-amber-500 italic font-serif lowercase"
              >
                earth.
              </motion.span>
            </motion.h1>
            
            {/* Floating Motto Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, ...transition }}
              className="absolute top-1/2 right-0 md:right-20 translate-y-1/2 md:translate-y-0 z-20 bg-white/40 backdrop-blur-2xl border border-white/50 p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-[300px] hidden lg:block"
            >
              <Sparkles className="text-amber-500 w-8 h-8 mb-6" />
              <p className="text-xl font-bold leading-tight tracking-tighter text-slate-800 uppercase italic">
                “One Child. <br /> One Home. <br /> One Clean Earth.”
              </p>
            </motion.div>
          </div>

          {/* --- CONTENT ARCHITECTURE --- */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT: THE SPECS */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1 }}
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6 flex items-center gap-3">
                  <Globe2 className="w-3 h-3" /> The Objective
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                  Empowering children to become eco-conscious changemakers through hands-on 
                  intelligence and responsible circular living.
                </p>
              </motion.div>

              <div className="pt-8 border-t border-slate-100 flex gap-12">
                 <div>
                   <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">Support_Level</p>
                   <p className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">Critical</p>
                 </div>
                 <div>
                   <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">Active_Hubs</p>
                   <p className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">07 Units</p>
                 </div>
              </div>
            </div>

            {/* RIGHT: THE VISUAL ANCHOR */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="relative group">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ...transition }}
                  className="relative aspect-[16/9] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-200"
                >
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all duration-700 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80" 
                    alt="Climate Action" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[2.5s] ease-out"
                  />
                  
                  {/* Image Label Overlay */}
                  <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em]">Field_Capture</p>
                      <p className="text-white font-bold text-xs uppercase tracking-widest italic">Intervention_Cycle_26</p>
                    </div>
                  </div>
                </motion.div>

                {/* --- FLOATING CTA ACTION --- */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-10 right-10 md:right-20 z-30 flex items-center gap-6 bg-slate-900 text-white pl-10 pr-4 py-4 rounded-full shadow-2xl transition-all hover:bg-emerald-600 group"
                >
                  <span className="font-black uppercase text-[10px] tracking-[0.5em] font-mono">
                    Initiate_Support
                  </span>
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- SIDEBAR SCROLL INDICATOR --- */}
      <div className="absolute right-12 bottom-12 hidden xl:flex flex-col items-center gap-8">
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 vertical-text rotate-180">
          EXPLORE_ARCHIVE
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-slate-100 via-slate-200 to-emerald-500" />
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default ReviveEarthHero;