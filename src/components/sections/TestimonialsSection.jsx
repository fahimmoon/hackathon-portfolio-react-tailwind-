import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Tech Lead",
      text: "Incredible attention to detail and creative solutions.",
      image: "/path-to-image.jpg"
    },
    // Add more testimonials
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-dark via-cyber-darker to-cyber-black" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12
                   bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          Client Testimonials
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 100
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${activeIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              {/* Testimonial Content */}
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                         ${activeIndex === index 
                           ? 'bg-neon-blue w-6' 
                           : 'bg-neon-blue/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
