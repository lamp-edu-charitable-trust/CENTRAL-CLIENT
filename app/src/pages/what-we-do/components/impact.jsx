import React from 'react';

const ImpactEcosystem = () => {
  const programs = [
    {
      id: "01",
      title: "Project TRY",
      subtitle: "TIME TO RE-INVENT YOURSELF",
      desc: "Our flagship 3-phase academic and upskilling journey focused on total student transformation.",
      color: "#DAA520" // Gold
    },
    {
      id: "02",
      title: "Confusion To Clarity",
      subtitle: "CAREER & MENTORSHIP",
      desc: "Dedicated guidance modules designed to navigate students from academic hurdles to career milestones.",
      color: "#0A192F" // Navy
    },
    {
      id: "03",
      title: "Pass On Your Books",
      subtitle: "RESOURCE SHARING",
      desc: "A community-driven initiative ensuring that knowledge is never discarded, only shared.",
      color: "#2D6A4F" // Green
    },
    {
      id: "04",
      title: "21st Century Ed.",
      subtitle: "TECH & DIGITAL LITERACY",
      desc: "Equipping marginalized students with the tools of the modern world: AI, Coding, and Robotics.",
      color: "#0A192F"
    },
    {
      id: "05",
      title: "Project Revive Earth",
      subtitle: "ENVIRONMENTAL LEADERSHIP",
      desc: "Fostering youth responsibility and environmental awareness through hands-on local action.",
      color: "#2D6A4F"
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-40 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#0A192F]/40">
            Strategic Infrastructure
          </span>
          <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-8xl">
            More Than a <br />
            <span className="italic font-serif">Study Center.</span>
          </h2>
          <p className="mt-10 text-xl font-light leading-relaxed text-[#0A192F]/60">
            We are a thriving community of educators, students, and partners dedicated to reinventing what after-school learning can be.
          </p>
        </div>

        {/* Ecosystem Grid: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100">
          
          {/* Main Lead Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#FAFAFA] p-12 lg:p-16 flex flex-col justify-between group hover:bg-white transition-all duration-500">
            <div>
              <span className="text-[10px] font-black text-[#DAA520] tracking-widest">{programs[0].id} //</span>
              <h3 className="mt-6 text-4xl font-light tracking-tight text-[#0A192F] group-hover:text-[#DAA520] transition-colors">
                {programs[0].title}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                {programs[0].subtitle}
              </p>
            </div>
            <p className="mt-12 text-lg text-[#0A192F]/70 max-w-md">
              {programs[0].desc}
            </p>
          </div>

          {/* Secondary Cards Loop */}
          {programs.slice(1).map((program, idx) => (
            <div key={idx} className="bg-white p-10 flex flex-col justify-between group hover:bg-[#FAFAFA] transition-all duration-500">
              <div>
                <span className="text-[10px] font-black text-neutral-200 group-hover:text-[#0A192F] transition-colors">
                  {program.id} //
                </span>
                <h3 className="mt-6 text-2xl font-light tracking-tight text-[#0A192F]">
                  {program.title}
                </h3>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                  {program.subtitle}
                </p>
              </div>
              <div className="mt-12">
                <p className="text-sm leading-relaxed text-neutral-500">
                  {program.desc}
                </p>
                <div 
                  className="mt-6 h-[1px] w-8 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: program.color }}
                ></div>
              </div>
            </div>
          ))}

        </div>

        {/* Footer Intent */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
           <div className="h-20 w-px bg-gradient-to-b from-neutral-200 to-transparent"></div>
           <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.5em] text-[#0A192F]/30">
             Building Ecosystems // Scaling Humanity
           </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactEcosystem;