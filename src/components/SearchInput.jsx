import { useState } from 'react';

const SearchInput = (props) => {
	const { searching, isLoading } = props;

	const [keyword, setKeyword] = useState('');

	const handlerSubmit = (e) => {
		// prevent reload
		e.preventDefault();

		searching(keyword);
		setKeyword('');
	};

	return (
		<form
			className="d-flex"
			onSubmit={(e) => handlerSubmit(e)}
		>
			<div className="form-floating flex-grow-1">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="name@example.com"
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<label for="floatingInput">Cari nama pokemon...</label>
			</div>
			<button
				className="btn btn-primary px-4 mx-4"
				style={{ width: '200px' }}
				type="submit"
				disabled={isLoading}
			>
				{isLoading && (
					<span
						className="spinner-border spinner-border-sm mx-2"
						aria-hidden="true"
					></span>
				)}
				<span role="status">{!isLoading ? `Cari` : `Loading...`}</span>
			</button>
		</form>
	);
};

export default SearchInput;
