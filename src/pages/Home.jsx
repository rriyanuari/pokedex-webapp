import { useEffect, useState } from 'react';

import Jumbotron from '../components/Jumbotron';
import PokemonList from '../components/PokemonList';
import SearchInput from '../components/SearchInput';

import { getPokemon } from '../services/Pokemon.service';

export const Home = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		const response = await getPokemon();

		if (response) {
			setData(response.data.results);
		}
	};

	const searchData = (keyword) => {
		setIsLoading(true);

		// filtering data
		setTimeout(() => {
			if (keyword == '') {
				fetchData();
				setIsLoading(false);

				return;
			}

			const newData = data.filter((item) => item.name.includes(keyword));

			setData(newData);
			setIsLoading(false);
		}, 1000);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Jumbotron />
			<div className="container my-5">
				<SearchInput
					searching={searchData}
					isLoading={isLoading}
				/>
				{data && <PokemonList pokemon={data} />}
			</div>
		</>
	);
};
