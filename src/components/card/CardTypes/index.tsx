import styles from './index.module.css';
import { useContext } from 'react';
import { PokeContext } from 'components/card/Card';
import { capitalizeFirstLetter } from 'utils';

export const CardTypes = () => {

  const { pokemon } = useContext( PokeContext );

  return (
    <div className={styles.types}>
      <h2 className={styles.title}>Tipos:</h2>
      <ul className={styles.ul}>
        {
          pokemon ?
            pokemon.types.map( ({ type }) => 
            <li 
              key={type.name}
              className={styles.li}>
              {capitalizeFirstLetter(type.name) }
            </li>)
            :
            <li className={styles.li}>Human</li>
        }
      </ul>
    </div>
  )
}
