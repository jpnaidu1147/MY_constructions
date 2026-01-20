import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, STATS, TESTIMONIALS, PROJECTS } from '../constants';
import Counter from '../components/Counter';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-slate-900/70 absolute z-10"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
          >
            {/* Using a reliable stock footage URL for construction/cityscape */}
            <source src="https://videos.pexels.com/video-files/3205770/3205770-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 drop-shadow-lg">
              Building Trust. <br/>
              <span className="text-secondary">Shaping Tomorrow.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light drop-shadow-md">
              Civil Construction | Interior | Turnkey Projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-secondary text-primary px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors text-center shadow-lg">
                Get a Free Estimate
              </a>
              <a href="#contact" className="border-2 border-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-primary transition-colors text-center shadow-lg backdrop-blur-sm">
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">Our Core Services</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 border border-white/50 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-6 shadow-sm">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link to="/about" className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK (Timeline) */}
      <section className="py-20 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">How We Work</h2>
            <p className="text-gray-400 mt-4">From concept to delivery, our process is seamless.</p>
          </div>

          <div className="relative">
             {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {['Consultation', 'Design', 'Planning', 'Execution', 'Delivery'].map((step, index) => (
                <div 
                  key={step} 
                  className="flex flex-col items-center text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-secondary flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors relative shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                    {index + 1}
                    {/* Mobile vertical line connector */}
                    {index !== 4 && (
                        <div className="md:hidden absolute h-12 w-0.5 bg-slate-700 top-full left-1/2 -translate-x-1/2"></div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Featured Projects</h2>
               <div className="h-1 w-20 bg-secondary mt-4"></div>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors">
              VIEW ALL <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg h-80 shadow-lg border border-white">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold font-display mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                  <Link to="/projects" className="text-white font-bold text-sm underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary transition-colors">VIEW DETAILS</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors">
              VIEW ALL <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-md z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <Counter 
                key={stat.id} 
                end={stat.value} 
                label={stat.label} 
                suffix={stat.suffix} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Client Testimonials</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/70 backdrop-blur-md p-8 rounded-xl relative hover:shadow-lg transition-shadow border border-white/50">
                <div className="absolute top-6 right-8 text-6xl text-gray-200 font-serif leading-none">"</div>
                <p className="text-gray-600 mb-6 relative z-10 italic">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/20" />
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <span className="text-xs text-secondary font-bold uppercase">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactSection />
    </div>
  );
};

export default Home;