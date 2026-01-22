import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Stakeholders = () => {
    return (
        <section id="investors" className="py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* INVESTORS */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center"
                    >
                        OUR <span className="text-gold">INVESTORS</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-charcoal rounded-xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all duration-300"
                            >
                                <div className="aspect-square bg-white/5 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent opacity-60" />
                                    <span className="text-platinum/20 text-4xl font-display font-bold">IMG</span>
                                </div>
                                <div className="p-6 relative">
                                    <h3 className="text-xl font-bold text-white mb-1">Investor Name</h3>
                                    <p className="text-gold text-sm mb-2">Partner, VC Firm</p>

                                    {/* LinkedIn Overlay */}
                                    <a href="#" className="absolute top-[-20px] right-6 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-obsidian shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PARTNERS */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center"
                    >
                        ECOSYSTEM <span className="text-platinum/50">PARTNERS</span>
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-24 bg-white/5 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                <span className="font-display font-bold text-platinum/30 group-hover:text-gold transition-colors">PARTNER LOGO</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TEAM */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center"
                    >
                        THE <span className="text-gold">TEAM</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="text-center">
                                <div className="w-32 h-32 mx-auto rounded-full bg-charcoal border-2 border-gold/20 mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                    <div className="w-full h-full bg-white/5" />
                                </div>
                                <h4 className="text-lg font-bold text-white">Member Name</h4>
                                <p className="text-sm text-platinum/60">Core Committee</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Stakeholders;
