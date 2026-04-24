import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, Award, ShieldCheck, FileCheck } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { TextReveal } from './TextReveal';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      {/* Animated background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -z-10" 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random()
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + "px"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 mt-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-xs font-black uppercase tracking-[0.2em] mt-8 mb-8"
          >
            <Sparkles className="w-3 h-3 text-accent" />
            The Future of Manufacturing
          </motion.div>
          
          <TextReveal 
            text="Launch Your Brand with Precision"
            className="text-4xl md:text-6xl font-display font-black text-primary leading-[0.95] mb-8 tracking-tighter"
          />
          
          <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
            Premium third-party manufacturing with <span className="text-primary font-bold">Low MOQ</span> and <span className="text-primary font-bold">End-to-End</span> support. We turn complex formulations into market leaders.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Magnetic>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 60, 26, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-accent px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center gap-3 shadow-2xl transition-all"
              >
                Start Consultation <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(26, 60, 26, 0.05)" }}
                className="px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest text-primary border-2 border-primary/10 transition-all"
              >
                Our Products
              </motion.button>
            </Magnetic>
          </div>
          
          {/* <div className="mt-16 flex items-center gap-12">
            {[
              { icon: <Award />, label: 'ISO Certified' },
              { icon: <ShieldCheck />, label: 'GMP Approved' },
              { icon: <FileCheck />, label: 'FDA Compliant' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center">{item.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        <div className="relative perspective-1000 hidden lg:block">
          <motion.div 
            style={{ y: y1, rotate }}
            className="relative z-20 rounded-[3rem] overflow-hidden shadow-premium border-[12px] border-white/50 rotate-y-12"
          >
            <img 
              src="/images/hero-banner.png" 
              alt="Premium Product" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-10 -left-10 z-30 glass p-8 rounded-[2rem] shadow-2xl max-w-[240px] floating"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-4xl font-black text-primary tracking-tighter">100+</span>
            </div>
            <p className="text-xs font-bold text-black uppercase tracking-widest leading-tight">Brands Scaled to Global Markets</p>
          </motion.div>

          {/* Floating decorative cards */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [5, 8, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 -right-10 z-10 glass p-4 rounded-2xl shadow-xl floating-delayed"
          >
            <div className="w-12 h-1.5 bg-accent rounded-full mb-2" />
            <div className="w-8 h-1.5 bg-primary/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
