import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Who Are We', href: '/who-are-we' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Revive Earth', href: '/revive-earth' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      scrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        
        {/* Left Side: Minimal Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 flex-1">
          {menuItems.slice(0, 3).map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[10px] tracking-[0.3em] uppercase font-light text-neutral-500 hover:text-black transition-colors duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Center: The "Signature" Logo */}
        <div className="flex-shrink-0 px-8">
          <a href="/" className="relative block group">
            <motion.img 
              initial={false}
              animate={{ height: scrolled ? 60 : 85, width: scrolled ? 60 : 85 }}
              src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/HOMEPAGE/logo.avif" 
              alt="Lamp Trust" 
              className="rounded-full object-cover border-[0.5px] border-neutral-100 shadow-sm group-hover:shadow-xl transition-all duration-700"
            />
          </a>
        </div>

        {/* Right Side: Minimal Nav (Desktop) */}
        <div className="hidden lg:flex items-center justify-end gap-10 flex-1">
          {menuItems.slice(3).map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[10px] tracking-[0.3em] uppercase font-light text-neutral-500 hover:text-black transition-colors duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="lg:hidden p-2 text-neutral-800"
        >
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-light tracking-widest uppercase text-neutral-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;