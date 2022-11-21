import { useContext, useState } from 'react';
import './Day24.css';
import { Day24Context, Day24ContextProvider } from './Context';
import CatCard from './CatCard';
const defImage = require('../../assets/loading.gif');

const Day24Content = () => {
    const { catData } = useContext(Day24Context);
    const [filteredCat, setFilteredCat] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const goToCharts = () => {
        console.log('go to charts')
    }

    const renderCatCards = () => {
        const source = filteredCat.length > 0 ? filteredCat : catData;
        const cards = [];
        for (const [i, cat] of source.entries()) {
            const { image, name, origin, temperament, description, weight, life_span } = cat;
            const { url } = image || { url: defImage };
            const { metric } = weight || { metric: 'n/a' };

            cards.push(
                <CatCard
                    key={i}
                    imageSRC={url}
                    name={name}
                    origin={origin}
                    temperament={temperament}
                    description={description}
                    weight={metric}
                    lifeSpan={life_span}
                />
            );
        }
        return cards;
    }

    const performFilter = (value) => {
        setSearchInput(value);

        if (value.length > 0) {
            const filtered = catData.filter(({ name, origin, temperament }) => {
                return name.toLowerCase().includes(value.toLowerCase())
                    || origin.toLowerCase().includes(value.toLowerCase())
                    || temperament.toLowerCase().includes(value.toLowerCase())
            });

            setFilteredCat(filtered);
            console.log(`filetered:`, filtered)
        } else {
            setFilteredCat([]);
        }
    }

    return (
        <div className="day24-main">
            <div className='day24-header'>
                <span className="day24-title">World Cats Data</span>
                <span className='day24-subtitle'>Currently, we have {`${catData.length}`} cat breeds</span>
            </div>
            <div className='day24-searchbar'>
                <input
                    className='day24-search-input'
                    id='search'
                    name='search'
                    placeholder='Search cats by name, origin and temperament'
                    value={searchInput}
                    onChange={({ target }) => performFilter(target.value)}
                />
                <button className='day24-chart-button' onClick={goToCharts}>
                    <img className='day24-chart-icon' src={require('../../assets/bar-chart.png')} />
                </button>
            </div>
            <div className='day24-content'>
                {renderCatCards()}
            </div>
        </div>
    );
};

const Day24 = () => {
    return (
        <Day24ContextProvider>
            <Day24Content />
        </Day24ContextProvider>
    )
};
export default Day24;