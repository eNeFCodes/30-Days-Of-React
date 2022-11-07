import './BackgroundState.css';
import React from "react";

const BackgroundState = ({ bgColor, toggleGreat, toggleShowtime, toggleChangeBackground }) => {

    return (
        <div className='main-bg-state' style={{ '--contentBG': bgColor === 'aqua' ? 'white' : bgColor}}>
            <span className='lists-title'>Prerequisite to get started reactjs:</span>
            <span className='items'>HTML</span>
            <span className='items'>CSS</span>
            <span className='items'>JavaScript</span>

            <img src={require('../../assets/avatar.JPG')} />
            <span className='name'>eNeFCodes</span>
            <div className='controls'>
                <button onClick={toggleGreat}>Great People</button>
                <button onClick={toggleShowtime}>Show Time</button>
                <button onClick={toggleChangeBackground}>Change Background</button>
            </div>
        </div>
    );
};
export default BackgroundState;