import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { 
  Leaf, 
  Sparkles, 
  Flower2,
  ArrowRight,
  FlaskConical,
  Droplets,
  Zap,
  ShieldCheck,
  Package,
  Factory
} from "lucide-react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-warm-bg relative overflow-hidden">
      <Hero />
      <ManufacturingVerticals />
      <QualityCertifications />
      <CTA />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Manufacturing Excellence
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9] mb-8"
        >
          Premium Manufacturing <br />
          <span className="text-accent italic font-light">Verticals</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-primary/60 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Explore our specialized state-of-the-art facilities dedicated to crafting the next generation of wellness and beauty brands.
        </motion.p>
      </div>
    </section>
  );
};

const ManufacturingVerticals = () => {
  const verticals = [
    {
      title: "Classical Ayurveda",
      category: "Herbaceuticals",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
      features: ["Traditional Juices", "Asav & Arishta", "Bhasma & Pishti", "Pure Herbs"],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Cosmetic Excellence",
      category: "Personal Care",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800",
      features: ["Premium Serums", "Facial Creams", "Hair Therapeutics", "Body Rituals"],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Wellness Nutrition",
      category: "Nutraceuticals",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800",
      features: ["Vitality Capsules", "Immunity Syrups", "Protein Powders", "Daily Multivitamins"],
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      title: "Scent Artistry",
      category: "Fragrances",
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800",
      features: ["Luxury Perfumes", "Attars", "Room Mists", "Essential Oil Blends"],
      icon: <Flower2 className="w-6 h-6" />
    },
    {
      title: "Advanced Oral Care",
      category: "Hygiene",
      img: "https://images.unsplash.com/photo-1559594412-4f7f6a72666d?q=80&w=800",
      features: ["Herbal Toothpaste", "Mouthwash", "Gum Gels", "Oil Pulling Rituals"],
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Derma Solutions",
      category: "Skin Tech",
      img: "https://images.unsplash.com/photo-1612833603922-3bb3ca492d47?q=80&w=800",
      features: ["Medicated Creams", "UV Protectors", "Anti-Aging Tech", "Repair Balms"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter mb-4 leading-tight">
              Specialized <br />
              Manufacturing <span className="text-accent italic font-light">Verticals</span>
            </h2>
            <p className="text-primary/60 text-lg md:text-xl font-light">
              We operate across diverse sectors, ensuring precision specialized manufacturing for every specific product category.
            </p>
          </div>
          <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest border-b border-accent pb-2 cursor-pointer hover:gap-4 transition-all">
            Download Catalog <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#F9FAFB] rounded-[2.5rem] overflow-hidden border border-primary/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={v.img} 
                  alt={v.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  {v.icon}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{v.category}</span>
                  <h3 className="text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors">{v.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {v.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-primary/60 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-primary/5">
                  <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                    View Sub-Categories <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityCertifications = () => {
  return (
    <section className="py-24 bg-warm-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-tight">
              Uncompromising <br /><span className="text-accent italic font-light">Global Standards</span>
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed font-light">
              Our manufacturing verticals are governed by rigorous quality control protocols, ensuring every batch meets international benchmarks for purity and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <ShieldCheck />, title: "GMP Certified" },
              { icon: <Factory />, title: "FDA Compliant" },
              { icon: <ShieldCheck />, title: "ISO 9001:2015" },
              { icon: <Package />, title: "AYUSH Approved" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <span className="text-sm font-bold text-primary tracking-wide">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-[4rem] overflow-hidden shadow-premium relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1579154235602-3c2c2aa95094?q=80&w=1000" 
              alt="Quality Lab" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-accent/5 p-16 md:p-24 text-center border border-white/5">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Strategic Manufacturing <br />
              <span className="text-accent italic font-light">For Your Brand</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light">
              Elevate your market presence with products manufactured at our specialized facilities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-6 bg-accent text-primary rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all">
                Request Manufacturing Quote
              </button>
              <button className="px-12 py-6 border-2 border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                Our Facilities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
