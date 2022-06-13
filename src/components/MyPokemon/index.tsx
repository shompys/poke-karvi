import { FlavorTextEntry } from "@/types";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemonById, usePokemonSpecie } from '@/hooks/useQuerys';
import styles from './index.module.css';
import { Loading } from "@/components/Loading";
import { Evolution } from "../Evolution";

interface MyPokemonProps {
  setIsCatalog: (val: boolean) => void;
}

export const MyPokemon: FC<MyPokemonProps> = ({ setIsCatalog }) => {
  const { id: urlId } = useParams();
  
  const [description, setDescription] = useState<FlavorTextEntry[]>() 
  const { data: pokemon, isError: errorById } = usePokemonById(urlId)
  const { data: pokeSpecie, status } = usePokemonSpecie(pokemon?.species.url)

  useEffect(() => {
    scrollTo({top: 0, behavior: 'smooth'})
  })

  useEffect(() => {
    setIsCatalog(false)
  }, [])

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
              <section className={styles.contentSection}>
                  <img 
                    className={styles.img}
                    src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name} 
                  />
                  <ul className={styles.ul}>
                    {
                      description?.map(({flavor_text}, index) => <p key={index} className={styles.li}>{flavor_text}</p>)
                    }
                  </ul>
              </section>
              <Evolution pokemon={pokeSpecie} />
            </>)
      }
      
    </div>
  )
}
