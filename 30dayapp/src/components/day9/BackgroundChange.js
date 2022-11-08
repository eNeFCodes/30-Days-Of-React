import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './BackgroundChange.css'

const BackgroundChange = ({ title, items }) => {
    const [selectedItem, setSelectedItem] = useState(() => items[0]);

    const changeSelectedItem = (id) => {
        const selected = items.find(i => i.id === id);
        setSelectedItem(selected);
    }

    useEffect(() => console.log(items, selectedItem))

    return (
        <div className="day9-main" style={{ '--day9-bgColor': selectedItem.color }}>
            <span className="day9-title">30 Days of React</span>
            <span className="day9-content-title">{title}</span>
            <span className="day9-content-title">{`{ ${selectedItem.name} }`}</span>
            <div className="day9-controls">
                {items.map((i, index) => (
                    <button key={index} className=".day9-button" onClick={() => changeSelectedItem(i.id)}>
                        {i.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default BackgroundChange;

BackgroundChange.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })
    )
}