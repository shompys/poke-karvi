import { useQuery } from "react-query"
import { getPokemons, getPokemonById, getPokemonSpeciesId } from '../services';

export const usePokemons = () => useQuery(['getPokemons'], getPokemons);

export const usePokemonsById = (id: number) => useQuery(['getPokemonById', id], () => getPokemonById(id), {
    enabled: !!id,
});

export const usePokemonSpeciesId = (id: number) => useQuery(['getPokemonSpeciest', id], () => getPokemonSpeciesId(id), {
    enabled: !!id,
});