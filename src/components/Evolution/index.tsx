import { useEvolutions } from "@/hooks/useQuerys"
import { PokemonDataSpecieProps } from "@/types"
import { iterableEvolutions } from "@/utils";
import { FC } from "react"
import { Loading } from "../Loading";
import { ContentCard } from "./ContentCard";
import styles from './index.module.css';

interface EvolutionsProps {
    pokemon?: PokemonDataSpecieProps;
}

export const Evolution: FC<EvolutionsProps> = ({ pokemon }) => {

    const { data: dataEvolution} = useEvolutions(pokemon?.evolution_chain.url)
    const evolution = iterableEvolutions({ evolutions: dataEvolution })
    
    return(
        <section className={styles.section}>
            {
                evolution && evolution?.length <= 0 
                    ?   <div className={styles.contentLoading}><Loading /></div>
                    :   evolution?.map(({
                        url
                    }) => (
                        <div onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
                            <ContentCard key={url.split('/')[6]} id={url.split('/')[6]}/>
                        </div>
                    ))
            }
        </section>
    )
}