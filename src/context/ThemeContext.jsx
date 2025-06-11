
import React, { createContext, useState } from 'react';

export const ColorContext = createContext();


const ThemeConxtext = ({ children }) => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

    return (
        <ColorContext.Provider value={{
            isDark, setIsDark
        }}>
            {
                children
            }
        </ColorContext.Provider>
    )
}

export default ThemeConxtext;