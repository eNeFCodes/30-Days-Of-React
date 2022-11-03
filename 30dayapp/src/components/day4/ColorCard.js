import './ColorCard.css'

const ColorCard = ({ colors }) => {
    return (
        <div className="color-container">
            {colors.map((color, index) =>
                <label key={index} className="color" style={{ '--color': color }}>{color}</label>
            )}
        </div>
    )
};
export default ColorCard;