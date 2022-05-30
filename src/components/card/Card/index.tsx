import { createContext, FC, ReactElement } from "react";
import styles from './index.module.css';
import { PokemonContextProps, PokemonDataProps, PokemonDataSpecieProps } from '@/types'
import { Link } from 'react-router-dom';

interface CardProps {
    children: ReactElement | ReactElement[];
    pokemon: PokemonDataProps;
    disabledClick?: boolean
}

export const PokeContext = createContext({} as PokemonContextProps);

const { Provider } = PokeContext;

export const Card: FC<CardProps> = ({
    children,
    pokemon,
    disabledClick=false
}) => {
    
    return(
        <Provider value={{ pokemon }}>
            {
                disabledClick ? (
                    <div className={ styles.disabled }>
                        { children }
                    </div>
                )
                : 
                <Link to={`/${pokemon.id}`}>
                    <div className={ styles.card }>
                        { children }
                    </div>
                </Link>
            }
            
        </Provider>
    );
}