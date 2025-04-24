import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaEye } from 'react-icons/fa';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState({
    current: 1,
    total: 1542 // Starting with a base number
  });

  // Simulate real-time visitor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => ({
        current: Math.floor(Math.random() * 5) + prev.current,
        total: prev.total + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50 bg-gray-900/90 backdrop-blur-sm 
                 rounded-full border border-gray-700/50 p-3 text-sm
                 hover:border-red-500/30 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <div className="flex items-center gap-1">
            <FaUsers className="text-red-500" />
            <span className="text-gray-400">{visitors.current} online</span>
          </div>
        </div>
        <div className="border-l border-gray-700 pl-4 flex items-center gap-1">
          <FaEye className="text-purple-500" />
          <span className="text-gray-400">{visitors.total.toLocaleString()} total views</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
