import { motion } from 'framer-motion';

const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute z-50 invisible group-hover:visible 
                 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                 text-xs text-white bg-black/90 rounded-lg
                 border border-neon-blue/20 backdrop-blur-md
                 whitespace-nowrap"
      >
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1
                      border-4 border-transparent border-t-black/90" />
      </motion.div>
    </div>
  );
};

export default Tooltip;
