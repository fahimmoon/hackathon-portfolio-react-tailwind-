import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaTrophy, FaStar, FaEye } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import TechIcon from './TechIcon';

const ProjectCard = ({ project, viewMode = 'grid', featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const {
    title,
    description,
    image,
    technologies,
    githubLink,
    liveLink,
    longDescription,
    stats
  } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1, filter: "brightness(0.8)" },
    hover: { 
      scale: 1.05, 
      filter: "brightness(1.1)",
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    rest: { opacity: 0.7 },
    hover: { 
      opacity: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400 } }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3
      } 
    })
  };

  const getRandomPattern = () => {
    const patterns = [
      // Circuit Pattern
      <path 
        d="M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50z"
        stroke="currentColor" 
        strokeOpacity="0.1" 
        fill="none"
      />,
      // Dots Pattern
      <g>
        <circle cx="10" cy="10" r="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="30" cy="30" r="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="50" cy="10" r="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="10" cy="50" r="2" fill="currentColor" fillOpacity="0.1" />
      </g>,
      // Hexagon Pattern
      <path
        d="M25 0l25 15v30l-25 15L0 45V15L25 0z"
        stroke="currentColor"
        strokeOpacity="0.1"
        fill="none"
      />
    ];
    return patterns[Math.floor(Math.random() * patterns.length)];
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
      >
        <div className="flex items-center p-4 gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
              <pattern id={`pattern-${project.id}`} patternUnits="userSpaceOnUse" width="60" height="60">
                {getRandomPattern()}
              </pattern>
              <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
            </svg>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg mix-blend-overlay"
            />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {project.stats.stars}
              </span>
              <span className="flex items-center gap-1">
                <FaEye className="text-blue-400" />
                {project.stats.views}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative rounded-xl overflow-hidden ${
        featured ? 'row-span-2 col-span-2' : ''
      }`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-green-500/50 transition-all duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-500/10" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
        <pattern id={`pattern-${project.id}`} patternUnits="userSpaceOnUse" width="60" height="60">
          {getRandomPattern()}
        </pattern>
        <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
      </svg>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-gray-400 mb-4">
            {featured ? project.longDescription : project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              {project.stats.stars}
            </span>
            <span className="flex items-center gap-1 text-blue-400">
              <FaEye />
              {project.stats.views}
            </span>
          </div>
          <motion.div
            className="text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            {new Date(project.date).toLocaleDateString()}
          </motion.div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ProjectCard; 