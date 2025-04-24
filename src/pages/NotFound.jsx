import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Glitch Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Glitch Text */}
        <motion.h1 
          className="text-[150px] font-bold glitch-text"
          data-text="404"
          animate={{
            textShadow: [
              '2px 2px #ff0000',
              '-2px -2px #00ff00',
              '2px -2px #0000ff',
              '-2px 2px #ff0000'
            ]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          404
        </motion.h1>

        <motion.div
          className="glitch-text text-2xl mb-8"
          data-text="You've Entered the Void"
          animate={{ 
            opacity: [1, 0.5, 1],
            x: [-1, 1, -1]
          }}
          transition={{ duration: 0.2, repeat: Infinity }}
        >
          You've Entered the Void
        </motion.div>

        <motion.p
          className="text-gray-400 mb-8 max-w-md mx-auto"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          The page you're looking for has been consumed by the digital void. Return to safety.
        </motion.p>

        <Link to="/">
          <motion.button
            className="px-6 py-3 rounded-lg bg-red-500/20 border border-red-500/50
                     hover:bg-red-500/30 transition-colors text-red-500 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHome />
            Return Home
          </motion.button>
        </Link>
      </div>

      {/* Glitch Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-500/20"
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100}px`,
            height: '2px',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
