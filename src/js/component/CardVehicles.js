import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';

const CardVehicles = ({ vehicle }) => {
    const { actions } = useContext(Context);

    /*     const handleAddFavorites = () => {
            actions.addToFavorites(vehicle);
        };
    
        const handleRemoveFromFavorites =() => {
            actions.removeFromFavorites(vehicle);
            };
     */
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Model: ${vehicle.model}`}</span>
                    <span className="card-text">{`Vehicle Class: ${vehicle.vehicle_class}`}</span>
                    <span className="card-text">{`Manufacturer: ${vehicle.manufacturer}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="buttons">Learn more!</button>
                    <button className="buttons" /* onClick={handleAddFavorites} */><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

CardVehicles.propTypes = {
    vehicle: PropTypes.object
}

export default CardVehicles;