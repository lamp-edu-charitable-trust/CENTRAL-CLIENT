import React from 'react';
import Navbar from '../../components/nav';
import Footer from '../../components/footer';

const LampBlueprintLight = () => {
  // Brand Hex Codes used as subtle accents
  const brand = {
    green: "#00bf63",
    yellow: "#ffa51f",
    navy: "#01081d",
  };

  return (
    <div className="bg-[#FCFCFC] font-sans antialiased text-[#01081d] selection:bg-[#00bf63]/20">
      <Navbar />

      {/* --- HERO: IMMERSIVE WHITE SPACE --- */}
      <section className=" mt-20 relative flex h-[80vh] w-full flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="relative z-10 max-w-6xl">
          <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#ffa51f]">
            The Blueprint
          </span>
          <h1 className="mt-8 text-7xl font-extralight leading-[0.9] tracking-tighter sm:text-8xl lg:text-[10rem]">
            Through Education, <br />
            We End <span className="italic font-serif text-[#00bf63]">Poverty.</span>
          </h1>
          <p className="mx-auto mt-12 max-w-xl text-lg font-light leading-relaxed text-neutral-500">
            "Ensuring no child's education ends at the 8th-Grade Cliff by bridging the gap between basic literacy and 21st-century success."
          </p>
        </div>
      </section>

      {/* --- SECTION 1: THE CRISIS (MINIMALIST DATA) --- */}
      <section className="relative w-full border-t border-neutral-100 py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">The Problem</span>
              <h2 className="mt-6 text-5xl font-extralight tracking-tighter text-[#01081d]">
                The Crisis in <br />
                <span className="italic font-serif">North Bengaluru.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-4xl font-black text-[#01081d]">17.6%</span>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Severe Learning Gaps</p>
                <p className="text-sm text-neutral-500 leading-relaxed">Only a fraction of young students can read a basic Grade 2 textbook or solve simple math problems.</p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-black text-[#ffa51f]">The Cliff</span>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">The Transition Trap</p>
                <p className="text-sm text-neutral-500 leading-relaxed">Students hit a massive wall between 8th and 9th grades. The syllabus becomes impossible, and dropouts begin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE NAVIGATION CHART (UI FLOW) --- */}
      <section className="bg-white py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-24 text-center">
            <h2 className="text-4xl font-light tracking-tight italic font-serif">The Navigation Chart</h2>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-300">Project TRY Intervention Flow</p>
          </div>

          
          
          <div className="space-y-0">
            {[
              { phase: "01", title: "The Foundation", sub: "Remedial (FLN)", color: brand.yellow, desc: "Teaching at the Right Level (TaRL). Rebuilding basic reading and arithmetic." },
              { phase: "02", title: "The Bridge", sub: "Academic Revision", color: brand.navy, desc: "Daily homework support and school syllabus reintegration for Grades 5–10." },
              { phase: "03", title: "The Launchpad", sub: "21st-Century Upskilling", color: brand.green, desc: "Advanced tech modules: AI, Coding, Robotics, and Soft Skills." }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row gap-8 py-16 border-t border-neutral-100 last:border-b">
                <div className="md:w-1/4">
                  <span className="text-5xl font-black text-neutral-100 group-hover:text-[#01081d]/10 transition-colors">{item.phase}</span>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-2 w-2 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{item.sub}</span>
                  </div>
                  <h3 className="text-3xl font-light text-[#01081d]">{item.title}</h3>
                  <p className="mt-4 text-neutral-500 max-w-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PERFORMANCE METRICS (EDITORIAL GRID) --- */}
      <section className="bg-[#FAFAFA] py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Table: Quantitative */}
            <div className="space-y-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#00bf63]">The Measurement Matrix</h3>
              <div className="space-y-8">
                {[
                  { m: "Numeracy", t: "100% Mastery", d: "Independent 3-digit division" },
                  { m: "Literacy", t: "100% Fluency", d: "Grade-level news comprehension" },
                  { m: "Retention", t: "Zero Dropouts", d: "Survival of the 8th-Grade Cliff" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-neutral-200 pb-6 group">
                    <div>
                      <h4 className="text-xl font-light text-[#01081d]">{row.m}</h4>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2">{row.d}</p>
                    </div>
                    <span className="text-3xl font-black text-[#01081d] group-hover:text-[#00bf63] transition-colors">{row.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table: Qualitative */}
            <div className="space-y-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#ffa51f]">Transformation Record</h3>
              <div className="bg-white p-10 shadow-2xl space-y-8">
                {[
                  { a: "Confidence", b: "Afraid to ask questions", aft: "Explains concepts to friends" },
                  { a: "Math Skills", b: "Struggled with Grade 5", aft: "80% accuracy in Algebra" }
                ].map((row, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-300 mb-4">{row.a}</p>
                    <div className="grid grid-cols-2 gap-8 text-sm">
                      <p className="text-red-400/60 line-through">"{row.b}"</p>
                      <p className="text-[#00bf63] font-bold">"{row.aft}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE TRACK RECORD (MODERN LIST) --- */}
      <section className="bg-white py-32 px-6 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <h2 className="text-6xl font-extralight tracking-tighter text-[#01081d]">
              Relentless <br />
              <span className="italic font-serif">Impact.</span>
            </h2>
            <div className="h-px flex-grow bg-neutral-100 hidden lg:block"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.8em] text-neutral-300">2019 — 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100">
            {[
              { v: "837+", l: "Remedial Scholars" },
              { v: "3,500+", l: "Youth Upskilled" },
              { v: "100%", l: "Board Pass Rate" },
              { v: "12k+", l: "Lives Impacted" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#FAFAFA] transition-colors">
                <h4 className="text-5xl font-black tracking-tighter text-[#01081d]">{stat.v}</h4>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#00bf63]">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: THE ₹916 PROMISE (CLEAN CTA) --- */}
      <section className="bg-[#FCFCFC] py-32 px-6">
        <div className="mx-auto max-w-4xl bg-[#01081d] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#00bf63] blur-[100px] opacity-20"></div>
          <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#ffa51f]">Our Call to Action</span>
          <h2 className="mt-12 text-5xl font-extralight tracking-tighter sm:text-7xl leading-[0.9]">
            Change a Trajectory <br />
            for <span className="font-bold text-[#00bf63]">₹916 / mo.</span>
          </h2>
          <p className="mt-8 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Securing comprehensive education, tech upskilling, and career retention for 200 high-risk students in North Bengaluru.
          </p>
          <button className="mt-12 bg-[#00bf63] text-[#01081d] px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all">
            Sponsor a Student
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LampBlueprintLight;