const portfolioData = {
  personal: {
    name: "Fahim Ahmad",
    role: "Full Stack Developer",
    experience: "5+ years",
    email: "moonhunzai83@gmail.com",
    phone: "032622598",
    location: "Pakistan",
    bio: "A passionate developer specializing in modern web technologies and creative solutions",
    expertise: [
      "Frontend Development",
      "Backend Architecture",
      "Cloud Solutions",
      "DevOps & CI/CD",
      "AI Integration"
    ]
  },
  skills: {
    frontend: {
      frameworks: ["React", "Next.js", "TypeScript"],
      styling: ["Tailwind CSS", "Framer Motion"],
      core: ["JavaScript", "HTML5", "CSS3"],
      level: "Expert"
    },
    backend: {
      languages: ["Node.js", "Python"],
      databases: ["MongoDB", "PostgreSQL"],
      apis: ["REST", "GraphQL"],
      level: "Advanced"
    },
    devops: {
      tools: ["Docker", "Kubernetes", "AWS"],
      practices: ["CI/CD", "Infrastructure as Code"],
      monitoring: ["Prometheus", "Grafana"],
      level: "Intermediate to Advanced"
    }
  },
  projects: [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics",
      tech: ["React", "Python", "TensorFlow"],
      highlights: ["Machine Learning Integration", "Real-time Data Processing"]
    },
    {
      title: "Cloud-Native E-commerce",
      description: "Scalable microservices-based e-commerce platform",
      tech: ["Node.js", "Docker", "Kubernetes"],
      highlights: ["Microservices Architecture", "High Scalability"]
    }
  ]
};

const contextMemory = {
  lastTopic: null,
  conversationFlow: [],
  userPreferences: new Map()
};

const analyzeIntent = (input) => {
  const intents = {
    greetings: ["hi", "hello", "hey", "howdy", "greetings"],
    skills: ["skills", "technologies", "tech stack", "know", "work with"],
    projects: ["projects", "portfolio", "work", "built", "created", "developed"],
    experience: ["experience", "background", "worked", "company"],
    contact: ["contact", "reach", "email", "social", "connect"],
    availability: ["available", "hire", "work together", "freelance"],
    education: ["education", "study", "degree", "university"],
    personality: ["yourself", "who are you", "about you", "tell me about"]
  };

  // Analyze input for multiple intents
  const matchedIntents = Object.entries(intents).filter(([_, keywords]) =>
    keywords.some(keyword => input.toLowerCase().includes(keyword))
  );

  return matchedIntents.map(([intent]) => intent);
};

const generateResponse = (input) => {
  const intents = analyzeIntent(input);
  const primaryIntent = intents[0] || 'unknown';
  contextMemory.conversationFlow.push({ input, intent: primaryIntent });

  // Smart response generation based on context and multiple intents
  switch (primaryIntent) {
    case 'greetings':
      return `Hello! I'm ${portfolioData.personal.name}'s portfolio assistant. How can I help you learn more about his work and expertise?`;

    case 'skills':
      if (input.includes('frontend')) {
        return `In frontend development, ${portfolioData.personal.name} is expert with ${portfolioData.skills.frontend.frameworks.join(', ')}, along with modern styling solutions like ${portfolioData.skills.frontend.styling.join(', ')}. Would you like to see some frontend projects?`;
      }
      if (input.includes('backend')) {
        return `For backend development, he works with ${portfolioData.skills.backend.languages.join(', ')} and has extensive experience with ${portfolioData.skills.backend.databases.join(', ')} databases. Need more specific details?`;
      }
      return `${portfolioData.personal.name} is a ${portfolioData.personal.role} with expertise in:
${portfolioData.personal.expertise.map(exp => `• ${exp}`).join('\n')}
What specific area would you like to know more about?`;

    case 'projects':
      const projectsList = portfolioData.projects
        .map(p => `• ${p.title}: ${p.description} (Using: ${p.tech.join(', ')})`)
        .join('\n');
      return `Here are some notable projects:\n${projectsList}\n\nWould you like more details about any specific project?`;

    case 'availability':
      return "Yes! Currently available for exciting projects and collaborations. Would you like to discuss a potential project or get contact information?";

    case 'personality':
      return `I'm an AI assistant with deep knowledge of ${portfolioData.personal.name}'s professional background and technical expertise. I can help you learn about his skills, projects, and experience. What would you like to know?`;

    default:
      return "I can tell you about skills, projects, experience, or how to get in touch. What interests you most?";
  }
};

export const getResponse = (input) => {
  // Add conversation context awareness
  const response = generateResponse(input);
  contextMemory.lastTopic = analyzeIntent(input)[0];
  
  return response;
};
