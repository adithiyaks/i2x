import { motion } from 'framer-motion';
import { Cpu, Leaf, Bitcoin, HeartPulse, Smartphone, Lightbulb } from 'lucide-react';

const Tracks = () => {
    const tracks = [
        { title: "Healthcare & Biomedical Innovations", icon: HeartPulse, desc: "Revolutionizing Medical Tech" },
        { title: "Sustainability & Green Technology", icon: Leaf, desc: "Eco-friendly Energy & Solutions" },
        { title: "Smart Systems & Automation", icon: Cpu, desc: "AI, IoT, & Robotics" },
        { title: "FinTech, EdTech & Digital Platforms", icon: Bitcoin, desc: "Future of Finance & Education" },
        { title: "Consumer Tech & Lifestyle Products", icon: Smartphone, desc: "Next-Gen Gadgets & Wearables" },
        { title: "Open Innovation", icon: Lightbulb, desc: "Cross-domain Ideas & Concepts" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="tracks" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        INNOVATION <span className="text-gold filter drop-shadow-lg">TRACKS</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-platinum/60 text-lg">
                        Explore the six domains where technology meets creativity. Choose your battlefield.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
                            className="group relative h-[300px] rounded-2xl bg-charcoal/40 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] perspective-1000"
                        >
                            {/* Inner Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-gold group-hover:text-obsidian transition-colors duration-300">
                                    <track.icon size={40} className="text-gold group-hover:text-obsidian transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">{track.title}</h3>
                                <p className="text-platinum/50 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {track.desc}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Tracks;
