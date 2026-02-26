import React from 'react';

const TransparencyCredentials = () => {
  const credentials = [
    { label: "Trust Registration", id: "HLS-4-00002-2019-20", authority: "Indian Trusts Act" },
    { label: "12A Certification", id: "AABTL8517GE20221", authority: "Income Tax Act, 1961" },
    { label: "80G Approval", id: "AABTL8517GF20221", authority: "Tax-Exempt Donations" },
    { label: "NITI Aayog DARPAN", id: "KA/2019/0237763", authority: "Unique NGO ID" },
    { label: "MCA CSR-1", id: "CSR00034168", authority: "CSR Activities" },
    { label: "Permanent Account No.", id: "AABTL8517G", authority: "PAN Card" },
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 px-6 lg:py-40 antialiased overflow-hidden">
      
      {/* Structural Detail: Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[18vw] font-black leading-none text-[#0A192F] tracking-tighter">
          VERIFIED
        </h2>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#2D6A4F]">
              Governance & Ethics
            </span>
            <h2 className="mt-8 text-6xl font-extralight leading-[0.9] tracking-tighter text-[#0A192F] sm:text-7xl">
              100% Financial <br />
              <span className="italic font-serif text-[#DAA520]">Transparency.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-[#0A192F]/60 border-l-[1px] border-neutral-200 pl-8">
              We take our responsibility to our donors and our community seriously. Lamp Trust is a fully registered, compliant non-profit recognized by the Government of India.
            </p>
          </div>
        </div>

        {/* Credentials Table: High-End Minimalist */}
        <div className="overflow-hidden border-t border-neutral-200 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((cred, idx) => (
              <div 
                key={idx} 
                className="group border-b border-r border-neutral-100 p-10 transition-all hover:bg-[#0A192F]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] group-hover:text-[#FFD700]">
                    Verified Status
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[#2D6A4F] animate-pulse"></div>
                </div>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white/40 mb-1">
                  {cred.label}
                </h4>
                <div className="text-xl font-light tracking-tight text-[#0A192F] group-hover:text-white transition-colors">
                  {cred.id}
                </div>
                
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-neutral-200 group-hover:bg-white/20"></div>
                  <span className="text-[10px] italic font-serif text-neutral-500 group-hover:text-white/40">
                    {cred.authority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accountability Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-neutral-100">
          <div className="flex items-center gap-6">
            <img src="/path-to-digital-india-logo.png" alt="Digital India" className="h-8 grayscale opacity-30" />
            <img src="/path-to-niti-aayog-logo.png" alt="NITI Aayog" className="h-10 grayscale opacity-30" />
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-neutral-300">
            Certified Institutional Integrity // 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransparencyCredentials;