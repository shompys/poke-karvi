import { useQuery, UseQueryResult } from "react-query"
import { PokemonDataProps, PokemonDataSpecieProps, QueryParams } from "@/types";
import { getPokemonById, getPokemons, getPokemonSpecie } from '@/services';

export const usePokemons = ({
    limit, 
    offset,
}: QueryParams): UseQueryResult<PokemonDataProps[] | undefined> =>
    useQuery(['getPokemons', limit, offset], () => getPokemons(limit, offset), { keepPreviousData: true });


export const usePokemonSpecie = (url: string | undefined): UseQueryResult<PokemonDataSpecieProps | undefined> => {
    
    return useQuery(['getPokemonSpecie', url], () => {
        if(!url) return;
        return getPokemonSpecie(url)
    }, {
        enabled: !!url,
    })
}

export const usePokemonById = (id?: string) => useQuery(['getPokemonById', id], () => getPokemonById(id))


