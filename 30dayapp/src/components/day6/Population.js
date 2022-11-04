import './Population.css';
import React from "react";

const Population = ({ data }) => {
    const getHighestPopulation = () => {
        let highest = 0;
        for (let { population } of data) {
            if (population > highest) {
                highest = population;
            }
        }
        return highest;
    };
    const highesPopulation = getHighestPopulation();
    const constPixels = 1000;

    const renderItem = (index, { country, population }) => {
        let ratio = population / highesPopulation;
        let pixelValue = `${constPixels * ratio}px`;

        return (
            <div key={index} className='data-container'>
                <span className='country-name'>{country}</span>
                <span className='bar-graph-container'>
                    <span className='bar-graph' style={{ '--ratio': pixelValue }} />
                </span>
                <span className='country-population'>{population.toLocaleString()}</span>
            </div>
        );
    };

    return (
        <div className='main'>
            <h1 className='title'>30 Days Of React</h1>
            <span className='app-title'>World population</span>
            <span className='app-sub-title'>Ten most populated countries</span>
            <div className='container'>
                {data.map((datum, index) => renderItem(index, datum))}
            </div>
        </div>
    );
};
export default Population;