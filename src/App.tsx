import { Catalog } from './components/Catalog/';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { MyPokemon } from './components/MyPokemon';
import useToolsRulesPokemons from './hooks/useToolsRulesPokemons';
import { useState } from 'react';
import { Header } from './components/Header';
import style from './App.module.css';

export const App = () => {
	const [isCatalog, setIsCatalog] = useState<boolean>(true);
	const { pokemons, status, nextPage } = useToolsRulesPokemons();
	const [ isCartoon, setIsCartoon ] = useState(false);
	return (
		<>
			<button 
				className={style.cartoon} 
				onClick={() => setIsCartoon(e => !e)}
			>
				{isCartoon ? 'Real' : 'Caricatura'}
			</button>
			<HashRouter>
				<Header 
					status={status}
					isCatalog={isCatalog}
				/>
				<Routes>
					<Route
						path=":id"
						element={<MyPokemon setIsCatalog={setIsCatalog} isCartoon={isCartoon} />}
					/>
					<Route
						path="/*"
						element={
							<Catalog
								isCartoon={isCartoon}
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
