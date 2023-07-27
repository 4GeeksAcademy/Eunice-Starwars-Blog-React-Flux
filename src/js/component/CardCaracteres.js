import React from 'react';
import PropTypes from "prop-types";

const CardCaracteres = ({ character }) => {
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{`Gender: ${character.gender}`}</p>
                <p className="card-text">{`Hair Color: ${character.hair_color}`}</p>
                <p className="card-text">{`Eye Color: ${character.eye_color}`}</p>
                div
                <button className="buttons">Learn more!</button>
                <button className="buttons"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    );
};

CardCaracteres.propTypes = {
    character: PropTypes.object.isRequired
}

export default CardCaracteres;
