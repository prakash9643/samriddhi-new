import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ShoppingBag, Users, Stethoscope, Building2, Globe, Sparkles } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { Tilt } from './Tilt';

export const Industries = () => {
  const industries = [
    { 
      name: 'Startups', 
      // icon: <Rocket />, 
      // desc: 'Incubating the next generation of herbaceutical giants.',
      color: 'from-blue-500/20 to-cyan-500/20',
      size: 'large',
      image: '/images/category7.png'
    },
    { 
      name: 'D2C Brands', 
      // icon: <ShoppingBag />, 
      // desc: 'Direct-to-consumer excellence with premium formulations.',
      color: 'from-purple-500/20 to-pink-500/20',
      size: 'medium',
      image: '/images/category02.png'
    },
    { 
      name: 'Influencers', 
      // icon: <Users />, 
      // desc: 'Personal brands turned into physical product empires.',
      color: 'from-orange-500/20 to-yellow-500/20',
      size: 'medium',
      image: '/images/category2.png'
    },
    { 
      name: 'Clinics', 
      // icon: <Stethoscope />, 
      // desc: 'Professional grade products for healthcare practitioners.',
      color: 'from-emerald-500/20 to-teal-500/20',
      size: 'small',
      image: '/images/category3.png'
    },
    { 
      name: 'Pharmacies', 
      // icon: <Building2 />, 
      // desc: 'Reliable supply chains for retail pharmaceutical chains.',
      color: 'from-indigo-500/20 to-violet-500/20',
      size: 'small',
      image: '/images/category8.png'
    },
  ];

  return (
    <section className="py-32 bg-warm-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-black uppercase tracking-[0.4em] text-xs">Target Segments</span>
          </motion.div>
          <TextReveal 
            text="Empowering Modern Ayurveda"
            className="text-6xl md:text-8xl font-display font-black text-primary tracking-tighter justify-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-medium max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            We provide the infrastructure and expertise for diverse visionaries to build, scale, and dominate their respective markets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {industries.map((item, i) => {
            const isLarge = item.size === 'large';
            const isMedium = item.size === 'medium';
            
            return (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 
                  isMedium ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Tilt className="h-full">
                  <div className={`glass h-full p-10 rounded-[3rem] relative group overflow-hidden border-white/40 shadow-premium transition-all duration-500`}>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      {/* <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-primary shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-accent transition-all duration-500">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
                      </div> */}
                      
                      {/* <div>
                        <h3 className="text-2xl font-display font-black text-primary mb-3 tracking-tight group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary/70 font-bold leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          {item.desc}
                        </p>
                      </div> */}
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
