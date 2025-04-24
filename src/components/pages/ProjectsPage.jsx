import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import CyberBackground from '../components/ui/CyberBackground';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cyber-darker relative overflow-hidden"
    >
      <CyberBackground>
        {/* Floating Hexagons */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block w-24 h-24 border border-neon-blue/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </CyberBackground>

      <div className="relative z-10">
        <Projects />
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
