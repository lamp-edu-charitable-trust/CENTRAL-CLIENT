import React from 'react';

const HyperPremiumImpact = () => {
  return (
    <section className="relative w-full bg-[#FCFCFC] py-32 px-6 lg:py-48 antialiased overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 right-[-5%] rotate-90 text-[15vw] font-black text-neutral-100/50 leading-none select-none">
        PROMISE
      </div>

      <div className="mx-auto max-w-7xl">
        
        {/* Header: High-Fashion Editorial Style */}
        <div className="relative z-10 mb-32 border-l-[1px] border-[#0A192F] pl-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#2D6A4F]">
            The Impact Promise: 2019—2025
          </span>
          <h2 className="mt-8 text-7xl font-extralight leading-[0.85] tracking-tighter text-[#0A192F] sm:text-9xl">
            Measurable <br />
            <span className="italic font-serif">Transformation.</span>
          </h2>
          <p className="mt-12 max-w-md text-xl font-light leading-relaxed text-[#0A192F]/60">
            We don't believe in vague promises. When you invest in a student, we track their exact growth with <span className="text-[#0A192F] font-medium underline underline-offset-8">absolute precision.</span>
          </p>
        </div>

        {/* The 4 Core Gauges: Minimalist Sophistication */}
        <div className="mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {[
            { label: "Numeracy", val: "100%", sub: "3-digit division mastery", icon: "01" },
            { label: "Literacy", val: "100%", sub: "Grade-level news fluency", icon: "02" },
            { label: "Retention", val: "Zero", sub: "9th & 10th grade dropouts", icon: "03" },
            { label: "Growth", val: "+20%", sub: "Average exam score lift", icon: "04" }
          ].map((item, i) => (
            <div key={i} className="group relative pt-8">
              <span className="text-[10px] font-black text-[#2D6A4F]/30 group-hover:text-[#2D6A4F] transition-colors">
                {item.icon} //
              </span>
              <div className="mt-4 text-6xl font-black tracking-tighter text-[#0A192F]">
                {item.val}
              </div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A192F]/40">
                {item.label}
              </p>
              <p className="mt-6 text-xs leading-relaxed text-neutral-400 max-w-[180px]">
                {item.sub}
              </p>
              <div className="mt-8 h-[2px] w-8 bg-neutral-100 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#2D6A4F] to-transparent"></div>
            </div>
          ))}
        </div>

        {/* The Impact Landscape: Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 lg:gap-y-32">
          
          {/* Main Stat Block */}
          <div className="lg:col-span-7 pr-0 lg:pr-20">
            <div className="space-y-24">
              <div className="flex gap-8 group">
                <span className="text-4xl font-serif italic text-[#2D6A4F]">839+</span>
                <p className="text-lg text-[#0A192F]/70 leading-relaxed">
                   Till Date remedial class students in literacy, numeracy, foundational gaps, digital literacy, and extra activities.
                </p>
              </div>
              <div className="flex gap-8 group">
                <span className="text-4xl font-serif italic text-[#2D6A4F]">3560+</span>
                <p className="text-lg text-[#0A192F]/70 leading-relaxed">
                  Students Mentored & Upskilled on soft skills and Career counselling.
                </p>
              </div>
              <div className="flex gap-8 group">
                <span className="text-4xl font-serif italic text-[#2D6A4F]">12000+</span>
                <p className="text-lg text-[#0A192F]/70 leading-relaxed">
                  Household items distributed to needy people across Bengaluru and surrounding villages.
                </p>
              </div>
            </div>
          </div>

          {/* Side Feature: Dark Highlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0A192F] p-12 lg:p-16 text-white shadow-2xl">
              <div className="mb-12 space-y-8">
                <div>
                  <h4 className="text-5xl font-black tracking-tighter text-[#FFD700]">100%</h4>
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-white/50">Board Exam Success</p>
                  <p className="mt-4 text-sm text-white/70">Grade 5 to Grade 12 results with a 76% average in final board exams.</p>
                </div>
                <div className="h-[1px] w-full bg-white/10"></div>
                <div>
                  <h4 className="text-4xl font-light tracking-tight">35+ <span className="text-xl opacity-50">Students</span></h4>
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-[#2D6A4F]">Language Mastery</p>
                  <p className="mt-4 text-sm text-white/70 italic font-serif">Migrant students mastered Kannada, English, and Hindi, scoring 50%+ in 6 months.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">
                <span className="h-1 w-1 bg-[#FFD700]"></span>
                Verified Institutional Data
              </div>
            </div>
            
            {/* Minimalist Stat: After School Hubs */}
            <div className="mt-12 pl-12">
               <span className="text-5xl font-black text-[#0A192F]">03</span>
               <p className="text-[10px] uppercase tracking-[0.4em] text-[#0A192F]/40 mt-2">Active Learning Hubs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HyperPremiumImpact;