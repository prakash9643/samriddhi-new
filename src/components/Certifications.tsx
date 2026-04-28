import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './TextReveal';

import { Tilt } from './Tilt';

// import ISO from ;
// import WHO from ;
// import FSSAI from '/public/images/icons/fssai.png';
// import HALAL from '/public/images/icons/halal.png';
// import GMP from '/public/images/icons/GMP.png';
// import MA from '/public/images/icons/MA.png';
// import MI from '/public/images/icons/MI.png';

// const certifications = [
//   { name: 'ISO 9001:2008', src: '', desc: 'International standard for quality management systems.', size: 'large' },
//   { name: 'WHO', src: '/public/images/icons/who.png', desc: 'World Health Organization standards compliance.', size: 'medium' },
//   { name: 'FSSAI', src: '/public/images/icons/fssai.png', desc: 'Food Safety and Standards Authority of India.', size: 'medium' },
//   { name: 'HALAL INDIA', src: '/public/images/icons/halal.png', desc: 'Certified Halal products for global markets.', size: 'small' },
//   { name: 'GMP Quality', src: '/public/images/icons/GMP.png', desc: 'Good Manufacturing Practices for consistent quality.', size: 'large' },
//   { name: 'Ministry of Ayush', src: '/public/images/icons/MA.png', desc: 'Recognized by the Ministry of Commerce & Industry.', size: 'small' },
//   { name: 'Make In India', src: '/public/images/icons/MI.png', desc: 'Supporting national manufacturing excellence.', size: 'medium' },
// ];

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
            {/* {[...certifications, ...certifications].map((cert, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 transition-all duration-500">
                  <img 
                    src={cert.src} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{cert.name}</span>
              </div>
            ))} */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/iso-logo.png" 
                  alt="ISO" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">ISO 90001:2008</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/who.png" 
                  alt="WHO" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">WHO</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/fssai.png" 
                  alt="fssai" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">FSSAI</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/halal.png" 
                  alt="Halal" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">HALAL INDIA</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/GMP.png" 
                  alt="GMP Quality" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">GMP Quality</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/MA.png" 
                  alt="Ministry of Ayush" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Ministry of Ayush</span>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 transition-all duration-500">
                <img 
                  src="/public/images/icons/MI.png" 
                  alt="Make In India" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Make In India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};