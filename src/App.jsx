import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import OwnerSection from './components/OwnerSection';
import Collections from './components/Collections';
import TransformationGallery from './components/TransformationGallery';
import FabricAtelier from './components/FabricAtelier';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-background-dark text-white' : 'bg-background-light text-primary'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero isDark={isDark} />
        <AboutSection isDark={isDark} />
        <OwnerSection isDark={isDark} />
        <Collections isDark={isDark} />
        <TransformationGallery isDark={isDark} />
        <FabricAtelier isDark={isDark} />
        <Testimonials isDark={isDark} />

        {/* Final Contact Section */}
        <section id="contact" className={`py-24 px-6 max-w-[1440px] mx-auto text-center border-t mt-20 transition-colors duration-500 ${isDark ? 'border-accent/10' : 'border-primary/10'}`}>
          <div className="mb-12 flex justify-center">
            <div className={`w-px h-16 ${isDark ? 'bg-accent/40' : 'bg-primary/40'}`} />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
            Begin Your <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Journey</span>
          </h2>

          <p className={`text-xl max-w-2xl mx-auto mb-16 leading-relaxed ${isDark ? 'text-white/50' : 'text-primary/60'}`}>
            Experience the pinnacle of bespoke tailoring. Schedule your private consultation at our atelier.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary min-w-[280px]">
              Secure Appointment
            </button>
            <button className={`btn-outline min-w-[280px] ${!isDark ? 'border-primary/20 text-primary hover:bg-primary hover:text-white' : ''}`}>
              Contact Atelier
            </button>
          </div>

          <div className={`flex items-center gap-12 mt-20 pt-12 border-t w-full justify-center ${isDark ? 'border-accent/5' : 'border-primary/5'}`}>
            <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>Instagram</a>
            <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>WhatsApp</a>
            <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>Location</a>
          </div>
        </section>
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
