import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Support = () => {
  const teacherSupport = [
    { period: "09 Months", amount: "₹ 1,80,000" },
    { period: "06 Months", amount: "₹ 1,20,000" },
    { period: "03 Months", amount: "₹ 60,000" },
    { period: "01 Month", amount: "₹ 20,000" },
  ];

  return (
    <div className="bg-white font-sans antialiased text-neutral-900">
      {/* Support Section */}
      <section className="py-32 px-6 lg:px-24 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 font-bold">Support Us</h2>
            <p className="text-3xl font-extralight tracking-tighter md:text-5xl italic font-serif text-neutral-500 mb-4">
              "We are rich only through what we give."
            </p>
            <h3 className="text-4xl md:text-6xl font-extralight tracking-tighter">Champion a Teacher.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Teacher Sponsorship */}
            <div className="space-y-12">
              <p className="text-lg font-light leading-relaxed text-neutral-600">
                Your support pays ₹10,000/month for dedicated teachers guiding our students. 
                Invest in education—change lives today with your generosity.
              </p>
              <div className="space-y-4">
                {teacherSupport.map((tier, i) => (
                  <div key={i} className="group flex justify-between items-center border-b border-neutral-100 py-6 hover:bg-neutral-50 px-4 transition-all">
                    <span className="text-xs uppercase tracking-widest font-bold text-neutral-400 group-hover:text-black">{tier.period} Support</span>
                    <span className="text-2xl font-light tracking-tighter">{tier.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Impact & Zubedha's Story */}
            <div className="bg-neutral-950 text-white p-12 lg:p-16 rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <h4 className="text-2xl font-light mb-8">Help 60 Children Overcome Barriers</h4>
                <p className="text-neutral-400 font-light leading-relaxed mb-10 italic">
                  "Without support, my son wouldn't have been able to advance to the next grade." — Zubedha, Single Mother.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-neutral-800 pt-10">
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Yearly / Student</span>
                        <span className="text-xl">₹ 12,000</span>
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Monthly / Student</span>
                        <span className="text-xl">₹ 1,000</span>
                    </div>
                </div>
                <button className="w-full bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-yellow-400 transition-colors">
                    Donate to Transform
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer & Newsletter */}
      <section className="bg-neutral-50 py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4">Engage With Us</h4>
                <p className="text-2xl font-light tracking-tight max-w-md italic font-serif">
                   "We make a life by what we give."
                </p>
                <button className="mt-8 px-10 py-4 border border-neutral-900 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-900 hover:text-white transition-all">
                    Volunteer Now
                </button>
            </div>
            <div className="w-full max-w-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">Stay Updated</p>
                <div className="flex border-b border-neutral-300 pb-2">
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-transparent w-full text-xs font-light focus:outline-none" />
                    <button className="text-neutral-400 hover:text-black"><ArrowRight size={18}/></button>
                </div>
            </div>
        </div>
      </section>

    
    </div>
  );
};

export default Support;