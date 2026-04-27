import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  Beaker, 
  Palette, 
  Truck, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Cpu,
  Microscope,
  FlaskConical
} from 'lucide-react';
import { QuoteModal } from '../components/QuoteModal';

const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }: { icon: any, delay?: number, className?: string, key?: any }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute pointer-events-none opacity-20 ${className}`}
  >
    <Icon className="w-12 h-12" />
  </motion.div>
);

const ProcessPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const steps = [
    { 
      title: 'Idea', 
      icon: <MessageSquare />, 
      image: "/images/our-process/1.png",
      floatingIcons: [MessageSquare, Sparkles, Beaker],
      desc: 'Concept & Vision',
      detail: 'We brainstorm your brand identity and product goals to create a unique market positioning. Our team helps you define the scope and target audience for your product.',
      color: 'bg-blue-500 text-blue-600',
      longDesc: 'The journey begins with a deep dive into your vision. Whether you have a fully formed idea or just a concept, our experts work with you to refine the product requirements, desired benefits, and commercial goals.'
    },
    { 
      title: 'Consult', 
      icon: <Users />, 
      image: "/images/our-process/2.png",
      floatingIcons: [Users, ShieldCheck, Microscope],
      desc: 'Expert Strategy',
      detail: 'Our industry veterans provide strategic insights on formulations, pricing, and market trends to ensure your product is competitive.',
      color: 'bg-purple-500 text-purple-600',
      longDesc: 'We provide comprehensive consultation on regulatory requirements, market trends, and ingredient selection. Our goal is to create a product that is not only effective but also commercially viable.'
    },
    { 
      title: 'Sample', 
      icon: <Beaker />, 
      image: "/images/our-process/3.png",
      floatingIcons: [Beaker, FlaskConical, Sparkles],
      desc: 'Lab Prototyping',
      detail: 'Rigorous R&D to develop samples that meet your specific requirements and quality standards for your approval.',
      color: 'bg-accent text-accent',
      longDesc: 'Our state-of-the-art laboratory develops initial prototypes. We fine-tune the texture, aroma, efficacy, and stability until you are 100% satisfied with the result.'
    },
    { 
      title: 'Brand', 
      icon: <Palette />, 
      image: "/images/our-process/4.png",
      floatingIcons: [Palette, PackageCheck, Sparkles],
      desc: 'Identity Design',
      detail: 'Our creative team crafts premium packaging and labels that resonate with your target audience and meet legal standards.',
      color: 'bg-green-500 text-green-600',
      longDesc: 'We assist with label design, packaging material selection, and branding elements. We ensure all packaging is aesthetically pleasing and compliant with all relevant regulations.'
    },
    { 
      title: 'Deliver', 
      icon: <Truck />, 
      image: "/images/our-process/5.png",
      floatingIcons: [Truck, PackageCheck, ShieldCheck],
      desc: 'Global Scale',
      detail: 'Seamless bulk production and logistics to get your products to market efficiently and safely across the globe.',
      color: 'bg-orange-500 text-orange-600',
      longDesc: 'Once the design and samples are approved, we move to full-scale production. Our logistics network ensures that your finished goods reach their destination safely and on time.'
    },
  ];

  const qualityPoints = [
    { icon: ShieldCheck, title: "Raw Material Testing", desc: "Every ingredient undergoes strict quality checks before entering the production line." },
    { icon: Microscope, title: "In-Process Quality Control", desc: "Constant monitoring during manufacturing to ensure consistency and purity." },
    { icon: PackageCheck, title: "Final Product Validation", desc: "Rigorous testing of the finished product to guarantee it meets all specifications." },
    { icon: CheckCircle2, title: "Batch Documentation", desc: "Complete traceability for every batch produced in our facility." }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#CBA35C_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">
              Our <br />
              <span className="text-accent italic font-light lowercase">Streamlined</span> Process
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl leading-relaxed">
              From initial concept to global delivery, we follow a meticulous workflow to ensure excellence at every step of your brand's journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-40 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="space-y-40">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
              >
                {/* Visual Connector Ball */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent hidden md:block z-20 shadow-[0_0_20px_rgba(203,163,92,0.5)]"></div>

                <div className="flex-1 space-y-8 relative z-10 w-full">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-[2rem] ${step.color.replace('text-', 'bg-').split(' ')[0]}/10 flex items-center justify-center relative z-10`}>
                        {React.cloneElement(step.icon as React.ReactElement, { className: `w-10 h-10 ${step.color.split(' ')[1]}` })}
                      </div>
                      <div className={`absolute -inset-2 ${step.color.replace('text-', 'bg-').split(' ')[0]}/5 blur-xl rounded-full`}></div>
                    </div>
                    <div>
                      <span className="text-5xl font-black text-primary/10 italic">0{i + 1}</span>
                      <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-none mt-1">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-xl font-bold text-accent italic">{step.desc}</p>
                  
                  <p className="text-lg text-primary/70 font-medium leading-relaxed max-w-xl">
                    {step.longDesc}
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 bg-[#F9FAFB] rounded-[2.5rem] border border-primary/5 relative group overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${step.color.replace('text-', 'bg-').split(' ')[0]}/5 rounded-bl-[4rem]`}></div>
                    <p className="text-xs font-black text-primary/40 uppercase tracking-widest mb-3">Core Strategy</p>
                    <p className="text-primary/80 font-semibold leading-relaxed relative z-10">{step.detail}</p>
                  </motion.div>
                </div>
                
                <div className="flex-1 relative w-full perspective-1000">
                  <motion.div 
                    whileHover={{ rotateY: i % 2 === 0 ? -10 : 10, rotateX: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="aspect-square bg-white rounded-[4rem] shadow-premium p-4 md:p-6 relative z-10 border border-primary/5 overflow-hidden"
                  >
                    <div className="w-full h-full rounded-[3.5rem] overflow-hidden relative group">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 ${step.color.replace('text-', 'bg-').split(' ')[0]}/20 mix-blend-multiply opacity-30`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Floating Icons for Step */}
                  {step.floatingIcons.map((Icon, idx) => (
                    <FloatingIcon 
                      key={idx}
                      icon={Icon}
                      delay={idx * 1.5}
                      className={
                        idx === 0 ? "top-0 -left-12 text-accent" :
                        idx === 1 ? "-bottom-8 -right-8 text-primary" :
                        "-top-12 -right-12 text-accent"
                      }
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6 leading-none">
              Unyielding <br />
              <span className="text-accent italic font-light lowercase">Quality</span> Standards
            </h2>
            <p className="text-primary/60 font-medium text-lg">
              Our process is underlined by rigorous testing and validation to ensure every product exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 hover:border-accent group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all">
                  <point.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-primary tracking-tight mb-4 uppercase">{point.title}</h3>
                <p className="text-primary/50 text-sm font-medium leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-white">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Ready to <span className="text-accent italic font-light lowercase">Execute</span> Your Idea?
          </h2>
          <p className="text-xl text-white/60 font-medium mb-12">
            Leverage our streamlined process and state-of-the-art facility to bring your vision to life.
          </p>
          
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-accent hover:bg-accent/90 text-primary px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
          >
            Start Project Now
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default ProcessPage;
