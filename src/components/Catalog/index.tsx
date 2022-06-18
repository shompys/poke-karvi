import Card from '@/components/card';
import styles from './index.module.css';
import { PokemonDataProps } from '@/types';
import { FC, useEffect, useRef } from 'react';
import { Loading } from '@/components/Loading';
interface CatalogProps {
  pokemons?: PokemonDataProps[];
  status: string;
  nextPage: () => void;
  setIsCatalog: (val: boolean) => void;
}

export const Catalog: FC<CatalogProps> = ({
	pokemons,
	status,
	nextPage,
	setIsCatalog,
}) => {
	const elementRef = useRef<HTMLButtonElement>(null);
  
	const handleOnClick = () => {  
		nextPage();  
	};

	useEffect(() => {
  
		if(elementRef.current && pokemons && pokemons.length > 10){
      
			scrollTo({
				top: elementRef?.current.getBoundingClientRect().bottom + scrollY,
				behavior: 'smooth'
			});
		}
	}, [pokemons]);
  
	useEffect(() => {
		setIsCatalog(true);
	}, []);

	if(status === 'loading') {
		return <Loading />;
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
						<Card.Number />
						<Card.Image />
						<Card.Name />
					</Card>
				)
			}
			{
				status === 'error' && <h1 className={styles.error}>Algo salió mal pero vos dale al boton</h1>
			}
			<button ref={elementRef} className={styles.loadingMorePokemons} onClick={handleOnClick}>Load More</button>
		</div>
	);
};
