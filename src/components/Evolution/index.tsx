import { useEvolutions } from "@/hooks/useQuerys"
import { PokemonDataSpecieProps } from "@/types"
import { iterableEvolutions } from "@/utils";
import { FC } from "react"
import { ContentCard } from "./ContentCard";

interface EvolutionsProps {
    pokemon?: PokemonDataSpecieProps;
}

export const Evolution: FC<EvolutionsProps> = ({ pokemon }) => {

    const { data: dataEvolution} = useEvolutions(pokemon?.evolution_chain.url)
    const evolution = iterableEvolutions({ evolutions: dataEvolution })

    return(
        <section>
            {
                evolution?.map(({
                    url
                }) => (
                    <ContentCard key={url.split('/')[6]} id={url.split('/')[6]}/>
                ))
            }
        </section>
    )
}