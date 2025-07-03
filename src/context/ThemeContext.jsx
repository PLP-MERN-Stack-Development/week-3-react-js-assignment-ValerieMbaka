import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create the theme context
const ThemeContext = createContext();

/**
 * Custom hook to use the theme context
 * @returns {Object} - Theme context value
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * ThemeProvider component for managing theme state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Provider content
 * @returns {JSX.Element} - ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If not, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update localStorage and apply theme class when isDarkMode changes
  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply or remove dark class on document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Context value
  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;