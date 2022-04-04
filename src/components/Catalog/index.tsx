import Card from '../card'
import { usePokemons } from '../../hooks/useQuerys'
import styles from './index.module.css';

export const Catalog = () => {
  
  const { data: pokemons, isLoading, error } = usePokemons({
    limit: 10,
    offset: 0,
  })

  return (
    <div className={styles.catalog}>
      {
        isLoading ? 
          'loading...'
          :
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
  )
}
