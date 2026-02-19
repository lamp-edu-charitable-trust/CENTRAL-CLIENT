import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer(){



    return(
        <>
        
          {/* Footer */}
      <footer className="bg-white pt-32 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            
            {/* About Founder */}
            <div className="lg:col-span-5">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-8 font-bold">About Founder</h5>
              <p className="text-sm leading-relaxed text-neutral-500 font-light">
                <span className="text-neutral-900 font-medium">Jaganathan Rajagopal</span> — Founder & CEO. A compassionate leader with 20 years of experience, dedicated to the belief that education is the key to ending poverty. Since 2010, he has committed his heart to ensuring no child in Bengaluru is denied the right to thrive.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-8 font-bold">Information</h5>
              <ul className="space-y-4 text-xs font-medium uppercase tracking-widest text-neutral-600">
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                <li className="hover:text-black cursor-pointer">Refund Policy</li>
                <li className="hover:text-black cursor-pointer">Upcoming Events</li>
                <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-8 font-bold">Contact Us</h5>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm font-light text-neutral-600">
                  <Mail size={16} className="text-neutral-300" />
                  help@lampeducationtrust.com
                </div>
                <div className="flex items-center gap-4 text-sm font-light text-neutral-600">
                  <Phone size={16} className="text-neutral-300" />
                  +91 9008701080
                </div>
                <div className="flex items-start gap-4 text-sm font-light text-neutral-600">
                  <MapPin size={16} className="text-neutral-300 mt-1 shrink-0" />
                  1281, 9th Cross, RK Hegde Nagar, Bengaluru - 560077
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-400">
              © 2010-2025 Lamp Educational and Charitable Trust
            </p>
            <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-300">
              <span>Growth Platter Academy</span>
              <span>Revive Earth</span>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}