import React from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showBackToTop, setShowBackToTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-[100]"
                style={{ scaleX }}
            />
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />

            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-teal-400 border-teal-500/50 hover:bg-teal-500/10 transition-colors cursor-pointer"
                    >
                        <ChevronUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
