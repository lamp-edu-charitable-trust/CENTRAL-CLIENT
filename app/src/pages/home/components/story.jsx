import React from 'react';
import { Play } from 'lucide-react';

const PremiumLightHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans antialiased selection:bg-orange-100">
      
      {/* Background: Soft, Airy, and High-End */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590059392055-616999691461?q=80&w=2600&auto=format&fit=crop" 
          alt="Bengaluru Morning Sunlight" 
          className="h-full w-full object-cover opacity-20 transition-transform duration-[4000ms] hover:scale-105"
        />
        {/* Soft radial fade for that "clean" paper feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#FAFAFA]"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-24">
        
        {/* Top Metadata - Minimalist & Fine */}
        <div className="mb-14 flex items-center gap-4 text-[10px] uppercase tracking-[0.6em] text-neutral-400">
          <span className="h-[1px] w-8 bg-neutral-200"></span>
          The Journey of a Language
        </div>

        {/* Narrative Headline - High Contrast & Serif Mix */}
        <div className="max-w-5xl">
          <h1 className="text-6xl font-extralight leading-[1.05] tracking-tighter text-neutral-900 md:text-9xl">
            Building <span className="italic font-serif text-neutral-500">Bridges</span> <br />
            in Namma Bengaluru.
          </h1>
          
          <div className="mt-16 grid grid-cols-1 gap-16 border-t border-neutral-100 pt-12 md:grid-cols-2">
            <p className="text-xl font-light leading-relaxed text-neutral-600">
              A migrant family from Nepal arrived to build the city's future. Their son, initially silenced by a new tongue, chose a path of his own.
            </p>
            <p className="text-xl font-light leading-relaxed text-neutral-600">
              In just six months, he decoded the rhythm of Kannada—transforming a barrier into a gateway. Confidence found its voice.
            </p>
          </div>
        </div>

        {/* Ultra-Modern YouTube CTA - "The Floating Card" */}
        <div className="group mt-20 flex w-full max-w-md cursor-pointer items-center gap-6 rounded-3xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:scale-110">
            <Play size={20} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">Watch the Documentary</h3>
            <p className="mt-1 text-xs text-neutral-500">The 6-month Kannada Transformation</p>
            <span className="mt-2 text-[10px] font-bold text-neutral-400 group-hover:text-black">
              YOUTUBE — PLAY NOW
            </span>
          </div>
        </div>

        {/* Minimalist Side-Tag */}
        <div className="absolute right-12 top-1/2 -rotate-90 text-[9px] uppercase tracking-[0.5em] text-neutral-300 hidden lg:block">
          Migration & Resilience — 2026
        </div>
      </div>
    </section>
  );
};

export default PremiumLightHero;