# React.js and Tailwind CSS Task Manager

A responsive React application built with JSX and Tailwind CSS that demonstrates component architecture,
state management, hooks usage, and API integration.

## Features

- **Task Management**: Add, complete, delete, and filter tasks
- **Theme Switching**: Toggle between light and dark mode
- **API Integration**: Fetch and display posts from JSONPlaceholder
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Component Architecture**: Reusable UI components


## Project Structure

```
src/
├── api/            # API integration functions
├── components/     # Reusable UI components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── utils/          # Utility functions
└── App.jsx         # Main application component
```

## Components

- **Button**: Reusable button with different variants (primary, secondary, danger)
- **Card**: Component for displaying content in a boxed layout
- **Navbar**: Navigation component with theme switcher
- **Footer**: Footer with links and copyright information
- **Layout**: Layout component that includes Navbar and Footer
- **TaskManager**: Component for managing tasks with local storage
- **PostList**: Component for displaying posts from JSONPlaceholder API

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-ValerieMbaka.git
   ```

2. Navigate to the project directory:
   ```
   cd week-3-react-js-assignment
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Technologies Used

- **React.js**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **JSONPlaceholder API**: Fake online REST API for testing

## Features Implementation

### Task Management
- Uses custom `useLocalStorageTasks` hook for persisting tasks
- Implements add, toggle, and delete functionality
- Provides filtering options (All, Active, Completed)

### Theme Switching
- Uses React Context API for global theme state
- Persists theme preference in localStorage
- Supports system preference detection

### API Integration
- Fetches posts from JSONPlaceholder
- Implements loading and error states
- Provides pagination and search functionality

## Deployment

The application is deployed at: 
