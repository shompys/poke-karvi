import { useEffect, useState } from 'react';
import { usePokemons } from '@/hooks/useQuerys';
import { PokemonDataProps } from '@/types';

const useToolsRulesPokemons = () => {
	const dataInitial = 10;
	const [counter, setCounter] = useState<number>(0);
	const [pokemons, setPokemons] = useState<PokemonDataProps[]>([]);
	const [hasPokemon, setHasPokemon] = useState<boolean>(true);
	const { data, status } = usePokemons({
		limit: dataInitial, 
		offset: counter,
	});

	useEffect(() => {	
		if(!data) return;
		if (data.length === 0){
			setHasPokemon(false);
		}
		setPokemons(prev => {
			
			// if(JSON.stringify(prev) === JSON.stringify(data)){
			// 	return prev;
			// }

			return [
				...prev,
				...data,
			];
		});

	}, [data]);

	const nextPage = () => {
		setCounter(prev => prev + dataInitial);
	};

	return {
		pokemons,
		status,
		nextPage,
		hasPokemon,
	};
};
export default useToolsRulesPokemons;