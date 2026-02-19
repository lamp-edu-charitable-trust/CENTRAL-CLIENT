import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: "TRY",
      title: "Time To Re-Invent Yourself",
      description: "Empowering 3rd to 10th graders with 21st-century skills aligned with NEP 2020. From digital literacy to science clubs, we build future-ready curiosity.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/whatsapp-image-2025-08-04-at-10.49.09_c41ceada-YBgba83ynrTG0k5k.jpg",
      sdg: "SDG 4: Quality Education",
      alignment: "right"
    },
    {
      id: "C2C",
      title: "Confusion To Clarity",
      description: "Strategic career counseling that aligns personal strengths with future opportunities. We turn uncertainty into a roadmap for success.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/whatsapp-image-2024-07-22-at-12.25.34-Yg24gnx4L8IEQa4K.jpeg",
      sdg: "SDG 8: Decent Work",
      alignment: "left"
    },
    {
      id: "POB",
      title: "Pass On Your Books",
      description: "Setting up libraries and mobile reading units in Bengaluru's underserved areas. We bring the world of literature to the doorstep of the underprivileged.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/img-20221208-wa0073-YrDJ7voV73cRMaKy.jpg",
      sdg: "SDG 10: Reduced Inequalities",
      alignment: "right"
    },
    {
      id: "C21",
      title: "21st Century Collaboration",
      description: "Bridging the gap between traditional schooling and real-world skills through corporate and NGO partnerships.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/AoPJX3eEk7uODbZ8/whatsapp-image-2025-08-05-at-18.35.13-ALpPqbJQ6jsMVO04.jpeg",
      sdg: "SDG 17: Partnerships",
      alignment: "left"
    }
  ];

  return (
    <section className="bg-white py-32 px-6 antialiased">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-32 text-center md:text-left">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 font-bold">Programs</h2>
          <h3 className="text-5xl font-extralight tracking-tighter text-neutral-900 md:text-8xl">
            What We <span className="italic font-serif">Do</span>.
          </h3>
          <p className="mt-8 max-w-2xl text-lg font-light text-neutral-500 leading-relaxed">
            We design impactful programs that bridge learning gaps and promote sustainability, 
            ensuring equity and environmental responsibility go hand in hand.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-12 items-center ${
                project.alignment === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-7/12 overflow-hidden bg-neutral-100 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-5/12 px-4 md:px-12">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-mono text-orange-600 mb-4 tracking-widest">
                    {project.sdg}
                  </span>
                  <h4 className="text-3xl font-light tracking-tight text-neutral-900 mb-6 md:text-4xl">
                    {project.title}
                  </h4>
                  <p className="text-neutral-500 leading-relaxed font-light mb-8">
                    {project.description}
                  </p>
                  <button className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-900">
                    Learn More
                    <span className="h-[1px] w-8 bg-neutral-900 transition-all group-hover:w-16"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Detail */}
        <div className="mt-40 border-t border-neutral-100 pt-20 text-center">
          <p className="text-sm font-light text-neutral-400 italic font-serif">
            "Reinventing education, one project at a time."
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;