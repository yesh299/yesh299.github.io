import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { skills } from '../data/portfolioData';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiPostman, SiVercel, SiNextdotjs, SiOpenid, SiRender
} from 'react-icons/si';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiVisualstudiocode: HiCode, SiVisualstudio: HiCode,
  SiPostman, SiVercel, SiNextdotjs,
  SiOpenai: SiOpenid, SiOpenid, SiRender,
};

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  index: number;
}

const SkillCard = ({ name, icon, color, index }: SkillCardProps) => {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-5 flex flex-col items-center gap-3 cursor-pointer group"
    >
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
        {Icon && <Icon className="w-7 h-7 transition-all duration-300" style={{ color }} />}
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const SkillSection = ({ title, items }: { title: string; items: { name: string; icon: string; color: string }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
      <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {items.map((skill, index) => (
        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} index={index} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <SkillSection title="Frontend" items={skills.frontend} />
        <SkillSection title="Backend" items={skills.backend} />
        <SkillSection title="Database" items={skills.database} />
        <SkillSection title="Tools & Platforms" items={skills.tools} />
        <SkillSection title="Currently Learning" items={skills.learning} />
      </div>
    </section>
  );
};

export default Skills;