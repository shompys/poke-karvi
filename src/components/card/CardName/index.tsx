import styles from './index.module.css';
import { useContext } from 'react';
import { PokeContext } from 'components/card/Card';
import { capitalizeFirstLetter } from 'utils';

const CardName = () => {
    const { pokemon } = useContext( PokeContext );
    
    return (
        <div className={styles.name}>
            { capitalizeFirstLetter(pokemon?.name || 'shompys') }
        </div>
    )
}

export default CardName;