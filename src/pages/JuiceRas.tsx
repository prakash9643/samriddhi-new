import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Zap, 
  Droplets,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { QuoteModal } from '../components/QuoteModal';

const JuiceRasPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const stats = [
    { label: 'Formulations', value: '450+' },
    { label: 'Brands', value: '90+' }
  ];

  const capabilities = [
    { title: "Neem Karela Jamun Juice", desc: "It is an Immunity Booster which helps Promote Healthy Glucose Levels." },
    { title: "Giloy Papaya Tulsi Juice", desc: "Boost the immune system and protect against infections, flu and fever." },
    { title: "Man's Flyer Juice", desc: "Man Power Booster Increase Fertility Weakness." },
    { title: "Leuco Safe Juice", desc: "Woman's Menstruation, Blood white Discharge." },
    { title: "Dazy Juice", desc: "In digestion, digestive disorder." },
    { title: "Noni Fresh Juice", desc: "Antioxidant, maintain bone health weight management." },
    { title: "Immuno Up Juice", desc: "Immunity boosting digestion, skin hair related disorders." },
    { title: "Bone Fit Juice", desc: "Joint pain, strong bones, rheumatism." },
    { title: "Super Herbs Juice", desc: "Life style juice also increase immunity." },
    { title: "ALO Pulp Juice", desc: "Detox Body." },
    { title: "AMLAKI SWARAS (AMLA Juice)", desc: "Support Immunity, digestive health and healthy hair and skin." },
    { title: "GUDUCHI Swaras (Giloy Juice)", desc: "Immunity Booster." },
    { title: "Tulsi Ras", desc: "Fight Stress, Caught Cold." },
    { title: "Brahmi Swaras", desc: "Powerful Antioxidant." },
    { title: "Godhum Patra Swaras (Wheat Grass Ras)", desc: "Reduced Bloating, gas and stomach upset." },
    { title: "Triphala Ras", desc: "Digestion Acidity Problem." },
    { title: "Neem Juice", desc: "For Diabetes Problem." },
    { title: "Aloevera Ras", desc: "For digestion and Detox body." },
    { title: "Ashwgandha Ras", desc: "Vitality and muscles Strength." },
    { title: "Pattharchatta Ras", desc: "Support Stone Kidney." },
    { title: "Mix Berry Juice", desc: "Immunity booster and antioxidant." },
    { title: "Haldi Ras", desc: "Boosts immunity, skin glowing." },
    { title: "Sea Buckthorn Juice", desc: "Antioxidant, improves eyesight, relieves dry eyes." },
    { title: "Moringa Juice / Ras", desc: "Protects & nourishes hair and skin, treats swelling." },
    { title: "Punarnav Juice / Ras", desc: "Good for kidney & liver." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              3rd Party Manufacturing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-8"
            >
              Herbal Juice <br />
              <span className="text-accent italic font-light">Manufacturing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-primary/60 font-medium max-w-xl leading-relaxed mb-12"
            >
              We specialize in manufacturing premium herbal juices for brands and businesses. Our state-of-the-art facility produces high-quality natural formulations tailored to your specifications.
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
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium group relative">
              <img 
                src="/images/products/juice.png" 
                alt="Herbal Jucie Manufacturing" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6 uppercase">
              Herbal Juice <br />
              <span className="text-accent italic font-light lowercase">Manufacturing Capabilities</span>
            </h2>
            <p className="text-primary/60 font-medium text-lg">
              We can manufacture these herbal juice formulations for your brand with custom packaging and labeling
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors">Juice / Ras</span>
                  <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4 text-primary/30 group-hover:text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
          >
            Ready to Launch Your <br />
            <span className="text-accent italic font-light italic lowercase">Herbal Juice Brand?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed italic"
          >
            Partner with us for contract manufacturing of premium herbal juices. We provide complete solutions from formulation to packaging for your brand.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              href="https://wa.me/916367508970"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl hover:bg-accent transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </motion.a>
            <motion.button 
              onClick={() => setIsQuoteModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-accent text-primary rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl hover:shadow-accent/20 transition-all"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              Get Custom Quote
            </motion.button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default JuiceRasPage;
