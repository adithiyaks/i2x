import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Monitor, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        ABOUT THE <span className="text-gold">EVENT</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Main Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 text-center">
                            <h3 className="text-2xl font-display font-bold text-platinum mb-4">Innovation Meets Investment</h3>
                            <p className="text-platinum/70 leading-relaxed text-lg">
                                I²X is a premier college-level innovation-investment connect program designed to bridge the gap between brilliant student innovators and top-tier investors and industry experts. It's not just a competition; it's a launchpad for the future.
                            </p>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { icon: MapPin, text: "VIT Chennai", label: "Venue" },
                                { icon: Calendar, text: "Feb 14, 2026", label: "Date" },
                                { icon: Clock, text: "9:00 - 5:00 PM", label: "Time" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center justify-center p-6 bg-charcoal rounded-xl border border-white/5 hover:border-gold/50 transition-all group"
                                >
                                    <item.icon className="text-gold mb-3 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" size={28} />
                                    <span className="text-white font-bold text-sm text-center">{item.text}</span>
                                    <span className="text-xs text-platinum/50 mt-1 uppercase tracking-wider">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Event Flow */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Event Flow</h3>

                        {/* Session 1 */}
                        <div className="relative pl-10">
                            {/* White Glow Line */}
                            <div className="absolute left-0 top-1.5 bottom-0 w-0.5 bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.4)] rounded-full" />

                            {/* White Glowing Node */}
                            <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-obsidian border-2 border-white/60 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                            </span>

                            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-r-xl border border-white/10 hover:border-gold/30 transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                    <Monitor className="text-gold" size={20} />
                                    <h4 className="text-xl font-bold text-white">Session 1: Online Screening</h4>
                                </div>
                                <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-bold rounded mb-3">FREE ENTRY</span>
                                <ul className="list-disc list-inside text-platinum/70 space-y-1 text-sm">
                                    <li>Website-based registration</li>
                                    <li>Project submission & expert evaluation</li>
                                </ul>
                            </div>
                        </div>

                        {/* Session 2 */}
                        <div className="relative pl-10">
                            {/* White Glow Line */}
                            <div className="absolute left-0 top-1.5 bottom-0 w-0.5 bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.4)] rounded-full" />

                            {/* White Glowing Node */}
                            <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-obsidian border-2 border-white/60 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
                            </span>

                            <div className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-r-xl border border-gold/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users className="text-white" size={20} />
                                    <h4 className="text-xl font-bold text-gold">Session 2: Offline Main Event</h4>
                                </div>
                                <p className="text-sm text-platinum/50 mb-3">The Grand Finale</p>
                                <ul className="list-disc list-inside text-platinum/80 space-y-1 text-sm">
                                    <li>Innovation Expo & Live Demos</li>
                                    <li>Networking with Investors & Mentors</li>
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
