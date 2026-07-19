import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="loader mx-auto mb-4" />
              <motion.p
                className="text-gray-400 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated Background */}
      <div className="animated-gradient">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
        <div className="bg-orb-3" />
        <div className="bg-orb-4" />
        <div className="bg-orb-5" />
        <div className="bg-stars" />
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor" id="cursor" />
      <div className="custom-cursor-dot" id="cursorDot" />

      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Services />
        <Contact />
        <Footer />
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <HiArrowUp />
      </motion.button>
    </>
  );
};

export default App;