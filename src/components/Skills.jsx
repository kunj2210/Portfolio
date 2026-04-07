import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Layout, Server, Database, Globe, Wrench, PenTool, BarChart3, Binary } from 'lucide-react';
import TiltCard from './TiltCard';

const SkillPill = ({ name, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3 }}
        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/30 transition-colors cursor-default whitespace-nowrap"
    >
        {name}
    </motion.div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        <TiltCard className="glass-card p-8 flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/20 group transition-all duration-300 overflow-hidden">

            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-colors" style={{ transform: 'translateZ(20px)' }}>
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ transform: 'translateZ(15px)' }}>{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
                {skills.map((skill, idx) => (
                    <SkillPill key={idx} name={skill} delay={delay + (idx * 0.05)} />
                ))}
            </div>
        </TiltCard>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Core Programming",
            icon: Code,
            skills: ["Java", "Python", "JavaScript", "C/C++", "Data Structures", "Algorithms"]
        },
        {
            title: "AI & Machine Learning",
            icon: Binary,
            skills: ["NLP", "Transformers", "LLMs", "Generative AI", "YOLOv8", "Scikit-Learn", "TensorFlow", "PyTorch"]
        },
        {
            title: "Full Stack Development",
            icon: Globe,
            skills: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "MERN Stack", "Auth-JWT"]
        },
        {
            title: "Engineering Tools & Data",
            icon: BarChart3,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "Git", "Jupyter", "Power BI", "Tableau", "Figma"]
        }
    ];

    return (
        <section id="skills" className="section relative border-t border-white/5 bg-[#050505]">
            <div className="container px-6">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/10 mb-6"
                    >
                        <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">Expertise</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, i) => (
                        <SkillCategory key={i} {...category} delay={i * 0.1} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
