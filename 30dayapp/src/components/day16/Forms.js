import React from 'react';
import './Form.css';

const Day16Form = ({ onSubmit, children }) => {
    return (
        <React.Fragment>
            <h1>Higher Order Component</h1>
            <form onSubmit={onSubmit} className="day16-form">
                {children}
                <button >Submit form</button>
            </form>
        </React.Fragment>
    );
};
export default Day16Form;