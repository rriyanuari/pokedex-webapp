const PokemonList = () => {
	const pokemon = [1, 2, 3];
	return (
		<div className="row my-5">
			{pokemon.map((item, index) => (
				<div className="col-4 px-3">
					<div
						className="card"
						key={index}
					>
						{/* <img
						src="..."
						className="card-img-top"
						alt="..."
					/> */}
						<div
							className="bg-body-tertiary"
							style={{ height: '200px' }}
						></div>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a
								href="#"
								className="btn btn-primary"
							>
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PokemonList;
