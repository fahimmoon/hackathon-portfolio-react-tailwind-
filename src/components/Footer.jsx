import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <footer className="bg-cyber-darker/30 backdrop-blur-sm border-t border-neon-blue/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-8">
            {socialLinks.map(({ icon: Icon, label, url }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg hover:bg-neon-blue/5 transition-colors"
                whileHover={{ y: -2 }}
              >
                <Icon size={20} className="text-gray-400 group-hover:text-neon-blue 
                                       transition-colors group-hover:drop-shadow-neon" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Built with React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
