import './index.css';
import React, { useEffect, useState } from "react";
import BackgroundChange from "./BackgroundChange";
import { SeasonItemsMock, DayTimeItemsMock } from "./BackgroundChangeMock";

const Day9 = () => {
    const [isLoading, setIsLoading] = useState(() => true);

    useEffect(() => {
        const timer = setTimeout(function () {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="day9-index-main">
            {isLoading ?
                <div className='day9-index-loading-container'>
                    <span className='day9-index-title'>30 Days of React</span>
                    <span className='day9-index-loading'>Loading data... Please wait.</span>
                </div>
                :
                <React.Fragment>
                    <BackgroundChange
                        title={'Season Change'}
                        items={SeasonItemsMock}
                    />
                    <BackgroundChange
                        title={'Day Change'}
                        items={DayTimeItemsMock}
                    />
                </React.Fragment>
            }
        </div>
    );
};
export default Day9;
