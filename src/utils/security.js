import DOMPurify from 'dompurify';
import { v4 as uuidv4 } from 'uuid';

// Rate limiting map
const rateLimits = new Map();

// Sanitize HTML content with stricter options
export const sanitizeHtml = (content) => {
  const config = {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
    ALLOW_DATA_ATTR: false,
    ADD_TAGS: [],
    ADD_ATTR: [],
    USE_PROFILES: { html: true }
  };
  return DOMPurify.sanitize(content, config);
};

// Enhanced form data sanitization
export const sanitizeFormData = (data) => {
  const sanitized = {};
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      // Remove any potentially harmful characters
      sanitized[key] = DOMPurify.sanitize(data[key], {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
      }).trim();
    } else {
      sanitized[key] = data[key];
    }
  });
  return sanitized;
};

// Improved email validation
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re && re.test(String(email).toLowerCase());
};

// Rate limiting function
export const checkRateLimit = (key, limit = 5, windowMs = 60000) => {
  const now = Date.now();
  const userHistory = rateLimits.get(key) || [];
  
  // Remove old entries
  const validHistory = userHistory.filter(time => time > now - windowMs);
  
  if (validHistory.length >= limit) {
    return false;
  }
  
  validHistory.push(now);
  rateLimits.set(key, validHistory);
  return true;
};

// Enhanced rate limiting with IP tracking
const ipRequests = new Map();
const RATE_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_IP = 100;

export const checkIPRateLimit = (ip) => {
  const now = Date.now();
  const requests = ipRequests.get(ip) || [];
  
  // Clean old requests
  const validRequests = requests.filter(time => time > now - RATE_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS_PER_IP) {
    return false;
  }
  
  validRequests.push(now);
  ipRequests.set(ip, validRequests);
  return true;
};

// Input validation
export const validateInput = (input, maxLength = 1000, pattern = null) => {
  if (!input || typeof input !== 'string') return false;
  if (input.length > maxLength) return false;
  
  // Check for common malicious patterns
  const maliciousPatterns = [
    /<[^>]*script/i,
    /javascript:/i,
    /data:/i,
    /vbscript:/i,
    /onload=/i,
    /onclick=/i,
    /eval\(/i,
    /expression\(/i
  ];

  if (maliciousPatterns.some(pattern => pattern.test(input))) {
    return false;
  }

  // Test against custom pattern if provided
  if (pattern && !pattern.test(input)) {
    return false;
  }

  return true;
};

// Token validation
export const validateToken = (token) => {
  return token && typeof token === 'string' && token.length === 32;
};

// Session Security
export const createSecureSession = () => {
  return {
    id: uuidv4(),
    created: Date.now(),
    expires: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    csrfToken: uuidv4()
  };
};

// Content security policies
export const getCSP = () => {
  return {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'frame-ancestors': ["'none'"],
    'form-action': ["'self'"],
    'base-uri': ["'self'"],
    'object-src': ["'none'"]
  };
};

// Password strength checker
export const checkPasswordStrength = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return {
    isStrong: password.length >= minLength &&
              hasUppercase &&
              hasLowercase &&
              hasNumbers &&
              hasSpecialChars,
    requirements: {
      minLength: password.length >= minLength,
      hasUppercase,
      hasLowercase,
      hasNumbers,
      hasSpecialChars
    }
  };
};

// Secure headers generator
export const getSecureHeaders = () => ({
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp'
});
