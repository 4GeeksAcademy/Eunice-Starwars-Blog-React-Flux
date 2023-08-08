import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardPlanets = ({ planet }) => {
    const { actions, store } = useContext(Context)
    const { favorites } = store;
    const uniqueId = `planet-${planet.uid}`; // Construir el ID único
    const isFavorite = favorites.some(favorite => favorite.id === uniqueId); // Usar el nuevo ID único

    const handleToggleFavorite = () => {
        if (isFavorite) {
            actions.removeFromFavorites({ ...planet, type: 'planet', id: uniqueId }); // Usar el nuevo ID único
        } else {
            actions.addToFavorites({ ...planet, type: 'planet', id: uniqueId }); // Usar el nuevo ID único
        }
    };

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={({ currentTarget }) => {
                currentTarget.onerror = null; currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} className="imagenFront" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Diameter: ${planet.details.diameter}`}</span>
                    <span className="card-text">{`Rotation Period: ${planet.details.rotarion_period}`}</span>
                    <span className="card-text">{`Orbital Period: ${planet.details.orbital_period}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning mt-4 fw-bold">
                        <Link className="link text-decoration-none text-dark" to={`/planet/${planet.uid}`} onClick={() => actions.fetchPlanetDetails(planet.uid)}>
                            Learn More!
                        </Link>
                    </button>
                    <button className="buttons btn btn-warning mt-4 fw-bold" onClick={handleToggleFavorite}>
                        <i className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardPlanets.propTypes = {
    planet: PropTypes.object
}

export default CardPlanets;