import React from "react";
import "../../styles/home.css";
import CardCaracteres from "../component/CardCaracteres";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";

const cardCaracteres = [
	{ uid: 1, name: "Luke Skywalker", gender: "Male", hair_color: "Blond", eye_color: "Blue" },
	{ uid: 2, name: "Leia Organa", gender: "Female", hair_color: "Brown", eye_color: "Brown" },
	{ uid: 3, name: "Leia Organa", gender: "Female", hair_color: "Brown", eye_color: "Brown" },
	{ uid: 4, name: "Leia Organa", gender: "Female", hair_color: "Brown", eye_color: "Brown" },
	{ uid: 5, name: "Leia Organa", gender: "Female", hair_color: "Brown", eye_color: "Brown" }
];

const cardPlanets = [
	{ uid: 1, population: "", Terrain: "" }
];

const cardVehicles = [
	{ uid: 1, name: "Luke Skywalker", gender: "Male", hair_color: "Blond", eye_color: "Blue" }
];

export const Home = () => (
	<>
		<div className="card-group">
			{cardCaracteres.map((character) => (
				<CardCaracteres key={character.uid} character={character} />
			))}
		</div>
		<div className="card-group">
			{cardPlanets.map((planet) => (
				<CardPlanets key={planet.uid} planet={planet} />
			))}
		</div>
		<div className="card-group">
			{cardVehicles.map((vehicle) => (
				<CardVehicles key={vehicle.uid} vehicle={vehicle} />
			))}
		</div>

	</>
);
