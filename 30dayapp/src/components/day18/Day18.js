import { useEffect, useState } from 'react';
import './Day18.css';
import axios from 'axios';

const Day18 = () => {
    const [catsData, setCatsData] = useState([]);
    const [weightTotalAve, setWeightTotalAve] = useState(0);
    const [lifespanTotalAve, setLifespanTotalAve] = useState(0);
    const [countries, setCountries] = useState(0); // countries that breeds
    const [uniqueBreeders, setUniqueBreeders] = useState('');
    const [heighestBreeder, setHeighestBreeder] = useState('');
    const [sortedCountries, setSortedCountries] = useState([]);

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

            //console.log(weithTotalAve);
            //console.log(lifespanTotalAve);
            //console.log(data);

            setCatsData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCats();
    }, []);

    useEffect(() => {
        const uniqueCountries = {};
        for (const d of catsData) {
            const { country_code } = d;
            const breedCount = uniqueCountries[country_code] || 0;
            uniqueCountries[country_code] = breedCount + 1;
        }

        setCountries(uniqueCountries);
        setUniqueBreeders(Object.keys(uniqueCountries).length);

        const collection = [];
        let heighestBreeder = '';
        for (const code in uniqueCountries) {
            if (heighestBreeder.length == 0) {
                heighestBreeder = code;
            }
            else if (uniqueCountries[heighestBreeder] < uniqueCountries[code]) {
                heighestBreeder = code;
            }

            collection.push({ code: code, breeds: uniqueCountries[code] });
        }
        setHeighestBreeder(heighestBreeder);
        //console.log(heighestBreeder);

        const sorted = collection.sort((a, b) => {
            const res = a.breeds - b.breeds;
            if (res === 0) {
                if (a.code > b.code) {
                    return 1;
                }
                else if (a.code < b.code) {
                    return -1;
                }
            }
            return res;
        });
        setSortedCountries(sorted);
        //console.log(`sorted`, sorted);

    }, [catsData]);

    return (
        <div className="day18-main">
            <h1>30 Days of React</h1>
            <span className='day18-title'>Cat Paradise</span>
            <span className='day18-subtitle'>There are 1111 cat breeds</span>
            <div className='day18-details-content'>
                <span className='day18-details'>On average a cat can weight <span className='day18-result'>{`${weightTotalAve}`}</span> Kg and live <span className='day18-result'>{`${lifespanTotalAve}`}</span> years</span>

                <h1>Exercises: Level 3</h1>
                <span className='day18-details'>Countries that are unique breeders: <span className='day18-result'>{`${uniqueBreeders}`}</span></span>
                <span className='day18-details'>Country that has heighest breed: <span className='day18-result'>{`${heighestBreeder}`}</span></span>

                <h2>Sorted Countries:</h2>
                <ul>
                    {sortedCountries.map((e, index) => <li key={index}>{`${e.code} - ${e.breeds}`}</li>)}
                </ul>
            </div>
        </div>
    );
};
export default Day18;