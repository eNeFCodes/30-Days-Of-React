import { useState } from 'react';
import './Day19.css';

const Day19 = () => {
    const [catBreeds, setCatBreeds] = useState(0);
    const [averageWeight, setAverageWeight] = useState(0);
    const [averageLives, setAverageLives] = useState(0);

    return (
        <div className="day19-main">
            <div className='day19-header'>
                <span className='day19-title'>30 DAYS OF REACT</span>
                <span className='day19-title2'>Cats Paradise</span>
                <span className='day19-details'>There are {`${catBreeds}`} cat breeds</span>
                <span className='day19-details2'>On average a cat can weight about {`${averageWeight}`} Kg and lives {`${averageLives}`} years.</span>
            </div>
            <div className='day19-content'>

            </div>
        </div>
    );
};
export default Day19;