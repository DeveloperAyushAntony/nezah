import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ isDark }) => {
    return (
        <section className={`relative min-h-[85vh] flex items-center justify-center pt-20 transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white-soft'}`}>
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 p-20">
                    <span className={`material-symbols-outlined text-[400px] rotate-12 ${isDark ? 'text-accent/5' : 'text-primary/5'}`}>flare</span>
                </div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 flex justify-center">
                        <div className={`w-px h-12 md:h-16 ${isDark ? 'bg-accent/40' : 'bg-primary/40'}`} />
                    </div>

                    <h1 className={`font-serif text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>
                        Nezah <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic`}>Designs</span>
                    </h1>

                    <p className={`text-base sm:text-xl md:text-2xl mb-12 tracking-[0.2em] uppercase font-light ${isDark ? 'text-white/70' : 'text-primary/70'}`}>
                        Bespoke Haute Couture • Quality Craftsmanship
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <button className="btn-primary w-full sm:min-w-[240px]">
                            Explore Collections
                        </button>
                        <button className={`btn-outline w-full sm:min-w-[240px] ${!isDark ? 'border-primary/20 text-primary hover:bg-primary hover:text-white' : ''}`}>
                            Book Consultation
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Stitching Border Bottom */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="stitching-divider" />
                <div className="flex justify-center -mb-8">
                    <div className={`border px-8 py-4 rounded-full shadow-2xl transition-colors duration-500 ${isDark ? 'bg-background-dark border-accent/20' : 'bg-white border-primary/20'}`}>
                        <p className={`text-[10px] uppercase tracking-[0.4em] font-bold ${isDark ? 'text-accent' : 'text-primary'}`}>Est. 2019 • Bespoke Luxury</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
