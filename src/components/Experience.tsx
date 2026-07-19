import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { experience, education } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">My academic and professional journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HiBriefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400 text-sm">Professional Journey</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-white/10">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <h4 className="text-lg font-medium text-white mb-2 gradient-text">
                  {experience.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {experience.content}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400 text-sm">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: '10th Standard', sub: education.schooling[0].year, badge: education.schooling[0].percentage },
                  { label: '12th Standard', sub: education.schooling[1].year, badge: education.schooling[1].percentage },
                  { label: education.degree, sub: `${education.institution} · 2025–28`, badge: `CGPA: ${education.cgpa}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-primary shrink-0" />
                      {i < 2 && <div className="w-0.5 h-full min-h-[2.5rem] bg-white/10 mt-1" />}
                    </div>
                    <div className="pb-2">
                      <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                      <p className="text-gray-400 text-xs mb-1.5">{item.sub}</p>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;