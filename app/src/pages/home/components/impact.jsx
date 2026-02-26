import React from 'react';

const DonationFinal = () => {
  return (
    <section id="donate" className="relative w-full bg-[#0A192F] py-20 lg:py-0 antialiased overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[90dvh]">
        
        {/* Left: The Visual Story */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
          <img 
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/dsc03872-YbNJjWLrVGf4KMPK.JPG" 
            alt="Smiling student with book" 
            className="h-full w-full object-cover grayscale-[30%] opacity-60"
          />
          {/* Theme Gradient Overlay: Navy to Green */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
          
          <div className="absolute bottom-12 left-12 right-12">
            <h2 className="text-4xl lg:text-6xl font-extralight tracking-tighter text-white leading-[0.9]">
              Life is all about making <br />
              <span className="italic font-serif text-[#FFD700]">an impact.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm tracking-widest uppercase text-white/50">
              Make yours today.
            </p>
          </div>
        </div>

        {/* Right: The Action Center */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-24 bg-white">
          <div className="max-w-xl w-full">
            <p className="text-lg leading-relaxed text-[#0A192F]/70 mb-12">
              You can change a student's entire life trajectory for the cost of a few coffees. Your investment provides a high-risk North Bengaluru student with targeted remedial education, digital upskilling, and a safe after-school haven through <span className="text-[#0A192F] font-bold">Project TRY.</span>
            </p>

            <div className="space-y-8">
              {/* Option 1: The Everyday Donor */}
              <div className="group relative border border-neutral-100 bg-[#FAFAFA] p-8 transition-all hover:border-[#FFD700] hover:shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">The Everyday Donor</span>
                    <h3 className="text-3xl font-light text-[#0A192F] mt-2">The ₹916 Promise</h3>
                  </div>
                  <span className="text-2xl">☕</span>
                </div>
                <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                  Sponsor one student's complete monthly journey from basic literacy to 21st-century tech skills.
                </p>
                <button className="w-full bg-[#0A192F] py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-[#1B4332]">
                  Donate ₹916 / Month
                </button>
              </div>

              {/* Option 2: The Visionary Donor */}
              <div className="group relative border border-[#2D6A4F]/20 bg-[#1B4332]/5 p-8 transition-all hover:bg-[#1B4332]/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2D6A4F]">The Visionary Donor</span>
                    <h3 className="text-3xl font-light text-[#0A192F] mt-2">Adopt a Hub</h3>
                  </div>
                  <span className="text-2xl">🏢</span>
                </div>
                <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                  Are you a Corporate CSR or HNI? Sponsor an entire After-School Hub for one year (<span className="font-bold text-[#0A192F]">₹5.5 Lakhs</span>) and impact 50+ students.
                </p>
                <button className="w-full border border-[#0A192F] py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A192F] transition-all hover:bg-[#0A192F] hover:text-white">
                  Partner With Us
                </button>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="mt-12 flex items-center justify-between opacity-40">
              <span className="text-[9px] font-bold uppercase tracking-widest">Lamp Trust • 2026</span>
              <div className="h-px w-24 bg-neutral-300"></div>
              <span className="text-[9px] font-bold uppercase tracking-widest">Secure Payment</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonationFinal;