import React, { useState } from "react";

export const Day19Context = React.createContext();

export const Day19Provider = ({ children }) => {
    const [day19Data, setDay19Data] = useState(() => {
        return {};
    });

    return (
        <Day19Context.Provider value={day19Data}>
            {children}
        </Day19Context.Provider>
    )
}