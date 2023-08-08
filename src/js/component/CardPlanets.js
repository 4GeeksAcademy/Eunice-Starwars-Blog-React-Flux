import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardPlanets = ({ planet }) => {
    const { actions } = useContext(Context)
    

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={({ currentTarget }) => {
                currentTarget.onerror = null; currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} className="imagenFront" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Diameter: ${planet.diameter}`}</span>
                    <span className="card-text">{`Rotation Period: ${planet.rotarion_period}`}</span>
                    <span className="card-text">{`Orbital Period: ${planet.orbital_period}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning mt-4 fw-bold">
                        <Link className="link fs-5 text-decoration-none text-dark" to={`/planet/${planet.uid}`} onClick={() => actions.fetchPlanetDetails(planet.uid)}>
                            Learn More!
                        </Link>
                    </button>
                    <button className="buttons btn btn-warning mt-4 fw-bold">
                        <i className="fa-regular fa-heart"></i>
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