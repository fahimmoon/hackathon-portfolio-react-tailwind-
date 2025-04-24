import { motion } from 'framer-motion';

const CyberpunkUI = ({ className = "", width = "100%", height = "100%" }) => {
  return (
    <motion.svg
      viewBox="0 0 1000 500"
      className={className}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Filters */}
      <defs>
        {/* Neon Glow Effect */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0   0 1 0 0 1   1 0 0 0 1  0 0 0 15 -5"
            result="neon"
          />
          <feMerge>
            <feMergeNode in="neon" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glass Effect */}
        <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0"
          />
        </filter>

        {/* Gradients */}
        <linearGradient id="neonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00fff9" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#bd00ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
        </linearGradient>

        <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00fff9" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00fff9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Grid */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Horizontal Lines */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 25}
            x2="1000"
            y2={i * 25}
            stroke="url(#neonBorder)"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}
        {/* Vertical Lines */}
        {[...Array(40)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 25}
            y1="0"
            x2={i * 25}
            y2="500"
            stroke="url(#neonBorder)"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}
      </motion.g>

      {/* Service Panels */}
      <motion.g filter="url(#glass)">
        {/* Web Development Panel */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <rect
            x="100"
            y="100"
            width="200"
            height="150"
            rx="10"
            fill="rgba(0,0,0,0.3)"
            stroke="url(#neonBorder)"
            strokeWidth="2"
            filter="url(#neonGlow)"
          />
          {/* Add panel content */}
        </motion.g>

        {/* AI/ML Panel */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <rect
            x="400"
            y="100"
            width="200"
            height="150"
            rx="10"
            fill="rgba(0,0,0,0.3)"
            stroke="url(#neonBorder)"
            strokeWidth="2"
            filter="url(#neonGlow)"
          />
          {/* Add panel content */}
        </motion.g>

        {/* Cybersecurity Panel */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <rect
            x="700"
            y="100"
            width="200"
            height="150"
            rx="10"
            fill="rgba(0,0,0,0.3)"
            stroke="url(#neonBorder)"
            strokeWidth="2"
            filter="url(#neonGlow)"
          />
          {/* Add panel content */}
        </motion.g>
      </motion.g>

      {/* Floating Circuit Lines */}
      <motion.g
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <path
          d="M0,250 C250,250 250,100 500,100 S750,250 1000,250"
          stroke="#00fff9"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M0,350 C250,350 250,200 500,200 S750,350 1000,350"
          stroke="#bd00ff"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
      </motion.g>
    </motion.svg>
  );
};

export default CyberpunkUI;
