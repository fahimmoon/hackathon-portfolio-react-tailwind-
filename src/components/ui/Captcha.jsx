import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const generateCaptcha = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

const Captcha = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
    setUserInput('');
    setIsValid(false);
    setError('');
    onVerify(false);
  };

  const handleSubmit = () => {
    if (userInput.toUpperCase() === captchaText) {
      setIsValid(true);
      setError('');
      onVerify(true);
    } else {
      setError('CAPTCHA does not match');
      setIsValid(false);
      onVerify(false);
      refreshCaptcha();
    }
    setUserInput('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full space-y-3"
    >
      {/* CAPTCHA Display */}
      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="font-mono text-xl tracking-wider select-none" 
             style={{ 
               color: '#e5e7eb',
               textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
               letterSpacing: '0.5em'
             }}>
          {captchaText}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={refreshCaptcha}
          className="px-2 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded"
          type="button"
        >
          Refresh
        </motion.button>
      </div>

      {/* Input and Verify Button */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter CAPTCHA"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 
                   focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm"
          type="button"
        >
          Verify
        </motion.button>
      </div>

      {/* Status Messages */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isValid && <p className="text-green-500 text-sm">CAPTCHA verified successfully!</p>}
    </motion.div>
  );
};

export default Captcha;
