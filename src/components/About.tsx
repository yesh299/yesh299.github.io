import { motion } from 'framer-motion';
import { aboutText, personalInfo } from '../data/portfolioData';
import { HiAcademicCap, HiLocationMarker, HiCode } from 'react-icons/hi';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { label: 'BCA Student', value: '2nd Year', icon: HiAcademicCap },
    { label: 'CGPA', value: '9.23', icon: HiAcademicCap },
    { label: 'Location', value: personalInfo.location, icon: HiLocationMarker },
    { label: 'Projects', value: '7+', icon: HiCode },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                <img
                  src="/profile picture.jpeg"
                  alt="Yesh Thakur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl border border-white/10 -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {aboutText}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="#contact" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;