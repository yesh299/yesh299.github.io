import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiDownload, HiMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { personalInfo, typingTexts, socialLinks } from "../data/portfolioData";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-44"
    >
      {/* Glowing circles */}
      <div className="glow-circle glow-circle-1" />
      <div className="glow-circle glow-circle-2" />
      <div className="glow-circle glow-circle-3" />

      <motion.div
        className="hero-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-layout flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            className="relative top-4 flex-shrink-0 md:top-6"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-8 border-white shadow-xl shadow-primary/10">
              <img
                src="/profile picture.jpeg"
                alt="Yesh Thakur"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="hero-content mt-6 text-center md:mt-8">
            <motion.p
              className="hero-kicker eyebrow text-primary font-medium text-lg mb-3"
              variants={itemVariants}
            >
              Hi, I'm Yesh
            </motion.p>

            <motion.h1
              className="hero-title text-5xl md:text-7xl lg:text-8xl font-normal mb-4 font-display"
              variants={itemVariants}
            >
              <span className="hero-title-line">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="hero-role text-xl md:text-2xl text-gray-300 mb-4 min-h-8"
              variants={itemVariants}
            >
              <span>{personalInfo.title}</span>
            </motion.div>

            <motion.p
              className="hero-tagline text-gray-400 text-lg max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="hero-actions flex flex-wrap gap-4 justify-center"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary hero-primary"
              >
                View My Work
                <HiArrowDown className="animate-bounce" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline hero-secondary"
              >
                <HiDownload />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-social-links flex gap-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social hero-social-github w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social hero-social-linkedin w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&to=${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social hero-social-email w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
