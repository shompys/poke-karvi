import { PokemonDataProps } from "@/types";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from './index.module.css';

interface MyPokemonProps {
  pokemons: PokemonDataProps[] | undefined,
}

export const MyPokemon: FC<MyPokemonProps> = ({ pokemons }) => {

const { id: urlId } = useParams();

const [pokemon, setPokemon] = useState<PokemonDataProps>();

useEffect(() => {
  
  setPokemon( pokemons?.filter(({id}) => id === Number(urlId))[0] )
  
}, [pokemons])

  return (
    <div className={styles.content}>
      <pre>
        {
          JSON.stringify(pokemon, null, 3)

        }
      </pre>
    </div>
  )
}
