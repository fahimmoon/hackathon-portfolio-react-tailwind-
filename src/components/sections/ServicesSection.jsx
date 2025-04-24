import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa';
import CyberBackground from '../ui/CyberBackground';

const ServicesSection = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom websites with modern technologies and best practices.'
    },
    // ... add more services
  ];

  const featuredProjects = [
    { id: 1, title: 'Web Development', tech: ['React', 'Node.js'] },
    { id: 2, title: 'Mobile Apps', tech: ['React Native'] },
    { id: 3, title: 'UI/UX Design', tech: ['Figma', 'Adobe XD'] },
  ];

  return (
    <section className="py-20 bg-cyber-darker/30 relative overflow-hidden">
      <CyberBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 
                   bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-b from-black/50 to-transparent
                       border border-neon-blue/10 backdrop-blur-sm
                       hover:shadow-neon-sm transition-all duration-300"
            >
              <service.icon className="text-neon-blue text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-neon-blue mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r 
                      from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
