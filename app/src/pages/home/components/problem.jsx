import React from 'react';

const CrisisSectionLight = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-32 antialiased">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#0A192F]/40">
              The Urgent Reality
            </span>
            <h2 className="text-5xl font-extralight tracking-tighter text-[#0A192F] sm:text-7xl">
              The Crisis: <br />
              <span className="italic font-serif text-[#DAA520]">The "Missing Middle"</span>
            </h2>
            {/* Minimalist Accent Line */}
            <div className="h-[1px] w-24 bg-[#0A192F]/10"></div>
          </div>
          
          <div className="lg:pt-20">
            <p className="text-lg leading-relaxed tracking-tight text-[#0A192F]/70 sm:text-xl">
              In North Bengaluru, pandemic setbacks and frequent family migration have created a silent education crisis. 
              <span className="mt-6 block font-medium text-[#0A192F]">
                They aren't dropping out because they want to; they drop out because they can't read the textbook.
              </span>
            </p>
          </div>
        </div>

        {/* Premium Data Cards */}
        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          
          {/* 17.6% - The Statistic */}
          <div className="group relative border-t border-neutral-200 pt-10 transition-all hover:border-[#FFD700]">
            <div className="mb-4 text-7xl font-black tracking-tighter text-[#0A192F] transition-colors group-hover:text-[#DAA520]">
              17.6%
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0A192F]/40">
              The Literacy Gap
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#0A192F]/60">
              Only a fraction of early learners in these zones can read basic text, creating an invisible barrier to growth.
            </p>
          </div>

          {/* The 8th-Grade Cliff */}
          <div className="group relative border-t border-neutral-200 pt-10 transition-all hover:border-[#0A192F]">
            <h3 className="mb-4 text-2xl font-light tracking-tight text-[#0A192F]">
              The 8th-Grade Cliff
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0A192F]/40">
              The Academic Wall
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#0A192F]/60">
              Without foundational skills, students hit a wall, forcing boys into manual labor and girls into domestic chores.
            </p>
          </div>

          {/* The Choice */}
          <div className="group relative border-t border-neutral-200 pt-10 transition-all hover:border-[#2D6A4F]">
            <h3 className="mb-4 text-2xl font-light tracking-tight text-[#0A192F]">
              The Choice
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">
              Reinvent the Future
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#0A192F]/60">
              We can either let them fall behind, or provide the tools to <span className="text-[#2D6A4F] font-semibold underline underline-offset-4 cursor-pointer">reinvent their tomorrow</span>.
            </p>
          </div>

        </div>
      </div>

      {/* Modern Watermark Detail */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <p className="rotate-90 origin-right text-[10px] font-bold uppercase tracking-[1em] text-neutral-200">
          Lamp Trust • 2026
        </p>
      </div>
    </section>
  );
};

export default CrisisSectionLight;