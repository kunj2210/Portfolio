import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#0a0a0a] relative z-10">
            <div className="container">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex gap-4 justify-center">
                        {[
                            { icon: Github, link: "https://github.com/kunj2210" },
                            { icon: Linkedin, link: "https://www.linkedin.com/in/kunj-lunagariya-a56404303/" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label="Social Link"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-neutral-500">
                    &copy; {new Date().getFullYear()} Kunj Lunagariya. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
