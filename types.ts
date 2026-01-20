import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Turnkey';
  location: string;
  image: string;
  description: string;
  scope: string;
  status: 'Completed' | 'Ongoing';
  sqft?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}
