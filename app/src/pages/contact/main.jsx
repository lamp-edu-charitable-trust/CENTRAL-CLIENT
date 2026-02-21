import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Send, 
  User, 
  CheckCircle2, 
  Sparkles,
  Compass,
  ArrowRight,
  Globe
} from 'lucide-react';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';


const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const ContactFounderPage = () => {
  const [status, setStatus] = useState('idle');

  const officeLocations = [
    {
      unit: "Unit_01",
      name: "Study Center",
      address: "1281, 9th Cross, RK Hegde Nagar, Bengaluru - 560077",
      hours: "Mon - Fri: 16:00 - 20:00",
      type: "Foundational Hub"
    },
    {
      unit: "Unit_02",
      name: "Executive Hub",
      address: "88, Bidarahalli Hobli, near T-HUT, Narayanapura, Byrathi, Bengaluru - 560077",
      hours: "Tue - Sun: 11:00 - 20:00",
      type: "Founder's Office & Counselling"
    }
  ];

  return (
    <div className="bg-white text-[#0A0A0A] font-sans antialiased selection:bg-amber-400">
      
      {/* --- HERO: THE DIALOGUE --- */}
      <Navbar />
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-amber-600 mb-12">Global Connection Portal</p>
            <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.75] tracking-tighter uppercase mb-16">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 italic font-serif lowercase pr-4">connect.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 font-medium leading-tight italic max-w-2xl border-l-2 border-amber-500 pl-10">
              We appreciate your interest in reinventing education. Reach out to our team or the Founder’s office directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- EXECUTIVE PROFILE: THE FOUNDER --- */}
      <section className="py-40 px-6 md:px-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            {/* Founder Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-200"
              >
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop,trim=4.878048780487805;0;14.634146341463413;0/AoPJX3eEk7uODbZ8/1755231002383-AGBb5kk0z5hpaL6k.png" 
                  alt="Jaganathan Rajagopal" 
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 bg-amber-400 p-12 rounded-[3rem] shadow-2xl hidden xl:block">
                 <Sparkles className="w-8 h-8 text-black mb-4" />
                 <p className="font-black text-xs uppercase tracking-widest text-black/40">Leadership</p>
                 <p className="font-black text-2xl tracking-tighter text-black uppercase italic leading-none">Founder<br />& CEO</p>
              </div>
            </div>

            {/* Founder Bio Editorial */}
            <div className="lg:col-span-7 lg:pt-12">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={transition}>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">Jaganathan <br /><span className="text-amber-500 italic font-serif lowercase">Rajagopal</span></h2>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Educator • Career Counselor • Trainer</p>
                
                <div className="space-y-8 text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                  <p>
                    A compassionate leader whose life journey reflects resilience and a deep belief that <span className="text-black font-bold underline decoration-amber-400 underline-offset-4">education is the key to ending poverty</span>.
                  </p>
                  <p className="border-l-2 border-slate-200 pl-8 italic">
                    With over 20 years across HR, Hospitality, and Renewable Energy, Jaganathan brings a global perspective to local intervention. Since 2010, he has dedicated his weekends and heart to ensuring no child in Bengaluru is denied the right to dream.
                  </p>
                  <p>
                    Today, his true calling lies in helping the helpless, believing the world inside us is bigger than the world outside.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONNECTION GRID: FORM & RAW DATA --- */}
      <section className="py-40 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-32">
          
          {/* FORM MODULE */}
          <div className="space-y-16">
            <h3 className="text-4xl font-black tracking-tighter uppercase italic">Initiate <span className="text-slate-200">Briefing.</span></h3>
            <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setStatus('sent'); }}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-b border-slate-100 pb-4 focus-within:border-amber-500 transition-all">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Name*</label>
                  <input required type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-xl font-bold tracking-tighter mt-2 italic placeholder:text-slate-100" />
                </div>
                <div className="border-b border-slate-100 pb-4 focus-within:border-amber-500 transition-all">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Identity</label>
                  <input type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-xl font-bold tracking-tighter mt-2 italic placeholder:text-slate-100" />
                </div>
              </div>
              <div className="border-b border-slate-100 pb-4 focus-within:border-amber-500 transition-all">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Digital Address*</label>
                <input required type="email" placeholder="email@domain.com" className="w-full bg-transparent outline-none text-xl font-bold tracking-tighter mt-2 placeholder:text-slate-100" />
              </div>
              <div className="border border-slate-100 rounded-3xl p-8 focus-within:border-black transition-all">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Your Message*</label>
                <textarea required rows="4" placeholder="Brief us on your inquiry..." className="w-full bg-transparent outline-none text-sm font-medium mt-4 resize-none" />
              </div>
              <button className="group w-full relative bg-black text-white py-8 rounded-[2.5rem] overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl">
                <span className="relative z-10 font-black uppercase text-[11px] tracking-[0.5em] flex items-center justify-center gap-4">
                  {status === 'sent' ? 'Transmission Success' : 'Submit Intervention'} <Send className="w-4 h-4 text-amber-400" />
                </span>
                <div className={`absolute inset-0 bg-emerald-600 transition-transform duration-500 ${status === 'sent' ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`} />
              </button>
            </form>
          </div>

          {/* CONTACT INFO MODULE */}
          <div className="flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-16">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-amber-600 mb-8 flex items-center gap-2"><Mail className="w-3 h-3" /> Communication</p>
                <div className="space-y-4 font-bold text-lg tracking-tighter uppercase italic">
                  <p className="hover:text-amber-500 cursor-pointer transition-colors">help@lamp.site</p>
                  <p className="text-slate-300 text-sm">lampeducationtrust@gmail.com</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-amber-600 mb-8 flex items-center gap-2"><Phone className="w-3 h-3" /> Direct Line</p>
                <div className="space-y-4 font-black text-xl tracking-tighter">
                  <p className="hover:text-amber-500 cursor-pointer transition-colors">+91 9008701080</p>
                  <p className="text-slate-300 text-sm">+91 7406880188</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-slate-100">
               <div className="flex items-center gap-4 mb-10">
                 <Compass className="text-amber-500 w-5 h-5" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.6em]">Intervention Nodes</h4>
               </div>
               <div className="grid sm:grid-cols-2 gap-12">
                 {officeLocations.map((loc, i) => (
                   <div key={i} className="group cursor-default">
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-2 group-hover:text-amber-500 transition-colors">{loc.type}</p>
                     <p className="font-bold text-sm leading-relaxed mb-4 uppercase italic tracking-tight">{loc.address}</p>
                     <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                        <Clock className="w-3 h-3" /> {loc.hours}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CALLOUT: 60 CHILDREN --- */}
      <section className="bg-black py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none uppercase tracking-tighter">
          Urgent
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10">
           <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 leading-none max-w-4xl mx-auto">
             Help 60 Children Overcome Barriers & <span className="text-amber-400 italic font-serif lowercase">achieve their dreams.</span>
           </h2>
           <button className="bg-amber-500 text-black px-12 py-8 rounded-full font-black uppercase text-[11px] tracking-[0.5em] hover:bg-white transition-all transform active:scale-95 shadow-2xl">
             Donate to Mission
           </button>
        </motion.div>
      </section>

    <Footer />

    </div>
  );
};

export default ContactFounderPage;