import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description, delay, isHighlight = false }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true }}
        transition={{
            delay,
            duration: 0.6,
            scale: { duration: 0.1 }
        }}
        className="relative pl-8 pb-12 last:pb-0 group"
    >
        {/* Clean Minimal Line */}
        <div className="absolute left-[3px] top-2 bottom-[-8px] w-px bg-white/10 group-last:bg-transparent" />

        {/* Clean Minimal Marker */}
        <div className={`absolute left-0 top-2 w-2 h-2 rounded-full ring-4 ring-[#0a0a0a] ${isHighlight ? 'bg-white' : 'bg-neutral-600'} transition-colors duration-300`} />

        <div className="glass-card p-6 md:p-8 hover:bg-[var(--card-bg-hover)] hover:shadow-xl hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group-hover:border-white/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
                    <p className="text-sm text-neutral-300 font-medium">{company}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border shrink-0 ${isHighlight ? 'text-neutral-300 border-white/20 bg-white/5' : 'text-neutral-400 border-white/10 bg-white/5'}`}>
                    {year}
                </span>
            </div>

            {Array.isArray(description) ? (
                <ul className="text-neutral-400 text-sm leading-relaxed space-y-2 list-none">
                    {description.map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                            <span className="text-white mt-0.5 opacity-50">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            )}
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            year: "June 2025",
            title: "Full Stack Developer INTERN",
            company: "Hopiant",
            description: [
                "Learned to design and develop Shopify web stores and create user interface designs using tools like Figma.",
                "Gained hands-on experience building responsive layouts and implementing functional e-commerce features.",
                "Enhanced professional communication by gathering requirements from clients, sharing updates, and handling feedback."
            ],
            delay: 0.1,
            isHighlight: true
        },
        {
            year: "July 2023 - June 2027",
            title: "B.Tech, Information Technology",
            company: "Charotar University Of Science And Technology",
            description: "Pursuing undergraduate degree with current CGPA of 8.47 (Till Jan 2026). Expanding knowledge in core computer science subjects.",
            delay: 0.2
        },
        {
            year: "2023 & Prior",
            title: "Certifications & Achievements",
            company: "Various Providers",
            description: [
                "2x NPTEL Certified: Data Structure and Algorithm using JAVA, Database Management System",
                "MongoDB Certified (Node.js Developer Path)"
            ],
            delay: 0.3
        },
        {
            year: "June 2021 - Mar 2023",
            title: "H.S.C, G.S.E.B (PR: 88.0)",
            company: "Ashadeep International School",
            description: "Completed Higher Secondary Education focusing on science and technical subjects.",
            delay: 0.4
        }
    ];

    return (
        <section id="experience" className="section relative">
            <div className="container">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-xs font-semibold text-neutral-300 tracking-wider uppercase">Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Experience & <span className="text-gradient">Education</span>
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, i) => (
                        <TimelineItem key={i} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
