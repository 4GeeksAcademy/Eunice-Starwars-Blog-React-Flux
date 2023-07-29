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

			{/* <div className="card-group overflow-auto">
				<div className="row flex-nowrap">
					{!!store.characters && store.characters.map((character) => (
						<div className="col-2">
							<CardCharacters key={character.uid} character={character} />
						</div>
					))}
				</div>
			</div> */}

			<div className="card-group overflow-auto ms-4">
				<div className="cardContainer row flex-nowrap">
					{!!store.characters && store.characters.map((character) => (
						<div key={character.uid} className="col-2">
							<CardCharacters key={character.uid} character={character} />
						</div>
					))}
				</div>
			</div>

			<div className="card-group overflow-auto ms-4">
				<div className="cardContainer row flex-nowrap">
					{!!store.planets && store.planets.map((planet) => (
						<div key={planet.uid} className="col-2">
							<CardPlanets key={planet.uid} planet={planet} />
						</div>
					))}
				</div>
			</div>

			<div className="card-group overflow-auto ms-4">
				<div className="cardContainer row flex-nowrap">
					{!!store.vehicles && store.vehicles.map((vehicle) => (
						<div key={vehicle.uid} className="col-2">
							<CardVehicles key={vehicle.uid} vehicle={vehicle} />
						</div>
					))}
				</div>
			</div>
		</>

	);
};

export default Home;