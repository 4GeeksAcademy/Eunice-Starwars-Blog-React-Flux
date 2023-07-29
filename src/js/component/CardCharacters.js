import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';

const CardCharacters = ({ character }) => {
    const { actions } = useContext(Context);

    /*    const handleAddFavorites = () => {
           actions.addToFavorites(character);
       };
   
       const handleRemoveFromFavorites = () => {
           actions.removeFromFavorites(character);
       }; */

    return (
        <div className="card">

            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Gender: ${character.gender}`}</span>
                    <span className="card-text">{`Hair Color: ${character.hair_color}`}</span>
                    <span className="card-text">{`Eye Color: ${character.eye_color}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="buttons">Learn more!</button>
                    <button className="buttons" /* onClick={handleAddFavorites} */><i className="fa-regular fa-heart"></i></button>
                </div>

            </div>
        </div>
    );
};

CardCharacters.propTypes = {
    character: PropTypes.object
}

export default CardCharacters;
