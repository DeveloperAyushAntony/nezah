import React from 'react';
import { motion } from 'framer-motion';

import before1 from '../assets/images/transformation-before-1.jpg';
import after1 from '../assets/images/transformation-after-1.jpg';
import before2 from '../assets/images/transformation-before-2.jpg';
import after2 from '../assets/images/transformation-after-2.jpg';

const transformations = [
    {
        id: 1,
        title: 'Bridal Silk Transformation',
        quote: '"Raw Banarasi silk reimagined into a 16-kali handcrafted lehenga."',
        beforeImg: before1,
        afterImg: after1,
        label: 'Masterpiece'
    },
    {
        id: 2,
        title: 'Modern Chic Couture',
        quote: '"From a minimalist pencil sketch to a velvet emerald gown."',
        beforeImg: before2,
        afterImg: after2,
        label: 'Reality'
    }
];

const TransformationGallery = ({ isDark }) => {
    return (
        <section id="gallery" className={`py-24 px-6 max-w-[1440px] mx-auto overflow-hidden transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white'}`}>
            <div className="text-center mb-16">
                <h4 className={`font-bold mb-4 uppercase tracking-[0.4em] text-xs ${isDark ? 'text-accent' : 'text-primary'}`}>Atelier Journey</h4>
                <h2 className={`text-5xl md:text-6xl font-bold uppercase tracking-tighter ${isDark ? 'text-white' : 'text-primary'}`}>
                    Legacy <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Transformations</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {transformations.map((item) => (
                    <div key={item.id} className="flex flex-col gap-8 group">
                        <div className={`relative overflow-hidden rounded-2xl border transition-all shadow-xl ${isDark ? 'bg-background-dark/50 border-white/10 group-hover:border-accent/30' : 'bg-white border-primary/10 group-hover:border-primary/30'}`}>
                            <div className="flex flex-col sm:flex-row h-auto sm:h-[450px]">
                                {/* Before */}
                                <div className="relative flex-1 group overflow-hidden">
                                    <img src={item.beforeImg} alt="Before" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-700" />
                                    <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest ${isDark ? 'bg-primary text-accent' : 'bg-primary text-white'}`}>
                                        Genesis
                                    </div>
                                </div>

                                {/* Stitching Divider */}
                                <div className={`hidden sm:block w-[1px] h-full transition-opacity duration-500 ${isDark ? 'bg-accent/20' : 'bg-primary/20'}`} />

                                {/* After */}
                                <div className="relative flex-1 group overflow-hidden">
                                    <img src={item.afterImg} alt="After" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest shadow-lg ${isDark ? 'bg-accent text-primary' : 'bg-primary text-white'}`}>
                                        {item.label}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
                            <div>
                                <h3 className={`text-3xl font-bold uppercase tracking-tight mb-2 ${isDark ? 'text-white' : 'text-primary'}`}>{item.title}</h3>
                                <p className={`text-sm italic font-serif leading-relaxed max-w-sm ${isDark ? 'text-white/40' : 'text-primary/50'}`}>{item.quote}</p>
                            </div>
                            <button className="btn-primary min-w-[200px]">
                                Inquire Couture
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TransformationGallery;
