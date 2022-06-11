import { useState } from 'react';
import { usePokemons } from '@/hooks/useQuerys';

interface ToolsRulesPokemonsProps {
    limitTotalPokemons: number;
}

const useToolsRulesPokemons = ({
    limitTotalPokemons,
}: ToolsRulesPokemonsProps ) => {
    const dataInitial = 10
    const [limit, setLimit] = useState<number>(dataInitial)
    const [hasPokemons, setHasPokemons] = useState<boolean>(true)
   
    const { data: pokemons, status } = usePokemons({
        limit, 
        offset: 0,
    })
    
    const nextPage = () => {
        setLimit( prev => {
            
            if (prev >= limitTotalPokemons - 9) {
                
                setHasPokemons(false);
                return limitTotalPokemons
            }
            return prev + 10
        });
    }

    return {
        pokemons,
        status,
        nextPage,
        hasPokemons,
    }
}
export default useToolsRulesPokemons;