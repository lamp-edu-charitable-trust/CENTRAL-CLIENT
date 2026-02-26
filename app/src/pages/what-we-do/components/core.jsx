import React from 'react';

const CoreBeliefsLight = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-40 antialiased overflow-hidden">
      
      {/* Background Aesthetic Layer: Large stylized text watermark */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="absolute top-10 left-10 text-[20vw] font-black text-[#0A192F] leading-none tracking-tighter">
          BELIEF
        </h2>
        <h2 className="absolute bottom-10 right-10 text-[20vw] font-black text-[#2D6A4F] leading-none tracking-tighter">
          PURPOSE
        </h2>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Fixed/Static Visual Story */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            <div className="relative">
              {/* Image 1: Focused Student (Grounded Reality) */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/whatsapp-image-2025-08-04-at-10.49.09_c41ceada-YBgba83ynrTG0k5k.jpg" 
                  alt="Focused student learning" 
                  className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Decorative Accent: Gold Pillar */}
              <div className="absolute -bottom-8 -left-8 h-24 w-1 bg-[#DAA520]"></div>
              
              {/* Small Floating Label */}
              <div className="absolute top-8 right-8 bg-white/90 px-4 py-2 backdrop-blur-sm">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0A192F]">
                  Bangalore Hub // Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Typographic Pillars */}
          <div className="lg:col-span-7 space-y-24 lg:space-y-32">
            
            {/* Main Header Block */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#0A192F]/40">
                What We Stand For
              </span>
              <h2 className="text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-8xl">
                Our Core <br />
                <span className="italic font-serif text-[#DAA520]">Beliefs.</span>
              </h2>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#0A192F]/70">
                At Lamp Trust, we believe that every child—no matter their background, migration status, or financial hardship—can discover their voice, build essential skills, and lead change in the world.
              </p>
            </div>

            {/* The Three Truths (Pillars) */}
            <div className="space-y-16 border-t border-neutral-100 pt-16">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300">
                Anchored by Three Undeniable Truths
              </p>

              {[
                { 
                  quote: "\"Education is the Answer.\"", 
                  color: "#0A192F", // Navy (Trust)
                  id: "01"
                },
                { 
                  quote: "\"Every child deserves a second chance to learn, grow, and thrive.\"", 
                  color: "#DAA520", // Gold (Optimism/Light)
                  id: "02"
                }
              ].map((belief, idx) => (
                <div key={idx} className="group relative pl-12 lg:pl-16">
                  {/* Vertical Accent Line on hover */}
                  <div 
                    className="absolute left-0 top-0 h-full w-[1px] bg-neutral-100 transition-all duration-500 group-hover:w-[3px]"
                    style={{ backgroundColor: belief.color }}
                  ></div>
                  
                  {/* Phase ID Label */}
                  <span className="text-[9px] font-bold text-neutral-300 group-hover:text-neutral-500 mb-4 block tracking-widest">
                    TRUTH {belief.id} //
                  </span>

                  <h3 className="text-3xl font-serif italic font-light leading-snug tracking-tight text-[#0A192F] sm:text-4xl">
                    We believe <br />
                    <span className="font-sans font-bold text-[#0A192F] not-italic transition-colors group-hover:text-[#DAA520]">
                      {belief.quote}
                    </span>
                  </h3>
                </div>
              ))}
            </div>

            {/* The Ultimate Purpose: High-Contrast brutalist finale */}
            <div className="relative mt-32 border border-[#2D6A4F] bg-[#2D6A4F]/[0.02] p-10 lg:p-16 rounded-sm">
              
              {/* Small Icon: Green Pulse */}
              <div className="absolute top-10 right-10 h-3 w-3 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                 <div className="h-full w-full rounded-full bg-[#2D6A4F] animate-ping opacity-60"></div>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2D6A4F]">
                Our Ultimate Purpose
              </span>
              <h4 className="mt-8 text-4xl font-extralight leading-tight tracking-tighter text-[#0A192F] sm:text-5xl lg:text-6xl">
                Through Education <br />
                We End <span className="font-bold text-[#2D6A4F]">Poverty.</span>
              </h4>
              
              <div className="mt-12 h-[1px] w-12 bg-[#2D6A4F] transition-all group-hover:w-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefsLight;