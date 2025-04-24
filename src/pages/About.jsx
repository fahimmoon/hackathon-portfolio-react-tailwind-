import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate, FaLaptopCode, 
         FaCode, FaDatabase, FaServer } from 'react-icons/fa';
import { DiReact, DiPython, DiDocker } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiAmazonwebservices, SiKubernetes } from 'react-icons/si';
import InstituteLogo from '../components/ui/InstituteLogo';

const About = () => {
  const personalInfo = {
    name: "Fahim Ahmad",
    email: "moonhunzai83@gmail.com",
    phone: "032622598",
    location: "Pakistan",
    role: "Full Stack Developer",
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "SZABIST Karachi",
      logo: "szabist",
      year: "2022 - 2026",
      status: "Ongoing",
      description: "Pursuing BS in Computer Science with focus on modern software development",
      achievements: [
        "Active member of Computing Society",
        "Participant in university hackathons",
        "Dean's List recognition"
      ]
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      school: "Cadet College Jhang",
      logo: "cadet",
      year: "2020 - 2022",
      description: "Completed intermediate studies with focus on computer science",
      achievements: [
        "Outstanding academic performance",
        "Participated in programming competitions",
        "Member of Computer Science Society"
      ]
    },
    {
      degree: "Matriculation",
      school: "Sedna School and College Hunza",
      logo: "sedna",
      year: "2018 - 2020",
      description: "Completed secondary education with distinction",
      achievements: [
        "Academic Excellence Award",
        "Active participation in STEM activities",
        "School prefect"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-123456"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google",
      year: "2023",
      credentialId: "GCP-789012"
    },
    {
      name: "Azure Developer Associate",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "AZ-204"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      year: "2023",
      description: "First place in AI/ML category"
    },
    {
      title: "Best Developer Award",
      organization: "Tech Innovators Inc",
      year: "2022",
      description: "Recognition for outstanding technical contributions"
    }
  ];

  const interests = [
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps & Automation",
    "Open Source Contribution",
    "Tech Writing",
    "Mentoring"
  ];

  const skillCategories = [
    {
      name: "Frontend",
      color: "#61DAFB",
      icon: DiReact,
      skills: [
        { name: "React/Next.js", level: 95, icon: DiReact, color: "#61DAFB" },
        { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", level: 85, icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      name: "Backend",
      color: "#689F63",
      icon: FaServer,
      skills: [
        { name: "Node.js", level: 92, icon: FaServer, color: "#689F63" },
        { name: "Python", level: 88, icon: DiPython, color: "#3776AB" },
        { name: "Databases", level: 85, icon: FaDatabase, color: "#336791" }
      ]
    },
    {
      name: "DevOps",
      color: "#2496ED",
      icon: DiDocker,
      skills: [
        { name: "Docker", level: 88, icon: DiDocker, color: "#2496ED" },
        { name: "Kubernetes", level: 82, icon: SiKubernetes, color: "#326CE5" },
        { name: "AWS", level: 85, icon: SiAmazonwebservices, color: "#FF9900" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const iconColors = {
    education: "#FF6B6B",
    certifications: "#4ECDC4",
    achievements: "#45B7D1",
    skills: "#96F2D7",
    interests: "#845EF7"
  };

  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay opacity-20"
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
      </div>

      {/* Header Section with Enhanced Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto mb-12 text-center relative"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4 relative"
          whileHover={{ scale: 1.05 }}
          animate={{ 
            textShadow: [
              "0 0 5px rgba(255,255,255,0.1)",
              "0 0 20px rgba(255,255,255,0.3)",
              "0 0 5px rgba(255,255,255,0.1)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          About <span className="text-red-500">Me</span>
        </motion.h1>
        <div className="text-gray-400 max-w-2xl mx-auto space-y-2">
          <p className="font-medium text-xl">{personalInfo.name}</p>
          <p>{personalInfo.role}</p>
          <p className="text-sm text-gray-500">{personalInfo.location}</p>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid gap-8"
      >
        {/* Skills Section with Progress Bars */}
        <motion.section
          variants={itemVariants}
          className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-2xl text-gradient-primary animate-pulse" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon style={{ color: category.color }} className="text-xl" />
                  <h3 className="font-semibold">{category.name}</h3>
                </div>
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon style={{ color: skill.color }} className="text-lg" />
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{ backgroundColor: skill.color }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section with Enhanced Animations */}
        <motion.section
          animate={floatingAnimation}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-transparent hover:border-red-500/30 transition-all"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap 
              className="text-2xl"
              style={{ color: iconColors.education }}
            />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="border border-gray-700/50 rounded-lg p-6 hover:border-red-500/50 transition-all
                           backdrop-blur-sm hover:bg-gray-800/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <InstituteLogo institute={edu.logo} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-red-500">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year} 
                      {edu.status && <span className="ml-2 px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">{edu.status}</span>}
                    </p>
                    <p className="mt-2 text-gray-400">{edu.description}</p>
                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Grid with Card Flip Effect */}
        <motion.section
          animate={floatingAnimation}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 animate-gradient-x" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate 
                className="text-2xl"
                style={{ color: iconColors.certifications }}
              />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-4 hover:border-red-500/50 transition-colors">
                  <h3 className="font-semibold text-red-500">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.year}</p>
                  <p className="text-xs text-gray-600 mt-2">ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaAward className="text-2xl text-red-500" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-700/50 rounded-lg p-4 hover:border-red-500/50 transition-colors">
                <h3 className="font-semibold text-red-500">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.organization}</p>
                <p className="text-sm text-gray-500">{achievement.year}</p>
                <p className="text-sm text-gray-400 mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLaptopCode className="text-2xl text-red-500" />
            <h2 className="text-2xl font-bold">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-gray-700/50 text-sm text-gray-400 hover:border-red-500/50 hover:text-red-500 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;
