import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Certifications } from './components/Certifications';
// import { ClientLogos } from './components/ClientLogos';
import { Categories } from './components/Categories';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Facility } from './components/Facility';
import { Testimonials } from './components/Testimonials';
import { Industries } from './components/Industries';
import { FAQ } from './components/FAQ';
import { LeadForm } from './components/LeadForm';
// import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Reveal } from './components/Reveal';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import ProductsPage from './pages/Products';
import JuiceRasPage from './pages/JuiceRas';
import PowderChuranPage from './pages/PowderChuran';
import EnzymesDropsPage from './pages/EnzymesDrops';
import CapsulePage from './pages/Capsule';
import OralCarePage from './pages/OralCare';
import TabletVatiPage from './pages/TabletVati';
import CosmeticSkinPage from './pages/CosmeticSkin';
import PremiumWellnessPage from './pages/PremiumWellness';
import SyrupPage from './pages/Syrup';
import ServicesPage from './pages/Services';
import ProcessPage from './pages/OurProcess';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-bg selection:bg-accent selection:text-primary relative">
        <div className="noise-overlay" />
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Certifications />
                {/* <ClientLogos /> */}
                <Reveal width="100%"><Categories /></Reveal>
                <Reveal width="100%"><Services /></Reveal>
                <Reveal width="100%"><Process /></Reveal>
                <Reveal width="100%"><WhyChooseUs /></Reveal>
                <Reveal width="100%"><FeaturedProducts /></Reveal>
                <Reveal width="100%"><Facility /></Reveal>
                <Reveal width="100%"><Testimonials /></Reveal>
                <Reveal width="100%"><Industries /></Reveal>
                <Reveal width="100%"><FAQ /></Reveal>
                <Reveal width="100%"><LeadForm /></Reveal>
                {/* <Reveal width="100%"><Blog /></Reveal> */}
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/juice-ras" element={<JuiceRasPage />} />
            <Route path="/products/powder-churan" element={<PowderChuranPage />} />
            <Route path="/products/enzymes-drops" element={<EnzymesDropsPage />} />
            <Route path="/products/capsule" element={<CapsulePage />} />
            <Route path="/products/oral-care" element={<OralCarePage />} />
            <Route path="/products/tablet-vati" element={<TabletVatiPage />} />
            <Route path="/products/cosmetic-skin" element={<CosmeticSkinPage />} />
            <Route path="/products/premium-wellness" element={<PremiumWellnessPage />} />
            <Route path="/products/syrup" element={<SyrupPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
