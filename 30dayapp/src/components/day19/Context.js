import React, { useState, useEffect } from "react";
import axios from "axios";
export const Day19Context = React.createContext();

export const Day19Provider = ({ children }) => {
    const [day19Data, setDay19Data] = useState({});
    const [weightTotalAve, setWeightTotalAve] = useState(0);
    const [lifespanTotalAve, setLifespanTotalAve] = useState(0);
    const [catImageURL, setCatImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchCats = async () => {
        try {
            const result = await axios.get('https://api.thecatapi.com/v1/breeds');
            const { data } = result;

            let weightTotal = 0;
            let lifespanTotal = 0;

            for (const d of data) {
                let { weight } = d;
                let { metric } = weight;
                let metricRange = metric.split('-');
                let metricRangeAve = 0;
                if (metricRange.lenth > 1) {
                    metricRangeAve = (parseFloat(metricRange[0]) + parseFloat(metricRange[1])) / 2;
                } else {
                    metricRangeAve = parseFloat(metricRange[0]);
                }
                weightTotal += metricRangeAve;

                let { life_span } = d;
                let lifeSpanRange = life_span.split('-');
                let leftSpanRangeAve = 0;
                if (lifeSpanRange.lenth > 1) {
                    leftSpanRangeAve = (parseFloat(lifeSpanRange[0]) + parseFloat(lifeSpanRange[1])) / 2;
                } else {
                    leftSpanRangeAve = parseFloat(lifeSpanRange[0]);
                }
                lifespanTotal += leftSpanRangeAve;
            }

            let weithTotalAve = weightTotal / data.length;
            setWeightTotalAve(weithTotalAve.toFixed(2));

            let lifespanTotalAve = lifespanTotal / data.length;
            setLifespanTotalAve(lifespanTotalAve.toFixed(2));
            setDay19Data(data);

            const rndIndex = Math.floor(Math.random() * data.length);
            const randData = data[rndIndex];
            const { image } = randData;
            setCatImageURL(image.url);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCats();
    }, []);

    const generateCatImage = async (id) => {
        setIsLoading(true);
        try {
            const fetchURL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`;
            const result = await axios.get(fetchURL);
            const { data } = result;
            const { url } = data[0];
            setCatImageURL(url);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    const generateRandomCatImage = () => {
        const rndIndex = Math.floor(Math.random() * day19Data.length);
        const randData = day19Data[rndIndex];
        generateCatImage(randData.id);
    }

    return (
        <Day19Context.Provider value={{
            data: day19Data,
            weightTotalAve,
            lifespanTotalAve,
            catBreeds: day19Data.length,
            catImageURL,
            isLoading,
            generateRandomCatImage
        }}>
            {children}
        </Day19Context.Provider>
    )
}