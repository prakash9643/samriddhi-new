import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Factory, FlaskConical, Building2, ShieldCheck } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const Facility = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.6, 0.9], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0.6, 0.9], [100, 0]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div style={{ scale, y }}>
            <div className="relative rounded-[4rem] overflow-hidden shadow-premium border-[16px] border-warm-bg">
              <img 
                src="/images/main.png" 
                alt="Advanced Facility" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" /> */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-[2rem]">
                  <h4 className="text-white text-2xl font-display font-black mb-2">Smart Infrastructure</h4>
                  <p className="text-white/70 text-sm font-medium">Fully automated production lines with zero human touch points for maximum purity.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            >
              Our Strength
            </motion.span>
            <TextReveal 
              text="Advanced Manufacturing Unit"
              className="text-5xl md:text-7xl font-display font-black text-primary leading-tight tracking-tighter mb-10"
            />
            
            <div className="space-y-10">
              {[
                { title: 'Modern Equipment', icon: <Factory />, desc: 'High-speed automated machinery for bulk production.' },
                { title: 'Quality Testing', icon: <FlaskConical />, desc: 'In-house R&D and quality control laboratories.' },
                { title: 'Bulk Capacity', icon: <Building2 />, desc: 'Scalable infrastructure to handle global demand.' },
                { title: 'Safety First', icon: <ShieldCheck />, desc: 'Strict adherence to international safety standards.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Lab', 'Production', 'Packing', 'Storage'].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group"
            >
              <img 
                src={`https://picsum.photos/seed/fac${i}/500/500`} 
                alt={item} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-black uppercase tracking-widest text-xs">{item}</span>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
