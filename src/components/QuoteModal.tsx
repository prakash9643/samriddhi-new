import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, bookUser  } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      // In a real app, you'd send this to your backend/Firebase here
      console.log('Form submitted:', formData);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 text-primary/50 hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Company Info */}
            <div className="md:w-2/5 bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <img 
                  src="/images/Samriddhi-logo.png" 
                  alt="Samriddhi Logo" 
                  className="h-16 w-auto object-contain brightness-0 invert mb-8"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-3xl font-display font-black tracking-tighter mb-4 uppercase">
                  SAMRIDDHI <br /> HERBACEUTICALS
                </h2>
                <div className="w-12 h-1 bg-accent mb-8" />
                <p className="text-white/60 font-medium leading-relaxed mb-12">
                  Partner with us for premium herbaceutical manufacturing. Quality, purity, and precision in every batch.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                    <bookUser className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Address</p>
                    <p className="text-sm font-bold">SAMRIDDHI HERBACUTICALS PVT. LTD. IK-6A, Solitare Industrial Park Phase-1 Bagru Jaipur 07 ,(303007)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Email ID</p>
                    <p className="text-sm font-bold">officesamriddhig@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Phone Number</p>
                    <p className="text-sm font-bold">+91 9636061622</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-3/5 p-12 bg-white relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-primary tracking-tight mb-8">Request a Custom Quote</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name" 
                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-none focus:ring-2 focus:ring-accent transition-all font-bold text-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com" 
                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-none focus:ring-2 focus:ring-accent transition-all font-bold text-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">City</label>
                          <input 
                            required
                            type="text" 
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Your City" 
                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-none focus:ring-2 focus:ring-accent transition-all font-bold text-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Phone</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 00000 00000" 
                            className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-none focus:ring-2 focus:ring-accent transition-all font-bold text-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Requirements</label>
                        <textarea 
                          required
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          rows={4} 
                          placeholder="Tell us about the products you need..." 
                          className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-none focus:ring-2 focus:ring-accent transition-all font-bold text-primary"
                        ></textarea>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-accent text-primary py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
                      >
                        Submit Now <Send className="w-4 h-4" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 text-primary">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-black text-primary tracking-tighter uppercase">Thank You!</h3>
                    <p className="text-primary/60 font-medium max-w-sm">
                      Your requirements have been received. Our team will get back to you within 24 hours with a custom quote.
                    </p>
                    <button 
                      onClick={onClose}
                      className="text-accent font-black uppercase tracking-[0.2em] text-xs underline underline-offset-8 mt-8"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
