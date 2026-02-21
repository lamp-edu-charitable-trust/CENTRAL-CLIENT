import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const infoLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Upcoming Events', href: '/events' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="relative bg-white pt-32 pb-12 px-6 lg:px-24 overflow-hidden">
      {/* Premium Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          {/* --- BRAND & FOUNDER COLUMN --- */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xs uppercase italic">L</div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">Lamp Trust<span className="text-amber-500">.</span></span>
            </div>
            
            <h5 className="text-[9px] uppercase tracking-[0.6em] text-amber-500 mb-6 font-black">Executive Leadership</h5>
            <p className="text-lg leading-relaxed text-slate-400 font-medium italic border-l-2 border-slate-100 pl-8">
              <span className="text-slate-900 font-bold not-italic">Jaganathan Rajagopal</span> — Founder & CEO. 
              Dedicated to the strategic belief that education is the ultimate catalyst for systemic change. 
              Since 2010, reinventing the path for Bengaluru’s youth.
            </p>
          </div>

          {/* --- INFORMATION COLUMN --- */}
          <div className="lg:col-span-3 lg:pl-10">
            <h5 className="text-[9px] uppercase tracking-[0.6em] text-slate-300 mb-10 font-black">Legal & Logistics</h5>
            <ul className="space-y-5">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-all duration-300"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT COLUMN --- */}
          <div className="lg:col-span-4">
            <h5 className="text-[9px] uppercase tracking-[0.6em] text-slate-300 mb-10 font-black">Intervention HQ</h5>
            <div className="space-y-8">
              <div className="group cursor-default">
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-black transition-colors mb-2">
                  <Mail size={16} className="text-amber-400" />
                  <span className="text-sm font-bold tracking-tight">help@lampeducationtrust.com</span>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-black transition-colors mb-2">
                  <Phone size={16} className="text-amber-400" />
                  <span className="text-sm font-bold tracking-tight">+91 9008701080</span>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex items-start gap-4 text-slate-400 group-hover:text-black transition-colors">
                  <MapPin size={16} className="text-amber-400 mt-1 shrink-0" />
                  <p className="text-xs font-medium leading-relaxed uppercase tracking-widest italic">
                    1281, 9th Cross, RK Hegde Nagar,<br /> Bengaluru — 560077
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR: THE PARTNERSHIP --- */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] font-black uppercase tracking-[0.8em] text-slate-300 leading-none">
              © 2026 Lamp Trust Intelligence Briefing
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-200">
              Built with precision by Aikyam • AWS Cloud Secure
            </p>
          </div>

          {/* Social Nodes */}
          <div className="flex items-center gap-8">
            {[
              { icon: <Instagram size={16} />, href: "#" },
              { icon: <Linkedin size={16} />, href: "#" },
              { icon: <Twitter size={16} />, href: "#" },
              { icon: <Facebook size={16} />, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="text-slate-300 hover:text-amber-500 transition-all duration-500 transform hover:scale-125"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-slate-200">
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Growth Platter Academy</span>
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Revive Earth</span>
          </div>
        </div>
      </div>

      {/* Decorative Ambient element */}
      <div className="absolute bottom-[-5%] right-[-2%] text-[15vw] font-black text-slate-50 select-none -z-10 tracking-tighter uppercase opacity-50 italic">
        Impact
      </div>
    </footer>
  );
};

export default Footer;