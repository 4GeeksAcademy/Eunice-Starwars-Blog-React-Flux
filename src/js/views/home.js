import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>


			<div className="card-group d-flex">
				{!!store.characters && store.characters.map((character) => (
					<CardCharacters key={character.uid} character={character} />
				))}
			</div>


			<div className="card-group">
				{!!store.planets && store.planets.map((planet) => (
					<CardPlanets key={planet.uid} planet={planet} />
				))}
			</div>


			<div className="card-group">
				{!!store.vehicles && store.vehicles.map((vehicle) => (
					<CardVehicles key={vehicle.uid} vehicle={vehicle} />
				))}
			</div>
		</>

	);
};

export default Home;