import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDark, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['Home', 'About', 'Collections', 'Gallery', 'Contact'];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${isDark ? 'bg-background-dark/80 border-accent/10' : 'bg-white/80 border-primary/10'}`}>
            <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={isDark ? 'text-accent' : 'text-primary'}>
                        <span className="material-symbols-outlined text-3xl">flare</span>
                    </div>
                    <h2 className={`text-xl md:text-2xl font-serif font-bold tracking-tight ${isDark ? 'text-accent' : 'text-primary'}`}>Nezah Designs</h2>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                            className={`text-xs uppercase tracking-widest font-bold transition-colors ${isDark ? 'text-white/70 hover:text-accent' : 'text-primary/70 hover:text-primary'}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3 sm:gap-6">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all ${isDark ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
                    >
                        <span className="material-symbols-outlined text-xl sm:text-2xl">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    
                    <button className="hidden sm:block btn-primary py-2 px-6">
                        Consult Now
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-accent' : 'text-primary'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`lg:hidden overflow-hidden border-t ${isDark ? 'bg-background-dark border-accent/10' : 'bg-white border-primary/10'}`}
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-sm uppercase tracking-[0.2em] font-bold ${isDark ? 'text-white/70 shadow-accent' : 'text-primary/70'}`}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="btn-primary w-full py-4 mt-2">
                                Consult Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
