import React, { useEffect, useState } from "react";
import axios from "axios";

export const Day14Context = React.createContext();
export const Day14ContextProvider = ({ children }) => {
    const [catData, setCatData] = useState([]);

    const fetchCats = async () => {
        try {
            const result = await axios.get('https://api.thecatapi.com/v1/breeds');
            const { data } = result;
            console.log(`cat data:`, data);
            setCatData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return (
        <Day14Context.Provider value={{
            catData
        }}>
            {children}
        </Day14Context.Provider>
    )
};