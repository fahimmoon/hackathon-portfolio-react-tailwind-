import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaPalette, FaCode } from 'react-icons/fa';
import GlitchElement from './ui/GlitchElement';
import Tooltip from './ui/Tooltip';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Dashboard',
      icon: FaChartLine,
      description: 'High-tech AI analytics platform with real-time data visualization and predictive modeling.',
      tech: ['React', 'D3.js', 'TensorFlow.js', 'WebGL'],
      features: [
        'Real-time data processing',
        'Neural network visualizations',
        'Predictive analytics',
        'Interactive 3D charts'
      ],
      image: '/path-to-ai-dashboard.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com',
      colors: {
        primary: '#00fff9',
        secondary: '#bd00ff'
      }
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      icon: FaPalette,
      description: 'Cyberpunk-themed NFT marketplace for digital art trading with blockchain integration.',
      tech: ['Next.js', 'Ethereum', 'IPFS', 'Smart Contracts'],
      features: [
        'Live auctions',
        'Crypto wallet integration',
        'Digital art showcase',
        'Real-time bidding'
      ],
      image: '/path-to-nft.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com',
      colors: {
        primary: '#ff00ff',
        secondary: '#00ff9f'
      }
    },
    {
      id: 3,
      title: 'Cyber Portfolio',
      icon: FaCode,
      description: 'Futuristic personal portfolio with interactive UI and cyberpunk aesthetics.',
      tech: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
      features: [
        'Dynamic animations',
        '3D elements',
        'Interactive timeline',
        'Particle effects'
      ],
      image: '/path-to-portfolio.jpg',
      github: 'https://github.com',
      demo: 'https://demo.com',
      colors: {
        primary: '#bd00ff',
        secondary: '#00fff9'
      }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-neon-blue/10 rounded-full"
        />
        <GlitchElement rotateAngle={22.5} />
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-[10%] w-1 h-20 bg-gradient-to-b from-neon-purple/20 via-neon-blue/20 to-transparent"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,249,0.05)_0%,transparent_70%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-2 sm:px-3 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10 bg-gradient-to-r 
                   from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="group relative perspective h-full"
            >
              <motion.div
                className="relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-black/40 via-black/20 to-black/40
                          border border-neon-blue/10 backdrop-blur-sm
                          hover:border-neon-blue/30 transition-all duration-500
                          transform-gpu preserve-3d shadow-xl"
                style={{
                  background: 'linear-gradient(169deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
                  boxShadow: `0 0 20px ${project.colors.primary}10`
                }}
              >
                {/* Premium Glass Effect Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="relative p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative">
                      <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br 
                                  from-${project.colors.primary}/5 to-${project.colors.secondary}/5
                                  border border-neon-blue/10 group-hover:border-neon-blue/20
                                  transition-all duration-500`}>
                        <project.icon size={24} className="text-neon-blue relative z-10" />
                      </div>
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-neon-blue/20 blur-xl"
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple 
                                   bg-clip-text text-transparent transform transition-transform duration-300
                                   group-hover:scale-105">
                        {project.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
                        {project.tech.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-gray-400 line-clamp-2">{project.description}</p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400"
                      >
                        <span className="w-1 h-1 rounded-full bg-neon-blue/50" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] rounded-full bg-neon-blue/5 text-neon-blue/80
                                 border border-neon-blue/10 group-hover:border-neon-blue/20
                                 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex gap-2">
                      <Tooltip text="View Source Code">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-neon-blue/5 text-neon-blue hover:bg-neon-blue/10
                                   border border-neon-blue/10 hover:border-neon-blue/20
                                   transition-all duration-300"
                        >
                          <FaGithub size={16} />
                        </motion.a>
                      </Tooltip>
                      <Tooltip text="Live Demo">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-neon-purple/5 text-neon-purple hover:bg-neon-purple/10
                                   border border-neon-purple/10 hover:border-neon-purple/20
                                   transition-all duration-300"
                        >
                          <FaExternalLinkAlt size={16} />
                        </motion.a>
                      </Tooltip>
                    </div>
                    <Tooltip text="See Project Details">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[10px] sm:text-xs text-neon-blue px-3 py-1.5 rounded-lg
                                 bg-neon-blue/5 hover:bg-neon-blue/10 border border-neon-blue/10
                                 hover:border-neon-blue/20 transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                    </Tooltip>
                  </div>

                  {/* Loading Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px]
                             bg-gradient-to-r from-neon-blue to-neon-purple
                             origin-left"
                  />
                </div>

                {/* Premium Hover Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    background: [
                      `radial-gradient(600px circle at var(--x) var(--y), ${project.colors.primary}05, transparent 40%)`,
                      `radial-gradient(600px circle at var(--x) var(--y), ${project.colors.secondary}05, transparent 40%)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* "Scroll for more" indicator */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex items-center gap-2 text-xs text-gray-400
                    justify-center mt-8"
        >
          <span>Scroll for more</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-4 bg-gradient-to-b from-neon-blue to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
