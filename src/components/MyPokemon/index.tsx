import { FlavorTextEntry, PokemonDataProps } from "@/types";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemonSpecie } from '@/hooks/useQuerys';
import styles from './index.module.css';

interface MyPokemonProps {
  pokemons: PokemonDataProps[] | undefined,
}

export const MyPokemon: FC<MyPokemonProps> = ({ pokemons }) => {

  const { id: urlId } = useParams();

  const [pokemon, setPokemon] = useState<PokemonDataProps>();
  const [description, setDescription] = useState<FlavorTextEntry[]>()


  useEffect(() => {
  
    setPokemon( pokemons?.filter(({id}) => id === Number(urlId))[0] )
  
  }, [pokemons, urlId])

  const { data: pokeSpecie, isLoading } = usePokemonSpecie(pokemon?.species.url)
  
  useEffect(() => {
    setDescription(
      pokeSpecie?.flavor_text_entries.filter(({ language : { name } }) => name === 'es')
    )
    
  }, [pokeSpecie])
  
  return (
    <div className={styles.content}>
      
      {
        isLoading 
          ? <h1>Loading...</h1> 
          : (<>

              <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
              <ul>
                {
                  description?.map(({flavor_text}, index) => <li key={index}>{flavor_text}</li>)
                }
              </ul> 

            </>)
      }
      
    </div>
  )
}
