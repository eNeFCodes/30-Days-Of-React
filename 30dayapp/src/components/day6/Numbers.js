import './Numbers.css';
import React from "react";

// In the following design:
// evens are green, 
// odds are yellow 
// prime numbers are red.

const Numbers = ({ range }) => {

    const isNumberEven = (number) => {
        return number % 2 === 0;
    }

    const isNumberPrime = (number) => {
        if (number < 0 || number === 0 || number === 1) {
            return false;
        }
        
        let isPrime = true;
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                console.log(`n: ${number} - i: ${i}`)
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    const getColor = (number) => {
        if (isNumberPrime(number)) {
            return 'red';
        } else if (isNumberEven(number)) {
            return 'green';
        } else {
            return 'yellow';
        }
    }

    const processRange = (range) => {
        const generatedNumbers = [];
        for (let i = 0; i <= range; i++) {
            const colorHex = getColor(i);

            generatedNumbers.push(
                <div key={i}
                    className='number-box'
                    style={{ '--color': colorHex }}>
                    {i}
                </div>
            );
        }
        return generatedNumbers;
    };

    return (
        <div className='main'>
            <h1 className='title'>30 Days Of React</h1>
            <span className='app-title'>Number Generator</span>
            <div className='number-container'>
                {processRange(range)}
            </div>
        </div>
    );
};
export default Numbers;