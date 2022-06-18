import { useQuery, UseQueryResult } from 'react-query';
import { EvolutionsProps, PokemonDataProps, PokemonDataSpecieProps, QueryParams } from '@/types';
import { getEvolutions, getPokemonById, getPokemons, getPokemonSpecie } from '@/services';


export const usePokemons = ({
	limit, 
	offset,
}: QueryParams): UseQueryResult<PokemonDataProps[] | undefined> =>
	useQuery(['getPokemons', limit, offset], () => getPokemons(limit, offset), { keepPreviousData: true });

export const usePokemonSpecie = (url?: string): UseQueryResult<PokemonDataSpecieProps | undefined> => {
    
	return useQuery(['getPokemonSpecie', url], () => {
		if(!url) return;
		return getPokemonSpecie(url);
	}, {
		enabled: !!url,
	});
};

export const usePokemonById = (id?: string): UseQueryResult<PokemonDataProps | undefined> => useQuery(['getPokemonById', id], () => getPokemonById(id));

export const useEvolutions = (url?: string): UseQueryResult<EvolutionsProps | undefined> => {
	return useQuery(['getEvolutions', url], () => {
		if(!url) return;
		return getEvolutions(url);
	}, {
		enabled: !!url,
	});
};


