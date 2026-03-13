import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3">Contact</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's Create <br /><span className="text-gradient">Something Great</span></h3>
                        <p className="text-secondary text-lg mb-10">
                            Have a project in mind or just want to say hi? Feel free to reach out.
                            I'm always open to discussing new projects, creative ideas or opportunities
                            to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "kunilunagariya@gmail.com" },
                                { icon: Phone, label: "LinkedIn", value: "linkedin.com/in/kunj-lunagariya" },
                                { icon: MapPin, label: "Location", value: "Surat, Gujarat, India" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-12 h-12 glass flex items-center justify-center text-cyan-400">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-secondary uppercase tracking-wider">{item.label}</p>
                                        <p className="text-white font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 md:p-10"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Subject</label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message here..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button className="btn btn-primary w-full justify-center group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
