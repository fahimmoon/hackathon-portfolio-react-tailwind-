import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, 
  FaPhone, FaClock, FaDiscord, FaSkype, FaTelegram, FaWhatsapp,
  FaPaperPlane 
} from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import Captcha from '../components/ui/Captcha';
import { sanitizeFormData, validateEmail, validateInput, checkRateLimit, checkIPRateLimit } from '../utils/security';

const Contact = () => {
  const [formState, setFormState] = useState(() => {
    const saved = localStorage.getItem('contactFormData');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formState));
  }, [formState]);

  const clearSavedData = () => {
    localStorage.removeItem('contactFormData');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced security checks
    if (!checkIPRateLimit(window.clientIP)) {
      toast.error('Too many requests. Please try again later.');
      return;
    }

    if (!isCaptchaVerified) {
      toast.error('Please verify the CAPTCHA first');
      return;
    }

    // Enhanced input validation
    const validations = {
      name: validateInput(formState.name, 100, /^[a-zA-Z\s]{2,100}$/),
      email: validateInput(formState.email, 100, /^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      subject: validateInput(formState.subject, 200),
      message: validateInput(formState.message, 1000)
    };

    const invalidFields = Object.entries(validations)
      .filter(([_, isValid]) => !isValid)
      .map(([field]) => field);

    if (invalidFields.length > 0) {
      toast.error(`Invalid input in: ${invalidFields.join(', ')}`);
      return;
    }

    // Sanitize form data
    const sanitizedData = sanitizeFormData(formState);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          ...sanitizedData,
          timestamp: Date.now(),
          captchaToken: isCaptchaVerified
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      toast.success('Message sent successfully!');
      clearSavedData();
      setIsCaptchaVerified(false);
    } catch (error) {
      toast.error(error.message || 'Failed to send message');
      console.error('Contact form error:', error);
    }
  };

  const socialLinks = [
    { icon: FaGithub, color: "#333", label: "GitHub", url: "https://github.com" },
    { icon: FaLinkedin, color: "#0077B5", label: "LinkedIn", url: "https://linkedin.com" },
    { icon: FaTwitter, color: "#1DA1F2", label: "Twitter", url: "https://twitter.com" },
    { icon: FaDiscord, color: "#7289DA", label: "Discord", url: "#" },
    { icon: FaSkype, color: "#00AFF0", label: "Skype", url: "#" },
    { icon: FaTelegram, color: "#0088cc", label: "Telegram", url: "#" },
    { icon: FaWhatsapp, color: "#25D366", label: "WhatsApp", url: "#" }
  ];

  const contactInfo = [
    { icon: FaEnvelope, color: "#FF4B4B", label: "Email", value: "moonhunzai83@gmail.com" },
    { icon: FaMapMarkerAlt, color: "#4CAF50", label: "Location", value: "Pakistan" },
    { icon: FaPhone, color: "#2196F3", label: "Phone", value: "032622598" },
    { icon: FaClock, color: "#FFC107", label: "Working Hours", value: "Mon - Fri: 9AM to 6PM" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 relative overflow-hidden">
      <Toaster position="top-right" />
      
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

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message below or reach out through any of my social channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                <textarea
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="Your message here..."
                />
              </div>

              <Captcha onVerify={setIsCaptchaVerified} />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isCaptchaVerified}
                className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors
                          ${isCaptchaVerified 
                            ? 'bg-red-600 hover:bg-red-700 text-white' 
                            : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
              >
                <FaPaperPlane className="text-sm" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </div>
                    <span className="text-xs text-gray-400">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
