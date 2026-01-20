import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-secondary p-2 rounded text-primary group-hover:bg-white transition-colors duration-300">
             <Hammer size={24} strokeWidth={2.5} />
          </div>
          <span className={`text-2xl font-display font-bold tracking-wide ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
            M&Y <span className="text-secondary">CONSTRUCTIONS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm uppercase tracking-wider hover:text-secondary transition-colors ${
                location.pathname === link.path ? 'text-secondary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-secondary text-primary px-5 py-2 rounded font-bold text-sm uppercase hover:bg-white transition-colors flex items-center gap-2"
          >
            <Phone size={16} /> Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary border-t border-slate-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-secondary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-secondary text-primary px-5 py-3 rounded text-center font-bold uppercase mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
