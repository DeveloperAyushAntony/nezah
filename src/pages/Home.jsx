import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Collections from '../components/Collections';

const Home = ({ isDark }) => {
    return (
        <>
            <Hero isDark={isDark} />
            <div className="py-20">
                <div className="max-w-[1440px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tighter">
                        Crafting <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Excellence</span>
                    </h2>
                    <AboutSection isDark={isDark} />
                </div>
            </div>
            <Collections isDark={isDark} />
        </>
    );
};

export default Home;
