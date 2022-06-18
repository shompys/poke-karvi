import Card from '@/components/card';
import styles from './index.module.css';
import { PokemonDataProps } from '@/types';
import { FC, useEffect, useRef } from 'react';
import { Loading } from '@/components/Loading';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import debounce from "just-debounce-it";
interface CatalogProps {
  pokemons?: PokemonDataProps[];
  status: string;
  nextPage: () => void;
  hasPokemons: boolean;
  setIsCatalog: (val: boolean) => void;
}

export const Catalog: FC<CatalogProps> = ({
  pokemons,
  status,
  nextPage,
  hasPokemons,
  setIsCatalog,
}) => {
  const elementRef = useRef<HTMLButtonElement>(null)
  
  const handleOnClick = () => {  
    nextPage()  
  }

  useEffect(() => {
  
    if(elementRef.current && pokemons && pokemons.length > 10){
      
      scrollTo({
        top: elementRef?.current.getBoundingClientRect().bottom + scrollY,
        behavior: "smooth"
      })
    }
  }, [pokemons])
  
  useEffect(() => {
    setIsCatalog(true);
  }, [])

  if(status === 'loading') {
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
      <button ref={elementRef} className={styles.loadingMorePokemons} onClick={handleOnClick}>Load More</button>
    </div>
)
}
