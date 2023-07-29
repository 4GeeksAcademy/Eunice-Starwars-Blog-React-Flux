import axios from 'axios';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
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


			/* addToFavorites: item => {
				const { favorites } = getStore();
				const updatedFavorites = [...favorites, item];
				setStore({ favorites: updatedFavorites });
			},
		
			removeFromFavorites: item => {
				const { favorites } = getStore();
				const updatedFavorites = favorites.filter(favoriteItem => favoriteItem.uid !== item.uid);
				setStore({ favorites: updatedFavorites });
			}
		}, */

			/* addToFavorites: item => {
				const { favorites } = getStore();
				if (!favorites.includes(item)) {
					setStore({ favorites: [...favorites, item] });
				}
			},

			removeFromFavorites: item => {
				const { favorites } = getStore();
				const updatedFavorites = favorites.filter(favorite => favorite !== item);
				setStore({ favorites: updatedFavorites });
			}, */
		},
	};
};

export default getState;
