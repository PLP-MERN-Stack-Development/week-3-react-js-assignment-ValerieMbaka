import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Navbar component for site navigation
 * @param {Object} props - Component props
 * @param {string} props.title - Site title
 * @param {function} props.toggleTheme - Function to toggle theme
 * @param {boolean} props.isDarkMode - Whether dark mode is active
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = ({
                    title = 'PLP Task Manager',
                    toggleTheme,
                    isDarkMode = false
                }) => {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h1>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <a href="#" className="border-b-2 border-blue-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                                Home
                            </a>
                            <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Tasks
                            </a>
                            <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                API Data
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Button
                            onClick={toggleTheme}
                            variant="secondary"
                            size="sm"
                            className="flex items-center"
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDarkMode ? (
                                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  Light Mode
                </span>
                            ) : (
                                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Dark Mode
                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu, show/hide based on menu state */}
            <div className="md:hidden">
                <div className="pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-500 text-blue-700 dark:text-white block pl-3 pr-4 py-2 text-base font-medium">
                        Home
                    </a>
                    <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        Tasks
                    </a>
                    <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        API Data
                    </a>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool,
};

export default Navbar;