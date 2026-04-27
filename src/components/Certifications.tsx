import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './TextReveal';

import { Tilt } from './Tilt';
const certifications = [
  { name: 'ISO 9001:2008', logo: '/public/images/icons/iso-logo.png', desc: 'International standard for quality management systems.', size: 'large' },
  { name: 'WHO', logo: '/images/icons/who.png', desc: 'World Health Organization standards compliance.', size: 'medium' },
  { name: 'FSSAI', logo: '/images/icons/fssai.png', desc: 'Food Safety and Standards Authority of India.', size: 'medium' },
  { name: 'HALAL INDIA', logo: '/images/icons/halal.png', desc: 'Certified Halal products for global markets.', size: 'small' },
  { name: 'GMP Quality', logo: '/images/icons/GMP.png', desc: 'Good Manufacturing Practices for consistent quality.', size: 'large' },
  { name: 'Ministry of Ayush', logo: '/images/icons/MA.png', desc: 'Recognized by the Ministry of Commerce & Industry.', size: 'small' },
  { name: 'Make In India', logo: '/images/icons/MI.png', desc: 'Supporting national manufacturing excellence.', size: 'medium' },
];

export const Certifications = () => {
  return (
    <section className="md:py-12 py-8 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="whitespace-nowrap">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Certified Quality</p>
          <h3 className="text-xl font-display font-black text-primary tracking-tight">Global Standards</h3>
        </div>

        <div className="flex-1 relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...certifications, ...certifications].map((cert, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 transition-all duration-500">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{cert.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
