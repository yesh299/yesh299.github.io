import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { projects } from "../data/portfolioData";

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card project-card work-card group"
    >
      <div className="work-card-media relative overflow-hidden bg-[#0a0f1e]">
        <span className="project-number">0{index + 1}</span>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-gradient-to-br from-primary/10 via-dark-light to-secondary/10">
            <div className="text-center">
              <HiCode className="mx-auto mb-2 h-12 w-12 text-primary/40" />
              <p className="text-sm font-medium text-gray-500">
                {project.title}
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="work-card-body p-5">
        <span className="project-category">
          {index === 0 ? "Full Stack" : "Web Development"}
        </span>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h3>
        <p className="mb-3 text-gray-700">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="work-card-actions flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Live Demo
            <HiExternalLink className="ml-2 h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <HiCode className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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
          <p className="section-label">My Portfolio</p>
          <h2 className="section-heading">
            My Latest <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
