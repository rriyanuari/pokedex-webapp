import { useState } from 'react';

const SearchInput = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className='d-flex'>
			<div className="form-floating flex-grow-1">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="name@example.com"
				/>
				<label for="floatingInput">Cari nama pokemon</label>
			</div>
			<button
				className="btn btn-primary px-4 mx-4"
        style={{width: '200px'}}
				type="button"
				// disabled={isLoading}
        onClick={() => setIsLoading(!isLoading)}
			>
				{isLoading && (
					<span
						className="spinner-border spinner-border-sm mx-2"
						aria-hidden="true"
					></span>
				)}
				<span role="status">{!isLoading ? `Cari` : `Loading...`}</span>
			</button>
		</div>
	);
};

export default SearchInput;
