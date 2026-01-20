import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setFormStatus('submitted');
        setTimeout(() => setFormStatus('idle'), 5000);
        myForm.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration - adjusted for transparency */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-tr-full -ml-24 -mb-24 z-0"></div>
      
      {/* Overlay to ensure readability over global background */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-[-1]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Start Your Project</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 font-medium max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us for a free consultation and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border-t-4 border-secondary">
            {formStatus === 'submitted' ? (
              <div className="h-80 flex flex-col items-center justify-center text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-gray-600">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50/50" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50/50" 
                      placeholder="Mobile Number" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50/50" 
                    placeholder="Email" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select 
                    name="project_type"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50/50"
                  >
                    <option value="Civil Construction">Civil Construction</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Turnkey Project">Turnkey Project</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50/50" 
                    placeholder="Your Requirement"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-slate-800 transition-colors uppercase tracking-wider shadow-md">
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & Map */}
          <div className="space-y-8">
            <div className="bg-primary/90 backdrop-blur-md text-white p-8 rounded-xl shadow-lg text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-4">Direct Contact</h3>
              <p className="text-gray-300 mb-6">Need an immediate response? Call our support line or chat with us on WhatsApp.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919945930894" className="flex-1 bg-white text-primary py-3 px-6 rounded font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/919945930894" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white py-3 px-6 rounded font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] border-4 border-white/90">
              <iframe
                src="https://www.google.com/maps?q=Nelagadaranhalli,Bangalore&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;