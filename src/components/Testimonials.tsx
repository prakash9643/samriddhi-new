import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const Testimonials = () => {
  const reviews = [
    { name: 'Prachi Sharma', brand: 'Glow Skincare', text: 'Samriddhi transformed our vision into a market-leading product line. Their attention to detail is exceptional.', img: 'https://picsum.photos/seed/u1/100/100' },
    { name: 'Rahul Mehta', brand: 'Veda Wellness', text: 'The best partner for Ayurvedic manufacturing. Their MOQs allowed us to scale sustainably.', img: 'https://picsum.photos/seed/u2/100/100' },
    { name: 'Anjali Garg', brand: 'Pure Hair', text: 'Professional, creative, and reliable. Their packaging design team is truly world-class.', img: 'https://picsum.photos/seed/u3/100/100' },
  ];

  return (
    <section className="py-32 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
        <Quote className="w-[800px] h-[800px] -translate-y-1/4 translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <TextReveal 
            text="Client Stories"
            className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter justify-center"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div 
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark p-10 rounded-[3rem] relative group hover:bg-white/10 transition-all"
            >
              <div className="flex gap-1 text-accent mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-xl text-white/80 italic font-medium mb-10 leading-relaxed">"{r.text}"</p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-accent/30">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-white font-black tracking-tight">{r.name}</h4>
                  <p className="text-accent text-[10px] font-black uppercase tracking-widest">{r.brand}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
