"use client";
import React, { useState, createContext, useEffect } from "react";

import LightningAnimation from "./LightningAnimation";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [showLightning, setShowLightning] = useState(false);

    // Toggle Theme
    const setThemeFun = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("myPortfolioProfileTheme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("myPortfolioProfileTheme", "dark");
            setShowLightning(true); 
            setTimeout(() => setShowLightning(false), 1000); 
        }
    };

    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (!getTheme) {
            return;
        }
        setTheme(getTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className='dark:text-white dark:bg-black'>
                    {children}
                    <LightningAnimation showLightning={showLightning} /> 
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
