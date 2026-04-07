import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
    const stats = [
        { value: "8.47", label: "CGPA", suffix: "/10" },
        { value: "Software Eng", label: "Focus", suffix: "" },
        { value: "AI & MERN", label: "Stack", suffix: "" },
        { value: "5+", label: "Key Projects", suffix: "" }
    ];

    const features = [
        {
            icon: <Code2 className="text-purple-400" size={24} />,
            title: "Full Stack Development",
            description: "Building high-performance, responsive UIs and scalable web applications with React, focusing on seamless user experiences."
        },
        {
            icon: <Database className="text-cyan-400" size={24} />,
            title: "Backend Engineering",
            description: "Designing robust microservices and RESTful APIs with Node.js and Express, ensuring data integrity and optimized logic."
        },
        {
            icon: <Layout className="text-purple-400" size={24} />,
            title: "Artificial Intelligence",
            description: "Developing intelligent models using Python and Scikit-Learn, focusing on NLP, computer vision, and generative AI systems."
        },
        {
            icon: <Terminal className="text-cyan-400" size={24} />,
            title: "System Tools & DevOps",
            description: "Proficient in Docker, Git, and cloud-native tools, with experience in deploying scalable, containerized applications."
        }
    ];

    return (
        <section id="about" className="section relative border-y border-white/5 bg-[#050505]">
            <div className="container">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">Overview</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg leading-relaxed"
                    >
                        I am a B.Tech IT student at Charotar University with a strong academic background and a deep-seated passion for Software Engineering and Artificial Intelligence.
                        I specialize in architecting scalable Full Stack applications and designing intelligent systems that leverage machine learning to solve complex, real-world problems. My career goal is to contribute to high-impact engineering teams at a globally recognized organization.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto pt-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.1,
                                y: { duration: 0.15, ease: "easeOut" },
                                scale: { duration: 0.15, ease: "easeOut" }
                            }}
                            className="glass-card p-6 text-center hover:bg-[var(--card-bg-hover)] hover:border-purple-500/40 hover:shadow-xl hover:shadow-[var(--card-shadow-hover)] transition-colors duration-300 cursor-default"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {stat.value}<span className="text-purple-500 text-lg sm:text-2xl">{stat.suffix}</span>
                            </div>
                            <div className="text-sm text-neutral-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.1,
                                y: { duration: 0.15, ease: "easeOut" },
                                scale: { duration: 0.15, ease: "easeOut" }
                            }}
                        >
                            <TiltCard className="glass-card p-8 group hover:bg-[var(--card-bg-hover)] hover:border-purple-500/40 hover:shadow-xl hover:shadow-[var(--card-shadow-hover)] transition-colors duration-300 overflow-hidden h-full">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(18px)' }}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white" style={{ transform: 'translateZ(14px)' }}>{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
