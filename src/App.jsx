import { Route, Routes } from 'react-router-dom';
import { Home, NotFound404 } from './pages';
import PokemonDetail from './components/PokemonDetail';

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/pokemon/:pokemon"
				element={<PokemonDetail />}
			/>
			<Route
				path="*"
				element={<NotFound404 />}
			/>
		</Routes>
	);
};

export default App;
