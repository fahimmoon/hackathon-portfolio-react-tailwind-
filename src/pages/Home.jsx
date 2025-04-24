import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaProjectDiagram,
         FaUsers, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/cards/ProjectCard';
import BlogCard from '../components/cards/BlogCard';
import VisitorCounter from '../components/VisitorCounter';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Modern and responsive web applications",
      color: "#FF4B4B",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: FaRocket,
      title: "DevOps Solutions",
      description: "Streamlined deployment and CI/CD",
      color: "#0EA5E9",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: FaBrain,
      title: "AI Integration",
      description: "Smart solutions with AI/ML",
      color: "#8B5CF6",
      gradient: "from-purple-500/20 to-violet-500/20"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: FaProjectDiagram, color: "#FF4B4B" },
    { label: "Happy Clients", value: "30+", icon: FaUsers, color: "#0EA5E9" },
    { label: "Technologies", value: "15+", icon: FaLightbulb, color: "#8B5CF6" }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization and predictive analytics platform",
      image: "https://source.unsplash.com/600x400?dashboard",
      tags: ["React", "Python", "TensorFlow"],
      demo: "https://demo.example.com",
      github: "https://github.com"
    },
    {
      id: 2,
      title: "Cloud-Native E-commerce Platform",
      description: "Scalable and modern e-commerce solution built with microservices",
      image: "https://source.unsplash.com/600x400?ecommerce",
      tags: ["Node.js", "Docker", "Kubernetes"],
      demo: "https://demo.example.com",
      github: "https://github.com"
    },
    {
      id: 3,
      title: "Blockchain-based Supply Chain",
      description: "Transparent and secure supply chain management system",
      image: "https://source.unsplash.com/600x400?blockchain",
      tags: ["Solidity", "React", "Web3.js"],
      demo: "https://demo.example.com",
      github: "https://github.com"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Applications with Microservices",
      excerpt: "Learn how to design and implement scalable microservices architecture...",
      date: "2024-03-01",
      readTime: "5 min read",
      comments: 12
    },
    {
      title: "Machine Learning in Production: Best Practices",
      excerpt: "Discover the best practices for deploying ML models in production...",
      date: "2024-02-28",
      readTime: "8 min read",
      comments: 18
    },
    {
      title: "Modern Frontend Architecture Patterns",
      excerpt: "Exploring modern frontend architecture patterns and best practices...",
      date: "2024-02-25",
      readTime: "6 min read",
      comments: 15
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <VisitorCounter />
      {/* Animated Background Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            background: `radial-gradient(circle, ${
              ['#FF0080', '#7928CA', '#FF4D4D', '#0070F3', '#00DFD8'][i]
            } 0%, transparent 70%)`
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Services Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 animate-gradient-x" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto relative z-10"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12"
            >
              What I <span className="text-red-500">Offer</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} 
                             backdrop-blur-sm border border-gray-700/50 relative group`}
                >
                  <div className="absolute inset-0 bg-gray-800/50 rounded-xl transition-opacity group-hover:opacity-0" />
                  <div className="relative z-10">
                    <service.icon className="text-4xl mb-4" style={{ color: service.color }} />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        `0 0 20px ${stat.color}20`,
                        `0 0 60px ${stat.color}40`,
                        `0 0 20px ${stat.color}20`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 
                             flex items-center justify-center"
                  >
                    <stat.icon className="text-2xl transition-transform group-hover:scale-110" 
                              style={{ color: stat.color }} />
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold mb-2"
                    animate={{ color: [stat.color, "#fff", stat.color] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold">
                Featured <span className="text-red-500">Projects</span>
              </motion.h2>
              <motion.a
                variants={itemVariants}
                href="/projects"
                className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
              >
                View All <FaArrowRight className="text-sm" />
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-transparent">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold">
                Latest <span className="text-red-500">Articles</span>
              </motion.h2>
              <motion.a
                variants={itemVariants}
                href="/blog"
                className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
              >
                View All <FaArrowRight className="text-sm" />
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
