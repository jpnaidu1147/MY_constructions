import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, MapPin, Ruler, Briefcase, Calendar } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Interior' | 'Turnkey'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in-up">
      {/* HERO */}
      <section className="bg-primary/90 text-white py-24 md:py-32 text-center relative overflow-hidden backdrop-blur-md">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Our Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore our portfolio of delivered excellence across various sectors.</p>
        </div>
      </section>

      {/* FILTERS & GRID */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-[-1]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Residential', 'Commercial', 'Interior', 'Turnkey'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-secondary text-primary shadow-lg scale-105' 
                    : 'bg-white/70 text-gray-600 hover:bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white/85 backdrop-blur-md border border-white/50"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                     <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold font-display text-primary mt-1 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-1" /> {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="bg-white/95 backdrop-blur-xl rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-secondary transition-colors shadow-md"
            >
              <X size={24} />
            </button>
            
            <div className="h-64 md:h-96 w-full">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <span className="text-secondary font-bold uppercase tracking-wider text-sm">{selectedProject.category}</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">{selectedProject.title}</h2>
                  <div className="flex items-center text-gray-500 mt-2">
                    <MapPin size={18} className="mr-2" /> {selectedProject.location}
                  </div>
                </div>
                <div className={`mt-4 md:mt-0 px-4 py-2 rounded font-bold text-sm ${selectedProject.status === 'Completed' ? 'bg-green-100/80 text-green-700' : 'bg-blue-100/80 text-blue-700'}`}>
                  {selectedProject.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-y border-gray-100 py-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-full text-secondary"><Ruler size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Area</p>
                    <p className="font-bold text-primary">{selectedProject.sqft} Sq.ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-full text-secondary"><Briefcase size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Scope</p>
                    <p className="font-bold text-primary">{selectedProject.scope}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-full text-secondary"><Calendar size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Status</p>
                    <p className="font-bold text-primary">{selectedProject.status}</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none text-gray-600">
                <h3 className="text-xl font-bold text-primary mb-2">Project Overview</h3>
                <p>{selectedProject.description}</p>
                <p className="mt-4">
                  We delivered this project focusing on sustainability, cost-efficiency, and modern aesthetics. 
                  Our team handled everything from the initial blueprints to the final finishing touches.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-display font-bold text-lg text-primary mb-4">Want a project like this?</p>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedProject(null)}
                  className="inline-block bg-primary text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-transparent">
        <ContactSection />
      </div>
    </div>
  );
};

export default Projects;