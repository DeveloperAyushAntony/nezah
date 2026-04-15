import React from 'react';

const ContactPage = ({ isDark }) => {
    return (
        <div className="pt-32">
            <section id="contact" className={`py-24 px-6 max-w-[1440px] mx-auto text-center transition-colors duration-500`}>
                <div className="mb-12 flex justify-center">
                    <div className={`w-px h-16 ${isDark ? 'bg-accent/40' : 'bg-primary/40'}`} />
                </div>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
                    Begin Your <span className={`${isDark ? 'text-accent' : 'purple-text-gradient'} italic font-serif`}>Journey</span>
                </h2>

                <p className={`text-xl max-w-2xl mx-auto mb-16 leading-relaxed ${isDark ? 'text-white/50' : 'text-primary/60'}`}>
                    Experience the pinnacle of bespoke tailoring. Schedule your private consultation at our atelier.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="btn-primary min-w-[280px]">
                        Secure Appointment
                    </button>
                    <button className={`btn-outline min-w-[280px] ${!isDark ? 'border-primary/20 text-primary hover:bg-primary hover:text-white' : ''}`}>
                        Contact Atelier
                    </button>
                </div>

                <div className={`flex flex-col md:flex-row items-center gap-12 mt-20 pt-12 border-t w-full justify-center ${isDark ? 'border-accent/10' : 'border-primary/10'}`}>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">location_on</span>
                        <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-white/30' : 'text-primary/40'}`}>Our Atelier</p>
                        <p className="text-sm">Kochi, Kerala, India</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">mail</span>
                        <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-white/30' : 'text-primary/40'}`}>Email Us</p>
                        <p className="text-sm">hello@nezahdesigns.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">call</span>
                        <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-white/30' : 'text-primary/40'}`}>Call Us</p>
                        <p className="text-sm">+91 98765 43210</p>
                    </div>
                </div>

                <div className={`flex items-center gap-12 mt-12 w-full justify-center`}>
                    <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>Instagram</a>
                    <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>WhatsApp</a>
                    <a href="#" className={`text-xs uppercase tracking-widest font-bold transition-all ${isDark ? 'text-white/30 hover:text-accent' : 'text-primary/40 hover:text-primary'}`}>Facebook</a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
