import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Timeline', href: '#timeline' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
                    {/* Logo */}
                    <a href="#" className="cursor-target flex items-center gap-2 group">
                        <span className="text-2xl font-display font-bold text-white tracking-widest group-hover:text-gold transition-colors duration-300">
                            I²X <span className="text-gold">2026</span>
                        </span>
                    </a>

                    {/* Desktop Menu - Centered Links */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="cursor-target text-sm font-medium text-platinum hover:text-gold transition-colors tracking-wide uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Register Button & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="cursor-target hidden md:block px-6 py-2 bg-transparent border border-gold text-gold font-display text-sm tracking-wider hover:bg-gold hover:text-obsidian transition-all duration-300 rounded-sm">
                            REGISTER
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="cursor-target md:hidden text-white hover:text-gold transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: "circInOut" }}
                        className="fixed inset-0 z-[60] bg-obsidian flex flex-col items-center justify-center"
                    >
                        <button
                            className="cursor-target absolute top-6 right-6 text-white/50 hover:text-gold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="cursor-target text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-platinum to-white hover:from-gold hover:to-gold-light transition-all duration-300 uppercase tracking-widest"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
