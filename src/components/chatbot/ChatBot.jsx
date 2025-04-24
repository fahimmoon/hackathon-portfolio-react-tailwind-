import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRobot, FaUser, FaPaperPlane } from 'react-icons/fa';
import { getResponse } from './chatbotUtils';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your portfolio assistant. Feel free to ask me anything about skills, projects, or experience!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions] = useState([
    "What skills do you have?",
    "Show me your projects",
    "Are you available for work?",
    "How can I contact you?"
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const response = getResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] bg-gray-900/95 
                   backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl 
                   flex flex-col overflow-hidden z-50"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot className="text-red-500" />
              <h3 className="font-semibold">Portfolio Assistant</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-2 ${
                  msg.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' ? 'bg-red-500/20' : 'bg-gray-700/50'
                }`}>
                  {msg.type === 'user' ? <FaUser /> : <FaRobot />}
                </div>
                <div className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                  msg.type === 'user' 
                    ? 'bg-red-500/20 text-white' 
                    : 'bg-gray-800/50 text-gray-200'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                  <FaRobot />
                </div>
                <div className="flex gap-1">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>•</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>•</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setInput(suggestion)}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800/50 
                             text-gray-400 hover:bg-gray-700/50 transition-colors"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 focus:outline-none 
                         focus:ring-1 focus:ring-red-500 border border-gray-700"
              />
              <button
                type="submit"
                className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
