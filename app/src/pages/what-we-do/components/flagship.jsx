import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 lg:py-40 antialiased overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Premium Image Composition */}
          <div className="relative lg:col-span-6">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 rounded-sm shadow-2xl">
              <img 
                src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/HOMEPAGE/1720284678039.jpg" 
                alt="Empowering children in Bengaluru" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Secondary Floating Image: Adds depth and premium feel */}
            <div className="absolute -bottom-12 -right-8 hidden lg:block w-2/3 aspect-video overflow-hidden border-[12px] border-white bg-neutral-100 shadow-xl">
              <img 
                src="https://ik.imagekit.io/lampedu/MAIN-WEBSITE/HOMEPAGE/1720284678106.jpg" 
                alt="Skill-based learning" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Aesthetic Detail: Floating Brand Mark */}
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-[#FFD700] p-6 hidden lg:flex items-center justify-center">
               <span className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] rotate-90">LampTrust</span>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#2D6A4F]">
                Who We Are
              </span>
              <h2 className="mt-6 text-5xl font-extralight leading-[1.1] tracking-tighter text-[#0A192F] sm:text-6xl">
                Empowering the <br />
                <span className="italic font-serif">Vulnerable</span> of Bengaluru.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-[#0A192F]/80">
                Lamp Educational and Charitable Trust is a Bengaluru-based nonprofit committed to empowering vulnerable children and women through inclusive, foundational, and skill-based education.
              </p>
              
              <div className="h-px w-full bg-neutral-100"></div>

              <p className="text-lg font-light leading-relaxed text-[#0A192F]/60">
                We believe in a holistic transformation. By focusing on both students and women in our community, we bridge the gap between marginalization and opportunity. 
                <span className="mt-4 block font-serif italic text-[#0A192F]">
                  "We don’t just prepare students for exams—we prepare them for life."
                </span>
              </p>
            </div>

            {/* Modern CTA or Link */}
            <div className="pt-6">
              <button className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-[#0A192F]">
                Our Full Story
                <div className="h-[1px] w-12 bg-[#0A192F] transition-all group-hover:w-20"></div>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Background flourish: Subtle Typography */}
      <div className="absolute bottom-0 right-0 p-10 hidden xl:block">
        <span className="text-[14vw] font-black text-neutral-50 leading-none pointer-events-none select-none">
          BENGALURU
        </span>
      </div>
    </section>
  );
};

export default WhoWeAre;