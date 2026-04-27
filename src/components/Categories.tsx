import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, Wind, Droplets, Sun, FlaskConical, ArrowRight } from 'lucide-react';
import { Tilt } from './Tilt';
import { TextReveal } from './TextReveal';

export const Categories = () => {
  const categories = [
    { name: 'Morden Ayurveda', icon: <Leaf />, img: '/images/category.png', size: 'lg' },
    { name: 'Cosmetics', icon: <Sparkles />, img: '/images/cosmetic.png', size: 'sm' },
    { name: 'Attar & Fragrance', icon: <Wind />, img: '/images/fragrance.png', size: 'sm' },
    { name: 'Hair Care', icon: <Droplets />, img: '/images/haicare.png', size: 'lg' },
    { name: 'Skin Care', icon: <Sun />, img: '/images/skincare.png', size: 'sm' },
    { name: 'Supplements', icon: <FlaskConical />, img: '/images/suppliment.png', size: 'lg' },
  ];

  return (
    <section id="products" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <TextReveal 
              text="Specialized Manufacturing Verticals"
              className="text-5xl md:text-7xl font-display font-black text-primary leading-tight tracking-tighter"
            />
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm group"
          >
            Explore All <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[3rem] overflow-hidden shadow-premium transition-all duration-700 ${cat.size === 'lg' ? 'md:row-span-2' : ''}`}
            >
              <Tilt>
                <div className="group relative h-full w-full">
                  {/* <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-700 z-10" /> */}
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                      {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-7 h-7' })}
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-display font-black text-white mb-4 tracking-tight">{cat.name}</h3>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-white/70 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors"
                      >
                        View Products <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
