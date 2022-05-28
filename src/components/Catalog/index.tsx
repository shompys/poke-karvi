import Card from '@/components/card';
import styles from './index.module.css';
import { PokemonDataProps } from '@/types';
import { FC, useCallback, useEffect, useRef } from 'react';
import { Loading } from '@/components/Loading';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import debounce from "just-debounce-it";
interface CatalogProps {
  pokemons?: PokemonDataProps[];
  isLoading: boolean;
  nextPage: () => void;
}

export const Catalog: FC<CatalogProps> = ({
  pokemons,
  isLoading,
  nextPage,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  
  const isEnd = useInfiniteScroll(elementRef)

  const fiumba = useCallback(debounce(() => nextPage(), 500), [])
  
  useEffect(() => {
    if(isEnd) {
      fiumba()
    }
  }, [isEnd])
  
  if(isLoading) {
    return <Loading />
  }

  return (<>
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
    
    <p className={styles.loadingMorePokemons}>Cargando mas pokemones...</p>
    
    <div ref={elementRef}></div>
    </>)
}
