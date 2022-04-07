import Card from '@/components/card';
import styles from './index.module.css';
import { PokemonDataProps } from '@/types';
import { FC } from 'react';

interface CatalogProps {
  pokemons?: PokemonDataProps[];
  isLoading: boolean;
}

export const Catalog: FC<CatalogProps> = ({
  pokemons,
  isLoading,
}) => {
  
  return (
    <div className={styles.catalog}>
      {
        isLoading ? 
          'loading...'
          :
          pokemons?.map(pokemon => 
            <Card 
              key={pokemon?.id}
              pokemon={pokemon}
            >
              <Card.Types />
              <Card.Image />
              <Card.Name />
            </Card>
          )
      }
        
    </div>
  )
}
