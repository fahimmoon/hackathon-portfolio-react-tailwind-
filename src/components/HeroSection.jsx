import { motion } from 'framer-motion';
import TypedText from './ui/TypedText';
import CyberpunkAvatar from './ui/CyberpunkAvatar';
import { Link } from 'react-router-dom';
import GlitchElement from './ui/GlitchElement';

const HeroSection = () => {
  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: { 
      opacity: [0.4, 0.6, 0.4],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-[70vh] sm:min-h-[80vh] flex items-center relative overflow-hidden pt-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlitchElement rotateAngle={0} />
        <GlitchElement rotateAngle={45} />
        <div className="absolute top-20 right-10 w-32 h-[1px] bg-gradient-to-r from-neon-blue/20 to-transparent" />
        <div className="absolute top-40 left-20 w-[1px] h-32 bg-gradient-to-b from-neon-purple/20 to-transparent" />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 right-[20%] w-2 h-2 rounded-full bg-neon-blue/30 blur-sm"
        />
      </div>

      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-black to-cyber-dark" />
        
        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />

        {/* Animated Glow Spots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full blur-[100px]"
            style={{
              background: i === 0 ? 'radial-gradient(circle, rgba(0,255,249,0.2) 0%, transparent 70%)' :
                       i === 1 ? 'radial-gradient(circle, rgba(189,0,255,0.15) 0%, transparent 70%)' :
                                'radial-gradient(circle, rgba(0,255,159,0.15) 0%, transparent 70%)',
              top: `${30 + i * 20}%`,
              left: `${20 + i * 30}%`,
              width: '400px',
              height: '400px',
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-3 py-4 sm:py-6 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                     bg-gradient-to-r from-neon-blue/10 to-neon-purple/10
                     border border-neon-blue/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] sm:text-xs text-neon-blue font-medium">
              Available for Work
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
            >
              Hi, I'm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r 
                           from-neon-blue via-neon-purple to-neon-pink
                           animate-gradient-x">
                Fahim Ahmad
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-400 max-w-lg"
            >
              <TypedText 
                text="A passionate full-stack developer specializing in crafting premium digital experiences with cutting-edge technologies." 
                speed={30}
              />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-sm font-medium rounded-lg
                         bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink
                         hover:shadow-lg hover:shadow-neon-blue/20 
                         transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, borderColor: 'rgba(0,255,249,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-sm font-medium rounded-lg
                         border border-neon-blue/20 hover:bg-neon-blue/5
                         transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Replace Avatar with Simple Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-64 h-64">
            {/* Simple Geometric Design */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Inner Circle */}
            <motion.div 
              className="absolute inset-4 bg-gradient-to-br from-red-500/30 to-purple-500/30 rounded-full backdrop-blur-sm border border-white/10"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              >
                FA
              </motion.div>
            </div>
          </div>

          {/* Background Glow */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 blur-3xl bg-gradient-to-tr from-red-500/20 via-purple-500/20 to-blue-500/20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
