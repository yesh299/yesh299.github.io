import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { experience, education } from "../data/portfolioData";

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
          <p className="section-subtitle">
            My academic and professional journey
          </p>
        </motion.div>

        <div className="experience-grid grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card journey-panel p-6 md:p-8">
              <div className="journey-panel-heading flex items-center gap-4 mb-6">
                <div className="journey-icon experience-icon w-12 h-12 rounded-xl flex items-center justify-center">
                  <HiBriefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Experience</h3>
                  <p className="text-gray-400 text-sm">Professional Journey</p>
                </div>
              </div>

              <div className="experience-highlight relative pl-6">
                <span className="experience-status">Currently available</span>
                <h4 className="text-lg font-medium mb-2">{experience.title}</h4>
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
            <div className="glass-card journey-panel p-6 md:p-8">
              <div className="journey-panel-heading flex items-center gap-4 mb-6">
                <div className="journey-icon education-icon w-12 h-12 rounded-xl flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-gray-400 text-sm">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "10th Standard",
                    sub: education.schooling[0].year,
                    badge: education.schooling[0].percentage,
                  },
                  {
                    label: "12th Standard",
                    sub: education.schooling[1].year,
                    badge: education.schooling[1].percentage,
                  },
                  {
                    label: education.degree,
                    sub: `${education.institution} · 2025–28`,
                    badge: `CGPA: ${education.cgpa}`,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="education-item flex items-start gap-4"
                  >
                    <div className="education-marker flex flex-col items-center pt-1">
                      <div className="education-dot w-3 h-3 rounded-full shrink-0" />
                      {i < 2 && (
                        <div className="education-line w-0.5 h-full min-h-[2.5rem] mt-1" />
                      )}
                    </div>
                    <div className="education-content pb-2">
                      <h4 className="text-sm font-semibold">{item.label}</h4>
                      <p className="text-gray-400 text-xs mb-1.5">{item.sub}</p>
                      <span className="education-badge px-2.5 py-0.5 rounded-full text-xs font-bold">
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
