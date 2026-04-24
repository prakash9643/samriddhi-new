import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const FAQ = () => {
  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'Our MOQs are highly flexible, starting as low as 500 units for certain categories to help new brands launch effectively.' },
    { q: 'Do you provide packaging?', a: 'Yes, we offer complete packaging solutions including sourcing, design, and printing.' },
    { q: 'Can I create a custom formula?', a: 'Absolutely. Our R&D team specializes in developing unique, custom formulations tailored to your specific requirements.' },
    { q: 'How much time does production take?', a: 'Standard production cycles range from 25-45 days depending on the product category and complexity.' },
    { q: 'Do you provide samples?', a: 'Yes, we provide lab-developed samples for your approval before proceeding with bulk production.' },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-warm-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1a3c1a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <TextReveal 
            text="Common Queries"
            className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter justify-center"
          />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[2rem] overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left font-black text-primary text-xl tracking-tight hover:bg-primary/5 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="p-8 pt-0 text-gray-500 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
