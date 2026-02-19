import React from 'react';
import { TrendingUp, Users, BookOpen, Heart } from 'lucide-react';

const ImpactSection = () => {
  // Data derived from provided student marksheet
  const studentGrowth = [
    { name: "Mithran .B", class: "1st", prev: 40, current: 85 },
    { name: "S.Dinesh", class: "3rd", prev: 54, current: 82 },
    { name: "Gautam", class: "4th", prev: 40, current: 75 },
    { name: "Allan Liyaskar", class: "5th", prev: 55, current: 71 },
  ];

  return (
    <section className="bg-white py-32 px-6 antialiased selection:bg-neutral-900 selection:text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header: Global Impact */}
        <div className="mb-24 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 font-bold">Our Impact</h2>
          <h3 className="text-5xl font-extralight tracking-tighter text-neutral-900 md:text-7xl">
            2019 <span className="text-neutral-300">—</span> 2024
          </h3>
        </div>

        {/* Global Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100 mb-40">
          <div className="bg-white p-10 flex flex-col items-center text-center">
            <Users className="text-neutral-200 mb-6" size={32} strokeWidth={1} />
            <span className="text-4xl font-light tracking-tighter text-neutral-900">3,500+</span>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              Students Trained in Soft Skills & Employability
            </p>
          </div>
          <div className="bg-white p-10 flex flex-col items-center text-center">
            <TrendingUp className="text-neutral-200 mb-6" size={32} strokeWidth={1} />
            <span className="text-4xl font-light tracking-tighter text-neutral-900">100%</span>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              Success Rate for Grades 5-12 with 76% Average
            </p>
          </div>
          <div className="bg-white p-10 flex flex-col items-center text-center">
            <BookOpen className="text-neutral-200 mb-6" size={32} strokeWidth={1} />
            <span className="text-4xl font-light tracking-tighter text-neutral-900">35+</span>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              Migrant Students Fluency in 3 Languages
            </p>
          </div>
          <div className="bg-white p-10 flex flex-col items-center text-center">
            <Heart className="text-neutral-200 mb-6" size={32} strokeWidth={1} />
            <span className="text-4xl font-light tracking-tighter text-neutral-900">12,000+</span>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              Items Distributed to Families in Need
            </p>
          </div>
        </div>

        {/* Annual Performance: Academic Year 2024-2025 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">Academic Year 24-25</h4>
            <h3 className="text-4xl font-extralight tracking-tighter text-neutral-900 mb-8 leading-tight">
              Evidence of <br /><span className="italic font-serif">Transformation</span>.
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light mb-8">
              We track progress meticulously. From failed grades to distinctions, our customized learning approach closes the gap in real-time. Full marksheets are available to our donors upon request.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-neutral-900 pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-all">
              Request Full Report
            </button>
          </div>

          {/* Student Progress Bars */}
          <div className="lg:col-span-8 space-y-12">
            {studentGrowth.map((student, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Class {student.class} Student</span>
                    <h5 className="text-lg font-medium text-neutral-900 uppercase tracking-tighter">{student.name}</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 line-through mr-3">{student.prev}%</span>
                    <span className="text-2xl font-light text-neutral-900">{student.current}%</span>
                  </div>
                </div>
                {/* Dual Progress Bar */}
                <div className="h-[2px] w-full bg-neutral-100 relative">
                  <div 
                    className="absolute h-full bg-neutral-300 transition-all duration-1000" 
                    style={{ width: `${student.prev}%` }}
                  ></div>
                  <div 
                    className="absolute h-full bg-neutral-900 transition-all duration-1000 delay-300" 
                    style={{ width: `${student.current}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;