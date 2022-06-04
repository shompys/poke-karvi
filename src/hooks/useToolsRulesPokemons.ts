import { useState } from 'react';
import { usePokemons } from '@/hooks/useQuerys';

interface ToolsRulesPokemonsProps {
    limitTotalPokemons: number;
}

const useToolsRulesPokemons = ({
    limitTotalPokemons,
}: ToolsRulesPokemonsProps ) => {
    
    const [limit, setLimit] = useState<number>(10)
    const [countReturnLimit, setCountReturnLimit] = useState<number>(0)
   
    const { data: pokemons, status } = usePokemons({
        limit, 
        offset: 0,
    })
    
    const nextPage = () => {
        setLimit( prev => {
            if (prev >= limitTotalPokemons) {
                
                setCountReturnLimit( prev => prev + 1);
                return limitTotalPokemons
            }
            return prev + 10
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