import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import Silk from './Silk';
import TargetCursor from './TargetCursor';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor
                parallaxOn
                hoverDuration={0.2}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#efbf04"
                    noiseIntensity={1.5}
                    rotation={0}
                />

                {/* Noise Overlay - Restored */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Contrast Layer - Improves text readability against bright gold */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 border border-obsidian/40 rounded-full text-obsidian text-sm tracking-[0.2em] font-display mb-6 backdrop-blur-sm bg-white/10 font-bold shadow-sm">
                        VIT CHENNAI PRESENTS
                    </span>

                    <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter text-white mb-2 leading-tight drop-shadow-xl shadow-black">
                        I<span className="text-obsidian ml-2 filter drop-shadow-sm">²</span>X <span className="text-transparent bg-clip-text bg-gradient-to-tr from-platinum to-white filter drop-shadow-md">2026</span>
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-3xl font-light text-obsidian/90 tracking-[0.3em] mb-12 uppercase font-medium drop-shadow-md"
                    >
                        Investors <span className="text-obsidian font-black">X</span> Innovators
                    </motion.h2>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(10, 10, 10, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-target relative px-8 py-4 bg-obsidian text-gold font-bold font-display text-lg tracking-wider rounded-sm overflow-hidden group shadow-2xl border border-gold/50"
                        >
                            {/* Shine effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                            <span className="relative z-10 flex items-center gap-2">
                                REGISTER NOW <ArrowRight size={20} />
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-target px-8 py-4 bg-transparent border border-obsidian/50 text-obsidian font-bold font-display text-lg tracking-wider rounded-sm hover:bg-obsidian/10 transition-colors duration-300 drop-shadow-sm"
                        >
                            VIEW DETAILS
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-obsidian/60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
