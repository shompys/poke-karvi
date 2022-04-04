import { useParams } from "react-router-dom"
import styles from './index.module.css';

export const MyPokemon = () => {

const { pokemon, id } = useParams();

  return (
    <div className={styles.content}>
      <p>{pokemon} - {id}</p>
    </div>
  )
}
