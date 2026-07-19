import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤️</span> by{' '}
              <span className="gradient-text font-medium">{personalInfo.name}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xs"
          >
            &copy; {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;