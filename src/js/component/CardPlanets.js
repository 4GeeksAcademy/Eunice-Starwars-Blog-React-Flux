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
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">{`Population: ${planet.population}`}</p>
                <p className="card-text">{`Terrain: ${planet.terrain}`}</p>
                <button className="buttons">Learn more!</button>
               <button className="buttons" /* onClick={handleAddFavorites} */><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    );
};

CardPlanets.propTypes = {
    planet: PropTypes.object
}

export default CardPlanets;