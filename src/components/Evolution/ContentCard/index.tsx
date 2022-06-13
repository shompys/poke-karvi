import Card from "@/components/card";
import { Loading } from "@/components/Loading";
import { usePokemonById } from "@/hooks/useQuerys"
import { FC } from "react";
import styles from './index.module.css';

interface ContentCardProps {
    id: string;
}

export const ContentCard: FC<ContentCardProps> = ({
    id
}) => {

    const {data: pokemoncito, isLoading} = usePokemonById(id)
    return (<>
        {
            isLoading ? <div className={styles.contentLoading}><Loading /></div>
                :   pokemoncito &&
                    <Card pokemon={pokemoncito} >
                        <Card.Types />
                        <Card.Image />
                        <Card.Name />
                    </Card>
        }
    </>)
}