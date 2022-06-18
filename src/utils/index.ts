import { Chain, EvolutionsProps, Species } from "@/types";

export const capitalizeFirstLetter = (text: string) => {
    if(!text) return 'No data'
    const capitalizeLetter = text?.charAt(0).toUpperCase();
    const lowerCaseText = text?.slice(1);
    return `${capitalizeLetter}${lowerCaseText}`;
}
/**
 * Se me presentaron 3 casos
 * 
 * caso 2:
 * 
 * un pokemon puede evolucionar a cualquier pokemon desde cualquier pokemon :D
 * En este caso me viene un atributo de este estilo evolves_to: [{},{},{}]
 * Donde el array siempre va a tener los mismos objetos por mas que me posicione en cualquiera de ellos.
 * 
 */
export const iterableEvolutions = ({ 
    evolutions 
}: {
    evolutions?: EvolutionsProps;
}) => {
    if(!evolutions) return [];
    
    const recursiveIterator = ({
        list = [],
        evolution,
        restItems,
    }: {
        list?: Species[];
        evolution: Chain; 
        restItems?: Chain[];
    }): Species[] => {
        
        if(restItems?.length === 0) return [...list, evolution?.species];
        
        const [ firstItem ,...rest ] = (restItems && restItems.length >= 0 ? restItems : evolution?.evolves_to);
        
        return recursiveIterator({
            list: [...list, evolution?.species ],
            evolution: firstItem, 
            restItems: rest 
        })
        
    }
    /*
    * caso 1:
    * 
    * Un pokemon que evoluciona secuencialmente es decir en orden.
    * Para este caso me viene un atributo de este estilo evolves_to: [{}]
    * Siempre que tenga evolucion viene un objeto, caso contrario array vacio
    * 
    * caso 3:
    * 
    * un pokemon puede evolucionar secuencialmente pero se pueden ramificar desde un pokemon en particular
    * Para este caso me puede venir un objeto de este estilo evolves_to: [{}] pero desde la posicion del siguente puede existir evolves_to: [{}, {}]
    * solución si en alguna iteración evolves_to > 1 llamamos a la otra solucion y se crea un transformer de las dos
    * 
    */
    const recursiveSequential = ({
        list = [],
        evolution,
    }: {
        list?: Species[];
        evolution: Chain;
    }): Species[] => {

        if(evolution?.evolves_to?.length < 1) return [...list, evolution?.species];
        if(evolution?.evolves_to?.length > 1) {

            const [first, ...rest] = evolution?.evolves_to;
            return recursiveIterator({
                list: [...list, evolution?.species],
                evolution: first,
                restItems: rest
            })

        }
        return recursiveSequential({evolution: evolution?.evolves_to[0], list: [...list, evolution?.species ]})
    }
    if(evolutions.chain.evolves_to.length > 1){
        return recursiveIterator({evolution: evolutions?.chain})
    }
    return recursiveSequential({evolution: evolutions?.chain})

}