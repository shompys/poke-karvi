import Card from '@/components/card';
import styles from './index.module.css';
import { PokemonDataProps } from '@/types';
import { FC } from 'react';
import { Loading } from '@/components/Loading';

interface CatalogProps {
  pokemons?: PokemonDataProps[];
  isLoading: boolean;
}

export const Catalog: FC<CatalogProps> = ({
  pokemons,
  isLoading,
}) => {
  
  if(isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.catalog}>
      {
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
