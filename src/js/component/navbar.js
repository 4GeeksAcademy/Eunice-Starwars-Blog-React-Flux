import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="starwarsLogo" src="https://logolook.net/wp-content/uploads/2021/07/Star-Wars-Logo.png" />
			</Link>
			<Favorites />
		</nav>
	);
};
