import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Globe, ArrowRight } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const LeadForm = () => {
  return (
    <section id="contact" className="py-32 bg-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Get Started
          </motion.span>
          <TextReveal 
            text="Build Your Empire Today"
            className="text-6xl md:text-8xl font-display font-black text-primary tracking-tighter leading-[0.9]"
          />
          <p className="text-xl text-gray-500 mt-10 max-w-lg leading-relaxed font-medium">
            Ready to turn your vision into a successful brand? Our experts are here to guide you through every step.
          </p>
          
          <div className="mt-16 space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-primary text-accent rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-2xl font-black text-primary tracking-tight">+91 9636061622</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-primary text-accent rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-2xl font-black text-primary tracking-tight">officesamriddhig@gmail.com</p>
              </div>
            </div>            
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-primary text-accent rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Address</p>
                <p className="text-2xl font-black text-primary tracking-tight">SAMRIDDHI HERBACUTICALS PVT. LTD. IK-6A, Solitare Industrial Park Phase-1 Bagru Jaipur 07 ,(303007)</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[4rem] shadow-premium border-white/50"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white/50 border-none focus:ring-2 focus:ring-primary transition-all font-bold text-primary" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="w-full px-8 py-5 rounded-2xl bg-white/50 border-none focus:ring-2 focus:ring-primary transition-all font-bold text-primary" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-primary uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full px-8 py-5 rounded-2xl bg-white/50 border-none focus:ring-2 focus:ring-primary transition-all font-bold text-primary" placeholder="john@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-primary uppercase tracking-widest">Product Category</label>
              <select className="w-full px-8 py-5 rounded-2xl bg-white/50 border-none focus:ring-2 focus:ring-primary transition-all font-bold text-primary appearance-none">
                <option>Select Category</option>
                <option>Morden Ayurveda</option>
                <option>Cosmetics</option>
                <option>Attar & Fragrance</option>
                <option>Hair Care</option>
                <option>Skin Care</option>
                <option>Supplements</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-primary uppercase tracking-widest">Your Message</label>
              <textarea rows={4} className="w-full px-8 py-5 rounded-2xl bg-white/50 border-none focus:ring-2 focus:ring-primary transition-all font-bold text-primary" placeholder="Tell us about your project..."></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(26, 60, 26, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-accent py-6 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl transition-all"
            >
              Get Free Consultation <ArrowRight className="w-6 h-6" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
