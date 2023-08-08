import React, { useContext, useState } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardVehicles = ({ vehicle }) => {
    const { actions, store } = useContext(Context);
    const { favorites } = store;
    const isFavorite = favorites.some(favorite => favorite.uid === vehicle.uid);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            actions.removeFromFavorites({ type: "vehicle", uid: vehicle.uid });
        } else {
            actions.addToFavorites({ type: "vehicle", uid: vehicle.uid });
        }
    };

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="imagenFront" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Passengers: ${vehicle.details.passengers}`}</span>
                    <span className="card-text">{`Crew: ${vehicle.details.crew}`}</span>
                    <span className="card-text">{`Length: ${vehicle.details.length}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning mt-4 fw-bold">
                        <Link className="link fs-5 text-decoration-none text-dark" to={`/vehicle/${vehicle.uid}`} onClick={() => actions.fetchVehicleDetails(vehicle.uid)}>
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

CardVehicles.propTypes = {
    vehicle: PropTypes.object
}

export default CardVehicles;