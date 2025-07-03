import React from 'react';
import './App.css';

// Import components
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';
import Card from './components/Card';

// Import theme context
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Main App component wrapped with ThemeProvider
function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

// App content that uses the theme context
function AppContent() {
    const { isDarkMode, toggleTheme } = useTheme();
    
    return (
        <Layout
            title="PLP Task Manager"
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
        >
            <div className="space-y-8">
                {/* Task Manager Section */}
                <section>
                    <Card title="Task Manager">
                        <TaskManager />
                    </Card>
                </section>
                
                {/* API Data Section */}
                <section>
                    <PostList />
                </section>
            </div>
        </Layout>
    );
}

export default App;