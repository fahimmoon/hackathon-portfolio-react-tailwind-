import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CyberpunkAvatar = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00fff922_0%,transparent_70%)]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.3, 0.5]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2300fff9' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Avatar Container */}
      <motion.div
        className="relative w-full h-full rounded-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Visor Glow */}
        <motion.div
          className="absolute top-[40%] left-[20%] w-[60%] h-[5px] bg-neon-blue blur-[8px]"
          animate={{
            opacity: [0.5, 1],
            boxShadow: [
              '0 0 10px #00fff9',
              '0 0 20px #00fff9',
              '0 0 10px #00fff9'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Facial Tattoo Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-[45%] h-[2px] w-[15%] bg-neon-purple"
            style={{
              top: `${45 + i * 5}%`,
            }}
            animate={{
              opacity: [0.5, 1],
              width: ['15%', '18%', '15%']
            }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}

        {/* Holographic Code */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-neon-blue text-xs leading-loose font-mono whitespace-pre"
          >
            {Array(20).fill('01').join('\n')}
          </motion.div>
        </div>
      </motion.div>

      {/* Edge Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0,255,249,0.3)',
            '0 0 40px rgba(0,255,249,0.5)',
            '0 0 20px rgba(0,255,249,0.3)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

export default CyberpunkAvatar;
