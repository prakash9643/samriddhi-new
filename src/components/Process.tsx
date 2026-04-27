import React, {useState} from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare, Users, Beaker, Palette, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { QuoteModal } from '../components/QuoteModal';

export const Process = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const steps = [
    { 
      title: 'Idea', 
      icon: <MessageSquare />, 
      desc: 'Concept & Vision',
      detail: 'We brainstorm your brand identity and product goals to create a unique market positioning.',
      color: 'bg-blue-500/10 text-blue-600'
    },
    { 
      title: 'Consult', 
      icon: <Users />, 
      desc: 'Expert Strategy',
      detail: 'Our industry veterans provide strategic insights on formulations, pricing, and market trends.',
      color: 'bg-purple-500/10 text-purple-600'
    },
    { 
      title: 'Sample', 
      icon: <Beaker />, 
      desc: 'Lab Prototyping',
      detail: 'Rigorous R&D to develop samples that meet your specific requirements and quality standards.',
      color: 'bg-accent/10 text-accent'
    },
    { 
      title: 'Brand', 
      icon: <Palette />, 
      desc: 'Identity Design',
      detail: 'Our creative team crafts premium packaging and labels that resonate with your target audience.',
      color: 'bg-green-500/10 text-green-600'
    },
    { 
      title: 'Deliver', 
      icon: <Truck />, 
      desc: 'Global Scale',
      detail: 'Seamless bulk production and logistics to get your products to market efficiently and safely.',
      color: 'bg-orange-500/10 text-orange-600'
    },
  ];

  return (
    <section id="process" className="py-32 bg-warm-bg overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              The Samriddhi Way
            </motion.div>
            <TextReveal 
              text="Our Creative Workflow"
              className="text-6xl md:text-8xl font-display font-black text-primary tracking-tighter leading-[0.9]"
            />
          </div>
          <p className="text-gray-500 font-medium max-w-sm mb-4 leading-relaxed">
            A systematic approach to turning your abstract ideas into market-ready, premium products.
          </p>
        </div>

        <div className="relative space-y-24 md:space-y-0">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-primary/5 -z-10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Oversized Background Number */}
                <div className="absolute -top-12 -left-4 text-[10rem] font-display font-black text-primary/[0.03] select-none pointer-events-none group-hover:text-accent/[0.05] transition-colors duration-700">
                  {i + 1}
                </div>

                <div className="relative glass p-8 rounded-[3rem] h-full flex flex-col items-center text-center hover:bg-white hover:shadow-premium transition-all duration-500 border-white/50 group-hover:border-accent/20">
                  {/* Icon Container */}
                  <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-8 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 ${step.color}`}>
                    {React.cloneElement(step.icon as React.ReactElement, { className: 'w-10 h-10' })}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2">Step 0{i + 1}</span>
                      <h3 className="text-3xl font-display font-black text-primary tracking-tight group-hover:text-accent transition-colors">{step.title}</h3>
                    </div>
                    
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{step.desc}</p>
                    
                    <p className="text-sm text-gray-500 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Arrow (Mobile/Tablet) */}
                  <div className="lg:hidden mt-8 text-accent animate-bounce">
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 flex justify-center"
        >
          <button
          onClick={() => setIsQuoteModalOpen(true)} 
          className="glass px-12 py-6 rounded-full flex items-center gap-4 group hover:bg-primary hover:text-white transition-all duration-500">
            <span className="text-sm font-black uppercase tracking-widest">Start Your Journey</span>
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary group-hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </motion.div>
      </div>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
};

