import axios from 'axios';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async () => {
	try {
		const response = await axios.get(`${BASE_API_URL}/pokemon`);

		return response;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const getDetailPokemon = async (pokemonName) => {
	try {
		const response = await axios.get(`${BASE_API_URL}/pokemon/${pokemonName}`);

		return response;
	} catch (error) {
		console.error(error);
		return false;
	}
};
