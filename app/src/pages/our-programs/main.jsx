import React from 'react';
// Assuming Navbar is in the same directory or components folder
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
const OurPrograms = () => {
  return (
    <div className="bg-[#FAFAFA] antialiased">
      <Navbar />

      {/* --- HERO BANNER (80vh to complement 20vh Nav) --- */}
      <section className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A192F] px-6 text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1B4332_0%,_transparent_70%)]"></div>
        <div className="relative z-10 max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#FFD700]">
            The Impact Ecosystem
          </span>
          <h1 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-9xl">
            An Ecosystem of <br />
            <span className="italic font-serif text-[#FFD700]">Transformation.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-white/60">
            We don't just teach subjects; we reinvent futures. Explore how Lamp Trust rescues students from the "8th-Grade Cliff" in North Bengaluru.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-12 w-[1px] bg-gradient-to-b from-[#FFD700] to-transparent"></div>
      </section>

      {/* --- SECTION 1: PROJECT TRY (THE STAR) --- */}
      <section className="relative w-full bg-white py-24 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Left: The Core Engine */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2D6A4F]">Flagship Intervention</span>
              <h2 className="mt-6 text-5xl font-extralight tracking-tighter text-[#0A192F] sm:text-7xl">
                Project <span className="font-bold">TRY</span>
              </h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-400">(Time to Re-Invent Yourself)</p>
              
              <div className="mt-12 space-y-6 text-[#0A192F]/70 text-lg leading-relaxed">
                <p>This is our core engine of change—a rigorous, tech-enabled after-school journey for 5th–10th graders.</p>
                <p className="italic font-serif text-xl text-[#0A192F]">"The world inside us is bigger than the world outside."</p>
              </div>

              {/* Quick Facts Box */}
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-neutral-100 pt-10">
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Who We Serve</h4>
                  <p className="text-sm font-medium text-[#0A192F]">Grades 7–10</p>
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Time Commitment</h4>
                  <p className="text-sm font-medium text-[#0A192F]">2 Hours / Day</p>
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Schedule</h4>
                  <p className="text-sm font-medium text-[#0A192F]">Mon — Fri</p>
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Hub Timings</h4>
                  <p className="text-sm font-medium text-[#0A192F]">4:30 PM — 8:30 PM</p>
                </div>
              </div>
            </div>

            {/* Right: The 3-Phase Ascent & 4 Modules */}
            <div className="lg:col-span-7 space-y-32">
              
              {/* Phases */}
              <div className="space-y-12">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-300 mb-10">The 3-Phase Ascent</h3>
                {[
                  { phase: "01", title: "The Foundation", desc: "Aggressively rebuilding missing reading and math skills using localized, adaptive tech.", color: "#EF4444", status: "🔴" },
                  { phase: "02", title: "The Bridge", desc: "Ensuring a 0% dropout rate transitioning into high school by tackling current school syllabus.", color: "#FFD700", status: "🟡" },
                  { phase: "03", title: "The Launchpad", desc: "Unlocking advanced upskilling: AI tools, Coding, and Robotics.", color: "#2D6A4F", status: "🟢" }
                ].map((item, i) => (
                  <div key={i} className="group relative pl-16 py-4">
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-neutral-100 group-hover:bg-[#0A192F] transition-all"></div>
                    <span className="absolute left-[-4px] top-6 text-[10px] font-black">{item.status}</span>
                    <h4 className="text-2xl font-light text-[#0A192F]">{item.title}</h4>
                    <p className="mt-4 text-neutral-500 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* The 4 Modules */}
              <div className="bg-[#0A192F] p-10 lg:p-16 text-white rounded-sm">
                <h3 className="text-3xl font-light mb-12 tracking-tight">The 4 Core Learning Modules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    { n: "1", t: "Revision Class", d: "Consistency through daily homework support and concept reinforcement." },
                    { n: "2", t: "Remedial Class", d: "Aggressive core subject focus and personalized learning roadmaps." },
                    { n: "3", t: "21st Century Upskilling", d: "Technical training in AI, Coding, EQ, and Leadership." },
                    { n: "4", t: "Inner World Talents", d: "Discovery and mentorship for hidden creative potentials." }
                  ].map((mod, i) => (
                    <div key={i} className="border-l border-white/10 pl-6">
                      <span className="text-[10px] font-bold text-[#FFD700]">MODULE 0{mod.n}</span>
                      <h5 className="text-lg font-bold mt-2">{mod.t}</h5>
                      <p className="mt-3 text-sm text-white/50 leading-relaxed">{mod.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE SUPPORTING CAST (ECOSYSTEM) --- */}
      <section className="relative w-full bg-[#FAFAFA] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#2D6A4F]">The Ecosystem</span>
            <h2 className="mt-6 text-5xl font-extralight tracking-tighter text-[#0A192F] sm:text-7xl">
              Beyond the <span className="italic font-serif">Classroom.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Confusion to Clarity (Career) - Large Feature */}
            <div className="lg:col-span-8 bg-white p-12 shadow-xl border border-neutral-100 group">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-4xl font-light text-[#0A192F]">🧭 Confusion To Clarity</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D6A4F] border border-[#2D6A4F] px-3 py-1">Career Guidance</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-[#0A192F]/70 leading-relaxed">
                  A structured, NEP 2020-aligned career counseling initiative using internationally recognized psychometric tools like MBTI and RIASEC.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-[#0A192F] font-bold">
                    <div className="h-1 w-1 bg-[#DAA520]"></div> Scientific Assessments
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#0A192F] font-bold">
                    <div className="h-1 w-1 bg-[#DAA520]"></div> Targeted Subject Guidance
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#0A192F] font-bold">
                    <div className="h-1 w-1 bg-[#DAA520]"></div> Ecosystem & Parent Support
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-50 pt-10">
                <button className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] hover:text-[#DAA520] transition-colors">Enroll Today →</button>
                <button className="text-[10px] font-black uppercase tracking-widest text-[#0A192F] hover:text-[#DAA520] transition-colors">Invite Us →</button>
                <button className="text-[10px] font-black uppercase tracking-widest text-[#2D6A4F] font-bold">Sponsor Assessment</button>
              </div>
            </div>

            {/* Pass On Your Books */}
            <div className="lg:col-span-4 bg-[#0A192F] p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-light mb-6">📚 Pass On Your Books</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  No student should be denied knowledge because they cannot afford a textbook. We collect, refurbish, and distribute resources via Micro-Libraries and Mobile Access.
                </p>
              </div>
              <div className="mt-10 h-1 w-12 bg-[#FFD700]"></div>
            </div>

            {/* Collaborate for 21st Century */}
            <div className="lg:col-span-12 bg-white border border-neutral-200 p-12 flex flex-col lg:flex-row items-center gap-12 group hover:border-[#2D6A4F] transition-all">
              <div className="lg:w-1/3">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#2D6A4F]">B2B Partnership</span>
                <h3 className="text-3xl font-light text-[#0A192F] mt-2">🤝 Collaborate for 21st Century Education</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-sm text-neutral-500">
                  Bridging the gap between traditional schooling and real-world skills through collective action with CSR partners and NGOs.
                </p>
                <p className="text-sm text-neutral-500 italic font-serif border-l border-neutral-100 pl-6">
                  Experience-based learning focused on digital literacy and career readiness.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-white py-24 text-center">
        <h2 className="text-3xl font-light tracking-tight text-[#0A192F]">Ready to be part of the transformation?</h2>
        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-[#0A192F] text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#1B4332] transition-all">Donate Now</button>
          <button className="border border-[#0A192F] text-[#0A192F] px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#FAFAFA] transition-all">Partner With Us</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurPrograms;