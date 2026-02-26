import React from 'react';

const LeadershipBoard = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-40 antialiased overflow-hidden">
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header: Institutional Integrity */}
        <div className="max-w-4xl mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#0A192F]/40">
            Governance & Leadership
          </span>
          <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-8xl">
            Driven by Purpose. <br />
            <span className="italic font-serif text-[#DAA520]">Governed by Integrity.</span>
          </h2>
          <p className="mt-10 text-xl font-light leading-relaxed text-[#0A192F]/60 max-w-2xl">
            Lamp Trust is guided by a dedicated team of educators, social workers, and industry professionals who are fiercely committed to ending educational inequity.
          </p>
        </div>

        {/* Founder Feature: Large-Scale Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-neutral-200 overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/path-to-jaganathan-photo.jpg" 
                alt="Jaganathan Rajagopal" 
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            {/* Minimalist Caption */}
            <div className="absolute -bottom-6 -right-6 bg-[#0A192F] p-8 text-white max-w-xs">
              <p className="text-[10px] uppercase tracking-widest text-[#FFD700] mb-2">Founder & CEO</p>
              <h3 className="text-xl font-light tracking-tight">Jaganathan Rajagopal</h3>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-2xl font-serif italic text-[#0A192F] leading-snug mb-8">
              "To ensure no child’s potential is lost to poverty or migration."
            </p>
            <p className="text-lg leading-relaxed text-[#0A192F]/70">
              Jaganathan founded Lamp Trust with a singular vision. With over a decade of experience in community empowerment, he leads the strategic expansion of Project TRY across North Bengaluru, bridging the gap between marginalization and 21st-century success.
            </p>
          </div>
        </div>

        {/* The Board: The Beneficiary-to-Leader Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-100 border border-neutral-100 mb-40">
          
          {/* Divya Card */}
          <div className="bg-white p-12 lg:p-16 group hover:bg-[#FAFAFA] transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-neutral-100 overflow-hidden grayscale">
                <img src="/path-to-divya.jpg" alt="R Divya Tejaswini" className="h-full w-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0A192F]">R Divya Tejaswini</h4>
                <p className="text-[10px] uppercase tracking-widest text-[#2D6A4F]">Joint Secretary - COO</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#0A192F]/60">
              <span className="font-bold text-[#0A192F]">A legacy of impact:</span> As a former beneficiary, Divya completed her M.Tech and now leads our scaling operations across Karnataka. Her journey from student to COO defines our ultimate mission.
            </p>
          </div>

          {/* Smitha Card */}
          <div className="bg-white p-12 lg:p-16 group hover:bg-[#FAFAFA] transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-neutral-100 overflow-hidden grayscale">
                <img src="/path-to-smitha.jpg" alt="Smitha Rajarathinam" className="h-full w-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0A192F]">Smitha Rajarathinam</h4>
                <p className="text-[10px] uppercase tracking-widest text-[#2D6A4F]">Treasurer - Environmentalist</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#0A192F]/60">
              A former beneficiary who launched her own financial firm, Smitha manages our fiscal integrity and leads environmental sustainability workshops, ensuring a greener tomorrow for the next generation.
            </p>
          </div>

        </div>

        {/* Academic Spotlight: Kanchana Madam */}
        <div className="relative border-t border-neutral-200 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A192F]/30">Academic Pillar</span>
              <h3 className="mt-4 text-4xl font-light tracking-tight text-[#0A192F]">Kanchana Madam</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Remedial Teacher since 2019</p>
            </div>
            <div className="lg:col-span-8 bg-white p-10 lg:p-16 border-l-4 border-[#DAA520] shadow-sm">
              <p className="text-lg leading-relaxed text-[#0A192F]/70 italic font-serif">
                "In RK Hegde Nagar, our center is affectionately known as <span className="text-[#0A192F] font-bold font-sans not-italic">'Kanchana Madam’s Tuition'</span>—a tribute to her transformation of over 839 students through her expertise in languages and core subjects."
              </p>
              <div className="mt-8 flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-neutral-400">
                <div className="h-px w-8 bg-neutral-200"></div>
                Cornerstone of Success
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipBoard;