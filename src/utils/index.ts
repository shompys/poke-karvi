import { Chain, EvolutionsProps, Species } from "@/types";

export const capitalizeFirstLetter = (text: string) => {
    if(!text) return 'No data'
    const capitalizeLetter = text?.charAt(0).toUpperCase();
    const lowerCaseText = text?.slice(1);
    return `${capitalizeLetter}${lowerCaseText}`;
}
export const iterableEvolutions = ({ 
    evolutions 
}: {
    evolutions?: EvolutionsProps;
}) => {
    
    if(!evolutions) return [];

    const recursiveIterator = ({
        evolution, 
        list 
    }: {
        evolution: Chain; 
        list: Species[]
    }): Species[] | void => {
        
        if(evolution?.evolves_to?.length !== 1) return [...list, evolution?.species];
        
        return recursiveIterator({evolution: evolution?.evolves_to[0], list: [...list, evolution?.species ]})

    }
    return recursiveIterator({evolution: evolutions?.chain, list: []})

}