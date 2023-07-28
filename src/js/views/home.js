import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardCharacteres from "../component/CardCharacteres";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacteres();
		actions.fetchPlanets();
		actions.fetchVehicles();
	}, []);

	return (
		<>

			<div className="card-group">
				{store.characteres.map((character) => (
					<CardCharacteres key={character.uid} character={character} />
				))}
			</div>

			<div className="card-group">
				{store.planets.map((planet) => (
					<CardPlanets key={planet.uid} planet={planet} />
				))}
			</div>
			<div className="card-group">
				{store.vehicles.map((vehicle) => (
					<CardVehicles key={vehicle.uid} vehicle={vehicle} />
				))}
			</div>

		</>

	);
};

export default Home;