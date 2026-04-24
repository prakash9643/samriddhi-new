import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Tag, 
  Settings, 
  FileCheck, 
  GraduationCap, 
  Leaf, 
  FileText, 
  Beaker, 
  CheckCircle2, 
  FlaskConical, 
  Zap, 
  Search, 
  Cpu, 
  Package, 
  Activity,
  ArrowRight,
  Check
} from 'lucide-react';
import { QuoteModal } from '../components/QuoteModal';

const ServicesPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const businessModels = [
    {
      icon: Tag,
      title: "White Label/Private Label",
      desc: "Third party Manufacturing solutions tailored to your brand requirements",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Settings,
      title: "Contract Manufacturing",
      desc: "Complete manufacturing solutions from concept to finished product",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: FileCheck,
      title: "Loan-Licensing",
      desc: "Flexible licensing arrangements for product development and manufacturing",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Product Training",
      desc: "Comprehensive training programs for product knowledge and market development",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Eco-friendly manufacturing practices and sustainable product development",
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  const technicalServices = [
    {
      icon: FileText,
      title: "Documentation Services",
      subtitle: "Documentation for international regulatory authorities",
      list: ["Regulatory compliance documentation", "International standards adherence", "Quality assurance protocols"]
    },
    {
      icon: Beaker,
      title: "Laboratory Services",
      subtitle: "Laboratory trial-to-trial batches to pilot manufacturing and transfer of technology",
      list: ["Trial batch production", "Pilot manufacturing", "Technology transfer"]
    },
    {
      icon: CheckCircle2,
      title: "Validation Services",
      subtitle: "Process, cleaning, and analytical method validation",
      list: ["Process validation", "Cleaning validation", "Analytical method validation"]
    },
    {
      icon: FlaskConical,
      title: "Formulation Development",
      subtitle: "Expert formulation development services",
      list: ["Custom formulations", "Product optimization", "Stability enhancement"]
    },
    {
      icon: Zap,
      title: "Process Development",
      subtitle: "Process development optimization",
      list: ["Manufacturing optimization", "Cost-effective processes", "Quality improvement"]
    },
    {
      icon: Search,
      title: "Complete Testing",
      subtitle: "Complete testing of raw material to finished products",
      list: ["Raw material testing", "In-process testing", "Finished product analysis"]
    }
  ];

  const facilities = [
    {
      icon: Cpu,
      title: "Automatic Manufacturing Facility",
      desc: "Advanced automated manufacturing systems ensuring consistent quality and efficiency"
    },
    {
      icon: Package,
      title: "Automatic Packing Facility",
      desc: "Modern packaging solutions with automated systems for various product formats"
    },
    {
      icon: Activity,
      title: "Stability Studies",
      desc: "Comprehensive stability studies as per ICH guidelines for product validation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#F9FAFB]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0B3D2E_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none mb-8 uppercase">
              Professional <br />
              <span className="text-accent italic font-light lowercase">Manufacturing</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-2xl leading-relaxed">
              Samriddhi Herbaceuticals Pvt. Ltd. provides the services in contract manufacturing space by manufacturing consistently quality products for both domestic and global buyers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6">
              Business <span className="text-accent italic font-light lowercase">Models</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white rounded-[3rem] border border-primary/5 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 flex flex-col items-start"
              >
                <div className={`w-16 h-16 rounded-2xl ${model.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <model.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-primary tracking-tight mb-4 uppercase">{model.title}</h3>
                <p className="text-primary/60 font-medium mb-8 leading-relaxed">
                  {model.desc}
                </p>
                <button className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services Section */}
      <section className="py-32 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
              Technical <span className="text-accent italic font-light lowercase">Excellence</span>
            </h2>
            <p className="text-white/60 font-medium text-lg">
              Specialized support services for research, development, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {technicalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-8">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2 uppercase">{service.title}</h3>
                <p className="text-white/40 text-sm font-medium mb-8 leading-snug">{service.subtitle}</p>
                
                <ul className="space-y-4">
                  {service.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6 leading-none">
              State-of-the-Art <br />
              <span className="text-accent italic font-light lowercase">Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative p-12 bg-[#F9FAFB] rounded-[3.5rem] border border-primary/5 flex flex-col items-center text-center group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-primary/5 flex items-center justify-center text-accent mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <facility.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-black text-primary tracking-tight mb-4 uppercase relative z-10">{facility.title}</h3>
                <p className="text-primary/60 font-medium leading-relaxed relative z-10">
                  {facility.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
              Ready to <span className="text-accent italic font-light lowercase">Partner</span> with Us?
            </h2>
            <p className="text-xl text-white/60 font-medium mb-12">
              Get in touch to discuss your manufacturing requirements and explore our comprehensive services.
            </p>
            
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-accent hover:bg-accent/90 text-primary px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default ServicesPage;
