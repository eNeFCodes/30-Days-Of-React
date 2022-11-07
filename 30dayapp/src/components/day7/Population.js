import React from "react";
import '../day6/Population.css';

class Population extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            constPixels: 1000
        }
    }

    getHighestPopulation = () => {
        const data = this.props.data;
        let highest = 0;
        for (let { population } of data) {
            if (population > highest) {
                highest = population;
            }
        }
        return highest;
    };

    renderItem = (index, { country, population }) => {
        let highesPopulation = this.getHighestPopulation();
        let ratio = population / highesPopulation;
        let pixelValue = `${this.state.constPixels * ratio}px`;

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

    render() {
        const data = this.props.data;
        return (
            <div className='main'>
                <h1 className='title'>30 Days Of React</h1>
                <span className='app-title'>World population</span>
                <span className='app-sub-title'>Ten most populated countries</span>
                <div className='container'>
                    {data.map((datum, index) => this.renderItem(index, datum))}
                </div>
            </div>
        );
    }
}
export default Population;