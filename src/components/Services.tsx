import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiCube, HiServer, HiColorSwatch } from 'react-icons/hi';
import { services } from '../data/portfolioData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCode, HiDeviceMobile, HiCube, HiServer, HiColorSwatch,
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">What I can do for you</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 md:p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  {Icon && <Icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;