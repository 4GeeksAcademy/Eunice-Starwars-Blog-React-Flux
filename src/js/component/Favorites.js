import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Favorites = ({ favorites }) => {
    return (
        <div className="favoritesContainer">
            <div className="dropdown">
                <button className="favoritesDropDown dropdown-toggle rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    {favorites.map((favorite, index) => (

                        <li className="d-flex align-items-center justify-content-between">
                            <span className="favoriteName">{favorite.name}</span>
                            <button className="trashCanButton" onClick={() => handleRemoveFromFavorites(favorite)}><i className="fa-solid fa-trash-can"></i></button>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

Favorites.propTypes = {
    favorites: PropTypes.object.isRequired
}

export default Favorites;