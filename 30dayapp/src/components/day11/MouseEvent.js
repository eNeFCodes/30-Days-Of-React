import { useState } from 'react';
import './MouseEvent.css';

const Day11 = () => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const constantTop = 500;
    const constantLeft = 1000;

    const onMouseFocus = (e) => {
        const topVal = Math.floor(Math.random() * constantTop) + 1;
        const leftVal = Math.floor(Math.random() * constantLeft) + 1;
        setTop(topVal);
        setLeft(leftVal);
    }

    return (
        <div className="day11-main">
            <div className='day11-content'
                style={{ '--day11-top': `${top}px`, '--day11-left': `${left}px` }}
                onMouseEnter={onMouseFocus}>
                <span className="day11-title">30 Days of React</span>
            </div>
        </div>
    );
};
export default Day11;