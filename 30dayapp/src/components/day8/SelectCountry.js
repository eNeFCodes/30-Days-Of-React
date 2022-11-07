import { useState } from 'react';
import './SelectCountry.css';
import PopulationData from './SelectCountryMock.js';

const SelectCountry = () => {
    const defaultCountry = PopulationData[0];
    const [country, setCountry] = useState(defaultCountry);

    const randomCountry = () => {
        const randomNumber = Math.random() * (PopulationData.length - 1);
        const randomIndex = Math.floor(randomNumber);
        const randCountry = PopulationData[randomIndex];
        setCountry(randCountry);
    }

    return (
        <div className='select-country-main'>
            <div className='select-country-content'>
                <div className='select-country-flag'>
                    <img className='select-country-image' src={country.imgSRC} />
                    <span className='select-country-title'>{country.country}</span>
                </div>

                <div className='select-country-p-container'>
                    <span className='select-country-p-title'>Capital:</span>
                    <span className='select-country-p-item'>{country.capital}</span>
                </div>
                <div className='select-country-p-container'>
                    <span className='select-country-p-title'>Language:</span>
                    <span className='select-country-p-item'>{country.language}</span>
                </div>
                <div className='select-country-p-container'>
                    <span className='select-country-p-title'>Population:</span>
                    <span className='select-country-p-item'>{country.population.toLocaleString()}</span>
                </div>
                <div className='select-country-p-container'>
                    <span className='select-country-p-title'>Currency:</span>
                    <span className='select-country-p-item'>{country.currency}</span>
                </div>
            </div>
            <button onClick={randomCountry}>Select Country</button>
        </div>
    );
};
export default SelectCountry;