import { useEffect, useRef, useState } from 'react';
import './Day27.css';
const copyIcon = require('../../assets/copy_icon.png');

const Day27 = () => {
    const [hexCollection, setHexCollection] = useState([]);
    const inputRef = useRef(null);
    const hexCharCode = '0123456789abcdef';

    const randomHexColor = () => {
        let hexString = '';
        for (let i = 0; i < 6; i++) {
            const idx = Math.floor(Math.random() * hexCharCode.length);
            const rndChar = hexCharCode.charAt(idx);
            hexString += rndChar;
        }
        return '#' + hexString;
    }

    const generateHexColors = (itemCount) => {
        const hexCollection = [];
        for (let i = 0; i < itemCount; i++) {
            hexCollection.push(randomHexColor());
        }
        setHexCollection(hexCollection);
    }

    const onClick = () => {
        const value = +inputRef.current.value;
        generateHexColors(value);
    }

    useEffect(() => {
        generateHexColors(20);
    }, []);

    const copyAction = (hexString) => {
        navigator.clipboard.writeText(hexString);
        console.log(`Copied:`, hexString);
    }

    return (
        <div className="day27-main">
            <span className='day27-title'>30 Days Of React</span>
            <span className='day27-subtitle'>Hexadecimal Colors</span>
            <div className='day27-search-content'>
                <input type='number' className='day27-input' ref={inputRef} placeholder='Input number' />
                <button className='day27-button' onClick={onClick}>GENERATE</button>
            </div>
            <div className='day27-content'>
                {hexCollection.map((hexString, index) => (
                    <div key={index} className='day27-color-box' style={{ '--bgColor': hexString }}>
                        <span className='day27-color-text'>{hexString}</span>
                        <button className='day27-color-button' onClick={() => copyAction(hexString)}>
                            <img className='day27-color-button-icon' src={copyIcon} alt='Copy'/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Day27;