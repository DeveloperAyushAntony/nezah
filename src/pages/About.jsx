import React from 'react';
import AboutSection from '../components/AboutSection';
import OwnerSection from '../components/OwnerSection';
import Testimonials from '../components/Testimonials';

const About = ({ isDark }) => {
    return (
        <div className="pt-20">
            <AboutSection isDark={isDark} />
            <OwnerSection isDark={isDark} />
            <Testimonials isDark={isDark} />
        </div>
    );
};

export default About;
