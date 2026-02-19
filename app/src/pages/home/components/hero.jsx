import React from 'react';

const UltraModernHero = () => {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 font-sans antialiased">
      {/* Background: Immersive, High-Contrast Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2500&auto=format&fit=crop" 
          alt="Impactful Education" 
          className="h-full w-full object-cover opacity-40 grayscale-[40%] transition-transform duration-1000 hover:scale-105"
        />
        {/* Modern Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Subtle Label */}
        <span className="mb-6 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          Life is all about making an Impact
        </span>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-5xl font-extralight tracking-tighter text-white sm:text-7xl lg:text-8xl">
          Transforming <span className="italic font-serif">Education</span> Together
        </h1>
        
        <p className="mt-8 max-w-xl text-sm leading-relaxed tracking-wide text-neutral-300 sm:text-base">
          Every child deserves more than just a classroom—they deserve a chance to dream, discover, and lead.
        </p>

    

        {/* Action: Minimalist & Tactile */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center mt-10 ">
          <button className="group relative overflow-hidden hover:cursor-pointer bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-neutral-200">
            Donate Now
          </button>
          
          <button className="text-xs font-bold uppercase hover:cursor-pointer tracking-[0.3em] text-white transition-all hover:text-neutral-400">
            Engage with us —
          </button>
        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-[40px] w-[1px] bg-gradient-to-b from-neutral-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default UltraModernHero;