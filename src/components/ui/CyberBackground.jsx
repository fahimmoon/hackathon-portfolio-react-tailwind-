import { motion } from 'framer-motion';

const CyberBackground = ({ children, className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,249,0.05)_0%,transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {children}
    </div>
  );
};

export default CyberBackground;
