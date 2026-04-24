import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedProducts = () => {
  const products = [
    { name: 'Herbal Face Wash', cat: 'Skin Care', img: '/images/shampoo.png' },
    { name: 'Serum', cat: 'Skin Care', img: '/images/8.png' },
    { name: 'Onion Hair Oil', cat: 'Hair Care', img: '/images/haicare.png' },
    { name: 'Biotin Shampoo', cat: 'Hair Care', img: '/images/10.png' },
    { name: 'Luxury Perfume', cat: 'Fragrance', img: 'images/11.png' },
    { name: 'Immunity Caps', cat: 'Supplements', img: '/images/9.png' },
  ];

  return (
    <section className="py-32 bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter leading-tight">
              Market <span className="text-gradient italic font-normal serif">Favorites</span>
            </h2>
            <p className="text-gray-500 mt-6 font-medium">Our most successful formulations that have helped brands dominate their niche.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-accent px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl"
          >
            Request Catalogue
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-premium mb-8">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 glass p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
              </div>
              
              <div className="px-6">
                <span className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-2 block">{p.cat}</span>
                <h3 className="text-2xl font-display font-black text-primary mb-6 tracking-tight">{p.name}</h3>
                <motion.button 
                  whileHover={{ gap: '1.5rem' }}
                  className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs transition-all"
                >
                  Enquire Now <ArrowRight className="w-4 h-4 text-accent" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
