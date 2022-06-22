import Card from '@/components/card';
import { usePokemonById } from '@/hooks/useQuerys';
import { FC } from 'react';

interface ContentCardProps {
    id: string;
	isCartoon: boolean;
}

export const ContentCard: FC<ContentCardProps> = ({
	id, isCartoon,
}) => {

	const {data: pokemoncito} = usePokemonById(id);
	return (<>
		{
			pokemoncito &&
                <Card pokemon={pokemoncito}>
                	<Card.Types />
                	<Card.Number />
                	<Card.Image isCartoon={isCartoon}/>
                	<Card.Name />
                </Card>
		}
	</>);
};