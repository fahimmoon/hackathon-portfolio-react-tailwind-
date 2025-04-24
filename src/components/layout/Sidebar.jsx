import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaBriefcase, FaUserTie, FaBars, FaTimes, FaBook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  const menuItems = [
    { icon: AiFillHome, label: 'Home', path: '/' },
    { icon: FaBriefcase, label: 'Projects', path: '/projects' },
    { icon: FaUserTie, label: 'About', path: '/about' },
    { icon: MdEmail, label: 'Contact', path: '/contact' },
    { icon: FaBook, label: 'Blog', path: '/blog' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 left-2 z-[1001] p-2 rounded-lg bg-black/20 border border-hacker/20
                 text-hacker md:hidden backdrop-blur-md hover:bg-hacker/10 transition-colors"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </motion.button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-[998]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ 
          x: isMobile ? (isOpen ? 0 : -200) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed md:sticky top-0 left-0 h-[100dvh] w-[180px] sm:w-[200px] z-[999]
                  bg-gradient-to-b from-black/80 via-hacker-darker/80 to-black/80
                  border-r border-hacker/10 shadow-[4px_0_15px_rgba(0,255,0,0.1)]
                  backdrop-blur-xl overflow-y-auto scrollbar-none
                  ${isMobile ? 'transform' : ''}`}
      >
        {/* Decorative Lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hacker/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-hacker/20 to-transparent" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            height: ['60%', '70%', '60%']
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute right-0 w-px bg-gradient-to-b from-transparent via-hacker/10 to-transparent"
        />

        {/* Main Content */}
        <div className="flex flex-col h-full py-2 sm:py-3">
          {/* Logo */}
          <motion.div 
            className="px-2 sm:px-3 mb-3 sm:mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-hacker/20 via-hacker/20 to-transparent
                           flex items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-hacker to-hacker opacity-0 
                             group-hover:opacity-20 transition-opacity duration-500" />
                <span className="text-hacker font-bold text-lg">F</span>
              </div>
              <span className="text-hacker/90 font-medium text-base">Portfolio</span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 px-1.5 sm:px-2">
            {menuItems.map(({ icon: Icon, label, path }) => (
              <motion.div
                key={path}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={path}
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                  className={`group flex items-center px-2 sm:px-2.5 py-1 sm:py-1.5 mb-1 rounded-lg transition-all duration-300
                          hover:bg-hacker/5 relative overflow-hidden text-xs sm:text-sm
                          ${location.pathname === path 
                            ? 'text-hacker bg-hacker/10' 
                            : 'text-gray-400 hover:text-hacker'}`}
                >
                  <Icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                  <span className="ml-3 font-medium">{label}</span>
                  {location.pathname === path && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-hacker via-hacker to-hacker rounded-r-full
                               shadow-hacker-lg"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 pt-4 mt-auto">
            <div className="pt-3 border-t border-hacker/10">
              <p className="text-[10px] text-gray-500">
                © 2024 Portfolio
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
