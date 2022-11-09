import React, { useState } from "react";
import Header from './Header';
import BackgroundState from './BackgroundState';
import Footer from "./Footer";
import './index.css';

const Day10 = () => {
    const [theme, setTheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const toggleGreat = () => {

    }
    const toggleShowtime = () => {

    }
    const toggleChangeBackground = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <div className="day10-main" data-theme={theme}>
            <Header />
            <div className="day10-divider" />
            <BackgroundState
                toggleGreat={toggleGreat}
                toggleShowtime={toggleShowtime}
                toggleChangeBackground={toggleChangeBackground}
            />
            <div className="day10-divider" />
            <Footer />
        </div>
    );
}
export default Day10;