import React from 'react';

const MissionBeliefs = () => {
  const beliefs = [
    {
      num: "01",
      title: "Education is the Bridge",
      desc: "We believe education is the bridge from poverty to possibility, opening doors to dignity, opportunity, and a brighter future.",
      color: "#0A192F" // Dark Blue (Trust/Foundation)
    },
    {
      num: "02",
      title: "Reimagining Student Time",
      desc: "We believe in reimagining learning spaces and after-school hours, ensuring our hubs nurture not just academics, but also love, justice, and leadership.",
      color: "#DAA520" // Golden Yellow (Optimism/Light)
    },
    {
      num: "03",
      title: "Constant Innovation",
      desc: "We believe in purposeful progress, constantly innovating and improving our methods so children and communities can rise stronger together.",
      color: "#2D6A4F" // Fresh Green (Growth/Sustainability)
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-40 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Grid: The Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#0A192F]/40">
              The Heart of Lamp Trust
            </span>
            <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-8xl">
              3 Beliefs. <br />
              <span className="italic font-serif">One Mission.</span>
            </h2>
            <p className="mt-8 text-xl text-[#2D6A4F] font-light tracking-wide uppercase">
              A future full of hope.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end space-y-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] mb-4">Our Mission</h4>
              <p className="text-lg leading-relaxed text-[#0A192F]/70">
                To bridge learning gaps and empower marginalized children by delivering <span className="text-[#0A192F] font-medium">rigorous, tech-enabled education</span> through both safe, physical community hubs and adaptive online platforms.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] mb-4">Scale & Sustain</h4>
              <p className="text-sm leading-relaxed text-neutral-500 italic font-serif">
                We don't just build centers; we build ecosystems. By transitioning hubs into community-owned spaces and leveraging scalable digital apps, we ensure no student is left behind—no matter where they migrate.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Beliefs: Horizontal Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-neutral-100">
          {beliefs.map((belief, idx) => (
            <div 
              key={idx} 
              className="group relative pt-12 pb-16 px-0 lg:px-10 border-b border-neutral-100 lg:border-b-0 lg:border-r last:border-r-0 transition-all hover:bg-[#FAFAFA]"
            >
              {/* Animated Accent Line */}
              <div 
                className="absolute top-0 left-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full"
                style={{ backgroundColor: belief.color }}
              ></div>

              <div className="relative">
                <span className="text-5xl font-black text-[#0A192F]/[0.03] absolute -top-4 left-0 group-hover:text-[#0A192F]/[0.08] transition-colors">
                  {belief.num}
                </span>
                <h3 className="relative text-2xl font-light tracking-tight text-[#0A192F] mb-8">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#0A192F]/60 max-w-[280px]">
                  {belief.desc}
                </p>
              </div>

              {/* Minimalist Button Detail */}
              <div className="mt-12 flex items-center gap-3 opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                <div className="h-[1px] w-8 bg-[#0A192F]/20"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#0A192F]/40">Core Principle</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Brand Mark */}
      <div className="absolute bottom-10 right-10 opacity-[0.03]">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#0A192F" strokeWidth="0.5" />
          <path d="M50 20V80M20 50H80" stroke="#0A192F" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default MissionBeliefs;