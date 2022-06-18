import { useEffect, useState } from 'react';
import { usePokemons } from '@/hooks/useQuerys';
import { PokemonDataProps } from '@/types';

const useToolsRulesPokemons = () => {
    const dataInitial = 10
    const [counter, setCounter] = useState<number>(0)
    const [pokemons, setPokemons] = useState<PokemonDataProps[]>([])

    const { data, status } = usePokemons({
        limit: dataInitial, 
        offset: counter,
    })
    
    useEffect(() => {
        if(!data) return;
        setPokemons(prev => ([
            ...prev,
            ...data,
        ]))

    }, [data])

    const nextPage = () => {
        setCounter(prev => prev + dataInitial);
    }

    return {
        pokemons,
        status,
        nextPage
    }
}
export default useToolsRulesPokemons;