import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Favorites from "./component/Favorites";
import CharactersInfo from "./views/CharactersInfo";
import VehiclesInfo from "./views/VehiclesInfo";
import PlanetsInfo from "./views/PlanetsInfo";

//create your first component
const Layout = () => {
	const { store } = useContext(Context)
	const { favorites } = store;
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<CharactersInfo />} />
						<Route path="/vehicle/:id" element={<VehiclesInfo />} />
						<Route path="/planet/:id" element={<PlanetsInfo />} />
						{/* <Route path="/favorites" element={<Favorites favorites={favorites} />} />						 */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
