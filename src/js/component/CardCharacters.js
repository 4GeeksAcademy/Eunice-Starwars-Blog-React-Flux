import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardCharacters = ({ character }) => {
    const { actions, store } = useContext(Context);
    const { favorites } = store;
    const uniqueId = `character-${character.uid}`;
    const isFavorite = favorites.some(favorite => favorite.id === uniqueId);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            actions.removeFromFavorites({ ...character, type: 'character', id: uniqueId });
        } else {
            actions.addToFavorites({ ...character, type: 'character', id: uniqueId });
        }
    };

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="imagenFront" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Gender: ${character.details.gender}`}</span>
                    <span className="card-text">{`Hair Color: ${character.details.hair_color}`}</span>
                    <span className="card-text">{`Eye Color: ${character.details.eye_color}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="buttons btn btn-warning mt-4 fw-bold">
                        <Link className="link text-decoration-none text-dark" to={`/character/${character.uid}`} onClick={() => actions.fetchCharacterDetails(character.uid)}>
                            Learn More!
                        </Link>
                    </button>
                    <button className="buttons btn btn-warning mt-4 fw-bold" onClick={handleToggleFavorite}>
                        <i className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div >
    );
};

CardCharacters.propTypes = {
    character: PropTypes.object
}

export default CardCharacters;
