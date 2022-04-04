import { createContext, FC, ReactElement } from "react";
import styles from './index.module.css';
import { PokemonContextProps, PokemonDataProps } from '../../../types/index';
import { usePokemons } from "hooks/useQuerys";

interface CardProps {
    children: ReactElement | ReactElement[];
    pokemon: PokemonDataProps;
}

export const PokeContext = createContext({} as PokemonContextProps);

const { Provider } = PokeContext;

export const Card: FC<CardProps> = ({
    children,
    pokemon
}) => {
    
    return(
        <Provider value={{ pokemon }}>
            <div className={ styles.card }>
                { children }
            </div>
        </Provider>
    );
}