import { useQuery, UseQueryResult } from "react-query"
import { PokemonDataProps, QueryParams } from "types";
import { getPokemons, getPokemonById } from 'services';

export const usePokemons = ({
    limit, 
    offset,
}: QueryParams): UseQueryResult<PokemonDataProps[] | undefined> =>
    useQuery(['getPokemons'], () => getPokemons(limit, offset));


export const usePokemonById = (id: number) => 
    useQuery(['getPokemonById', id], () => getPokemonById(id), {
    enabled: !!id,
});

// export const usePokemonSpeciesId = (id: number) => useQuery(['getPokemonSpeciest', id], () => getPokemonSpeciesId(id), {
//     enabled: !!id,
// });

