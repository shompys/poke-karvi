import { FlavorTextEntry, PokemonDataProps } from "@/types";
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { usePokemonById, usePokemonSpecie } from '@/hooks/useQuerys';
import styles from './index.module.css';
import { Loading } from "@/components/Loading";

interface MyPokemonProps {
  maxPokemons: number;
}

export const MyPokemon: FC<MyPokemonProps> = ({ maxPokemons }) => {
  const { id: urlId } = useParams();
  const navigate = useNavigate()
  const [description, setDescription] = useState<FlavorTextEntry[]>()

  const { data: pokemon, isError: errorById } = usePokemonById(urlId)
  console.log(pokemon)

  const { data: pokeSpecie, status } = usePokemonSpecie(pokemon?.species.url)
  
  useEffect(() => {
    setDescription(
      pokeSpecie?.flavor_text_entries.filter(({ language : { name } }) => name === 'es')
    )
    
  }, [pokeSpecie])
  

  return (
    <div className={styles.content}>
      {
        errorById || Number(urlId) > maxPokemons 
          ? <p>El param debe ser un numero y no debe superar el máximo de {maxPokemons}. Tu param es {urlId}. Si cumple entonces a quejarse con pokeapi</p>
          : status !== 'success'
            ? <Loading />
            : (<>

                <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name} />
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
