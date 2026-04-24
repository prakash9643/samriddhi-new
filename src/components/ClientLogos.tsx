import React from 'react';
import { motion } from 'motion/react';

export const ClientLogos = () => {
  const logos = [
    'https://picsum.photos/seed/logo1/200/100',
    'https://picsum.photos/seed/logo2/200/100',
    'https://picsum.photos/seed/logo3/200/100',
    'https://picsum.photos/seed/logo4/200/100',
    'https://picsum.photos/seed/logo5/200/100',
    'https://picsum.photos/seed/logo6/200/100',
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.5em] mb-12">
          Trusted by 100+ Brands Globally
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, grayscale: 0, opacity: 1 }}
              src={logo}
              alt={`Client Logo ${i + 1}`}
              className="h-8 md:h-12 w-auto object-contain cursor-pointer transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
