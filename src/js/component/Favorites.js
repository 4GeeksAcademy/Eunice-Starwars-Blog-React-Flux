import React, { useContext } from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

const Favorites = ({ favorites }) => {
    const { actions } = useContext(Context)

    const handleRemoveFromFavorites = item => {
        actions.removeFromFavorites(item);
    };

    return (
        <div className="favoritesContainer">
            <div className="dropdown">
                <button className="favoritesDropDown dropdown-toggle rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">

                {/*     {favorites && favorites.length > 0 && favorites.map((favorite, index) => (
                        
                        <li key={index} className="d-flex align-items-center justify-content-between">
                            <span className="favoriteName">{favorite.name}</span>
                            <button className="trashCanButton" onClick={() => handleRemoveFromFavorites(favorite)}><i className="fa-solid fa-trash-can"></i></button>
                        </li>

                    ))} */}
                </ul>
            </div>
        </div>
    )
}

Favorites.propTypes = {
    favorites: PropTypes.object.isRequired
}

export default Favorites;