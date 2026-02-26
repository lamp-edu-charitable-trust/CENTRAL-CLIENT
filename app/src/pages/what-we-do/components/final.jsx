import React from 'react';

const PartnersCollaborators = () => {
  const partners = [
    "L&T Rotary, Bengaluru",
    "Govt. High School, North Zone-4",
    "Nine Dots Foundation, Bengaluru",
    "Ralco Synergy",
    "Manyatha Rotary, Bengaluru",
    "BIRDS",
    "Berger Paints",
    "Smile Foundation",
    "Janajagriti Trust",
    "Growth Platter Academy",
    "Sri Siddhartha Primary School",
    "ConnectFor",
    "Sceen"
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-40 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header: The Collaborative Spirit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-start">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#2D6A4F]">
              Strategic Alliances
            </span>
            <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-7xl">
              It Takes <br />
              <span className="italic font-serif text-[#DAA520]">a City.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-20">
            <p className="text-lg leading-relaxed text-[#0A192F]/60">
              We are proud to collaborate with local schools, visionary corporate CSRs, and community leaders to bring <span className="text-[#0A192F] font-bold">Project TRY</span> to life across Bengaluru.
            </p>
          </div>
        </div>

        {/* The Partner Matrix: Clean Typographic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 lg:p-12 flex items-center justify-center text-center transition-all duration-500 hover:bg-[#FAFAFA]"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 transition-colors duration-500 group-hover:text-[#0A192F]">
                {partner}
              </span>
              
              {/* Subtle Corner Indicator */}
              <div className="absolute top-4 right-4 h-1 w-1 rounded-full bg-transparent transition-all group-hover:bg-[#2D6A4F]"></div>
            </div>
          ))}
          
          {/* Invitation Card */}
          <div className="bg-[#0A192F] p-8 lg:p-12 flex flex-col justify-center items-center text-center group cursor-pointer">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#FFD700] mb-4">
              Your Logo Here
            </span>
            <h4 className="text-white text-sm font-light tracking-widest uppercase">
              Become a <br /> Collaborator
            </h4>
            <div className="mt-6 h-[1px] w-8 bg-white/20 transition-all group-hover:w-16 group-hover:bg-[#FFD700]"></div>
          </div>
        </div>

        {/* Decorative Vertical Scroll Text */}
        <div className="mt-24 flex justify-between items-center opacity-20">
          <div className="h-px flex-grow bg-neutral-200"></div>
          <span className="px-8 text-[9px] font-black uppercase tracking-[1em] text-neutral-500">
            North Bengaluru Hubs
          </span>
          <div className="h-px flex-grow bg-neutral-200"></div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#FAFAFA] border border-neutral-100 -z-10"></div>
    </section>
  );
};

export default PartnersCollaborators;