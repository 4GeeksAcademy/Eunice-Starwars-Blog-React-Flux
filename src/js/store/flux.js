import axios from 'axios';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			idCharacter: null,
			uidCharacter: null,

			planets: [],
			idPlanet: null,
			uidPlanet: null,

			vehicles: [],
			idVehicle: null,
			uidVehicle: null,

			favorites: [],
		},
		actions: {

			fetchCharacters: async () => {

				const store = getStore();

				try {
					const response = await axios.get("https://www.swapi.tech/api/people");
					setStore({ characters: response.data.results });
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},

			fetchCharacterDetails: async (characterUid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/people/${characterUid}`);
					const characterDetails = response.data.result.properties;
					const characterDescription = response.data.result.description;
					setStore({ idCharacter: { ...characterDetails, description: characterDescription } });
					setStore({ uidCharacter: characterUid });
				} catch (error) {
					console.error("Error fetching character details:", error);
				}
			},


			fetchPlanets: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/planets");
					setStore({ planets: response.data.results });
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},

			fetchPlanetDetails: async (planetUid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/planets/${planetUid}`);
					const planetDetails = response.data.result.properties;
					const planetDescription = response.data.result.description;
					setStore({ idPlanet: { ...planetDetails, description: planetDescription } });
					setStore({ uidPlanet: planetUid });
				} catch (error) {
					console.error("Error fetching planet details:", error);
				}
			},

			fetchVehicles: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/vehicles");
					setStore({ vehicles: response.data.results });
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},

			fetchVehicleDetails: async (vehicleUid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/vehicles/${vehicleUid}`);
					const vehicleDetails = response.data.result.properties;
					const vehicleDescription = response.data.result.description;
					setStore({ idVehicle: { ...vehicleDetails, description: vehicleDescription } });
					setStore({ uidVehicle: vehicleUid });
				} catch (error) {
					console.error("Error fetching vehicle details:", error);
				}
			},

			addToFavorites: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},

			removeFromFavorites: item => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(favorite => favorite.uid !== item.uid);
				setStore({ favorites: updatedFavorites });
			}

		},
	};
};

export default getState;
