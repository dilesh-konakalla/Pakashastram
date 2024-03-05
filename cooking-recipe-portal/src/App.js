import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import User from './components/user';
import './App.css';

const App = () => {
  useEffect(() => {
    const disableRightClick = (event) => {
      // Prevent the default context menu
      event.preventDefault();
    };

    const disableDeveloperTools = (event) => {
      // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
      if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.key === 'U')
      ) {
        event.preventDefault();
      }
    };

    // Attach event listeners to disable right-click and specified keyboard shortcuts
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableDeveloperTools);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableDeveloperTools);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
