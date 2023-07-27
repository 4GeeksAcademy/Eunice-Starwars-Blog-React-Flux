import React from 'react';
import PropTypes from "prop-types";

const CardVehicles = ({ vehicle }) => {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{`Gender: ${vehicle.gender}`}</p>
                <p className="card-text">{`Hair Color: ${vehicle.hair_color}`}</p>
                <p className="card-text">{`Eye Color: ${vehicle.eye_color}`}</p>
                <button className="buttons">Learn more!</button>
                <button className="buttons"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    );
};

CardVehicles.propTypes = {
    vehicle: PropTypes.object.isRequired
}

export default CardVehicles;