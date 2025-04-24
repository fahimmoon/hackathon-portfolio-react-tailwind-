import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  WaveSVG, 
  TechGridSVG, 
  DeveloperSVG, 
  HackathonBadgeSVG,
  HeroBgSVG
} from '../components/ui/CreativeSVGs';

// Animated particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div 
          key={particle.id}
          className="absolute rounded-full bg-red-500/20"
          style={{ 
            width: particle.size, 
            height: particle.size, 
            left: `${particle.x}%`, 
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Circuit path SVG for decoration
const CircuitDecoration = () => (
  <svg className="absolute right-0 top-1/4 w-1/4 h-1/2 opacity-10 text-red-500 pointer-events-none" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <motion.path 
        d="M10,50 L50,50 C70,50 80,30 100,30 L150,30 L150,100 L200,100"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path 
        d="M50,150 L100,150 L100,200 L150,200 C170,200 180,220 180,240 L180,300"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.path 
        d="M30,100 L80,100 C100,100 110,120 110,140 L110,250 L160,250 L160,350"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
      />
    </g>
  </svg>
);

const Home = () => {
  const [hoverCard, setHoverCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const controls = useAnimation();

  useEffect(() => {
    // Animate elements when the component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
    
    // Add cursor follow effect
    const handleMouseMove = (e) => {
      const follower = document.getElementById('mouse-follower');
      if (follower) {
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background SVG with animated overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <HeroBgSVG className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        <FloatingParticles />
      </div>
      
      {/* Circuit decoration */}
      <CircuitDecoration />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-6 md:pt-10 pb-10">
        <div className="container mx-auto px-3">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            style={{ opacity: headerOpacity, scale: headerScale }}
          >
            {/* Left Side - Text Content */}
            <motion.div 
              className="md:w-1/2 mb-6 md:mb-0 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.span 
                  className="absolute -left-4 -top-4 text-2xl text-red-500 opacity-70"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {"</>"}
                </motion.span>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="block text-xl text-red-500 mb-1">Welcome to my</span>
                  <span className="relative inline-block">
                    Hackathon
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500/30"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </span>
                  <span className="text-red-500"> Portfolio</span>
                </h1>
              </div>
              
              <motion.p 
                className="text-base mb-5 text-gray-300 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Showcasing innovative projects and creative solutions from various hackathons and coding challenges.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/projects" className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-all duration-300 inline-flex items-center text-sm btn-hover-fx">
                    <span>View Projects</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/about" className="px-5 py-2 border border-red-600 text-red-500 hover:bg-red-600/10 font-medium rounded transition-all duration-300 text-sm relative overflow-hidden group">
                    <span className="relative z-10">About Me</span>
                    <motion.span 
                      className="absolute inset-0 bg-red-600/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Creative SVG */}
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-lg mx-auto perspective">
                <motion.div
                  className="absolute top-0 right-0 -mr-4 -mt-4 text-red-500 svg-glow"
                  animate={{ rotate: [12, -5, 12], y: [0, -10, 0] }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <HackathonBadgeSVG className="w-24 h-24" />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <DeveloperSVG className="w-full h-auto" />
                </motion.div>
                
                {/* Animated sparkles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-red-500/70"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      repeatDelay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave SVG with animation */}
        <div className="absolute bottom-0 left-0 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <WaveSVG className="w-full h-20 transform translate-y-1" />
          </motion.div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="relative z-10 py-12 bg-gradient-to-b from-black/50 to-black/80">
        <div className="container mx-auto px-3">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 relative inline-block">
              Technologies I <span className="text-red-500">Work With</span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              A collection of modern frameworks and tools I use to build innovative solutions.
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div 
              className="w-full max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <TechGridSVG className="w-full h-auto svg-glow" />
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                id: 1,
                title: "Frontend",
                highlight: "Expertise",
                description: "Creating responsive and interactive user interfaces with modern frameworks.",
                items: ["React & Next.js", "Tailwind CSS", "TypeScript"]
              },
              {
                id: 2,
                title: "Backend",
                highlight: "Solutions",
                description: "Building robust and scalable server-side applications and APIs.",
                items: ["Node.js & Express", "MongoDB & PostgreSQL", "GraphQL & REST APIs"]
              },
              {
                id: 3,
                title: "DevOps &",
                highlight: "Tools",
                description: "Streamlining deployment and ensuring high-quality code delivery.",
                items: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS & Cloud Services"]
              }
            ].map((card, index) => (
              <motion.div
                key={card.id}
                className={`bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20 transition-all duration-300 transform-gpu relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "rgba(239, 68, 68, 0.4)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                onHoverStart={() => setHoverCard(card.id)}
                onHoverEnd={() => setHoverCard(null)}
              >
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 right-0 w-8 h-8 transform translate-x-4 -translate-y-4 rotate-45 bg-red-500/20" />
                </motion.div>
                
                <h3 className="text-lg font-bold mb-2">
                  {card.title} <span className="text-red-500">{card.highlight}</span>
                </h3>
                
                <p className="text-gray-300 mb-3 text-sm">{card.description}</p>
                
                <ul className="text-gray-400 space-y-1 text-sm">
                  {card.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ x: -5, opacity: 0.8 }}
                      animate={hoverCard === card.id ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-red-500 rounded-full mr-2"
                        animate={hoverCard === card.id ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-red-500/50"
                  initial={{ width: "0%" }}
                  animate={hoverCard === card.id ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative z-10 py-12 text-center">
        <div className="container mx-auto px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Ready to <span className="text-red-500 relative inline-block">
                Collaborate?
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h2>
            
            <p className="text-base text-gray-300 mb-5">
              Let's create something amazing together. Whether you need a developer for your hackathon team or want to discuss potential projects.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-all duration-300 text-sm inline-flex items-center btn-hover-fx"
              >
                Get in Touch
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </motion.svg>
              </Link>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-red-500/60"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 