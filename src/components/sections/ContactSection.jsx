import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-b from-black/50 to-transparent
                   border border-neon-blue/10 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8
                       bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form className="space-y-6">
            {/* Form fields */}
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-neon-blue/20
                         text-gray-300 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20
                         transition-all duration-300"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-neon-blue/10 text-neon-blue
                       border border-neon-blue/20 hover:bg-neon-blue/20 
                       transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            {/* Add social links */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
