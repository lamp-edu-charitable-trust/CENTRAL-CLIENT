import React from 'react';

const ProblemImpactSection = () => {
  const stats = [
    {
      figure: "1,824",
      label: "Lost Connections",
      context: "Dropouts in Bengaluru North (24-25). Every number is a child who stopped dreaming.",
      percentage: "75%" // Visual weight
    },
    {
      figure: "22.2%",
      label: "The Glass Ceiling",
      context: "Secondary dropout rate. The moment potential meets poverty, it shatters.",
      percentage: "22%"
    },
    {
      figure: "7,795",
      label: "The Unseen",
      context: "Out-of-school children city-wide. An army of talent left on the sidelines.",
      percentage: "90%"
    }
  ];

  return (
    <section className="bg-white py-32 px-6 antialiased selection:bg-black selection:text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Subtle Breadcrumb */}
        <div className="mb-16 flex items-center justify-between border-b border-neutral-100 pb-8">
          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.6em] text-neutral-400">
            <span>Critical Brief</span>
            <span className="h-[1px] w-12 bg-neutral-200"></span>
            <span>Case: North Bengaluru</span>
          </div>
          <div className="text-[9px] font-mono text-neutral-300">REF: 2025.EDU.EMG</div>
        </div>

        {/* Narrative Impact */}
        <div className="mb-32">
          <h2 className="text-6xl font-extralight tracking-tighter text-neutral-900 md:text-8xl lg:text-[10rem] leading-none">
            Educational <br />
            <span className="italic font-serif text-neutral-300 transition-colors hover:text-orange-600 cursor-default">Poverty.</span>
          </h2>
          
          <div className="mt-16 ml-auto max-w-xl">
            <p className="text-2xl font-light leading-relaxed text-neutral-600">
              Beyond the glass facades of the tech city lies a <span className="text-black font-medium underline decoration-1 underline-offset-8">hollow reality</span>. 
              32 schools are currently in a state of crisis, leaving 4,000+ children at the edge of the digital divide.
            </p>
          </div>
        </div>

        {/* The "Metric of Failure" Grid */}
        <div className="grid grid-cols-1 gap-1 px-4 md:grid-cols-3 md:px-0">
          {stats.map((stat, i) => (
            <div key={i} className="group relative border border-neutral-100 bg-neutral-50 p-10 transition-all hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
              {/* Background Progress Bar (Subtle) */}
              <div className="absolute bottom-0 left-0 h-1 bg-neutral-900 transition-all duration-700 w-0 group-hover:w-full"></div>
              
              <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Stat_{i + 1}</p>
              
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-light tracking-tighter text-neutral-900 md:text-6xl">
                  {stat.figure}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  {stat.label}
                </span>
              </div>
              
              <p className="mt-8 text-sm leading-relaxed text-neutral-500 opacity-80 group-hover:opacity-100">
                {stat.context}
              </p>
            </div>
          ))}
        </div>

        {/* Location "Redaction" Cloud */}
        <div className="mt-32">
          <p className="mb-10 text-[10px] uppercase tracking-[0.4em] text-neutral-400">Affected Zones:</p>
          <div className="flex flex-wrap gap-4">
            {["RK Hegde Nagar", "Chokkanahalli", "Sampigehalli", "Nagenahalli", "Amruthahalli", "Thanisandra", "Thirumenahalli"].map((loc) => (
              <span 
                key={loc} 
                className="cursor-crosshair border border-neutral-200 px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-neutral-400 transition-all hover:bg-black hover:text-white hover:border-black"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemImpactSection;