import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowRight, Play } from 'lucide-react';
import Navbar from "../../../components/nav";
const transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

const HyperPremiumHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] overflow-hidden selection:bg-amber-200">
      
      {/* --- FLOATING AMBIENT LIGHTS --- */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

      
      {/* --- NAVBAR --- */}
      <Navbar  />
      {/* --- HERO MAIN CONTENT --- */}
      <main className="mt-20 relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-amber-500/50" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-600">Established 2019 • Bengaluru</span>
              </div>

              <h1 className="text-7xl md:text-[160px] font-black leading-[0.75] tracking-tighter text-slate-900 uppercase">
                Potential <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 italic font-serif lowercase pr-4">
                  reinvented.
                </span>
              </h1>

              <p className="mt-16 max-w-xl text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                Beyond the divide of poverty lies a <span className="text-slate-900 font-bold underline decoration-amber-400/40 underline-offset-8">world of brilliance</span>. 
                We reinvent foundational education to turn second chances into lifelong mastery.
              </p>

              <div className="mt-20 flex flex-wrap items-center gap-10">
                <button className="bg-slate-900 text-white px-14 py-8 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-all flex items-center gap-6 group shadow-2xl shadow-slate-300 transform active:scale-95">
                  Launch Programs 
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-slate-900/10 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </button>
                
                <button className="flex items-center gap-5 group">
                  <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:shadow-2xl transition-all duration-500">
                    <Play className="w-6 h-6 fill-slate-900" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-amber-500 transition-colors">
                    Watch the impact
                  </span>
                </button>
              </div>
            </motion.div>
          </div>



        </div>
      </main>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-slate-900/10 to-amber-400" />
      </motion.div>

    </div>
  );
};

export default HyperPremiumHero;