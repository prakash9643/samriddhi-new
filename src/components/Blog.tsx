import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const Blog = () => {
  const posts = [
    { title: 'The Rise of Clean Beauty in 2024', date: 'Oct 12, 2023', img: 'https://picsum.photos/seed/b1/600/400' },
    { title: 'How to Scale Your D2C Brand', date: 'Nov 05, 2023', img: 'https://picsum.photos/seed/b2/600/400' },
    { title: 'Ayurveda: Ancient Wisdom, Modern Tech', date: 'Dec 20, 2023', img: 'https://picsum.photos/seed/b3/600/400' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <TextReveal 
              text="Industry Insights"
              className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter leading-tight"
            />
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm group"
          >
            Read All Articles <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] mb-8 shadow-premium">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{post.date}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-black text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">Explore the latest trends and strategies in the herbaceutical and cosmetic industry...</p>
              
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px]">
                Read More <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
