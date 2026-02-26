import React from 'react';

const LampHero = () => {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A192F] px-6 font-sans antialiased">
      {/* Background: Transition from Dark to Light/Green */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/gdd-image-8-mjEGBQM60Li9MOXP.jpg" 
          alt="Student with tablet" 
          className="h-full w-full object-cover opacity-30 grayscale-[20%]"
        />
        {/* Gradient Overlay: Navy (Trust) to Transparent to Green (Growth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-transparent lg:via-[#0A192F]/20 to-[#1B4332]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Tagline / Eyebrow */}
        <span className="mb-6 inline-block rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD700]">
          Impacting Today. Reinventing Tomorrow.
        </span>

        {/* Main Headline */}
        <h1 className="max-w-5xl text-5xl font-extralight tracking-tighter text-white sm:text-7xl lg:text-8xl">
          Don’t Let Their Story <br />
          <span className="italic font-serif text-[#FFD700]">End in the 8th Grade.</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="mt-8 max-w-2xl text-sm leading-relaxed tracking-wide text-neutral-300 sm:text-lg">
          We rescue marginalized students in North Bengaluru from the <span className="text-white font-medium">"8th-Grade Cliff"</span> by bridging the gap between basic literacy and 21st-century success.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Primary: Golden Yellow (Optimism) */}
          <button className="group relative overflow-hidden bg-[#FFD700] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#0A192F] transition-all hover:scale-105 hover:bg-white active:scale-95">
            Sponsor a Student for ₹916/mo
          </button>
          
          {/* Secondary: Fresh Green (Growth) */}
          <button className="border border-[#2D6A4F] bg-[#1B4332]/40 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-[#2D6A4F]">
            Explore Project TRY
          </button>
        </div>
      </div>

      {/* Brand Identity: Lamp Educational and Charitable Trust */}
      <div className="absolute bottom-10 flex flex-col items-center gap-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-neutral-500">
          Lamp Educational and Charitable Trust
        </span>
        <div className="h-[60px] w-[1px] bg-gradient-to-b from-[#FFD700] to-transparent"></div>
      </div>
    </section>
  );
};

export default LampHero;