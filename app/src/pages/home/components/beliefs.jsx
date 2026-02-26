import React from 'react';

const StrategySection = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-32 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header: The Intent */}
        <div className="mb-20 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1B4332]">
            Our Holistic Strategy
          </span>
          <h2 className="mt-6 text-5xl font-extralight tracking-tighter text-[#0A192F] sm:text-7xl">
            How We <span className="italic font-serif text-[#2D6A4F]">Work</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#0A192F]/70">
            At Lamp Educational and Charitable Trust, our approach is rooted in care, innovation, and purpose. We believe that solving the education crisis requires more than short-term fixes—it needs a holistic strategy that transforms classrooms and empowers communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Left: The Visual Diagram (6 Cols) */}
          <div className="relative lg:col-span-6 flex items-center justify-center">
            {/* Circular Strategy UI */}
            <div className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border border-dashed border-[#2D6A4F]/30 sm:h-[450px] sm:w-[450px]">
              
              {/* Center: The Child (Core) */}
              <div className="z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl bg-[#0A192F] flex items-center justify-center text-center p-4">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700]">The Child</span>
              </div>

              {/* Floating Orbit: Teachers */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
                 <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-lg transition-transform group-hover:scale-110">
                    <img src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/1720284678438.jpg" alt="Teacher" className="h-full w-full object-cover" />
                 </div>
                 <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-tighter text-[#1B4332]">Teachers</span>
              </div>

              {/* Floating Orbit: Community */}
              <div className="absolute bottom-10 right-0 translate-x-1/4 group">
                 <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-lg transition-transform group-hover:scale-110">
                    <img src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/GDD%20Image%208.jpg" alt="Community" className="h-full w-full object-cover" />
                 </div>
                 <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-tighter text-[#1B4332]">Community</span>
              </div>

              {/* Floating Orbit: Innovation */}
              <div className="absolute bottom-10 left-0 -translate-x-1/4 group">
                 <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-lg transition-transform group-hover:scale-110">
                    <img src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/1720284678305.jpg" alt="Innovation" className="h-full w-full object-cover" />
                 </div>
                 <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-tighter text-[#1B4332]">Innovation</span>
              </div>

              {/* Decorative Rotating Ring */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border-t border-transparent border-l-[#FFD700]/20"></div>
            </div>
          </div>

          {/* Right: The 5 Pillars (6 Cols) */}
          <div className="space-y-12 lg:col-span-6">
            
            {[
              { title: "Child-Centered Learning", desc: "We put children at the heart of every program, ensuring they not only attend school but truly learn and thrive.", icon: "👦" },
              { title: "Strengthening Teachers", desc: "Equipping educators with 21st-century skills, modern resources, and mentorship to make classrooms places of possibility.", icon: "👩‍🏫" },
              { title: "Beyond School Hours", desc: "Reimagined programs like Project TRY nurture leadership, creativity, and confidence outside the classroom.", icon: "🌅" },
              { title: "Community Involvement", desc: "Engaging parents and local leaders to create a grassroots support system that sustains academic progress.", icon: "🤝" },
              { title: "Innovation with Purpose", desc: "Constantly adapting with tech-enabled tools to make education impactful and relevant for the modern world.", icon: "💡" }
            ].map((pillar, idx) => (
              <div key={idx} className="group flex gap-6 border-l border-neutral-100 pl-8 transition-colors hover:border-[#2D6A4F]">
                <div className="text-2xl">{pillar.icon}</div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A192F] transition-colors group-hover:text-[#2D6A4F]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0A192F]/60">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      
      {/* Visual background flourish */}
      <div className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-[#D8F3DC]/30 blur-[100px]"></div>
    </section>
  );
};

export default StrategySection;