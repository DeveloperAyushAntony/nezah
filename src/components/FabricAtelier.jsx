import React from 'react';
import { motion } from 'framer-motion';
import fabricAtelier from '../assets/images/fabric-atelier.jpg';

const FabricAtelier = ({ isDark }) => {
    return (
        <section id="atelier" className={`py-16 md:py-24 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-background-dark text-white' : 'bg-white-soft text-primary'}`}>
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
                {/* Left: Content */}
                <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-24 space-y-8 md:space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight uppercase ${isDark ? 'text-white' : 'text-primary'}`}>
                            The Soul of the <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif lowercase`}>stitch.</span>
                        </h2>
                        <p className={`text-base md:text-xl leading-relaxed mb-6 font-light max-w-xl ${isDark ? 'text-white/50' : 'text-primary/60'}`}>
                            Every Nezah piece begins with a dialogue between thread and weaver. We source heritage silks and laces from preserved regions across the globe.
                        </p>
                        <p className={`text-sm md:text-base italic font-serif mb-8 md:mb-12 ${isDark ? 'text-accent/60' : 'text-primary/60'}`}>
                            "We don't just make clothes; we preserve the secrets whispered from generation to generation."
                        </p>

                        <div className="space-y-8 md:space-y-10">
                            {[
                                { icon: 'flare', title: 'Authentic Sourcing', desc: 'Direct partnerships with master artisans in Kochi and Alappuzha.' },
                                { icon: 'high_quality', title: 'Haute-Grade Silk', desc: 'Double-ply integrity for heavy architectural beadwork.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 md:gap-8">
                                    <div className={`size-12 md:size-16 rounded-full border flex items-center justify-center transition-colors duration-500 ${isDark ? 'border-accent/20 text-accent bg-accent/5' : 'border-primary/20 text-primary bg-primary/5'} shrink-0`}>
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className={`uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-primary'}`}>{item.title}</h4>
                                        <p className={`text-xs md:text-sm italic ${isDark ? 'text-white/30' : 'text-primary/40'}`}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 md:mt-16">
                            <button className="btn-primary w-full sm:w-auto">
                                Material Guide Request
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Macro Image Gallery */}
                <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[600px] lg:h-[800px] overflow-hidden group">
                    <img
                        src={fabricAtelier}
                        alt="Intricate Embroidery Detail"
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${isDark ? 'opacity-60' : 'opacity-80'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r lg:block hidden ${isDark ? 'from-background-dark via-transparent' : 'from-white-soft via-transparent'}`} />

                    <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
                        <span className={`text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold ${isDark ? 'text-accent' : 'text-primary'}`}>Material Focus 01</span>
                        <p className={`text-xl md:text-2xl italic font-serif ${isDark ? 'text-white' : 'text-primary'}`}>Embroidery Marriage Saree</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FabricAtelier;
