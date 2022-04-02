import { createContext, FC, ReactElement } from "react";
import style from './Card.module.css';
import { PokemonContextProps, PokemonDataProps } from '../../types/index';

interface CardProps {
    children: ReactElement | ReactElement[];
    pokemon: PokemonDataProps;
}

export const PokeContext = createContext({} as PokemonContextProps);

const { Provider } = PokeContext;
const { card } = style;

export const Card: FC<CardProps> = ({
    children,
    pokemon
}) => {

    return(
        <Provider value={{ pokemon }}>
            <div className={card}>
                { children }
            </div>
        </Provider>
    )
}