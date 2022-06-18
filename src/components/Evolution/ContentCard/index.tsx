import Card from '@/components/card';
import { usePokemonById } from '@/hooks/useQuerys';
import { FC } from 'react';

interface ContentCardProps {
    id: string;
}

export const ContentCard: FC<ContentCardProps> = ({
	id
}) => {

	const {data: pokemoncito} = usePokemonById(id);
	return (<>
		{
			pokemoncito &&
                <Card pokemon={pokemoncito} >
                	<Card.Types />
                	<Card.Number />
                	<Card.Image />
                	<Card.Name />
                </Card>
		}
	</>);
};