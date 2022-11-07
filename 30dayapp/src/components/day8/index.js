import React, { useState } from "react";
import Header from './Header.js';
import BackgroundState from "./BackgroundState";
import './index.css';
import Footer from "./Footer.js";

const Day8 = () => {
    const [bgColor, setBGColor] = useState('aqua');

    const toggleGreat = () => {

    }
    const toggleShowtime = () => {

    }
    const toggleChangeBackground = () => {
        if (bgColor === 'aqua') {
            setBGColor('darkblue');
        } else {
            setBGColor('aqua');
        }
        console.log(bgColor);
    }

    return (
        <div className="day8-main" style={{ '--bgColor': bgColor }}>
            <Header />
            <div className="divider" />
            <BackgroundState
                bgColor={bgColor}
                toggleGreat={toggleGreat}
                toggleShowtime={toggleShowtime}
                toggleChangeBackground={toggleChangeBackground}
            />
            <div className="divider" />
            <Footer />
        </div>
    );
}
export default Day8;