import { createContext, FC, ReactElement } from "react";
import styles from './index.module.css';
import { PokemonContextProps, PokemonDataProps } from '@/types'
import { Link } from 'react-router-dom';

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
            <Link to={`${pokemon.name}/${pokemon.id}`}>
                <div className={ styles.card }>
                    { children }
                </div>
            </Link>
        </Provider>
    );
}