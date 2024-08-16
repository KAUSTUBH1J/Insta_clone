// src/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for saved user preference on component mount
    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem('isDarkMode'));
        if (savedTheme !== null) {
            setIsDarkMode(savedTheme);
            document.body.classList.toggle('dark-mode', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        console.log("toggleTheme----");
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            document.body.classList.toggle('dark-mode', newMode);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
