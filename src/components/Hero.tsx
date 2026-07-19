import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi';
import { personalInfo, typingTexts, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glowing circles */}
      <div className="glow-circle glow-circle-1" />
      <div className="glow-circle glow-circle-2" />
      <div className="glow-circle glow-circle-3" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            className="relative flex-shrink-0"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
              <img
                src="/profile picture.jpeg"
                alt="Yesh Thakur"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xs font-bold">Open</span>
            </motion.div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="text-primary font-medium text-lg mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-2 h-8"
              variants={itemVariants}
            >
              <span>{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View Projects
                <HiArrowDown className="animate-bounce" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <HiDownload />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline"
              >
                <HiMail />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&to=${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <HiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;