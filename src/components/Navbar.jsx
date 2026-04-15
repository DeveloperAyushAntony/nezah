import React from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
    return (
        <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${isDark ? 'bg-background-dark/80 border-accent/10' : 'bg-white/80 border-primary/10'}`}>
            <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={isDark ? 'text-accent' : 'text-primary'}>
                        <span className="material-symbols-outlined text-3xl">flare</span>
                    </div>
                    <h2 className={`text-2xl font-serif font-bold tracking-tight ${isDark ? 'text-accent' : 'text-primary'}`}>Nezah Designs</h2>
                </div>

                <nav className="hidden lg:flex items-center gap-10">
                    {['Home', 'About', 'Collections', 'Gallery', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                            className={`text-xs uppercase tracking-widest font-bold transition-colors ${isDark ? 'text-white/70 hover:text-accent' : 'text-primary/70 hover:text-primary'}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all ${isDark ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
                    >
                        <span className="material-symbols-outlined">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button className="btn-primary">
                        Consult Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
