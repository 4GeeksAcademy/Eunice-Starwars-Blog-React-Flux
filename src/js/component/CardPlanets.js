import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';

const CardPlanets = ({ planet }) => {
    const { actions } = useContext(Context)

    /*      const handleAddFavorites = () => {
            actions.addToFavorites(planet);
        };
    
        const handleRemoveFromFavorites = () =>{
            actions.removeFromFavorites(planet);
        };
     */
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={({ currentTarget }) => {
                currentTarget.onerror = null; currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Diameter: ${planet.diameter}`}</span>
                    <span className="card-text">{`Rotation Period: ${planet.rotarion_period}`}</span>
                    <span className="card-text">{`Orbital Period: ${planet.orbital_period}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="buttons">Learn more!</button>
                    <button className="buttons" /* onClick={handleAddFavorites} */><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

CardPlanets.propTypes = {
    planet: PropTypes.object
}

export default CardPlanets;