import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-[#0a0f1e]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-primary/10 via-dark-light to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <HiCode className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm font-medium">{project.title}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4"
                  >
                    <HiCode className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;