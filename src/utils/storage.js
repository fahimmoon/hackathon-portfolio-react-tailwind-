import { sanitizeHtml } from './security';

export const secureStorage = {
  set: (key, value) => {
    try {
      const sanitizedValue = typeof value === 'string' 
        ? sanitizeHtml(value)
        : JSON.stringify(value);
      localStorage.setItem(key, sanitizedValue);
    } catch (error) {
      console.error('Storage error:', error);
    }
  },

  get: (key, defaultValue = null) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      console.error('Storage error:', error);
      return defaultValue;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage error:', error);
    }
  }
};
