import React , { useState, createContext } from 'react'

export const ThemeContext = createContext();

export const CustomThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const value = {theme, toggleTheme};

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

