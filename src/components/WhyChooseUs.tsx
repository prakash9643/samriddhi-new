import React from 'react';
import { motion } from 'motion/react';
import { Zap, Leaf, Factory, Award, BarChart3, Truck, ShieldCheck } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const WhyChooseUs = () => {
  const features = [
    { title: 'Low MOQ', icon: <Zap />, desc: 'Scale from 500 units.', color: 'bg-yellow-500/10 text-yellow-600' },
    { title: 'Pure Ingredients', icon: <Leaf />, desc: 'Certified raw materials.', color: 'bg-green-500/10 text-green-600' },
    { title: 'Modern Tech', icon: <Factory />, desc: 'Automated precision.', color: 'bg-blue-500/10 text-blue-600' },
    { title: 'Certified', icon: <Award />, desc: 'ISO & GMP compliant.', color: 'bg-purple-500/10 text-purple-600' },
    { title: 'Pricing', icon: <BarChart3 />, desc: 'Competitive margins.', color: 'bg-indigo-500/10 text-indigo-600' },
    { title: 'Fast Delivery', icon: <Truck />, desc: 'Optimized cycles.', color: 'bg-orange-500/10 text-orange-600' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            >
              The Advantage
            </motion.span>
            <TextReveal 
              text="Why Brands Trust Our Unit"
              className="text-5xl md:text-7xl font-display font-black text-primary leading-tight tracking-tighter mb-8"
            />
            <p className="text-gray-500 font-medium leading-relaxed mb-12">
              We combine traditional wisdom with modern technology to deliver products that redefine market standards.
            </p>
            
            <div className="glass p-10 rounded-[3rem] border-primary/5">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent shadow-xl">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary">100% Confidentiality</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Your formulas are safe</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We sign strict NDAs with every client to ensure your unique formulations and brand strategies remain your exclusive intellectual property.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-8 rounded-[2.5rem] flex flex-col justify-between group transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${f.color} group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(f.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <h3 className="text-xl font-black text-primary mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-gray-400 font-medium">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
