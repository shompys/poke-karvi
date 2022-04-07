import { useQuery, UseQueryResult } from "react-query"
import { PokemonDataProps, PokemonDataSpecieProps, QueryParams } from "@/types";
import { getPokemons, getPokemonSpecie } from '@/services';

export const usePokemons = ({
    limit, 
    offset,
}: QueryParams): UseQueryResult<PokemonDataProps[] | undefined> =>
    useQuery(['getPokemons'], () => getPokemons(limit, offset));


export const usePokemonSpecie = (url: string | undefined): UseQueryResult<PokemonDataSpecieProps | undefined> => {
    
    return useQuery(['getPokemonSpecie', url], () => {
        if(!url) return {};
        return getPokemonSpecie(url)
    }, {
        enabled: !!url,
    })
}

// export const usePokemonSpeciesId = (id: number) => useQuery(['getPokemonSpeciest', id], () => getPokemonSpeciesId(id), {
//     enabled: !!id,
// });

