import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component that includes Navbar and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Layout content
 * @param {string} props.title - Site title for Navbar
 * @param {function} props.toggleTheme - Function to toggle theme
 * @param {boolean} props.isDarkMode - Whether dark mode is active
 * @returns {JSX.Element} - Layout component
 */
const Layout = ({ 
    children,
    title = 'PLP Task Manager',
    toggleTheme,
    isDarkMode = false
    }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar
                title={title}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
            />
      
            <main className="flex-grow max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
      
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool,
};

export default Layout;