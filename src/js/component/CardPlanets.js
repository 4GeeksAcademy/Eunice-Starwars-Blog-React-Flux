import React from 'react';
import PropTypes from "prop-types";

const CardPlanets = ({ planet }) => {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">{`Population: ${planet.population}`}</p>
                <p className="card-text">{`Terrain: ${planet.terrain}`}</p>
                <button className="buttons">Learn more!</button>
                <button className="buttons"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    );
};

CardPlanets.propTypes = {
    planet: PropTypes.object.isRequired
}

export default CardPlanets;