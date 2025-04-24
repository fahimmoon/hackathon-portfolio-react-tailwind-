import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import GlitchElement from './ui/GlitchElement';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com', color: 'neon-blue' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'neon-purple' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com', color: 'neon-pink' }
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'contact@example.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'New York, USA' },
    { icon: FaPhone, label: 'Phone', value: '+1 234 567 890' },
    { icon: FaMapMarkerAlt, label: 'Office', value: '123 Tech Street, NY 10001' },
    { icon: FaClock, label: 'Working Hours', value: 'Mon - Fri: 9AM to 6PM' }
  ];

  const servicesOffered = [
    "Full-Stack Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Technical Consultation",
    "Code Review",
    "Performance Optimization"
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-8 px-4"
    >
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
        >
          Get In Touch
        </motion.h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/30 p-6 rounded-lg border border-neon-blue/20"
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-black/20 border border-neon-blue/20 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-black/20 border border-neon-blue/20 rounded-lg"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 bg-black/20 border border-neon-blue/20 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-neon-blue/20 text-neon-blue border border-neon-blue/20 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-black/30 p-6 rounded-lg border border-neon-purple/20">
              <h2 className="text-xl font-semibold text-neon-purple mb-4">Contact Info</h2>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 mb-4 last:mb-0">
                  <div className="p-3 bg-black/20 rounded-lg">
                    <info.icon className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-black/30 p-6 rounded-lg border border-neon-pink/20">
              <h2 className="text-xl font-semibold text-neon-pink mb-4">Connect</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/20 rounded-lg hover:bg-neon-blue/10"
                  >
                    <social.icon className="text-neon-blue" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
