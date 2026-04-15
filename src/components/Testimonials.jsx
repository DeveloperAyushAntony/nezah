import React from 'react';
import { motion } from 'framer-motion';
import quote1 from '../assets/images/testimonial-1.jpg';
import quote2 from '../assets/images/testimonial-2.jpg';
import quote3 from '../assets/images/testimonial-3.jpg';

const testimonials = [
    {
        id: 1,
        name: 'Anjali K .',
        text: '"The wedding gown Nezah designed for me was beyond a dream. The fit was absolute perfection and the hand-stitched details were exquisite."',
        image: quote1
    },
    {
        id: 2,
        name: 'Ayush Antony',
        text: '"I\'ve never worn a suit that felt so uniquely mine. The attention to detail and choice of fabric truly sets Nezah apart from any other boutique."',
        image: quote2
    },
    {
        id: 3,
        name: 'jomol james.',
        text: '"The silk saree I ordered for my mother was a masterpiece. She felt so elegant and comfortable. Truly a heritage piece for our family."',
        image: quote3
    }
];

const Testimonials = ({ isDark }) => {
    return (
        <section id="testimonials" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-background-dark' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto px-6 mb-16 text-center">
                <h4 className={`font-bold mb-4 uppercase tracking-[0.4em] text-xs ${isDark ? 'text-accent' : 'text-primary'}`}>Client Voices</h4>
                <h2 className={`text-5xl md:text-6xl font-bold uppercase tracking-tighter ${isDark ? 'text-white' : 'text-primary'}`}>
                    The <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Legacy</span>
                </h2>
            </div>

            <div className="flex overflow-x-auto gap-8 px-6 lg:px-[calc((100vw-1440px)/2+1.5rem)] pb-12 hide-scrollbar snap-x">
                {testimonials.map((t) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`min-w-[300px] md:min-w-[450px] p-10 rounded-2xl shadow-xl border snap-center transition-all duration-500 ${isDark ? 'bg-background-dark border-white/10' : 'bg-white-soft border-primary/10'}`}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src={t.image} alt={t.name} className={`size-16 rounded-full object-cover border-2 ${isDark ? 'border-accent/20' : 'border-primary/20'}`} />
                            <div>
                                <div className={`flex gap-1 mb-1 ${isDark ? 'text-accent' : 'text-primary'}`}>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                                    ))}
                                </div>
                                <p className={`font-bold text-sm uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-primary/50'}`}>{t.name}</p>
                            </div>
                        </div>
                        <p className={`italic text-xl leading-relaxed font-serif ${isDark ? 'text-white/80' : 'text-primary/80'}`}>
                            {t.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
