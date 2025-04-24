import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { 
  FaSearch, 
  FaThLarge, 
  FaList, 
  FaStar, 
  FaCode, 
  FaEye, 
  FaTrophy,
  FaSort,
  FaTimes 
} from 'react-icons/fa';
import TechIcon from '../components/TechIcon';

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTech, setSelectedTech] = useState([]);
  const [projects, setProjects] = useState([]);

  // Enhanced project data with more variety and details
  useEffect(() => {
    const projectsData = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Tailwind CSS",
        longDescription: "This portfolio website showcases my skills, projects, and experience. It features smooth animations, responsive design, and modern UI elements. The site is built with React for the front-end logic and Tailwind CSS for styling.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com",
        category: "Web Development",
        featured: true,
        date: "2024-03-01",
        stats: {
          stars: 245,
          forks: 57,
          views: 1200
        }
      },
      {
        id: 2,
        title: "E-commerce App",
        description: "A full-featured e-commerce application with payment integration",
        longDescription: "This e-commerce platform includes product listings, shopping cart functionality, user authentication, and payment processing with Stripe. The backend is built with Node.js and Express, while the frontend uses React with Redux for state management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
        githubLink: "https://github.com/yourusername/ecommerce",
        liveLink: "https://yourecommerce.com",
        category: "Web Development",
        featured: true,
        date: "2024-02-15",
        stats: {
          stars: 189,
          forks: 45,
          views: 890
        }
      },
      {
        id: 3,
        title: "Mobile Fitness App",
        description: "A React Native app for tracking workouts and health metrics",
        longDescription: "This fitness application helps users track their workouts, set goals, and monitor health metrics. It features a clean UI, workout libraries, progress charts, and integrations with health devices via Bluetooth.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["React Native", "Expo", "Firebase", "Redux", "Native Modules"],
        githubLink: "https://github.com/yourusername/fitness-app",
        liveLink: "https://play.google.com/store/apps/details?id=com.yourfitnessapp",
        category: "Mobile Development",
        featured: false,
        date: "2024-01-20",
        stats: {
          stars: 156,
          forks: 34,
          views: 670
        }
      },
      {
        id: 4,
        title: "AI Image Generator",
        description: "Web app that generates images from text prompts using AI",
        longDescription: "This web application uses OpenAI's DALL-E API to generate images from text descriptions. Users can create, save, and share their AI-generated artwork. The app includes features like style selection, resolution options, and a gallery of past creations.",
        image: "https://images.unsplash.com/photo-1615226858104-5e7b3d371e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        technologies: ["JavaScript", "React", "Node.js", "OpenAI API", "Canvas API"],
        githubLink: "https://github.com/yourusername/ai-image-generator",
        liveLink: "https://aiimagegen.com",
        category: "AI & Machine Learning",
        featured: true,
        date: "2024-01-10",
        stats: {
          stars: 312,
          forks: 89,
          views: 1500
        }
      },
      {
        id: 5,
        title: "Real-time Chat Application",
        description: "Feature-rich chat platform with real-time messaging and file sharing",
        longDescription: "A modern chat application built with Socket.io and React. Features include real-time messaging, file sharing, emoji support, typing indicators, and message history. The app uses MongoDB for message persistence and Redis for session management.",
        image: "/images/chat-app.jpg",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
        githubLink: "https://github.com/yourusername/chat-app",
        liveLink: "https://yourchatapp.com",
        category: "Web Development",
        featured: true,
        date: "2024-03-01",
        stats: {
          stars: 245,
          forks: 57,
          views: 1200
        }
      },
      {
        id: 6,
        title: "Blockchain Explorer",
        description: "Comprehensive blockchain explorer with real-time transaction tracking",
        longDescription: "A blockchain explorer that provides detailed information about transactions, blocks, and addresses across multiple networks. Features include real-time updates, advanced filtering, and detailed analytics.",
        image: "/images/blockchain-explorer.jpg",
        technologies: ["React", "Web3.js", "Node.js", "GraphQL", "PostgreSQL"],
        githubLink: "https://github.com/yourusername/blockchain-explorer",
        liveLink: "https://yourexplorer.com",
        category: "Blockchain",
        featured: true,
        date: "2024-02-15",
        stats: {
          stars: 189,
          forks: 45,
          views: 890
        }
      },
      {
        id: 7,
        title: "3D Product Configurator",
        description: "Interactive 3D product visualization and customization tool",
        longDescription: "A WebGL-based 3D product configurator that allows users to customize and visualize products in real-time. Features include texture mapping, color customization, and AR preview.",
        image: "/images/3d-configurator.jpg",
        technologies: ["Three.js", "React", "WebGL", "Node.js"],
        githubLink: "https://github.com/yourusername/3d-configurator",
        liveLink: "https://your3dconfig.com",
        category: "3D Graphics",
        featured: false,
        date: "2024-01-20",
        stats: {
          stars: 156,
          forks: 34,
          views: 670
        }
      },
      {
        id: 8,
        title: "AI Music Generator",
        description: "Neural network-powered music composition tool",
        longDescription: "An AI-powered music generation tool that creates original compositions based on user preferences. Uses deep learning models trained on various music genres to generate unique melodies and harmonies.",
        image: "/images/ai-music.jpg",
        technologies: ["Python", "TensorFlow", "React", "Web Audio API"],
        githubLink: "https://github.com/yourusername/ai-music",
        liveLink: "https://youraimusic.com",
        category: "AI & Machine Learning",
        featured: true,
        date: "2024-01-10",
        stats: {
          stars: 312,
          forks: 89,
          views: 1500
        }
      }
    ];
    
    setProjects(projectsData);
  }, []);

  // Enhanced filtering and sorting logic
  const getFilteredAndSortedProjects = () => {
    let filtered = projects.filter(project => {
      const matchesCategory = selectedFilter === 'All' || project.category === selectedFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = selectedTech.length === 0 || 
                         selectedTech.every(tech => project.technologies.includes(tech));
      return matchesCategory && matchesSearch && matchesTech;
    });

    // Sort projects
    switch(sortBy) {
      case 'stars':
        filtered.sort((a, b) => b.stats.stars - a.stats.stars);
        break;
      case 'views':
        filtered.sort((a, b) => b.stats.views - a.stats.views);
        break;
      case 'date':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    return filtered;
  };

  // Get all unique technologies across projects
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Simplified Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              My Projects
            </span>
          </h1>
          <p className="text-gray-400">Showcasing my latest work and experiments</p>
        </motion.div>

        {/* Compact Controls */}
        <div className="mb-8 max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow min-w-[200px]">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <div className="flex bg-gray-900/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-green-600' : 'hover:bg-gray-700'}`}
                  title="Grid View"
                >
                  <FaThLarge className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-green-600' : 'hover:bg-gray-700'}`}
                  title="List View"
                >
                  <FaList className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-900/50 rounded-lg border border-gray-700 px-3 py-2 pr-8 focus:border-green-500 focus:outline-none"
                >
                  <option value="date">Latest</option>
                  <option value="stars">Most Popular</option>
                  <option value="views">Most Viewed</option>
                </select>
                <FaSort className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Technology Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {allTechnologies.map(tech => (
              <motion.button
                key={tech}
                onClick={() => {
                  setSelectedTech(prev => 
                    prev.includes(tech) 
                      ? prev.filter(t => t !== tech)
                      : [...prev, tech]
                  );
                }}
                className={`px-3 py-1 rounded-full text-xs flex items-center gap-1.5 ${
                  selectedTech.includes(tech) 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TechIcon type={tech} />
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        {selectedFilter === 'All' && !searchTerm && selectedTech.length === 0 && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <FaTrophy className="text-yellow-400" />
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter(p => p.featured)
                .slice(0, 2)
                .map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                    featured={true}
                  />
                ))}
            </div>
          </motion.div>
        )}

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
            }
          >
            {getFilteredAndSortedProjects().map(project => (
              <ProjectCard 
                key={project.id} 
                project={project}
                viewMode={viewMode}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div 
          className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            { icon: FaStar, label: "Total Stars", value: projects.reduce((sum, p) => sum + (p.stats?.stars || 0), 0), color: "text-yellow-400" },
            { icon: FaCode, label: "Projects", value: projects.length, color: "text-blue-400" },
            { icon: FaEye, label: "Total Views", value: projects.reduce((sum, p) => sum + (p.stats?.views || 0), 0), color: "text-green-400" }
          ].map(({ icon: Icon, label, value, color }) => (
            <motion.div 
              key={label}
              className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
              <div className="text-xl font-bold">{value.toLocaleString()}</div>
              <p className="text-sm text-gray-400">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
