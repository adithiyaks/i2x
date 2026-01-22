import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Timeline = () => {
    const milestones = [
        { date: "Jan 1, 2026", title: "Registration Opens", desc: "Global registration begins for all domains." },
        { date: "Jan 20, 2026", title: "Abstract Submission", desc: "Submit your initial project synopsis." },
        { date: "Jan 30, 2026", title: "Screening Results", desc: "Announcement of shortlisted teams (Online)." },
        { date: "Feb 14, 2026", title: "Grand Finale", desc: "Offline Innovation Expo at VIT Chennai." },
    ];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="timeline" className="py-24 bg-transparent relative overflow-hidden" ref={ref}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        THE <span className="text-gold">JOURNEY</span>
                    </h2>
                    <p className="text-platinum/60">Follow the path to innovation.</p>
                </motion.div>

                <div className="relative">
                    {/* Central Line Background */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/10" />

                    {/* Glowing Progress Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-gold via-amber-200 to-amber-400 shadow-[0_0_20px_#efbf04,0_0_40px_rgba(239,191,4,0.6)] origin-top z-0 rounded-full"
                    />

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>

                                {/* Empty space for alternate side */}
                                <div className="w-5/12" />

                                {/* Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian border-2 border-gold/50 z-20 flex items-center justify-center shadow-[0_0_25px_rgba(239,191,4,0.4)]">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ margin: "-100px" }}
                                        className="w-4 h-4 bg-amber-200 rounded-full shadow-[0_0_15px_#efbf04,0_0_30px_#efbf04] ring-2 ring-gold/20"
                                    />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-100px", once: true }}
                                    className={`w-5/12 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                                >
                                    <span className="block text-gold font-bold font-display tracking-widest text-sm mb-2">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-platinum/60 text-sm">{item.desc}</p>
                                </motion.div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
