import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardCharacters = ({ character }) => {
    const { actions } = useContext(Context);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="imagenFront" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className="features d-flex flex-column mb-3">
                    <span className="card-text">{`Gender: ${character.gender}`}</span>
                    <span className="card-text">{`Hair Color: ${character.hair_color}`}</span>
                    <span className="card-text">{`Eye Color: ${character.eye_color}`}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="buttons btn btn-warning mt-4 fw-bold">
                        <Link className="link fs-5 text-decoration-none text-dark" to={`/character/${character.uid}`} onClick={() => actions.fetchCharacterDetails(character.uid)}>
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

CardCharacters.propTypes = {
    character: PropTypes.object
}

export default CardCharacters;
