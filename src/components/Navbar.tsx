import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, ChevronDown } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { Link, useLocation } from 'react-router-dom';
import { QuoteModal } from './QuoteModal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    'Juice/Ras',
    'Powder/Churan',
    'Enzymes/Drops',
    'Capsule',
    'Oral Care',
    'Tablet/Vati/Softgel',
    'Cosmetic/Skin Care',
    'Shilajit Resin/ Chyawanprash/Avieh',
    'Syrup',
  ];

  const categoryRoutes: Record<string, string> = {
    'Juice/Ras': '/products/juice-ras',
    'Powder/Churan': '/products/powder-churan',
    'Enzymes/Drops': '/products/enzymes-drops',
    'Capsule': '/products/capsule',
    'Oral Care': '/products/oral-care',
    'Tablet/Vati/Softgel': '/products/tablet-vati',
    'Cosmetic/Skin Care': '/products/cosmetic-skin',
    'Shilajit Resin/ Chyawanprash/Avieh': '/products/premium-wellness',
    'Syrup': '/products/syrup',
  };

  const navLinks = [

    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', dropdown: true },
    { name: 'Company', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Process', href: '/process' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`bg-white rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 border border-primary/5 ${isScrolled ? 'shadow-premium' : ''}`}>
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Samriddhi-logo.png" 
              alt="Samriddhi Herbaceuticals" 
              className="w-[150px] h-auto"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setIsProductsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setIsProductsDropdownOpen(false)}
              >
                <Magnetic>
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      className="text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors relative group py-4 h-full flex items-center gap-1"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`text-xs font-bold uppercase tracking-widest transition-colors relative group py-4 h-full flex items-center gap-1 ${location.pathname === link.href ? 'text-primary' : 'text-primary/70 hover:text-primary'}`}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all group-hover:w-full ${location.pathname === link.href ? 'w-full' : 'w-0'}`} />
                    </Link>
                  )}
                </Magnetic>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-3xl p-4 shadow-2xl border border-primary/5"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {productCategories.map((category) => (
                            <Link
                              key={category}
                              to={categoryRoutes[category] || `/products?category=${encodeURIComponent(category)}`}
                              className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-primary/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                              onClick={() => setIsProductsDropdownOpen(false)}
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Magnetic>
              <motion.button 
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-accent px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:shadow-primary/20 transition-all"
              >
                Get Quote
              </motion.button>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-primary p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white rounded-3xl p-8 md:hidden shadow-2xl overflow-y-auto max-h-[80vh] border border-primary/5"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className="text-lg font-bold text-primary flex items-center justify-between w-full"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-3 pl-4 pt-4 overflow-hidden"
                          >
                            {productCategories.map((category) => (
                              <Link
                                key={category}
                                to={categoryRoutes[category] || `/products?category=${encodeURIComponent(category)}`}
                                className="text-sm font-medium text-primary/60"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileProductsOpen(false);
                                }}
                              >
                                {category}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      className="text-lg font-bold text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-lg font-bold text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="bg-primary text-accent py-4 rounded-2xl font-black uppercase tracking-widest mt-4"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </nav>
  );
};

