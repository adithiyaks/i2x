import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MapPin, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-platinum group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-180' : 'border-white/20 text-white/50 group-hover:border-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-platinum/60 leading-relaxed font-light">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const faqs = [
        { q: "Who can participate?", a: "I²X is open to all college students, innovators, and startup enthusiasts looking to scale their ideas." },
        { q: "What is the registration fee?", a: "The registration fee is ₹300 per participant for the offline main event. The online screening session is FREE." },
        { q: "Is the screening session free?", a: "Yes, Session 1 (Online Screening) is completely free of charge." },
        { q: "Can I participate individually?", a: "Yes, both individual and team participation (up to 4 members) are allowed." },
    ];

    return (
        <section id="faq" className="py-24 bg-transparent border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
                    FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span>
                </h2>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-transparent pt-20 pb-10 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-5 space-y-6">
                        <h2 className="text-3xl font-display font-bold text-white">I²X <span className="text-gold">2026</span></h2>
                        <p className="text-platinum/50 max-w-sm">
                            Where Investors meet Innovators. The premier innovation connect platform by VIT Chennai.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-platinum hover:bg-gold hover:text-obsidian transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
                        <ul className="space-y-4 text-platinum/60 text-sm">
                            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                            <li><a href="#tracks" className="hover:text-gold transition-colors">Tracks</a></li>
                            <li><a href="#investors" className="hover:text-gold transition-colors">Investors</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-bold mb-6">CONTACT US</h4>
                        <div className="space-y-4 text-platinum/60 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-gold shrink-0" size={20} />
                                <p>VIT Chennai, Vandalur-Kelambakkam Road, Chennai, Tamil Nadu - 600127</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-gold shrink-0" size={20} />
                                <p>contact@i2x2026.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-platinum/30 text-xs">
                    © 2026 I²X Event. All rights reserved. Designed with Future Tech.
                </div>
            </div>
        </footer>
    );
}
