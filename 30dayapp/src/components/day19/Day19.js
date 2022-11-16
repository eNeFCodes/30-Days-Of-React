import React, { useContext } from 'react';
import './Day19.css';
import { Day19Context, Day19Provider } from './Context';
const loadingImg = require('../../assets/loading.gif');

const Day19Content = () => {
    const {
        catBreeds,
        weightTotalAve,
        lifespanTotalAve,
        catImageURL,
        isLoading,
        generateRandomCatImage
    } = useContext(Day19Context);

    return (
        <div className="day19-main">
            <div className='day19-header'>
                <span className='day19-title'>30 DAYS OF REACT</span>
                <span className='day19-title2'>Cats Paradise</span>
                <span className='day19-details'>There are <span className='day19-value'>{`${catBreeds}`} cat breeds</span></span>
                <span className='day19-details2'>On average a cat can weight about <span className='day19-value'>{`${weightTotalAve} Kg`}</span> and lives <span className='day19-value'>{`${lifespanTotalAve} years.`}</span></span>
                <button className='day19-button' onClick={generateRandomCatImage}>Random Cat Image</button>
            </div>
            <div className='day19-content'>
                {isLoading ?
                    <img className='day19-image' src={loadingImg} />
                    :
                    <div className='day19-seed'>
                        <img className='day19-image' src={catImageURL} />
                        <span className='day19-details'>Seed: <a href={catImageURL}>{`${catImageURL}`}</a></span>
                    </div>
                }
            </div>
        </div>
    );
};

const Day19 = () => {
    return (
        <Day19Provider>
            <Day19Content />
        </Day19Provider>
    );
};
export default Day19;