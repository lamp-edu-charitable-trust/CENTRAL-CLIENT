import React from 'react';

const ImpactTrackRecord = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-40 antialiased overflow-hidden">
      
      {/* Structural Watermark: Data Ledger Aesthetic */}
      <div className="absolute top-0 right-10 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black leading-none text-[#0A192F] tracking-tighter uppercase">
          Track
        </h2>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header: The Performance Narrative */}
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#2D6A4F]">
            Performance Report // 2019—2025
          </span>
          <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-8xl">
            The Lamp Trust <br />
            <span className="italic font-serif">Track Record.</span>
          </h2>
          <p className="mt-10 text-xl font-light leading-relaxed text-[#0A192F]/60 max-w-2xl">
            Since our grassroots beginnings in 2019, we have been relentlessly focused on <span className="text-[#0A192F] font-medium underline underline-offset-8 decoration-neutral-200">measurable transformation</span> in North Bengaluru.
          </p>
        </div>

        {/* Primary Impact Grid: The "Big Four" Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100 mb-24 shadow-2xl">
          {[
            { val: "839+", label: "Remedial Scholars", desc: "Literacy, Numeracy, and Digital Gaps" },
            { val: "3560+", label: "Upskilled Youth", desc: "Soft Skills & Career Mentorship" },
            { val: "100%", label: "Academic Result", desc: "Grade 5 to 12 Board Exams" },
            { val: "12k+", label: "Resources Shared", desc: "Books, Bags, and Essentials" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 group transition-all duration-500 hover:bg-[#FAFAFA]">
              <div className="text-5xl font-black tracking-tighter text-[#0A192F] group-hover:text-[#2D6A4F] transition-colors">
                {stat.val}
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A192F]/40">
                {stat.label}
              </p>
              <p className="mt-6 text-xs leading-relaxed text-neutral-400">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Grid: Secondary Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Detailed List Side */}
          <div className="lg:col-span-7 space-y-16">
            <div className="flex gap-8 group">
              <span className="text-4xl font-serif italic text-[#2D6A4F]">03</span>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] mb-2">Learning Infrastructure</h4>
                <p className="text-lg text-[#0A192F]/70">Active After-School Learning Hubs serving as safe havens for localized education.</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <span className="text-4xl font-serif italic text-[#2D6A4F]">600+</span>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] mb-2">Civic Engagement</h4>
                <p className="text-lg text-[#0A192F]/70">Volunteer Mentorship Hours dedicated to bridging the foundational literacy gap.</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <span className="text-4xl font-serif italic text-[#2D6A4F]">76%</span>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] mb-2">Competitive Average</h4>
                <p className="text-lg text-[#0A192F]/70">Average scoring across final board exams for students within the Trust ecosystem.</p>
              </div>
            </div>
          </div>

          {/* Featured Highlight: The Migrant Success Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0A192F] p-12 text-white overflow-hidden shadow-2xl">
              {/* Subtle Decorative Circle */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-white/10"></div>
              
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#FFD700]">Migrant Resilience</span>
              <h4 className="mt-8 text-3xl font-light tracking-tight leading-snug">
                35+ Students mastered <br />
                <span className="italic font-serif text-[#FFD700]">Kannada, English, & Hindi</span>
              </h4>
              <p className="mt-6 text-sm text-white/60 leading-relaxed">
                Scoring more than 50% in just 6 months—proving that when barriers are removed, brilliance emerges.
              </p>
              
              <div className="mt-12 flex items-center gap-4">
                 <div className="h-px w-12 bg-[#FFD700]"></div>
                 <span className="text-[9px] font-black uppercase tracking-widest">Rapid Literacy Impact</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Static Element */}
      <div className="mt-32 border-t border-neutral-100 py-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center opacity-30">
          <span className="text-[9px] font-bold uppercase tracking-[0.8em]">Lamp Trust Internal Audit</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.8em]">2019 // 2026</span>
        </div>
      </div>
    </section>
  );
};

export default ImpactTrackRecord;