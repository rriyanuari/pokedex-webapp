import logo from './logo.svg';
import './App.css';

import Jumbotron from './components/Jumbotron';
import PokemonList from './components/PokemonList';
import SearchInput from './components/SearchInput';

function App() {
	return (
		<>
			<Jumbotron />
			<div className="container my-5">
				<SearchInput />
				<PokemonList />
			</div>
		</>
	);
}

export default App;
