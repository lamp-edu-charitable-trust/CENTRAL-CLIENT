import React from 'react';
import { Leaf, Package, Recycle } from 'lucide-react';

const SustainabilitySection = () => {
  return (
    <section className="relative bg-[#F9FBFA] py-32 px-6 antialiased selection:bg-emerald-900 selection:text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Decorative Watermark */}
        <div className="absolute right-0 top-10 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[20rem] font-black leading-none uppercase">Earth</h2>
        </div>

        {/* Section Header */}
        <div className="relative z-10 mb-24 max-w-3xl">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-700 mb-8">
            <Leaf size={14} />
            Environmental Sustainability
          </div>
          <h3 className="text-5xl font-extralight tracking-tighter text-neutral-900 md:text-8xl leading-[0.9]">
            Project <span className="italic font-serif text-emerald-800">Revive Earth</span>.
          </h3>
          <p className="mt-10 text-xl font-light leading-relaxed text-neutral-500">
            One Child. One Home. One Clean Earth. We empower the next generation to reclaim the planet, starting with the items we often forget.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Visual Side: Minimalist Environmental Stock */}
          <div className="md:col-span-7 group relative">
            <div className="overflow-hidden rounded-sm bg-neutral-200 aspect-[4/5] md:aspect-auto md:h-[700px]">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" 
                alt="Green sustainable growth" 
                className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            {/* Floating Quote Badge */}
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-white p-10 shadow-xl max-w-xs border-t-4 border-emerald-800">
              <p className="text-sm italic font-serif text-neutral-600 leading-relaxed">
                "Every item deserves a second chance—and every person deserves dignity and support."
              </p>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="md:col-span-5 space-y-12 py-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-900 mb-4">The Philosophy</h4>
              <p className="text-neutral-500 leading-relaxed font-light">
                Revive Earth is more than a recycling initiative. It is a social science project where students explore the impact of climate change through hands-on waste reduction and responsible living.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Package size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest text-neutral-900">Reclaim Space</h5>
                  <p className="text-sm text-neutral-500 mt-2 font-light">Declutter your home by giving unused clothes and household items a new purpose.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Recycle size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest text-neutral-900">Upcycle with Dignity</h5>
                  <p className="text-sm text-neutral-500 mt-2 font-light">We refurbish your donations to share with families in need across North Bengaluru.</p>
                </div>
              </div>
            </div>

            {/* High-Impact CTA */}
            <div className="pt-8">
              <button className="relative group overflow-hidden bg-neutral-900 px-12 py-6 text-white transition-all hover:bg-emerald-900">
                <div className="relative z-10 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em]">
                  Book Now To Donate
                  <span className="h-[1px] w-6 bg-white/50 transition-all group-hover:w-12"></span>
                </div>
                <div className="absolute inset-0 z-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0"></div>
              </button>
              <p className="mt-6 text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                Turn the unused into the impactful.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SustainabilitySection;