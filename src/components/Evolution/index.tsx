import { useEvolutions } from '@/hooks/useQuerys';
import { PokemonDataSpecieProps } from '@/types';
import { iterableEvolutions } from '@/utils';
import { FC } from 'react';
import { ContentCard } from './ContentCard';
import styles from './index.module.css';

interface EvolutionsProps {
    pokemon?: PokemonDataSpecieProps;
	isCartoon: boolean;
}

export const Evolution: FC<EvolutionsProps> = ({ pokemon, isCartoon }) => {

	const { data: dataEvolution} = useEvolutions(pokemon?.evolution_chain.url);
	const evolution = iterableEvolutions({ evolutions: dataEvolution });

	return(
		<section className={styles.section}>
			{
				evolution?.map(({
					url
				}) => (
					<div key={url.split('/')[6]} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
						<ContentCard id={url.split('/')[6]} isCartoon={isCartoon}/>
					</div>
				))
			}
		</section>
	);
};