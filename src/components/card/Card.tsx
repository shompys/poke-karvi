import { createContext, ReactElement } from "react";
import style from './Card.module.css';

interface PokeContextProps {
    pokemon: {}
}
interface CardProps {
    children: ReactElement | ReactElement[];
    pokemon: string;
}
export const PokeContext = createContext({} as PokeContextProps);

const { Provider } = PokeContext;
const { card } = style;

export const Card = ({
    children,
    pokemon
}: CardProps) => {
    return(
        <Provider value={{ pokemon }}>
            <div className={card}>
                { children }
            </div>
        </Provider>
    )
}