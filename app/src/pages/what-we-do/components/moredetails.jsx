import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Library, 
  Handshake, 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  HeartHandshake,
  BookOpen,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const OurProgramsDetailed = () => {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* --- INTRO BLOCK: EDITORIAL OVERVIEW --- */}
      <section className="py-32 px-6 border-b border-slate-100 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="lg:col-span-7"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
                Empowering <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 font-serif lowercase">Potential.</span>
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ...transition }}
              className="lg:col-span-5 border-l-2 border-slate-900 pl-10"
            >
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                Our programs empower through learning, mentorship, and strategic partnerships. 
                We create opportunities to improve livelihoods and end poverty through the light of education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM 01: CONFUSION 2 CLARITY --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-amber-100">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">Career Guidance</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                Confusion 2 <br /><span className="italic font-serif">Clarity</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                A structured initiative aligning personal strengths with market opportunities. 
                Aligned with the <span className="text-slate-900 font-bold underline decoration-amber-400">NEP 2020 framework</span>, we transform 
                uncertainty into a definitive roadmap for Grade 8 and above.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                {['MBTI Tools', 'Holland Code', 'VARK Styles', 'RIASEC'].map((tool) => (
                  <div key={tool} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3">
                    <CheckCircle2 className="w-3 h-3 text-amber-500" /> {tool}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={transition}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] rotate-2" />
              <img src="/api/placeholder/800/800" alt="Career Guidance" className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM 02: PASS ON YOUR BOOKS --- */}
      <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transition}
              className="relative"
            >
              <img src="/api/placeholder/800/800" alt="Mobile Library" className="rounded-[2.5rem] shadow-2xl border border-white/5" />
              <div className="absolute -bottom-8 -right-8 bg-amber-400 p-10 rounded-[2rem] hidden md:block shadow-2xl">
                <p className="text-slate-900 font-black text-4xl tracking-tighter uppercase italic">Mobile<br />Library</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} >
              <div className="flex items-center gap-3 mb-8 text-amber-400">
                <Library className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Community Literacy</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 leading-none">
                Pass On Your <br /><span className="text-amber-400 italic font-serif lowercase">books.</span>
              </h3>
              <p className="text-white/50 text-lg leading-loose mb-12">
                Refurbishing and distributing knowledge. We set up libraries in low-fee private schools 
                and operate a mobile library service that delivers education directly to the doorsteps 
                of underprivileged areas in Bengaluru.
              </p>
              <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-amber-400 transition-all flex items-center gap-4 group">
                Support the Library <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM 03: 21ST CENTURY COLLAB --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-amber-500 border border-amber-100 shadow-sm">
              <Handshake className="w-8 h-8" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Collaborate for <span className="italic font-serif text-slate-400">21st Century</span></h3>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              A partnership-driven bridge between traditional schooling and the real-world skills of today’s economy. 
              Focusing on experiential learning, digital literacy, and personal branding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "NGO Partners", desc: "Joining forces for local student mobilization.", icon: <HeartHandshake className="text-red-400" /> },
              { title: "Institutional Hubs", desc: "Setting up future-ready labs within schools.", icon: <BookOpen className="text-blue-400" /> },
              { title: "Corporate Impact", desc: "Upskilling projects through CSR initiatives.", icon: <Users className="text-emerald-400" /> }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200">
                <div className="mb-8">{item.icon}</div>
                <h4 className="font-black uppercase tracking-tight text-xl mb-4 italic group-hover:text-amber-500">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STAKEHOLDER BENTO GRID: CTAs --- */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* STAKEHOLDER 01: PARENTS */}
            <div className="lg:col-span-1 p-12 bg-white rounded-[3.5rem] border border-slate-200 shadow-xl flex flex-col justify-between group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><GraduationCap className="w-32 h-32" /></div>
              <div>
                <h5 className="text-xs font-black uppercase tracking-[0.4em] text-amber-500 mb-6">Parents & Students</h5>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight group-hover:italic transition-all">Clarity Starts <br />Here.</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">Gain confidence in your future choices with a personalized career roadmap.</p>
              </div>
              <button className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-slate-900 hover:text-amber-500 transition-colors">
                Enroll Today <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* STAKEHOLDER 02: SCHOOLS */}
            <div className="lg:col-span-1 p-12 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl flex flex-col justify-between group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform"><Users className="w-32 h-32 text-white" /></div>
              <div>
                <h5 className="text-xs font-black uppercase tracking-[0.4em] text-amber-400 mb-6">Schools</h5>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight group-hover:italic transition-all">Elevate Your <br />Campus.</h4>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-10">Invite us to conduct specialized career workshops for your students.</p>
              </div>
              <button className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-white hover:text-amber-400 transition-colors">
                Book a Session <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* STAKEHOLDER 03: DONORS */}
            <div className="lg:col-span-1 p-12 bg-amber-400 text-slate-900 rounded-[3.5rem] shadow-xl flex flex-col justify-between group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:-translate-y-2 transition-transform"><HeartHandshake className="w-32 h-32" /></div>
              <div>
                <h5 className="text-xs font-black uppercase tracking-[0.4em] text-slate-900/40 mb-6">The Patrons</h5>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight group-hover:italic transition-all">Sponsor a <br />Dream.</h4>
                <p className="text-slate-900/60 text-sm font-bold leading-relaxed mb-10">Help underprivileged students access high-end psychometric assessments.</p>
              </div>
              <button className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all w-fit px-6 py-3 rounded-full border border-slate-900">
                Donate Now
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default OurProgramsDetailed;