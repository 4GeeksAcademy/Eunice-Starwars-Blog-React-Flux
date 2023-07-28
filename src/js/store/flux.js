const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			// Fetch characters, planets, and vehicles from the SWAPI
			fetchCharacters: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/people");
					setStore({ characters: response.data.results });
				} catch (error) {
					console.error("Error fetching characters:", error);
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

			fetchVehicles: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/vehicles");
					setStore({ vehicles: response.data.results });
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},

			// Add character, planet, or vehicle to favorites
			addToFavorites: item => {
				const { favorites } = getStore();
				if (!favorites.includes(item)) {
					setStore({ favorites: [...favorites, item] });
				}
			},

			// Remove character, planet, or vehicle from favorites
			removeFromFavorites: item => {
				const { favorites } = getStore();
				const updatedFavorites = favorites.filter(favorite => favorite !== item);
				setStore({ favorites: updatedFavorites });
			},
		},
	};
};

export default getState;
