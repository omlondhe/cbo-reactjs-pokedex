import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Pokemon from "./pages/Pokemon";
import PokemonList from "./pages/PokemonList";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PokemonList />} />
				<Route path="/pokemon/:id" element={<Pokemon />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
