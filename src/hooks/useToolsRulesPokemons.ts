import { useState } from 'react';
import { usePokemons } from '@/hooks/useQuerys';

interface ToolsRulesPokemonsProps {
    limitTotalPokemons?: number;
    cantPokemonsForFetch: number;
}

const useToolsRulesPokemons = ({
    limitTotalPokemons=150,
    cantPokemonsForFetch=10
}: ToolsRulesPokemonsProps ) => {
    
    const [limit, setLimit] = useState<number>(cantPokemonsForFetch)
    const [countReturnLimit, setCountReturnLimit] = useState<number>(0)
    const { data: pokemons, status } = usePokemons({
        limit, 
        offset: 0,
    })
    
    const nextPage = () => {
        setLimit(page => {
        if ( page === limitTotalPokemons ) {
            setCountReturnLimit( prev => prev + 1);
            return limitTotalPokemons
        }
        return page + 10
        });
    }
    return {
        pokemons,
        status,
        nextPage,
        hasPokemons: countReturnLimit <= 1 ? true : false
    }
}
export default useToolsRulesPokemons;