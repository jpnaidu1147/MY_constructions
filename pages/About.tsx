import React from 'react';
import { VALUES } from '../constants';
import ContactSection from '../components/ContactSection';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-slate-900 absolute opacity-70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920" 
            alt="Team meeting construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">About M&Y Constructions</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">Building Excellence Through Integrity & Execution</p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-6">A Legacy of Trust & Innovation</h2>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                Founded with a vision to revolutionize the construction industry, M&Y Constructions has grown from a small contracting firm into a premier turnkey solution provider. With over 15 years of experience, we specialize in Civil Construction, Interior Fit-Outs, and comprehensive Project Management.
              </p>
              <p className="text-gray-700 font-medium leading-relaxed">
                Our success is built on a foundation of transparency, uncompromising quality, and a client-centric approach. We don't just build structures; we build relationships that last as long as our buildings.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=800" 
                alt="Construction Management" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 bg-primary/90 backdrop-blur-md p-6 text-white rounded-lg z-20 hidden md:block">
                <p className="font-display font-bold text-3xl mb-1">15+</p>
                <p className="text-sm text-gray-400">Years of Building Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-sm border-l-4 border-secondary">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the region's most trusted construction partner, known for sustainable practices, innovation, and shaping the skyline of the future. We aim for long-term growth by consistently exceeding expectations.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-sm border-l-4 border-primary">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver projects on time with uncompromising quality. We strive to create safe, functional, and aesthetically superior spaces while maintaining the highest standards of safety and ethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 relative text-white">
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Our Core Values</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-slate-700/80 transition-colors border border-slate-700">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary shadow-lg">
                  <val.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                  alt="Architectural details" 
                  className="rounded-lg shadow-xl"
                />
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">Why Choose Us?</h2>
               <div className="space-y-6">
                 {[
                   { title: 'Experienced Team', desc: 'Engineers, architects, and managers with decades of combined experience.' },
                   { title: 'Quality Materials', desc: 'We source only the best materials to ensure longevity and safety.' },
                   { title: 'Transparent Pricing', desc: 'Detailed quotations with no hidden costs or last-minute surprises.' },
                   { title: 'On-time Delivery', desc: 'We respect deadlines and follow strict schedules to hand over projects on time.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="mt-1 flex-shrink-0 text-secondary">
                        <CheckCircle2 size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                       <p className="text-gray-600">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;