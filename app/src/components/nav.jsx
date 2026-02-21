import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronized with your App.js routes
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Revive Earth', href: '/revive' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
    { name: 'Join Us', href: '/join' },
  ];

  // Logic to split the menu around the center logo
  const leftSideLinks = menuItems.slice(0, 3);
  const rightSideLinks = menuItems.slice(3);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ${
      scrolled ? 'bg-white/70 backdrop-blur-2xl py-3 shadow-[0_10px_40px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LEFT SIDE: DESKTOP --- */}
        <div className="hidden lg:flex items-center gap-12 flex-1">
          {leftSideLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-[9px] tracking-[0.5em] uppercase font-black transition-all duration-500 relative group ${
                location.pathname === item.href ? 'text-amber-500' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-amber-400 transition-all duration-500 ${
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* --- CENTER: SIGNATURE LOGO --- */}
        <div className="flex-shrink-0 z-[210]">
          <Link to="/" className="relative block group">
            <motion.div
              animate={{ 
                scale: scrolled ? 0.85 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Outer Glow Ring for Premium Feel */}
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img 
                src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/HOMEPAGE/logo.avif" 
                alt="Lamp Trust" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-[0.5px] border-neutral-100 shadow-2xl relative z-10"
              />
              
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white border-2 border-white z-20">
                <Sparkles size={10} className="text-amber-400" />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* --- RIGHT SIDE: DESKTOP --- */}
        <div className="hidden lg:flex items-center justify-end gap-12 flex-1">
          {rightSideLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-[9px] tracking-[0.5em] uppercase font-black transition-all duration-500 relative group ${
                location.pathname === item.href ? 'text-amber-500' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-amber-400 transition-all duration-500 ${
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden z-[210]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl active:scale-90 transition-transform"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- FULL-SCREEN MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col p-10 pt-40"
          >
            {/* Background Branding Accent */}
            <div className="absolute top-20 left-10 text-[20vw] font-black text-neutral-50 leading-none select-none -z-10 tracking-tighter">
              MENU
            </div>

            <div className="flex flex-col gap-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`text-5xl font-black tracking-tighter uppercase transition-all ${
                      location.pathname === item.href ? 'text-amber-500 italic' : 'text-neutral-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto border-t border-neutral-100 pt-10 flex flex-col gap-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-400">Initiate Intervention</p>
              <button className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 active:scale-95 transition-transform">
                Support Impact <ArrowRight size={16} className="text-amber-400" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;