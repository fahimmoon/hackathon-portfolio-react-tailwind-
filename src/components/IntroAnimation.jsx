import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaTerminal } from 'react-icons/fa';

const IntroAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingTexts = [
    'Initializing system...',
    'Loading dependencies...',
    'Starting portfolio...',
    'Almost ready...'
  ];

  useEffect(() => {
    const duration = 3000; // Total animation duration: 3 seconds
    const interval = duration / 100;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-md p-6 relative">
        {/* Loading Container */}
        <motion.div
          className="bg-gray-900/50 rounded-lg border border-red-500/20 p-6 backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-700
                         flex items-center justify-center"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.2)',
                  '0 0 40px rgba(239, 68, 68, 0.4)',
                  '0 0 20px rgba(239, 68, 68, 0.2)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl font-bold text-white">F</span>
            </motion.div>
          </div>

          {/* Loading Text */}
          <div className="text-center mb-6">
            <motion.p
              className="text-gray-400 text-sm mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentText}
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-red-700"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between text-xs text-gray-500">
            <span>Loading Portfolio</span>
            <span>{progress}%</span>
          </div>

          {/* Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {[FaShieldAlt, FaCode, FaTerminal].map((Icon, index) => (
              <motion.div
                key={index}
                className="text-red-500/50"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;