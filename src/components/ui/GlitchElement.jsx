import { motion } from 'framer-motion';

const GlitchElement = ({ rotateAngle = 45 }) => {
  return (
    <motion.div
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [0.98, 1, 0.98],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-8 h-8"
      style={{ transform: `rotate(${rotateAngle}deg)` }}
    >
      <div className="w-full h-full border border-neon-blue/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent" />
      </div>
    </motion.div>
  );
};

export default GlitchElement;
