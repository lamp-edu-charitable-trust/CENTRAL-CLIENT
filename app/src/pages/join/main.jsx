import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  Sparkles,
  User,
  Mail,
  HelpCircle,
  Globe,
  MessageSquare
} from 'lucide-react';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const PremiumContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    involvementType: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [progress, setProgress] = useState(0);

  const involvementOptions = [
    "Donation", "Monthly Support", "Ration Kit Support", 
    "Volunteer", "CSR Support", "Revive Earth", 
    "School and College Partnership", "NGO Partnership"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Mimic high-end backend processing
    let interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 20 : 100));
    }, 200);

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearInterval(interval);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="max-w-md"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.4)]">
            <CheckCircle2 className="w-12 h-12 text-black" />
          </div>
          <h2 className="text-white text-5xl font-black tracking-tighter uppercase mb-6 italic font-serif">Initiated.</h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 uppercase tracking-widest text-xs">
            Your inquiry has been encrypted and sent to our HQ. A facilitator will connect with you within 24 hours.
          </p>
          <button 
            onClick={() => { setStatus('idle'); setFormData({firstName:'', email:'', involvementType:'', message:''}); setProgress(0); }}
            className="text-amber-400 font-black uppercase text-[10px] tracking-[0.4em] border-b border-amber-400 pb-2 hover:text-white hover:border-white transition-all"
          >
            Return to Protocol
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-white py-32 px-6 md:px-12 overflow-hidden selection:bg-amber-400 selection:text-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
        
        {/* --- LEFT: CONTEXT BLOCK --- */}
        <div className="lg:col-span-5">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition}>
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-amber-600 mb-10">Network Expansion</p>
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
              Get <br /><span className="italic text-slate-200">Involved.</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-sm italic border-l-2 border-slate-100 pl-10">
              Join our intervention framework. Choose your path to impact and help us reinvent foundational education.
            </p>
            
            <div className="mt-20 space-y-8">
               <div className="flex items-center gap-6 group">
                 <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Sparkles className="w-5 h-5" />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-black transition-colors">Direct Institutional Support</p>
               </div>
               <div className="flex items-center gap-6 group">
                 <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Globe className="w-5 h-5" />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-black transition-colors">Community Mobilization</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: THE FORM --- */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* NAME INPUT */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...transition }} className="group relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 group-focus-within:text-amber-500 transition-colors">Your First Name*</label>
              <div className="flex items-center gap-4 mt-2 border-b border-slate-100 focus-within:border-black transition-all pb-4">
                <User className="w-4 h-4 text-slate-200" />
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Rayaan"
                  className="w-full bg-transparent outline-none text-xl font-bold tracking-tighter placeholder:text-slate-100 uppercase italic"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
            </motion.div>

            {/* EMAIL INPUT */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...transition }} className="group relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 group-focus-within:text-amber-500 transition-colors">Digital Identity / Email*</label>
              <div className="flex items-center gap-4 mt-2 border-b border-slate-100 focus-within:border-black transition-all pb-4">
                <Mail className="w-4 h-4 text-slate-200" />
                <input 
                  required
                  type="email" 
                  placeholder="name@domain.com"
                  className="w-full bg-transparent outline-none text-xl font-bold tracking-tighter placeholder:text-slate-100"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </motion.div>

            {/* INVOLVEMENT SELECT */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ...transition }} className="group relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 group-focus-within:text-amber-500 transition-colors">Intervention Path*</label>
              <div className="flex items-center gap-4 mt-2 border-b border-slate-100 focus-within:border-black transition-all pb-4">
                <HelpCircle className="w-4 h-4 text-slate-200" />
                <select 
                  required
                  className="w-full bg-transparent outline-none text-xl font-black tracking-tighter uppercase italic appearance-none cursor-pointer"
                  value={formData.involvementType}
                  onChange={(e) => setFormData({...formData, involvementType: e.target.value})}
                >
                  <option value="" disabled>Select Category</option>
                  {involvementOptions.map(opt => <option key={opt} value={opt} className="text-sm bg-white">{opt}</option>)}
                </select>
              </div>
            </motion.div>

            {/* MESSAGE TEXTAREA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ...transition }} className="group relative">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 group-focus-within:text-amber-500 transition-colors">Project Brief / Message</label>
              <div className="flex items-start gap-4 mt-4 border border-slate-100 rounded-3xl p-6 focus-within:border-black transition-all min-h-[150px]">
                <MessageSquare className="w-4 h-4 text-slate-200 mt-1" />
                <textarea 
                  placeholder="How can we build the future together?"
                  className="w-full bg-transparent outline-none text-sm font-medium leading-relaxed h-full resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
            </motion.div>

            {/* SUBMIT BUTTON */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pt-10">
              <button 
                disabled={status === 'submitting'}
                className="w-full relative group overflow-hidden bg-black text-white py-10 rounded-[2.5rem] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Progress Bar Background */}
                <div 
                  className="absolute top-0 left-0 h-1 bg-amber-400 transition-all duration-300 ease-out" 
                  style={{ width: `${progress}%` }} 
                />
                
                <span className="relative z-10 flex items-center justify-center gap-6 font-black uppercase text-[11px] tracking-[0.6em]">
                  {status === 'submitting' ? (
                    <>Processing Request <Loader2 className="w-5 h-5 animate-spin text-amber-400" /></>
                  ) : (
                    <>Submit Intervention <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-amber-400" /></>
                  )}
                </span>
                
                <div className="absolute inset-0 bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <p className="text-center mt-6 text-[9px] font-mono uppercase tracking-widest text-slate-300">
                End-to-End Encryption Enabled // Bengaluru Hub
              </p>
            </motion.div>

          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default PremiumContactForm;