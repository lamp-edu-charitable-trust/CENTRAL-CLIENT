import React from 'react';

const JourneyFootprintLight = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-40 antialiased overflow-hidden">
      {/* Structural Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black leading-none text-[#0A192F] tracking-tighter">
          EST.2010
        </h2>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
          
          {/* Left: The Narrative Timeline */}
          <div className="lg:col-span-5 space-y-16 lg:pr-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#0A192F]/40">
                Our Journey
              </span>
              <h2 className="mt-8 text-5xl font-extralight leading-[0.95] tracking-tighter text-[#0A192F] sm:text-7xl">
                Over a Decade of <br />
                <span className="italic font-serif text-[#DAA520]">Dedication.</span>
              </h2>
            </div>

            <div className="space-y-12">
              <div className="group relative pl-10 border-l border-neutral-200 transition-all hover:border-[#DAA520]">
                <span className="text-xs font-black text-[#DAA520] mb-2 block">2010 — 2018</span>
                <p className="text-sm leading-relaxed text-[#0A192F]/60">
                  What began as a passionate grassroots initiative founded by <span className="text-[#0A192F] font-medium">Jaganathan Rajagopal</span>, focused on immediate community needs in North Bengaluru.
                </p>
              </div>

              <div className="group relative pl-10 border-l border-neutral-200 transition-all hover:border-[#2D6A4F]">
                <span className="text-xs font-black text-[#2D6A4F] mb-2 block">2019 — PRESENT</span>
                <p className="text-sm leading-relaxed text-[#0A192F]/60">
                  Formally registered as a Trust, evolving into a data-driven ecosystem of Study Centres and digital learning hubs.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Footprint & Alignment */}
          <div className="lg:col-span-7 bg-white p-10 lg:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-neutral-100">
            <div className="max-w-xl">
              <h3 className="text-2xl font-light tracking-tight text-[#0A192F] mb-8">
                The Study Centre Model
              </h3>
              <p className="text-lg leading-relaxed text-[#0A192F]/70">
                Today, Lamp Trust reaches deeply into the marginalized communities of North Bengaluru. We provide safe, community-owned spaces that foster <span className="text-[#0A192F] font-medium">literacy, numeracy, and critical thinking.</span>
              </p>
              
              <p className="mt-8 text-sm leading-relaxed text-neutral-500 italic font-serif">
                Working in strict alignment with the government's visionary frameworks to ensure national standards of excellence.
              </p>

              {/* Policy Badges: Hyper-Minimalist Grid */}
              <div className="mt-16 pt-10 border-t border-neutral-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { name: "NEP 2020", desc: "Education Policy" },
                    { name: "NCF 2023", desc: "Curriculum Framework" },
                    { name: "NIPUN Bharat", desc: "Foundational Literacy" }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="h-px w-8 bg-[#DAA520] mb-4 transition-all group-hover:w-full"></div>
                      <span className="text-xs font-bold tracking-widest text-[#0A192F]">{item.name}</span>
                      <p className="text-[9px] uppercase tracking-wider text-neutral-400 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyFootprintLight;