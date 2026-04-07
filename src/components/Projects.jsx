import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

const ProjectCard = ({ title, description, tags, link, github, features, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
    >
        <TiltCard className="glass-card group p-8 flex flex-col h-full hover:border-purple-500/50 hover:bg-[var(--card-bg-hover)] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">

            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors" style={{ transform: 'translateZ(20px)' }}>{title}</h3>
                    <div className="flex gap-2 shrink-0">
                        {github && (
                            <a href={github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                                <Github size={16} />
                            </a>
                        )}
                        {link && (
                            <a href={link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{description}</p>

                {features && (
                    <ul className="text-neutral-400 text-sm space-y-2 mb-8 flex-grow list-none">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex gap-2 items-start shrink-0">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45 mt-1.5 shrink-0" />
                                <span className="leading-snug">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex gap-2 flex-wrap mt-auto pt-6 border-t border-white/5" style={{ transform: 'translateZ(10px)' }}>
                    {tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-neutral-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </TiltCard>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Cook To Go | AI Recipe Generator",
            description: "A dual-engine recipe generation platform utilizing hybrid AI models. Implemented a sophisticated retrieval-augmented generation (RAG) workflow to provide highly accurate and creative culinary solutions.",
            tags: ["React", "Express", "Node.js", "MongoDB", "Python", "Transformers"],
            github: "https://github.com/manthan2876/AI-Powered-Recipe-Generator",
            features: [
                "Transformer-based generative engine using locally fine-tuned T5 models for creative recipe synthesis.",
                "High-performance retrieval system utilizing Jaccard & TF-IDF similarity against large-scale datasets.",
                "Optimized Python/Node.js integration for real-time inference and seamless user interaction."
            ],
            delay: 0.1
        },
        {
            title: "CivicConnect",
            description: "A scalable, multi-tenant digital platform designed to bridge the gap between citizens and municipal governance. Built a robust backend to handle high-frequency reporting and AI-driven automated routing.",
            tags: ["React Native", "Node.js", "Python", "GIS Mapping", "AI Fusion"],
            github: "https://github.com/kunj2210/CivicConnect",
            features: [
                "Multi-modal AI fusion supporting Image (Object Detection), Voice (STT), and Text inputs for reporting.",
                "Geo-intelligence and real-time mapping for automated issue categorization and priority routing.",
                "Scalable, multi-tenant architecture designed for massive user loads with real-time status tracking."
            ],
            delay: 0.2
        }
    ];

    return (
        <section id="projects" className="section relative border-y border-white/5 bg-[#050505]">
            <div className="container px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
                        >
                            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Portfolio</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Featured <span className="text-gradient">Projects</span>
                        </motion.h2>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="https://github.com/kunj2210"
                        target="_blank" rel="noreferrer"
                        className="btn btn-secondary text-sm"
                    >
                        View GitHub Profile
                    </motion.a>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
