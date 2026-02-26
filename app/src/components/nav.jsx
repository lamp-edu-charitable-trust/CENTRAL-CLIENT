import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Brand Palette from Blueprint
  const brand = {
    green: "#00bf63",
    yellow: "#ffa51f",
    navy: "#01081d",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary Navigation Structure
  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about', 
     
    },
    { name: 'Programs', href: '/programs' }, // STAR: Project TRY
    
    { name: 'Impact', href: '/blueprint' },
  ];

  // Logic to split the menu around the center logo
  const leftSideLinks = menuItems.slice(0, 2);
  const rightSideLinks = menuItems.slice(2);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ${
      scrolled ? 'bg-white/80 backdrop-blur-3xl py-3 shadow-[0_10px_40px_rgba(1,8,29,0.05)]' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LEFT SIDE: DESKTOP --- */}
        <div className="hidden lg:flex items-center gap-12 flex-1">
          {leftSideLinks.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={`text-[9px] tracking-[0.5em] uppercase font-black transition-all duration-500 flex items-center gap-2 ${
                  location.pathname === item.href ? `text-[${brand.green}]` : 'text-neutral-400 hover:text-[#01081d]'
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={10} className="opacity-40" />}
              </Link>
              
              {/* Dropdown Menu */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-48 bg-[#01081d] p-4 shadow-2xl"
                    >
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.href} 
                          className="block text-[8px] tracking-[0.3em] uppercase text-white/60 hover:text-[#ffa51f] py-3 border-b border-white/5 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* --- CENTER: SIGNATURE LOGO --- */}
        <div className="flex-shrink-0 z-[210]">
          <Link to="/" className="relative block group">
            <motion.div
              animate={{ scale: scrolled ? 0.8 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-full bg-[${brand.yellow}]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <img 
                src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/HOMEPAGE/Screenshot%202026-02-26%20at%202.41.11%E2%80%AFPM.png?updatedAt=1772097078810" 
                alt="Lamp Trust" 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-[0.5px] border-neutral-100 shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#01081d] rounded-full flex items-center justify-center text-white border-2 border-white z-20">
                <Sparkles size={10} className={`text-[${brand.yellow}]`} />
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
                location.pathname === item.href ? `text-[${brand.green}]` : 'text-neutral-400 hover:text-[#01081d]'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-[${brand.green}] transition-all duration-500 ${
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          
          {/* --- STANDOUT DONATE BUTTON --- */}

            <motion.button
            onClick={e=>window.location.href="/#donate"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-8 py-4 bg-[${brand.green}] text-[#01081d] text-[9px] font-black uppercase tracking-[0.3em] shadow-lg shadow-[#00bf63]/20 transition-all`}
            >
              Donate
            </motion.button>

        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden z-[210]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#01081d] text-white shadow-xl active:scale-90 transition-transform`}
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
            className="fixed inset-0 bg-[#FCFCFC] z-[200] flex flex-col p-10 pt-40"
          >
            <div className="absolute top-20 left-10 text-[20vw] font-black text-[#01081d]/[0.02] leading-none select-none -z-10 tracking-tighter">
              BEYOND
            </div>

            <div className="flex flex-col gap-6">
              {menuItems.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-5xl font-black tracking-tighter uppercase transition-all ${
                    location.pathname === item.href ? `text-[${brand.green}] italic` : 'text-[#01081d]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-neutral-100 pt-10">
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <button className={`w-full bg-[${brand.navy}] text-white py-6 rounded-sm font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4`}>
                  Support Impact <ArrowRight size={16} className={`text-[${brand.yellow}]`} />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;