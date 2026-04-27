import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary pt-32 pb-12 overflow-hidden relative">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none flex items-center justify-center">
        <span className="text-[30vw] font-display font-black leading-none">SAMRIDDHI</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="/images/Samriddhi-logo.png" 
                alt="Samriddhi Herbaceuticals" 
                className="h-12 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/50 font-medium leading-relaxed mb-10">
              Leading the future of herbaceutical manufacturing with precision, purity, and passion.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: 'rgba(212, 175, 55, 1)', color: '#1a3c1a' }}
                  className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center text-accent transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Quick Links</h4>
            <ul className="space-y-6">
              {['Home', 'Products', 'Company', 'Services', 'Our Process'].map((link) => (
                <li key={link}>
                  <a 
                    href={
                      link === 'Home' ? '/' : 
                      link === 'Products' ? '/products' : 
                      link === 'Company' ? '/about' : 
                      link === 'Services' ? '/servixces' : 
                      link === 'Our Process' ? '/process' : '#'
                    } 
                    className="text-white/40 hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Categories</h4>
            <ul className="space-y-6">
              {['Morden Ayurveda', 'Cosmetics', 'Attar & Fragrance', 'Hair Care', 'Skin Care', 'Supplements'].map((link) => (
                <li key={link}>
                  <a href="/#products" className="text-white/40 hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Newsletter</h4>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8">Subscribe to get the latest industry insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border-none rounded-2xl py-5 px-8 text-white focus:ring-2 focus:ring-accent transition-all font-bold"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-accent text-primary p-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2024 Samriddhi Herbaceuticals. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white/20 hover:text-accent transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Top</span>
            <div className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
