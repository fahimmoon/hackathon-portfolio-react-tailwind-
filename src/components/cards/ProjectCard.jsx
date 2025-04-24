import { motion } from 'framer-motion';

const ProjectCard = ({ project, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
      className={`bg-hacker-dark/50 rounded-xl overflow-hidden border border-hacker/30
                 hover:border-hacker transition-all duration-300 ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300
                   group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-mono font-semibold mb-2 text-hacker">{project.title}</h3>
        <p className="text-hacker/70 text-sm mb-4 font-mono">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demo}
            className="text-sm text-red-500 hover:text-red-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            className="text-sm text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
