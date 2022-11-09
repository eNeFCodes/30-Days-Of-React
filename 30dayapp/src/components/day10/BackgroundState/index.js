import './BackgroundState.css';
import React from "react";

const BackgroundState = ({ toggleGreat,
     toggleShowtime,
     toggleChangeBackground }) => {

    return (
        <div className='day10-main-bg-state'>
            <span className='day10-lists-title'>Prerequisite to get started reactjs:</span>
            <span className='day10-items'>HTML</span>
            <span className='day10-items'>CSS</span>
            <span className='day10-items'>JavaScript</span>

            <img src={require('../../../assets/avatar.JPG')} />
            <span className='day10-name'>eNeFCodes</span>
            <div className='day10-controls'>
                <button className='day10-button' onClick={toggleGreat}>Great People</button>
                <button className='day10-button' onClick={toggleShowtime}>Show Time</button>
                <button className='day10-button' onClick={toggleChangeBackground}>Change Theme</button>
            </div>
        </div>
    );
};
export default BackgroundState;