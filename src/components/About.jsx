import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import GlitchElement from './ui/GlitchElement';

const About = () => {
  const skills = [
    { icon: FaReact, name: 'React', level: 90 },
    { icon: FaNodeJs, name: 'Node.js', level: 85 },
    { icon: SiTypescript, name: 'TypeScript', level: 80 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 95 },
    { icon: FaDatabase, name: 'Databases', level: 85 },
    { icon: BiCodeAlt, name: 'System Design', level: 80 },
    { icon: FaCode, name: 'Next.js', level: 88 },
    { icon: FaCode, name: 'GraphQL', level: 82 },
    { icon: FaCode, name: 'AWS', level: 78 },
    { icon: FaCode, name: 'Docker', level: 85 }
  ];

  const experiences = [
    {
      year: '2022 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of enterprise-level applications using cutting-edge technologies.'
    },
    {
      year: '2020 - 2022',
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications with modern JavaScript frameworks.'
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Technologies" }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      year: "2018 - 2020",
      description: "Specialized in Software Engineering and AI"
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "Digital Institute",
      year: "2014 - 2018",
      description: "Focus on Web Technologies and Systems Design"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
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
          About Me
        </motion.h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-black/30 p-6 rounded-lg border border-neon-blue/20">
              <h2 className="text-xl font-semibold text-neon-blue mb-4">Experience</h2>
              {/* Experience content */}
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-neon-blue">{exp.year}</p>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-black/30 p-6 rounded-lg border border-neon-purple/20">
              <h2 className="text-xl font-semibold text-neon-purple mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-neon-blue" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neon-blue"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
