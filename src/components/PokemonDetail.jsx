import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailPokemon } from '../services/Pokemon.service';
import PokemonList from './PokemonList';

const PokemonDetail = () => {
	const params = useParams();
	const [pokemon, setPokemon] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		const response = await getDetailPokemon(params.pokemon);

		if (response) {
			const item = {
				id: response.data.id,
				name: response.data.name,
				stats: response.data.stats,
				types: response.data.types,
				img: response.data.sprites.other.dream_world.front_default,
			};

			setPokemon(item);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<div className="col-4 mx-auto text-center">
				<div className="card my-5">
					<div
						className="bg-body-tertiary py-4"
						style={{ maxHeight: '200px' }}
					>
						<img
							src={pokemon.img}
							alt={pokemon.name}
							style={{ maxHeight: '150px' }}
						/>
					</div>
					<div className="card-body text-center">
						<h5 className="card-title">{pokemon.name}</h5>
						<p>
							{pokemon.types &&
								pokemon.types.map((item) => `${item.type.name} | `)}
						</p>
					</div>
				</div>
				<Link to={'/'}>
					<button className="btn btn-primary">Back to home</button>
				</Link>
			</div>
		</div>
	);
};

export default PokemonDetail;
