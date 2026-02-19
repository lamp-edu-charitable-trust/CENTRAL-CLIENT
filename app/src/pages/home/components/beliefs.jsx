import React from 'react';

const BeliefsSection = () => {
  const beliefs = [
    {
      id: "01",
      title: "Possibility",
      text: "We believe education is the bridge from poverty to possibility, opening doors to dignity, opportunity, and a brighter future."
    },
    {
      id: "02",
      title: "Reimagination",
      text: "We believe in reimagining learning spaces, ensuring programs nurture not just academics, but also love, justice, and leadership."
    },
    {
      id: "03",
      title: "Innovation",
      text: "We believe in constant innovation and purposeful progress, improving every step so communities can rise stronger together."
    }
  ];

  return (
    <section className="bg-white py-32 px-6 antialiased selection:bg-neutral-900 selection:text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Minimalist & Expansive */}
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-8 font-bold">
              The Manifesto
            </h2>
            <h3 className="text-5xl font-extralight tracking-tighter text-neutral-900 md:text-8xl leading-none">
              What We <br /> <span className="italic font-serif">Stand</span> For.
            </h3>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500 border-l border-neutral-200 pl-6">
            Our work is built on three core pillars. Principles that drive us to help India move beyond poverty toward a future of dignity.
          </p>
        </div>

        {/* Pillar 01 & Main Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="text-xs font-mono text-neutral-300">01 // Foundation</span>
            <h4 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 mb-6">{beliefs[0].title}</h4>
            <p className="text-lg font-light leading-relaxed text-neutral-600 italic font-serif">
              "{beliefs[0].text}"
            </p>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/dsc03872-YbNJjWLrVGf4KMPK.JPG" 
              alt="Children smiling" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[16/9]"
            />
          </div>
        </div>

        {/* Pillars 02 & 03 - Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
          {/* Pillar 02 */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-sm">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/gdd-image-8-mjEGBQM60Li9MOXP.jpg" 
                alt="Community learning" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 aspect-square object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-neutral-300">02 // Environment</span>
              <h4 className="mt-4 text-3xl font-light tracking-tight text-neutral-900">{beliefs[1].title}</h4>
              <p className="mt-4 text-neutral-500 leading-relaxed max-w-md">{beliefs[1].text}</p>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="flex flex-col gap-8 md:mt-32">
            <div>
              <span className="text-xs font-mono text-neutral-300">03 // Evolution</span>
              <h4 className="mt-4 text-3xl font-light tracking-tight text-neutral-900">{beliefs[2].title}</h4>
              <p className="mt-4 text-neutral-500 leading-relaxed max-w-md">{beliefs[2].text}</p>
            </div>
            <div className="overflow-hidden rounded-sm">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/whatsapp-image-2025-08-04-at-10.45.10_9f63f5c0-YbNJ8ZoyWrFv6rVY.jpg" 
                alt="Impactful education" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 aspect-video object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement Callout */}
        <div className="border-t border-neutral-100 pt-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-12">The Mission</p>
          <p className="mx-auto max-w-4xl text-3xl md:text-5xl font-extralight leading-[1.2] tracking-tighter text-neutral-900">
            To bridge learning gaps and <span className="underline decoration-neutral-200 underline-offset-[12px]">empower unprivileged children</span> by creating safe, community-based study centres.
          </p>
          <div className="mt-16 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-900">
            <span>3 Beliefs</span>
            <span className="h-[1px] w-12 bg-neutral-900"></span>
            <span>One Mission</span>
            <span className="h-[1px] w-12 bg-neutral-900"></span>
            <span>A Future of Hope</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeliefsSection;