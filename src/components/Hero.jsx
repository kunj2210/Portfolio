import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex text-left items-center justify-center pt-20 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

            {/* Floating 3D Orb Particles */}
            <div className="orb w-3 h-3 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
            <div className="orb w-5 h-5 animate-float-slow" style={{ top: '65%', left: '8%', animationDelay: '1.5s' }} />
            <div className="orb w-2 h-2 animate-float-fast" style={{ top: '40%', right: '12%', animationDelay: '0.8s' }} />
            <div className="orb w-4 h-4 animate-float" style={{ top: '75%', right: '18%', animationDelay: '2s' }} />
            <div className="orb w-3 h-3 animate-float-slow" style={{ top: '15%', right: '25%', animationDelay: '0.4s' }} />

            <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-12 md:mt-20">

                {/* Profile Picture with 3D rotating ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'backOut' }}
                    className="relative mb-8"
                    style={{ perspective: '600px' }}
                >
                    {/* Outer spinning ring */}
                    <motion.div
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                        className="absolute inset-[-8px] rounded-full border border-white/20 border-dashed"
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                        style={{ animation: 'pulse-ring 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) infinite' }} />

                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-blue-500 to-blue-500">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a]">
                            <img
                                src={profileImg}
                                alt="Kunj Lunagariya"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Availability badge — floats gently */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-8 animate-float-slow"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm font-medium text-neutral-300">Available for work</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Hi, I'm <br className="md:hidden" />
                    <span className="text-gradient">Kunj Lunagariya.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    I am a passionate <span className="text-white font-medium">Full Stack Developer</span>, <span className="text-white font-medium">Data Analyst</span> and <span className="text-white font-medium">Problem Solver</span> based in India. I specialize in building robust web applications and have a strong foundation in Data Analysis.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-primary w-full sm:w-auto !px-8"
                    >
                        View Projects <ArrowRight size={18} />
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-secondary w-full sm:w-auto !px-8"
                    >
                        <Download size={18} className="text-neutral-400" /> Download CV
                    </motion.a>
                </motion.div>

                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {[
                        { href: 'https://github.com/kunj2210', icon: Github },
                        { href: 'https://www.linkedin.com/in/kunj-lunagariya-a56404303/', icon: Linkedin },
                        { href: 'mailto:kunjlunagariya@gmail.com', icon: Mail },
                    ].map(({ href, icon: Icon }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                            className="btn-icon"
                        >
                            <Icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
