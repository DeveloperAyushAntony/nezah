import React from 'react';

const Footer = ({ isDark }) => {
    return (
        <footer className={`py-24 px-6 border-t transition-colors duration-500 ${isDark ? 'bg-background-dark text-white border-accent/10' : 'bg-white text-primary border-primary/10'}`}>
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <span className={`material-symbols-outlined text-4xl ${isDark ? 'text-accent' : 'text-primary'}`}>flare</span>
                            <h2 className={`font-bold tracking-tighter text-3xl font-serif ${isDark ? 'text-white' : 'text-primary'}`}>Nezah <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic`}>Designs</span></h2>
                        </div>
                        <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-white/40' : 'text-primary/60'}`}>
                            Crafting bespoke garments that transcend trends. We are the architects of your timeless wardrobe.
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-accent/20 text-accent hover:bg-accent hover:text-primary' : 'border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a href="#" className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-accent/20 text-accent hover:bg-accent hover:text-primary' : 'border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
                                <span className="material-symbols-outlined text-xl">camera_alt</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className={`font-bold mb-8 uppercase tracking-widest text-xs ${isDark ? 'text-white' : 'text-primary'}`}>Navigation</h4>
                        <ul className={`flex flex-col gap-4 text-xs ${isDark ? 'text-white/40' : 'text-primary/50'}`}>
                            <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Home</a></li>
                            <li><a href="#about" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>About Us</a></li>
                            <li><a href="#collections" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Collections</a></li>
                            <li><a href="#gallery" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`font-bold mb-8 uppercase tracking-widest text-xs ${isDark ? 'text-white' : 'text-primary'}`}>Service</h4>
                        <ul className={`flex flex-col gap-4 text-xs ${isDark ? 'text-white/40' : 'text-primary/50'}`}>
                            <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Consultation</a></li>
                            <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Measurement</a></li>
                            <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Shipping</a></li>
                            <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-primary'}`}>Terms</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className={`font-bold mb-8 uppercase tracking-widest text-xs ${isDark ? 'text-white' : 'text-primary'}`}>Transmissions</h4>
                        <p className={`text-xs mb-6 font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-primary/60'}`}>Join our exclusive circle for seasonal collection revealings.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={`flex-1 text-xs focus:ring-accent focus:border-accent p-4 border transition-all rounded-l-lg ${isDark ? 'bg-background-dark border-accent/10 text-white' : 'bg-primary/5 border-primary/10 text-primary'}`}
                            />
                            <button className={`px-6 rounded-r-lg hover:bg-secondary transition-all font-bold ${isDark ? 'bg-accent text-primary' : 'bg-primary text-white'}`}>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`pt-12 border-t text-center text-[10px] uppercase tracking-[0.5em] ${isDark ? 'border-accent/10 text-white/20' : 'border-primary/5 text-primary/30'}`}>
                    © 2024 Nezah Designs • Bespoke Excellence • Powered by <span className={isDark ? 'text-accent/40' : 'text-primary/40'}>CoastCode</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
