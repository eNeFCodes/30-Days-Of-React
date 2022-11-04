import './HexaColors.css';
import React from "react";

const HexaColors = ({ colors }) => {
    return (
        <div className='main'>
            <h1 className='title'>30 Days Of React</h1>
            <span className='app-title'>Hexadecimal Colors</span>
            <div className='container'>
                {colors.map((color, index) => {
                    return (
                        <div key={index}
                            className='box'
                            style={{ '--color': color }}>
                            {color}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default HexaColors;