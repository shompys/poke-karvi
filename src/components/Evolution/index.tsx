import { useEvolutions } from '@/hooks/useQuerys';
import { PokemonDataSpecieProps } from '@/types';
import { iterableEvolutions } from '@/utils';
import { FC } from 'react';
import { ContentCard } from './ContentCard';
import styles from './index.module.css';

interface EvolutionsProps {
    pokemon?: PokemonDataSpecieProps;
	isCartoon: boolean;
	handleScrollTop: () => void;
}

export const Evolution: FC<EvolutionsProps> = ({ pokemon, isCartoon, handleScrollTop }) => {

	const { data: dataEvolution} = useEvolutions(pokemon?.evolution_chain.url);
	const evolution = iterableEvolutions({ evolutions: dataEvolution });

	return(
		<section className={styles.section}>
			{
				evolution?.map(({
					url
				}) => (
					<div key={url.split('/')[6]} onClick={handleScrollTop}>
						<ContentCard id={url.split('/')[6]} isCartoon={isCartoon}/>
					</div>
				))
			}
		</section>
	);
};