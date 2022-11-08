import './index.css';
import React from "react";
import BackgroundChange from "./BackgroundChange";
import { SeasonItemsMock, DayTimeItemsMock } from "./BackgroundChangeMock";

const Day9 = () => {
    return (
        <div className="day9-index-main">
            <BackgroundChange
                title={'Season Change'}
                items={SeasonItemsMock}
            />
            <BackgroundChange
                title={'Day Change'}
                items={DayTimeItemsMock}
            />
        </div>
    );
};
export default Day9;
