import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Recycle, 
  Shirt, 
  Package, 
  Globe2, 
  ArrowUpRight, 
  ChevronRight, 
  PackageCheck,
   Zap,
  Heart, 
  Sparkles,
  Trash2,
  RefreshCw,
   ArrowRight,
  Home
} from 'lucide-react';

import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import ReviveEarthHero from './components/hero';

const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const ReviveEarthPage = () => {
  const steps = [
    {
      id: "01",
      title: "Collect",
      icon: <Package className="w-5 h-5" />,
      desc: "Gathering used clothes and forgotten household essentials from urban homes."
    },
    {
      id: "02",
      title: "Refurbish",
      icon: <RefreshCw className="w-5 h-5" />,
      desc: "Upcycling and restoring items to ensure every piece is delivered with dignity."
    },
    {
      id: "03",
      title: "Empower",
      icon: <Heart className="w-5 h-5" />,
      desc: "Sharing resources with families in need, closing the loop of waste and poverty."
    }
  ];

  return (
    <div className="bg-white text-[#0A0A0A] font-sans antialiased selection:bg-emerald-400 selection:text-white">
      <Navbar />
      {/* --- HERO: THE ECO-MANIFESTO --- */}
      <ReviveEarthHero />   

      {/* --- THE VISION: BENTO STORY --- */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition}>
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">Transforming <br /> <span className="text-emerald-500 italic">Changemakers.</span></h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                 Revive Earth empowers children to become eco-conscious leaders. 
                 Through hands-on learning, we explore the science of climate change 
                 and turn it into actionable waste reduction strategies.
               </p>
             </motion.div>
             <div className="relative aspect-video rounded-[4rem] overflow-hidden group shadow-2xl shadow-emerald-100">
               <img src="https://images.unsplash.com/photo-1542601906-973be1f5a555?auto=format&fit=crop&q=80" alt="Clean Future" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all" />
             </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { label: "One Child", icon: <Sparkles />, desc: "Instilling eco-consciousness at an individual level." },
              { label: "One Home", icon: <Home />, desc: "Nurturing responsibility that starts in the living room." },
              { label: "One Clean Earth", icon: <Globe2 />, desc: "Growing local action into global impact." }
            ].map((box, i) => (
              <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 group hover:bg-black transition-all duration-700">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-emerald-500 transition-colors">
                  {React.cloneElement(box.icon, { className: "w-6 h-6 text-slate-900 group-hover:text-white" })}
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-white">{box.label}</h4>
                <p className="text-slate-400 font-medium group-hover:text-slate-500 transition-colors">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CIRCULARITY ROADMAP --- */}
      <section className="bg-[#050505] py-40 px-6 md:px-12 text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-32 text-center">
            <h2 className="text-6xl md:text-9xl font-black tracking-[calc(-0.04em)] uppercase leading-none mb-12">Circular <br /><span className="text-emerald-500 italic font-serif">Dignity.</span></h2>
            <p className="text-white/30 text-xl max-w-2xl mx-auto font-medium italic">"Every item deserves a second chance, every person deserves dignity."</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="p-16 flex flex-col justify-between group transition-all duration-500 h-[500px]"
              >
                <div>
                  <span className="text-[10px] font-mono text-emerald-500 mb-10 block tracking-[0.4em]">PROCESS_REF_{step.id}</span>
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                    {step.icon}
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter mb-6 group-hover:italic transition-all">{step.title}</h4>
                  <p className="text-white/40 leading-relaxed font-medium group-hover:text-white transition-colors">{step.desc}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-emerald-500 w-10 h-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DONATION CTA: DECLUTTER WITH PURPOSE --- */}
      <section className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition}>
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                 Declutter <br />
                 <span className="text-slate-200">Reclaim.</span> <br />
                 <span className="text-amber-500">Impact.</span>
               </h2>
               <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg mb-12 italic">
                 Give your unused items a new purpose. Whether it’s a forgotten shirt or a kitchen tool, 
                 your contribution fuels a cleaner future and community support.
               </p>
               <button className="flex items-center gap-10 group">
                  <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-all shadow-2xl">
                    <PackageCheck className="w-10 h-10" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-1">Action Required</p>
                    <p className="text-xl font-black uppercase tracking-tighter group-hover:text-amber-600 transition-colors">Book a Collection Visit</p>
                  </div>
               </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
             <div className="aspect-[3/4] rounded-[4rem] bg-slate-100 overflow-hidden shadow-2xl shadow-slate-200 group">
               <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" alt="Sustainability Action" />
             </div>
             {/* Floating Info Tag */}
             <div className="absolute top-20 -left-12 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
               <Zap className="text-amber-500 mb-4 w-6 h-6" fill="currentColor" />
               <p className="font-black text-xs uppercase tracking-widest leading-tight text-slate-400">Status</p>
               <p className="font-black text-xl tracking-tighter uppercase text-slate-900 italic">Ecosystem<br />Active</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- HYPER-MINIMAL FOOTER --- */}
        <Footer />
    </div>
  );
};

export default ReviveEarthPage;