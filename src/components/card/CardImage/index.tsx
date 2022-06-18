import { FC, useContext } from 'react';
import { PokeContext } from '@/components/card/Card';
import styles from './index.module.css';

type CardImageProps = {
	isCartoon: boolean;
}

export const CardImage: FC<CardImageProps> = ({isCartoon}) => {

	const { pokemon } = useContext( PokeContext );

	return (
		<div className={ styles.img }>
			<img
				src={ (isCartoon ? pokemon?.sprites?.other?.dream_world?.front_default : pokemon?.sprites?.other?.home?.front_default) ?? 'https://d2q2so0mkhigrt.cloudfront.net/shompys-icon.webp'} 
				alt={pokemon?.name || 'shompys'}
			/>
		</div>
	);
};
