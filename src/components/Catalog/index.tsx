import Card from '../card'
import { usePokemons } from '../../hooks/useQuerys'
import { FC } from 'react'
import style from './index.module.css';

interface CatalogProps {
    
}

export const Catalog: FC<CatalogProps> = () => {
  const { catalog } = style;
  const { data: pokemons, isLoading, error } = usePokemons({
    limit: 10,
    offset: 0,
  })
  
  return (
    <div className={catalog}>
      {
        isLoading ? 
          'loading...'
          :
          pokemons?.map(pokemon => 
            <Card 
              key={pokemon.id}
              pokemon={pokemon}
            >
              <img src={pokemon.sprites.front_default} alt="" />
            </Card>
          )
      }
        
    </div>
  )
}
