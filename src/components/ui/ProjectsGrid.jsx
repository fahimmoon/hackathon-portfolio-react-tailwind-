import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsGrid = ({ 
  projects,
  className = "",
  viewBox = "0 0 1200 800",
  gridColumns = 3
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <svg 
      viewBox={viewBox}
      className={`w-full max-w-6xl mx-auto ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Enhanced Neon Glow */}
        <filter id="projectGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
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

        {/* Digital Noise Pattern */}
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>

        {/* Hexagonal Grid Pattern */}
        <pattern id="hexGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0z"
            fill="none"
            stroke="url(#hexGradient)"
            strokeWidth="0.5"
            opacity="0.1"
          />
        </pattern>

        {/* Gradients */}
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00fff9" />
          <stop offset="100%" stopColor="#bd00ff" />
        </linearGradient>

        {/* Card Gradient */}
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,255,249,0.1)" />
          <stop offset="100%" stopColor="rgba(189,0,255,0.1)" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="#020204" />
      <rect width="100%" height="100%" fill="url(#hexGrid)" />

      {/* Project Cards Grid */}
      <motion.g>
        {projects.map((project, index) => {
          const row = Math.floor(index / gridColumns);
          const col = index % gridColumns;
          const x = 200 + col * 300;
          const y = 150 + row * 250;

          return (
            <motion.g
              key={project.id}
              transform={`translate(${x}, ${y})`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Card Background */}
              <motion.rect
                width="250"
                height="200"
                rx="10"
                fill="url(#cardGradient)"
                stroke={hoveredIndex === index ? "#00fff9" : "rgba(0,255,249,0.3)"}
                strokeWidth="2"
                filter="url(#projectGlow)"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  strokeWidth: hoveredIndex === index ? 3 : 2,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Project Title */}
              <text
                x="125"
                y="100"
                textAnchor="middle"
                className="text-lg font-semibold"
                fill={hoveredIndex === index ? "#00fff9" : "#ffffff"}
              >
                {project.title}
              </text>

              {/* Connecting Lines */}
              {index > 0 && (
                <motion.path
                  d={`M0,100 C-50,100 -100,${index % 2 === 0 ? '50' : '150'} -150,100`}
                  stroke="url(#hexGradient)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
              )}
            </motion.g>
          );
        })}
      </motion.g>
    </svg>
  );
};

export default ProjectsGrid;
