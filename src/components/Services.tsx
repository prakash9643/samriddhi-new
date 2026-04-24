import React from 'react';
import { motion } from 'motion/react';
import { Factory, Beaker, Package, Tag, BarChart3, FileCheck, Truck, Sparkles } from 'lucide-react';

export const Services = () => {
  const services = [
    { title: 'Manufacturing', icon: <Factory />, x: -160, y: -80 },
    { title: 'Formulation', icon: <Beaker />, x: 160, y: -120 },
    { title: 'Packaging', icon: <Package />, x: -180, y: 140 },
    { title: 'Private Label', icon: <Tag />, x: 180, y: 100 },
    { title: 'Strategy', icon: <BarChart3 />, x: 0, y: 220 },
  ];

  return (
    <section id="services" className="py-32 bg-[#0d210d] overflow-hidden relative">
      {/* Atmospheric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-light/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/10 rounded-full animate-[pulse_8s_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-[pulse_12s_infinite]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles className="w-3 h-3" />
            Comprehensive Ecosystem
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-display font-black text-white tracking-tighter leading-[0.85]"
          >
            End-to-End <br />
            <span className="text-accent italic font-normal serif">Solutions</span>
          </motion.h2>
          <p className="text-white/40 mt-10 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            We don't just manufacture; we build brands. Our comprehensive suite of services covers every touchpoint of your product's journey, from <span className="text-white">concept to consumer</span>.
          </p>
        </div>

        <div className="relative h-[700px] flex items-center justify-center">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
                <stop offset="50%" stopColor="rgba(212, 175, 55, 0.5)" />
                <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
              </linearGradient>
            </defs>
            {services.map((service, i) => (
              <motion.line
                key={`line-${i}`}
                x1="400"
                y1="300"
                x2={400 + service.x}
                y2={300 + service.y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 1.5, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Central Hub */}
          <div className="relative z-30">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-dashed border-accent/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-accent/30 rounded-full"
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative w-40 h-40 bg-accent rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.4)] group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
              <Factory className="w-16 h-16 text-primary relative z-10 group-hover:rotate-12 transition-transform" />
            </motion.div>
          </div>

          {/* Service Nodes */}
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: service.x, y: service.y }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, type: "spring", stiffness: 50 }}
              className="absolute glass-dark p-8 rounded-[2.5rem] flex flex-col items-center gap-4 w-48 text-center hover:bg-white/10 hover:border-accent/30 transition-all cursor-default group z-40"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white block mb-1">{service.title}</span>
                <div className="w-0 h-0.5 bg-accent mx-auto group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Compliance', icon: <FileCheck />, desc: 'Full regulatory & FDA support.' },
            { title: 'Logistics', icon: <Truck />, desc: 'Seamless global shipping.' },
            { title: 'Analytics', icon: <BarChart3 />, desc: 'Data-driven market insights.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass-dark p-10 rounded-[3rem] border-white/5 hover:border-accent/20 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                  <p className="text-white/30 text-xs font-medium">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

