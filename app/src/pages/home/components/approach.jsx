import React from 'react';

const ProjectTryPremium = () => {
  const steps = [
    {
      id: "01",
      title: "The Foundation",
      subtitle: "PHASE 1",
      desc: "Aggressively rebuilding missing reading and math skills using \"Teaching at the Right Level.\"",
      color: "#EF4444", // Red
      status: "🔴"
    },
    {
      id: "02",
      title: "The Bridge",
      subtitle: "PHASE 2",
      desc: "Helping students tackle their current school syllabus and pass their board exams with confidence.",
      color: "#FFD700", // Golden Yellow
      status: "🟡"
    },
    {
      id: "03",
      title: "The Launchpad",
      subtitle: "PHASE 3",
      desc: "Unlocking 21st-century upskilling like AI, Coding, Robotics, and career mentorship.",
      color: "#2D6A4F", // Fresh Green
      status: "🟢"
    }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-40 antialiased overflow-hidden">
      {/* Decorative Background Element */}
      <div className="pointer-events-none absolute -right-20 top-0 text-[20vw] font-black leading-none text-[#0A192F]/[0.02] uppercase select-none">
        Ascent
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 lg:h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#0A192F]/40">
              The Solution
            </span>
            <h2 className="mt-8 text-6xl font-extralight leading-[0.95] tracking-tighter text-[#0A192F] sm:text-7xl xl:text-8xl">
              Introducing <br />
              <span className="italic font-serif text-[#0A192F]">Project TRY</span>
            </h2>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-[#0A192F]/40">
              (Time to Re-Invent Yourself)
            </p>
            <div className="mt-10 h-[1px] w-20 bg-[#0A192F]"></div>
            <p className="mt-10 max-w-sm text-lg leading-relaxed tracking-tight text-[#0A192F]/70">
              We don’t just offer generic homework help. Project TRY is a rigorous, 3-Phase after-school journey designed to completely transform a student's trajectory.
            </p>
          </div>

          {/* Right Column: The 3-Phase Ascent */}
          <div className="lg:col-span-7 space-y-24 lg:space-y-40">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative pl-12 lg:pl-20">
                
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-neutral-200">
                  <div 
                    className="absolute top-0 left-0 w-full h-0 transition-all duration-1000 ease-out group-hover:h-full" 
                    style={{ backgroundColor: step.color }}
                  ></div>
                </div>

                <div className="relative">
                  {/* Floating Number Label */}
                  <span className="absolute -left-12 lg:-left-24 top-0 text-6xl font-black leading-none text-[#0A192F]/[0.04] lg:text-8xl transition-colors group-hover:text-[#0A192F]/10">
                    {step.id}
                  </span>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm">{step.status}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl font-light tracking-tight text-[#0A192F] sm:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0A192F]/60">
                    {step.desc}
                  </p>

                  {/* Aesthetic Detail: Phase Indicator */}
                  <div className="mt-12 flex items-center gap-4">
                    <div 
                      className="h-1 w-12 transition-all duration-500 group-hover:w-20" 
                      style={{ backgroundColor: step.color }}
                    ></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#0A192F]">
                      Ascent Module {step.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTryPremium;