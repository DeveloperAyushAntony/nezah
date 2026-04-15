import React from 'react';
import { motion } from 'framer-motion';
import aboutMain from '../assets/images/about-main.jpg';

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className={`py-24 px-6 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className={`relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl border ${isDark ? 'border-accent/10' : 'border-primary/10'}`}>
                        <img
                            src={aboutMain}
                            alt="Artisan Craftsmanship"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                    {/* Experience Badge */}
                    <div className={`absolute -bottom-10 -right-10 p-10 rounded-xl shadow-2xl transition-colors duration-500 ${isDark ? 'bg-accent' : 'bg-primary'}`}>
                        <p className={`text-5xl font-black mb-2 ${isDark ? 'text-primary' : 'text-white'}`}>8+</p>
                        <p className={`text-[10px] uppercase tracking-widest font-bold opacity-60 font-display ${isDark ? 'text-primary' : 'text-white'}`}>Years of Luxury<br />Haute Couture</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h4 className={`font-bold mb-4 uppercase tracking-[0.4em] text-xs ${isDark ? 'text-accent' : 'text-primary'}`}>Our Heritage</h4>
                    <h2 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-primary'}`}>
                        Crafting Elegance <br /> <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>since 2019</span>
                    </h2>
                    <p className={`text-lg mb-12 leading-relaxed ${isDark ? 'text-white/60' : 'text-primary/60'}`}>
                        Founded on the pillars of precision and passion, Nezah Designs has spent years redefining bespoke fashion. Our atelier is where traditional hand-stitching meets modern silhouettes, creating timeless pieces for every generation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                        {[
                            { icon: 'straighten', label: 'Bespoke Fitting' },
                            { icon: 'diamond', label: 'Premium Fabrics' },
                            { icon: 'auto_awesome', label: 'Timeless Styles' },
                            { icon: 'workspace_premium', label: 'Expert Artisans' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <div className={`size-14 rounded-lg flex items-center justify-center border transition-colors duration-500 ${isDark ? 'bg-accent/10 text-accent border-accent/20' : 'bg-primary/5 text-primary border-primary/10'}`}>
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <span className={`font-bold tracking-widest text-xs uppercase ${isDark ? 'text-white/50' : 'text-primary/50'}`}>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <button className="btn-primary">
                            Discover the Studio
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
