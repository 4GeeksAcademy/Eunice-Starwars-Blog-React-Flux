import React from 'react'

const Favorites = () => {
    return (
        <div className="favoritesContainer">
            <div className="dropdown">
                <button className="dropdown-toggle rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Favorites