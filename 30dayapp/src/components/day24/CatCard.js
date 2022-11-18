const CatCard = ({
    imageSRC,
    name,
    origin,
    temperament,
    description,
    weight,
    lifeSpan
}) => {
    return (
        <div className="day24-cartcard-main">
            <div className="day24-cartcard-header">
                <img className="day24-cartcard-img"
                    src={imageSRC}
                />
                <span className="day24-cartcard-name">{name}</span>
            </div>
            <div className="day24-cartcard-body">
                Origin: <span className="day24-cartcard-label">{origin}</span>
                <br />
                Temperament: <span className="day24-cartcard-label">{temperament}</span>
                <br />
                Weight: <span className="day24-cartcard-label">{weight}</span>
                <br />
                Lifespan: <span className="day24-cartcard-label">{lifeSpan}</span>
                <br />
                Description: <span className="day24-cartcard-label">{description}</span>
            </div>
        </div>
    )
};
export default CatCard;