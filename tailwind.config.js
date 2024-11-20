const { join } = require('path');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include your source files
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          divider: '#475569',
          highlight: '#93C5FD',
          accentSecondary: '#60A5FA',
          accentPrimary: '#3B82F6',
          textSecondary: '#94A3B8',
          textPrimary: '#F1F5F9',
          secondaryBackground: '#334155',
          background: '#1E293B',
        },
        light: {
          divider: '#E2E8F0',
          highlight: '#93C5FD',
          accentSecondary: '#60A5FA',
          accentPrimary: '#3B82F6',
          textSecondary: '#64748B',
          textPrimary: '#1E293B',
          secondaryBackground: '#FFFFFF',
          background: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
};
