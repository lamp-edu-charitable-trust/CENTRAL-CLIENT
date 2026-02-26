import React from 'react';

const AboutHeroBalanced = () => {
  return (
    /* Height is set to 80vh to perfectly complement your 20vh Nav. 
       This ensures the entire Hero is visible on page load without scrolling.
    */
    <section className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A192F] px-6 lg:px-12 antialiased">
      
      {/* Background: Abstract Depth */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial light source representing "The Lamp" */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_50%_50%,_#1B4332_0%,_transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Content: Framed by the 80vh height */}
      <div className="relative z-10 mt-20 flex h-full w-full max-w-[1440px] flex-col justify-between py-12 lg:py-16">
        

        {/* Center: The Power Typography */}
        <div className="flex flex-col items-start">
          <h1 className="w-full text-5xl font-extralight leading-[0.85] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem]">
            Through <br />
            <span className="italic font-serif text-[#FFD700]">Education</span>, <br />
            We End <span className="font-bold">Poverty.</span>
          </h1>
        </div>

        {/* Bottom: Modern Footer Info */}
        <div className="flex flex-col items-end justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-6">
            <div className="h-3 w-3 rounded-full border border-[#FFD700] flex items-center justify-center">
               <div className="h-1 w-1 bg-[#FFD700] rounded-full animate-pulse"></div>
            </div>
            <p className="max-w-sm text-[10px] uppercase tracking-[0.2em] leading-relaxed text-neutral-400">
              Transforming the marginalized landscape of North Bengaluru.
            </p>
          </div>
          
          {/* Visual anchor for the scroll */}
          <div className="flex items-center gap-8">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Begin Journey</span>
            <div className="h-px w-24 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroBalanced;