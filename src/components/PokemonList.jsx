import { Link } from 'react-router-dom';

const PokemonList = (props) => {
	const { pokemon } = props;

	return (
		<div className="row my-5">
			{/* Loop Pokemon */}
			{pokemon.map((item, index) => (
				<div
					key={index}
					className="col-4 p-4"
				>
					<div
						className="card"
						key={index}
					>
						<div
							className="bg-body-tertiary"
							style={{ height: '150px' }}
						></div>
						<div className="card-body text-center">
							<h5 className="card-title">{item.name}</h5>
							<Link
								to={`pokemon/${item.name}`}
								className="btn btn-primary"
							>
								Detail
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PokemonList;
