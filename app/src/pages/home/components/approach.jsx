import React from 'react';

const ApproachSection = () => {
  const approaches = [
    {
      title: "Child-Centered Learning",
      description: "We put children at the heart of every program, ensuring they move beyond attendance to true mastery.",
      detail: "Literacy & Numeracy focus"
    },
    {
      title: "Strengthening Teachers",
      description: "Equipping educators with mentorship and resources to turn classrooms into hubs of possibility.",
      detail: "Professional Development"
    },
    {
      title: "Beyond School Hours",
      description: "Reimagined after-school programs that nurture leadership, creativity, and self-confidence.",
      detail: "Holistic Growth"
    },
    {
      title: "Community Involvement",
      description: "Engaging parents and local leaders to build a resilient support system for every child.",
      detail: "Ecosystem Support"
    },
    {
      title: "Innovation with Purpose",
      description: "Adapting new tools and methodologies to keep education impactful in a digital age.",
      detail: "Scalable Solutions"
    }
  ];

  const sdgs = [3, 4, 8, 10, 11, 12];

  return (
    <section className="bg-white py-32 px-6 antialiased selection:bg-neutral-900 selection:text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - High-End Editorial Style */}
        <div className="mb-24 flex flex-col items-start gap-10 lg:flex-row lg:items-end">
          <div className="flex-1">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 font-bold">Strategy</h2>
            <h3 className="text-5xl font-extralight tracking-tighter text-neutral-900 md:text-8xl">
              Our <span className="italic font-serif">Holistic</span> Approach.
            </h3>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-lg font-light leading-relaxed text-neutral-500 italic border-l-2 border-neutral-900 pl-6">
              "Solving the crisis requires more than short-term fixes; it needs a strategy that transforms classrooms and uplifts communities."
            </p>
          </div>
        </div>

        {/* Approach Cards - Dynamic Grid */}
        <div className="grid grid-cols-1 gap-px bg-neutral-100 border border-neutral-100 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-12 transition-all duration-500 hover:z-10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <span className="text-[10px] font-mono text-neutral-300">MODAL_{idx + 1}</span>
              <h4 className="mt-8 text-2xl font-light tracking-tight text-neutral-900 transition-colors group-hover:text-orange-600">
                {item.title}
              </h4>
              <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="h-[1px] w-4 bg-neutral-900"></span>
                <span className="text-[9px] font-black uppercase tracking-widest text-neutral-900">{item.detail}</span>
              </div>
            </div>
          ))}
          
          {/* Decorative Callout Card */}
          <div className="hidden lg:flex bg-neutral-950 p-12 flex-col justify-center text-white">
            <p className="text-sm font-light leading-relaxed opacity-70">
              Our initiatives are meticulously designed to scale impact across North Bengaluru's most vulnerable zones.
            </p>
            <button className="mt-8 text-left text-[10px] font-bold uppercase tracking-[0.3em] hover:text-orange-400 transition-colors">
              Explore Our Data →
            </button>
          </div>
        </div>

        {/* SDG Section - Premium Badges */}
        <div className="mt-32 pt-16 border-t border-neutral-100">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-2">Global Alignment</p>
              <h4 className="text-xl font-light text-neutral-900">United Nations Sustainable Development Goals</h4>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {sdgs.map((num) => (
                <div key={num} className="group relative h-16 w-16 overflow-hidden rounded-lg bg-neutral-50 border border-neutral-100 grayscale transition-all hover:grayscale-0 hover:scale-110">
                  <img 
                    src={`https://raw.githubusercontent.com/UNStats/SDGs/master/logos/goal-${num}.png`} 
                    alt={`SDG ${num}`}
                    className="h-full w-full object-contain p-2"
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Goal {num}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;