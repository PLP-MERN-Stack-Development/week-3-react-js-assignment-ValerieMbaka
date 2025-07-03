import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.title - Card title
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Card component
 */
const Card = ({
                  children,
                  title,
                  className = '',
                  ...rest
              }) => {
    return (
        <div
            className={`bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg ${className}`}
            {...rest}
        >
            {title && (
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        {title}
                    </h3>
                </div>
            )}
            <div className="px-4 py-5 sm:p-6">
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};

export default Card;