import { Project, Service, Testimonial, Stat } from './types';
import { HardHat, Ruler, Home, PaintBucket, ShieldCheck, Users, Clock, Award } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
];

export const SERVICES: Service[] = [
  {
    id: 'civil',
    title: 'Civil Construction',
    description: 'Structural excellence from foundation to finish. We handle complex engineering challenges with precision.',
    icon: HardHat,
  },
  {
    id: 'interior',
    title: 'Interior Fit-Outs',
    description: 'Functional and aesthetic interior fit-outs that transform spaces into inspiring environments.',
    icon: PaintBucket,
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    description: 'End-to-end management. We take full responsibility from initial concept to final key handover.',
    icon: Home,
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Revitalizing existing structures with modern standards while preserving their original character.',
    icon: Ruler,
  },
];

export const VALUES = [
  { title: 'Quality', icon: Award, desc: 'We never compromise on materials or workmanship.' },
  { title: 'Transparency', icon: Users, desc: 'Clear communication and honest pricing at every step.' },
  { title: 'Safety', icon: ShieldCheck, desc: 'Rigorous safety protocols to protect our team and your site.' },
  { title: 'Commitment', icon: Clock, desc: 'Delivering on time, every time, as promised.' },
];

export const STATS: Stat[] = [
  { id: '1', label: 'Years Experience', value: 10, suffix: '+' },
  { id: '2', label: 'Projects Completed', value: 150, suffix: '+' },
  { id: '3', label: 'Sq.ft Built', value: 1, suffix: 'M+' },
  { id: '4', label: 'Client Satisfaction', value: 100, suffix: '%' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Robert Fox',
    role: 'CEO, TechSpace',
    text: 'M&Y Constructions delivered our new office HQ ahead of schedule. The finish quality is exceptional.',
    image: 'https://picsum.photos/id/1005/100/100',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    text: 'Building a home is stressful, but their team made it seamless. Transparent pricing and great communication.',
    image: 'https://picsum.photos/id/338/100/100',
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Developer',
    text: 'Reliable partners for commercial projects. Their attention to structural details is commendable.',
    image: 'https://picsum.photos/id/64/100/100',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Azure Heights',
    category: 'Residential',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'A luxury residential complex featuring 20 stories of modern living spaces.',
    scope: 'Full Structural & Interior',
    status: 'Completed',
    sqft: '45,000',
  },
  {
    id: 'p2',
    title: 'TechHub Office',
    category: 'Commercial',
    location: 'Business Park',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Open-concept office space designed for collaboration and productivity.',
    scope: 'Interior Fit-out',
    status: 'Completed',
    sqft: '12,000',
  },
  {
    id: 'p3',
    title: 'Skyline Mall',
    category: 'Commercial',
    location: 'West Avenue',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=800',
    description: 'Modern shopping complex with glass facade and energy-efficient systems.',
    scope: 'Turnkey Construction',
    status: 'Ongoing',
    sqft: '120,000',
  },
  {
    id: 'p4',
    title: 'Villa Serenity',
    category: 'Residential',
    location: 'Green Valley',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    description: 'Private luxury villa with bespoke interiors and landscape integration.',
    scope: 'Design & Build',
    status: 'Completed',
    sqft: '6,500',
  },
  {
    id: 'p5',
    title: 'Urban Loft',
    category: 'Interior',
    location: 'City Center',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    description: 'Industrial chic renovation of an old warehouse into luxury lofts.',
    scope: 'Renovation & Interior',
    status: 'Completed',
    sqft: '3,200',
  },
  {
    id: 'p6',
    title: 'Apex Factory',
    category: 'Turnkey',
    location: 'Industrial Zone',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy industrial manufacturing facility with specialized flooring and ventilation.',
    scope: 'Turnkey',
    status: 'Ongoing',
    sqft: '80,000',
  },
];
