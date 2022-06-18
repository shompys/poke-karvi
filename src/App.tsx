import { Catalog } from './components/Catalog/';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { MyPokemon } from './components/MyPokemon';
import useToolsRulesPokemons from './hooks/useToolsRulesPokemons';
import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
	const [maxPokemons] = useState<number>(5000);
	const [isCatalog, setIsCatalog] = useState<boolean>(true);
	const { pokemons, status, nextPage } = useToolsRulesPokemons();

	return (
		<>
			<HashRouter>
				<Header 
					maxPokemons={maxPokemons} 
					status={status}
					isCatalog={isCatalog}
				/>
				<Routes>
					<Route
						path=":id"
						element={<MyPokemon setIsCatalog={setIsCatalog} />}
					/>
					<Route
						path="/*"
						element={
							<Catalog
								pokemons={pokemons}
								status={status}
								nextPage={nextPage}
								setIsCatalog={setIsCatalog}
							/>
						}
					/>
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</HashRouter>
		</>
	);
};
