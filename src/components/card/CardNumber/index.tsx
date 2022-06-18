import styles from './index.module.css';
import { useContext } from 'react';
import { PokeContext } from '@/components/card/Card';

export const CardNumber = () => {

  const { pokemon } = useContext( PokeContext );

  return (
    <div className={styles.contentNumber}>
        {
          pokemon ?
            
            <p className={styles.number}>
              N° {pokemon.id}
            </p>
            :
            <p className={styles.number}>N° # ---</p>
        }
      
    </div>
  )
}
