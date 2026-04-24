import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Leaf, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { QuoteModal } from '../components/QuoteModal';

const CapsulePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const stats = [
    { label: 'Formulations', value: '60+' },
    { label: 'Brands', value: '25+' }
  ];

  const capabilities = [
    { title: "Omega-3 Softgels", desc: "Premium fish oil capsules with high EPA/DHA content." },
    { title: "Turmeric Curcumin Capsules", desc: "Anti-inflammatory capsules with black pepper for absorption." },
    { title: "Multivitamin Softgels", desc: "Complete daily nutrition in an easy-to-swallow format." },
    { title: "Ashwagandha Capsules", desc: "Standardized extract for maximum adaptogenic benefits." },
    { title: "Biotin Capsules", desc: "High-potency formulation for hair, skin, and nail health." },
    { title: "Immunity Hard Capsules", desc: "A blend of zinc, vitamin C, and elderberry." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Advanced Formulation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8"
            >
              Hard & Soft <br />
              <span className="text-accent italic font-light">Capsules</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-primary/60 font-medium max-w-xl mb-12">
              Expert manufacturing of hard gelatin and softgel capsules for wellness brands globally.
            </motion.p>
            
            <div className="flex gap-16">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black text-primary tracking-tighter">{stat.value}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-primary/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium">
              <img src="/images/products/capsule.png" alt="Capsules" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6 uppercase">
              Capsule <br />
              <span className="text-accent italic font-light lowercase">Capabilities</span>
            </h2>
            <p className="text-primary/60 font-medium text-lg">
              High-quality encapsulation for both hard shell and soft gelatin formulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i % 3 * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-[2.5rem] border border-primary/5 hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-primary tracking-tight mb-3 group-hover:text-accent transition-colors leading-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-primary/50 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">Capsules</span>
                  <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4 text-primary/30 group-hover:text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase">
            Launch Your <br /> <span className="text-accent italic font-light lowercase">Capsule Line</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a href="https://wa.me/916367508970" target="_blank" className="px-10 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3">
              <MessageSquare className="w-5 h-5" /> WhatsApp
            </motion.a>
            <motion.button onClick={() => setIsQuoteModalOpen(true)} className="px-10 py-5 bg-accent text-primary rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3">
              <Sparkles className="w-5 h-5" /> Get Quote
            </motion.button>
          </div>
        </div>
      </section>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default CapsulePage;
