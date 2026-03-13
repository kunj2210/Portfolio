import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-['Inter'] relative overflow-hidden">

            {/* Background Glares */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
                <div className="container max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
                            K
                        </span>
                        Kunj Lunagariya
                    </Link>
                    <Link to="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </nav>

            <main className="container max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">Contact</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-2xl mx-auto"
                    >
                        Have a project in mind or just want to chat? Feel free to reach out. I'm currently open to new opportunities.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ y: { duration: 0.1, ease: "linear" } }}
                            className="glass-card p-8 h-full hover:bg-white/[0.07] hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <a href="mailto:kunjlunagariya@gmail.com" className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-300 mb-1">Email</h4>
                                        <p className="text-neutral-500 text-sm group-hover:text-teal-400 transition-colors">kunjlunagariya@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-300 mb-1">Location</h4>
                                        <p className="text-neutral-500 text-sm">Gujarat, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-neutral-400 mb-4">Connect on Socials</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/kunj2210" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kunj-lunagariya-a56404303/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            whileHover={{ scale: 1.005 }}
                            transition={{ duration: 0.1 }}
                            className="glass-card p-8 md:p-10 hover:border-teal-500/20"
                        >
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                                        placeholder="abc"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                                        placeholder="abc@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                <label htmlFor="subject" className="text-sm font-medium text-neutral-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                                    placeholder="........."
                                    required
                                />
                            </div>

                            <div className="space-y-2 mb-8">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full md:w-auto">
                                Send Message <Send size={18} />
                            </button>
                        </motion.form>
                    </motion.div>
                </div>
            </main>

            {/* Footer minimal */}
            <footer className="py-8 border-t border-white/10 text-center text-sm text-neutral-500 mt-20 relative z-10">
                © {new Date().getFullYear()} Kunj Lunagariya. All rights reserved.
            </footer>
        </div>
    );
};

export default ContactPage;
