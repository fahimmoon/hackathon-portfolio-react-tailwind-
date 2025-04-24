import React, { useState, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Sidebar from './components/layout/Sidebar';
import PageTransition from './components/layout/PageTransition';
import CyberBackground from './components/ui/CyberBackground';
import ScrollProgress from './components/layout/ScrollProgress';
import IntroAnimation from './components/IntroAnimation';
import ChatBot from './components/chatbot/ChatBot';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/ProjectsPage'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-16 h-16 rounded-full border-2 border-neon-blue/30"
    >
      <div className="w-full h-full rounded-full border-t-2 border-neon-blue
                    animate-spin" />
    </motion.div>
  </div>
);

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);

  // Set sidebar to be open by default on desktop
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };
    
    // Check on mount
    checkWidth();
    
    // Check on resize
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-screen bg-cyber-dark text-white font-poppins overflow-x-hidden">
        <Toaster position="top-right" />
        {/* Intro Animation */}
        {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
        
        <ScrollProgress />
        
        {/* Mouse Follower */}
        <div className="fixed w-3 h-3 bg-neon-blue/30 rounded-full blur-sm
                      pointer-events-none z-50 transition-all duration-200
                      hidden md:block" 
             style={{ left: '-100px', top: '-100px' }}
             id="mouse-follower" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen w-full"
          >
            {/* Sidebar Component */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
            
            {/* Main Content - adjusted spacing for more compact layout */}
            <div className={`min-h-screen transition-all duration-300 ease-in-out
                           ${isSidebarOpen ? 'md:pl-[250px]' : 'pl-0'}`}>
              <main className="overflow-x-hidden w-full pt-[50px] md:pt-0">
                <div className="max-w-[1200px] mx-auto px-3 py-2">
                  <Suspense fallback={<PageLoader />}>
                    <AnimatePresence mode="wait">
                      <Routes>
                        <Route element={<PageTransition />}>
                          <Route path="/" element={<Home />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/blog" element={<Blog />} />
                          <Route path="*" element={<NotFound />} />
                        </Route>
                      </Routes>
                    </AnimatePresence>
                  </Suspense>
                  <Footer />
                </div>
              </main>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Chatbot Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChatOpen(!isChatOpen)}
          className="fixed bottom-4 right-4 z-50 p-4 bg-red-500 hover:bg-red-600 
                   rounded-full shadow-lg text-white"
        >
          <FaRobot size={24} />
        </motion.button>

        {/* Chatbot Component */}
        <ChatBot isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
      </div>
    </Router>
  );
}

// Add mouse follower logic
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    const follower = document.getElementById('mouse-follower');
    if (follower) {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    }
  });
}

export default App;
