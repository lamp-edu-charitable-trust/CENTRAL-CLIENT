import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  Zap, 
  MapPin, 
  Plus,
  ChevronRight,
  Activity
} from 'lucide-react';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const UpcomingEventsEmpty = () => {
  return (
    <div className="bg-white text-[#0A0A0A] font-sans antialiased min-h-screen flex flex-col overflow-hidden selection:bg-amber-400">
      
      {/* --- AMBIENT BACKGROUND CUES --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[140px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] -z-10 opacity-40" />

        {/* --- NAVBAR --- */}
        <Navbar />
     

      {/* --- MAIN CONTENT: THE STRATEGIC PAUSE --- */}
      <main className="mt-40 flex-1 flex flex-col justify-center px-6 md:px-12 relative z-10">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: NARRATIVE */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-400">Status: Operational Calm</span>
                </div>

                <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-[-0.06em] uppercase mb-16">
                  Future <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 italic font-serif lowercase pr-4">mapping.</span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic border-l-2 border-amber-400 pl-10">
                    Our intervention calendar is currently under <span className="text-slate-900 font-bold underline decoration-amber-400 underline-offset-8">calibration</span>. 
                    While the public stage is quiet, our grassroots mobilization in Bengaluru continues behind the scenes.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: INTERACTIVE PLACEHOLDER */}
            <div className="lg:col-span-4 mt-20 lg:mt-0">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.4, ...transition }}
                 className="relative p-12 rounded-[4rem] bg-slate-900 text-white overflow-hidden shadow-2xl group"
               >
                 <div className="absolute top-0 right-0 p-12 opacity-10"><Clock className="w-32 h-32" /></div>
                 
                 <div className="relative z-10">
                    <p className="text-[9px] font-mono text-amber-500 uppercase tracking-[0.4em] mb-12">// System_Schedule_Empty</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight italic">Be the first <br />to know.</h3>
                    <p className="text-white/40 text-sm font-medium mb-12 leading-relaxed">
                      We are currently engineering the next cycle of Young Innovator Challenges and Community Hub launches. 
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Next Update</span>
                        <span className="text-xs font-bold font-mono">TBD_2026</span>
                      </div>
                      <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center gap-4">
                        Request Alert <Plus className="w-4 h-4" />
                      </button>
                    </div>
                 </div>
               </motion.div>
            </div>

          </div>
        </div>
      </main>

      {/* --- FOOTER: THE LOG --- */}
      <footer className="p-8 md:p-12 relative z-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-12">
          <div className="flex items-center gap-8">
            <div className="group cursor-pointer">
              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-300 mb-1">Timezone</p>
              <p className="text-xs font-bold tracking-tight uppercase">Asia/Kolkata (IST)</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-300 mb-1">Last_Briefing</p>
              <p className="text-xs font-bold tracking-tight uppercase">Aug_2025_Success</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">Operational Archive</span>
             <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group hover:bg-black transition-all cursor-pointer">
               <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
             </div>
          </div>
        </div>
      </footer>

      {/* Ambient background number */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[25vw] font-black text-slate-50 select-none -z-20 tracking-tighter opacity-70">
        NULL
      </div>

      <Footer />
    </div>
  );
};

export default UpcomingEventsEmpty;