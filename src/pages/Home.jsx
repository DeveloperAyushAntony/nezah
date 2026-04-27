import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Collections from '../components/Collections';
import FabricAtelier from '../components/FabricAtelier';
import TransformationGallery from '../components/TransformationGallery';
import Testimonials from '../components/Testimonials';

const Home = ({ isDark }) => {
    return (
        <>
            <Hero isDark={isDark} />
            <div className="py-20">
                <AboutSection isDark={isDark} />
            </div>
            <Collections isDark={isDark} />
            <FabricAtelier isDark={isDark} />
            <TransformationGallery isDark={isDark} />
            <Testimonials isDark={isDark} />
        </>
    );
};

export default Home;
