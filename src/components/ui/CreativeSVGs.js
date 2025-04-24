import React from 'react';

// Abstract Wave SVG
export const WaveSVG = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 1440 320" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill="#e50914" 
      fillOpacity="0.3" 
      d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    >
      <animate 
        attributeName="d" 
        dur="10s" 
        repeatCount="indefinite"
        values="
          M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,176C672,192,768,160,864,149.3C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </path>
  </svg>
);

// Tech Icons Grid SVG
export const TechGridSVG = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* React Icon */}
    <g transform="translate(40, 40)" filter="url(#glow)">
      <circle cx="0" cy="0" r="5" fill="#61DAFB" />
      <ellipse cx="0" cy="0" rx="15" ry="5" stroke="#61DAFB" fill="none" strokeWidth="1" transform="rotate(0)">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0" 
          to="360" 
          dur="8s" 
          repeatCount="indefinite" 
        />
      </ellipse>
      <ellipse cx="0" cy="0" rx="15" ry="5" stroke="#61DAFB" fill="none" strokeWidth="1" transform="rotate(60)">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="60" 
          to="420" 
          dur="8s" 
          repeatCount="indefinite" 
        />
      </ellipse>
      <ellipse cx="0" cy="0" rx="15" ry="5" stroke="#61DAFB" fill="none" strokeWidth="1" transform="rotate(120)">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="120" 
          to="480" 
          dur="8s" 
          repeatCount="indefinite" 
        />
      </ellipse>
    </g>
    
    {/* Node.js Icon */}
    <g transform="translate(100, 40)" filter="url(#glow)">
      <path d="M-10,-5 L0,-10 L10,-5 L10,5 L0,10 L-10,5 Z" fill="#8CC84B" />
      <path d="M-2,0 L-2,7 M2,0 L2,7 M0,-7 L0,0" stroke="#333" strokeWidth="1" />
    </g>
    
    {/* Firebase Icon */}
    <g transform="translate(160, 40)" filter="url(#glow)">
      <path d="M-5,10 L-2,-10 L3,0 Z" fill="#FFA000" />
      <path d="M-5,10 L3,0 L8,10 Z" fill="#F57C00" />
      <path d="M-5,10 L8,10 L2,-5 Z" fill="#FFCA28" />
    </g>
    
    {/* Vue Icon */}
    <g transform="translate(40, 100)" filter="url(#glow)">
      <path d="M-10,0 L0,-10 L10,0 L5,10 L-5,10 Z" fill="#41B883" />
      <path d="M-5,0 L0,-5 L5,0 L2,5 L-2,5 Z" fill="#35495E" />
    </g>
    
    {/* MongoDB Icon */}
    <g transform="translate(100, 100)" filter="url(#glow)">
      <path d="M0,-10 C3,-10 5,-5 5,0 C5,5 0,10 0,10 C0,10 -5,5 -5,0 C-5,-5 -3,-10 0,-10 Z" fill="#4DB33D" />
    </g>
    
    {/* GraphQL Icon */}
    <g transform="translate(160, 100)" filter="url(#glow)">
      <path d="M0,-10 L8.7,-5 L8.7,5 L0,10 L-8.7,5 L-8.7,-5 Z" fill="#E535AB" fillOpacity="0.8" />
    </g>
    
    {/* Tailwind Icon */}
    <g transform="translate(40, 160)" filter="url(#glow)">
      <path d="M-10,0 C-10,-5 -5,-5 -5,0 C-5,5 0,5 0,0 C0,-5 5,-5 5,0 C5,5 10,5 10,0" stroke="#38B2AC" fill="none" strokeWidth="1.5" />
    </g>
    
    {/* Docker Icon */}
    <g transform="translate(100, 160)" filter="url(#glow)">
      <rect x="-10" y="-2" width="5" height="4" fill="#2496ED" />
      <rect x="-4" y="-2" width="5" height="4" fill="#2496ED" />
      <rect x="2" y="-2" width="5" height="4" fill="#2496ED" />
      <rect x="-10" y="3" width="5" height="4" fill="#2496ED" />
      <rect x="-4" y="3" width="5" height="4" fill="#2496ED" />
      <path d="M-12,-5 L12,-5 L12,10 L-12,10 Z" stroke="#2496ED" fill="none" strokeWidth="1" />
    </g>
    
    {/* TypeScript Icon */}
    <g transform="translate(160, 160)" filter="url(#glow)">
      <rect x="-10" y="-10" width="20" height="20" fill="#3178C6" />
      <text x="-5" y="5" fill="white" fontFamily="Arial" fontSize="15" fontWeight="bold">TS</text>
    </g>
    
    {/* Connection Lines */}
    <g stroke="#777" strokeWidth="0.5" strokeDasharray="3,3">
      <line x1="40" y1="40" x2="100" y2="40" />
      <line x1="100" y1="40" x2="160" y2="40" />
      <line x1="40" y1="40" x2="40" y2="100" />
      <line x1="40" y1="100" x2="40" y2="160" />
      <line x1="40" y1="100" x2="100" y2="100" />
      <line x1="100" y1="100" x2="160" y2="100" />
      <line x1="160" y1="40" x2="160" y2="100" />
      <line x1="160" y1="100" x2="160" y2="160" />
      <line x1="40" y1="160" x2="100" y2="160" />
      <line x1="100" y1="160" x2="160" y2="160" />
      <line x1="100" y1="40" x2="100" y2="100" />
      <line x1="100" y1="100" x2="100" y2="160" />
    </g>
    
    {/* Pulse Animation */}
    <circle cx="100" cy="100" r="0" fill="none" stroke="#e50914" strokeWidth="1">
      <animate 
        attributeName="r" 
        from="0" 
        to="100" 
        dur="3s" 
        repeatCount="indefinite"
      />
      <animate 
        attributeName="opacity" 
        from="1" 
        to="0" 
        dur="3s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Developer Coding SVG
export const DeveloperSVG = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 300 200" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Computer */}
    <rect x="75" y="60" width="150" height="100" rx="5" fill="#333" />
    <rect x="85" y="70" width="130" height="80" rx="2" fill="#1E1E1E" />
    
    {/* Screen Content: Code */}
    <g fontSize="3" fontFamily="monospace" fill="#3C9">
      <text x="90" y="80">function hackathon() {'{'}</text>
      <text x="95" y="85">&lt;Portfolio</text>
      <text x="110" y="90">title="MyProjects"</text>
      <text x="110" y="95">description="Coding Adventures"</text>
      <text x="95" y="100">/&gt;</text>
      <text x="95" y="110">const projects = [</text>
      <text x="100" y="115">{'{'}"name": "WebApp", "tech": "React"{'},'}</text>
      <text x="100" y="120">{'{'}"name": "API", "tech": "Node.js"{'},'}</text>
      <text x="100" y="125">{'{'}"name": "Mobile", "tech": "Flutter"{'}'}</text>
      <text x="95" y="130">];</text>
      <text x="95" y="140">return <tspan fill="#E50914">awesome</tspan>;</text>
      <text x="90" y="145">{'}'}</text>
    </g>
    
    {/* Cursor Blink */}
    <rect x="160" y="140" width="3" height="3" fill="#fff">
      <animate 
        attributeName="opacity" 
        values="0;1;1;0" 
        dur="1.5s" 
        repeatCount="indefinite" 
      />
    </rect>
    
    {/* Computer Stand */}
    <path d="M125,160 L175,160 L185,180 L115,180 Z" fill="#444" />
    <rect x="140" y="180" width="20" height="3" fill="#333" />
    
    {/* Coffee Cup */}
    <g transform="translate(230, 150)">
      <path d="M-10,0 L-8,-15 L8,-15 L10,0 Z" fill="#795548" />
      <ellipse cx="0" cy="0" rx="10" ry="3" fill="#5D4037" />
      <path d="M10,-10 L15,-10 Q18,-12 15,-15 L10,-15" fill="none" stroke="#795548" strokeWidth="1" />
      <ellipse cx="0" cy="-15" rx="8" ry="2" fill="#D7CCC8" />
      <path d="M-3,-15 C-3,-20 3,-20 3,-15" stroke="#D7CCC8" strokeWidth="1" fill="none" />
    </g>
    
    {/* Plant */}
    <g transform="translate(50, 140)">
      <rect x="-7" y="0" width="14" height="15" rx="2" fill="#4E342E" />
      <path d="M0,0 L0,-15 M0,-5 L-7,-10 M0,-5 L7,-12 M0,-10 L-5,-15 M0,-10 L5,-18" stroke="#4CAF50" strokeWidth="1" />
      <circle cx="-7" cy="-10" r="2" fill="#81C784" />
      <circle cx="7" cy="-12" r="2" fill="#81C784" />
      <circle cx="-5" cy="-15" r="2" fill="#81C784" />
      <circle cx="5" cy="-18" r="2" fill="#81C784" />
      <circle cx="0" cy="-15" r="2" fill="#81C784" />
    </g>
    
    {/* Animated Waves for Creative Coding Vibes */}
    <g opacity="0.2">
      <path d="M40,120 Q60,110 80,120 Q100,130 120,120 Q140,110 160,120 Q180,130 200,120 Q220,110 240,120 Q260,130 280,120" 
        stroke="#e50914" 
        fill="none" 
        strokeWidth="1">
        <animate 
          attributeName="d" 
          dur="10s" 
          repeatCount="indefinite"
          values="
            M40,120 Q60,110 80,120 Q100,130 120,120 Q140,110 160,120 Q180,130 200,120 Q220,110 240,120 Q260,130 280,120;
            M40,120 Q60,130 80,120 Q100,110 120,120 Q140,130 160,120 Q180,110 200,120 Q220,130 240,120 Q260,110 280,120;
            M40,120 Q60,110 80,120 Q100,130 120,120 Q140,110 160,120 Q180,130 200,120 Q220,110 240,120 Q260,130 280,120"
        />
      </path>
    </g>

    {/* Some floating particles */}
    <circle cx="50" cy="50" r="1" fill="#e50914">
      <animate attributeName="cy" from="50" to="30" dur="3s" repeatCount="indefinite" />
      <animate attributeName="cx" from="50" to="55" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="1" to="0" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="70" r="1" fill="#e50914">
      <animate attributeName="cy" from="70" to="50" dur="4s" repeatCount="indefinite" />
      <animate attributeName="cx" from="250" to="245" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="30" r="1" fill="#e50914">
      <animate attributeName="cy" from="30" to="10" dur="5s" repeatCount="indefinite" />
      <animate attributeName="cx" from="150" to="155" dur="5s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="1" to="0" dur="5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Hackathon Badge SVG
export const HackathonBadgeSVG = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 120 120" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#db0000" />
        <stop offset="100%" stopColor="#831010" />
      </linearGradient>
      <filter id="glow-badge">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Badge Background */}
    <circle cx="60" cy="60" r="50" fill="url(#badge-gradient)" />
    <circle cx="60" cy="60" r="45" fill="#220b0b" stroke="#db0000" strokeWidth="1" />
    
    {/* Badge Star */}
    <path d="M60,25 L67,45 L88,45 L71,58 L78,78 L60,65 L42,78 L49,58 L32,45 L53,45 Z" 
      fill="#e50914" 
      filter="url(#glow-badge)" 
    >
      <animate 
        attributeName="opacity" 
        values="0.8;1;0.8" 
        dur="3s" 
        repeatCount="indefinite" 
      />
    </path>
    
    {/* Badge Text */}
    <g fontSize="10" fontFamily="Arial" fontWeight="bold" fill="white" textAnchor="middle">
      <text x="60" y="90">HACKATHON</text>
      <text x="60" y="100" fontSize="8">PORTFOLIO</text>
    </g>
    
    {/* Badge Details */}
    <circle cx="60" cy="60" r="52" fill="none" stroke="#e50914" strokeWidth="1" strokeDasharray="3,3">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="0 60 60" 
        to="360 60 60" 
        dur="30s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Hero Bg Animation SVG
export const HeroBgSVG = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(129, 16, 16, 0.1)" />
        <stop offset="100%" stopColor="rgba(229, 9, 20, 0.05)" />
      </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#hero-gradient)" />
    
    {/* Grid Lines */}
    <g stroke="#e50914" strokeWidth="0.2" opacity="0.2">
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 40} x2="1440" y2={i * 40} />
      ))}
      {Array.from({ length: 40 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="800" />
      ))}
    </g>
    
    {/* Animated Particles */}
    {Array.from({ length: 20 }).map((_, i) => {
      const randomX = Math.floor(Math.random() * 1440);
      const randomY = Math.floor(Math.random() * 800);
      const randomSize = Math.floor(Math.random() * 3) + 1;
      const randomDuration = Math.floor(Math.random() * 30) + 20;
      const randomDelay = Math.floor(Math.random() * 10);
      
      return (
        <circle
          key={`p-${i}`}
          cx={randomX}
          cy={randomY}
          r={randomSize}
          fill="#e50914"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur={`${randomDuration}s`}
            repeatCount="indefinite"
            begin={`${randomDelay}s`}
          />
        </circle>
      );
    })}
    
    {/* Code-like decoration elements */}
    <g fill="none" stroke="#e50914" strokeWidth="0.5" opacity="0.2">
      <path d="M200,200 L250,200 L250,230 L220,230 L220,250 L300,250 L300,200" />
      <path d="M800,300 L850,300 L850,350 L800,350 Z" />
      <path d="M1000,500 L1050,500 L1050,450 L1100,450 L1100,500 L1150,500" />
      <path d="M400,600 L400,650 L500,650 L500,700" />
    </g>
  </svg>
);

// Export all SVGs
const CreativeSVGs = {
  WaveSVG,
  TechGridSVG,
  DeveloperSVG,
  HackathonBadgeSVG,
  HeroBgSVG
};

export default CreativeSVGs; 