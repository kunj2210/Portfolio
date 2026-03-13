import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Experience', path: '/#experience' },
    ];

    const handleNavClick = (e, path) => {
        if (path.startsWith('/#') && location.pathname === '/') {
            e.preventDefault();
            const id = path.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${isScrolled ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-lg border-white/10' : 'py-6 bg-transparent border-transparent'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/15 text-neutral-300">
                        K
                    </span>
                    Kunj Lunagariya
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex bg-white/5 border border-white/10 rounded-full px-6 py-2 gap-8 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <Link to="/contact" className="btn btn-primary !py-2 !px-5 !rounded-full text-sm">
                        Contact Me
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a] border-b border-white/10"
                    >
                        <div className="container py-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleNavClick(e, link.path)}
                                    className="text-lg font-medium text-neutral-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary w-full !py-3">
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
