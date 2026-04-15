import React from 'react';
import { motion } from 'framer-motion';
import ownerImg from '../assets/images/hero-bg.jpg';

const OwnerSection = ({ isDark }) => {
    return (
        <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div className={`rounded-3xl p-8 md:p-16 lg:p-24 relative overflow-hidden group border transition-all duration-500 ${isDark ? 'bg-background-dark/50 border-accent/10' : 'bg-primary/5 border-primary/5'}`}>
                    <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                        <span className={`material-symbols-outlined text-[400px] rotate-[-15deg] ${isDark ? 'text-accent' : 'text-primary'}`}>signature</span>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <img
                                src={ownerImg}
                                alt="Founder Ancy James"
                                className="w-full h-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className={`absolute -bottom-6 -right-6 w-48 h-48 blur-[60px] rounded-full -z-10 transition-colors duration-500 ${isDark ? 'bg-accent/10' : 'bg-primary/10'}`} />
                        </motion.div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-[2px] ${isDark ? 'bg-accent' : 'bg-primary'}`} />
                                <span className={`uppercase tracking-[0.3em] text-xs font-bold ${isDark ? 'text-accent' : 'text-primary'}`}>The Creative Pulse</span>
                            </div>

                            <h2 className={`text-5xl md:text-7xl font-bold mb-8 ${isDark ? 'text-white' : 'text-primary'}`}>
                                Ancy <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>James</span>
                            </h2>

                            <p className={`text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 ${isDark ? 'text-white/70' : 'text-primary/70'}`}>
                                "Every stitch is a silent promise of excellence, and every fabric a canvas for your legacy."
                            </p>

                            <p className={`text-lg font-light leading-relaxed mb-10 ${isDark ? 'text-white/40' : 'text-primary/50'}`}>
                                Over 8 years of relentless pursuit in custom tailoring, preserving the sacred art of hand-stitching while pioneering modern silhouettes. My mission is to craft garments that tell your unique story.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div>
                                    <div className={`flex justify-between text-xs uppercase tracking-widest font-bold mb-3 ${isDark ? 'text-white/50' : 'text-primary/50'}`}>
                                        <span>Hand-Stitching Mastery</span>
                                        <span>100%</span>
                                    </div>
                                    <div className={`w-full h-1 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-white/5' : 'bg-primary/5'}`}>
                                        <motion.div
                                            initial={{ x: '-100%' }}
                                            whileInView={{ x: 0 }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className={`w-full h-full ${isDark ? 'bg-accent' : 'bg-primary'}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col gap-2">
                                <p className={`font-bold text-lg ${isDark ? 'text-accent' : 'text-primary'}`}>Nezah Designs</p>
                                <p className={`text-xs uppercase tracking-widest opacity-40 font-bold ${isDark ? 'text-white' : 'text-primary'}`}>Owner & Senior Artisan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnerSection;
