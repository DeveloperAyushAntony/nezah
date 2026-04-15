import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bridal1 from '../assets/images/bridal-couture-1.jpg';
import bridal2 from '../assets/images/bridal-couture-2.jpg';
import mens1 from '../assets/images/mens-wear-1.jpg';

const categories = [
    { id: 'bridal', name: 'Bridal Couture' },
    { id: 'mens', name: 'Mens Wear' },
    { id: 'kids', name: 'Kids Couture' },
    { id: 'ladies', name: 'Ladies Wear' },
    { id: 'elders', name: 'Elders Wear' },
    { id: 'custom', name: 'Custom Designs' },
];

const products = {
    bridal: [
        {
            id: 1,
            title: 'Royal Lace Gown',
            description: 'Intricately handcrafted with Italian silk and vintage lace.',
            image: bridal1,
            price: '$4,200+'
        },
        {
            id: 2,
            title: 'Heritage Silk Saree',
            description: 'The finest Banarasi silk with gold zari work.',
            image: bridal2,
            price: '$3,500+'
        }
    ],
    mens: [
        {
            id: 3,
            title: 'Executive Navy Suit',
            description: 'Bespoke precision tailoring for the modern gentleman.',
            image: mens1,
            price: '$1,200+'
        }
    ],
};

const Collections = ({ isDark }) => {
    const [activeTab, setActiveTab] = useState('bridal');

    return (
        <section id="collections" className={`py-24 px-6 transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white-soft'}`}>
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tighter ${isDark ? 'text-white' : 'text-primary'}`}>
                        The <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Universe</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-white/50' : 'text-primary/60'}`}>
                        Explore our curated selection of bespoke couture where heritage meets modernity.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16 hide-scrollbar overflow-x-auto">
                    <div className={`inline-flex border-b transition-colors duration-500 px-4 ${isDark ? 'border-white/10' : 'border-primary/10'}`}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all whitespace-nowrap relative ${activeTab === cat.id
                                    ? (isDark ? 'text-accent' : 'text-primary')
                                    : (isDark ? 'text-white/30 hover:text-white' : 'text-primary/30 hover:text-primary')
                                    }`}
                            >
                                {cat.name}
                                {activeTab === cat.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute bottom-0 left-0 w-full h-0.5 ${isDark ? 'bg-accent' : 'bg-primary'}`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {(products[activeTab] || []).map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={`group flex flex-col rounded-xl overflow-hidden border transition-all shadow-xl ${isDark ? 'bg-background-dark/50 border-white/10 hover:border-accent/30' : 'bg-white border-primary/10 hover:border-primary/30'}`}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest ${isDark ? 'bg-accent text-primary' : 'bg-primary text-white'}`}>
                                        Rare Bespoke
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`text-xl font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>{product.title}</h3>
                                        <span className={`font-bold ${isDark ? 'text-accent' : 'text-primary'}`}>{product.price}</span>
                                    </div>
                                    <p className={`text-xs mb-8 flex-1 leading-relaxed ${isDark ? 'text-white/40' : 'text-primary/50'}`}>{product.description}</p>
                                    <button className={`w-full py-4 text-[10px] uppercase tracking-widest font-bold transition-all rounded-lg border ${isDark ? 'border-accent/20 text-accent hover:bg-accent hover:text-primary' : 'border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
                                        Inquire Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More */}
                <div className="mt-16 text-center">
                    <button className="btn-outline">
                        View Full Archive
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Collections;
