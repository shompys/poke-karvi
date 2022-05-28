import { FlavorTextEntry, PokemonDataProps } from "@/types";
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { usePokemonSpecie } from '@/hooks/useQuerys';
import styles from './index.module.css';
import { Loading } from "@/components/Loading";

interface MyPokemonProps {
  pokemons: PokemonDataProps[] | undefined,
}

export const MyPokemon: FC<MyPokemonProps> = ({ pokemons }) => {
  const { id: urlId } = useParams();
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState<PokemonDataProps>();
  const [description, setDescription] = useState<FlavorTextEntry[]>()

  console.log(pokemons)
  useEffect(() => {
    const pokeResult = pokemons?.find(({id}) => (
      id === Number(urlId)
    ))
    console.log(pokeResult)
    if(!pokeResult) return navigate('/')
    setPokemon( 
      pokeResult
    )
    
  }, [pokemons, urlId])

  const { data: pokeSpecie, status } = usePokemonSpecie(pokemon?.species.url)
  
  useEffect(() => {
    setDescription(
      pokeSpecie?.flavor_text_entries.filter(({ language : { name } }) => name === 'es')
    )
    
  }, [pokeSpecie])
  
  return (
    <div className={styles.content}>
      
      {
        status !== 'success' 
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
