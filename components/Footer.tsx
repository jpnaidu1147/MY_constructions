import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary/95 backdrop-blur-md text-gray-300 pt-16 pb-8 border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Hammer size={24} className="text-secondary" />
              <span className="text-2xl font-display font-bold">M&Y CONSTRUCTIONS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Building trust and shaping tomorrow through excellence in civil construction, interior design, and turnkey projects.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-slate-800 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Civil Construction</li>
              <li>Interior Design</li>
              <li>Renovation</li>
              <li>Turnkey Projects</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                <span>Survey No.111, Shed No.3,<br />Nelagadaranhalli, Sandekapa Road,<br />Bangalore, KA 560073</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+91 99459 30894</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>info@myandyconstructions.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} M&Y Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;