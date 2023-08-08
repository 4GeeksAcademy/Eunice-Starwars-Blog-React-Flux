import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

export const Navbar = ({ favorites }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img className="starwarsLogo" src="https://logolook.net/wp-content/uploads/2021/07/Star-Wars-Logo.png" />
			</Link>
			<Favorites favorites={favorites} />
		</nav>
	);
};
