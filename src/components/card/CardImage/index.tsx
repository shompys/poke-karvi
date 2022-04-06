import { useContext } from 'react';
import { PokeContext } from 'components/card/Card';
import styles from './index.module.css';

export const CardImage = () => {

    const { pokemon } = useContext( PokeContext );

    return (
        <div className={ styles.img }>
            <img
                src={ pokemon?.sprites.front_default ||'https://d2q2so0mkhigrt.cloudfront.net/shompys-icon.webp'} 
                alt={pokemon?.name || 'shompys'}
                width="100%"
            />
        </div>
    )
}
