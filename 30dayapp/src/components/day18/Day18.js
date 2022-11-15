import { useEffect, useState } from 'react';
import './Day18.css';
import axios from 'axios';

const Day18 = () => {
    const [catsData, setCatsData] = useState([]);
    const [weightTotalAve, setWeightTotalAve] = useState(0);
    const [lifespanTotalAve, setLifespanTotalAve] = useState(0);

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

            console.log(weithTotalAve);
            console.log(lifespanTotalAve);

            setCatsData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div className="day18-main">
            <h1>30 Days of React</h1>
            <span className='day18-title'>Cat Paradise</span>
            <span className='day18-subtitle'>There are 1111 cat breeds</span>
            <div className='day18-details-content'>
                <span className='day18-details'>On average a cat can weight <span className='day18-result'>{`${weightTotalAve}`}</span> Kg and live <span className='day18-result'>{`${lifespanTotalAve}`}</span> years</span>
            </div>
        </div>
    );
};
export default Day18;