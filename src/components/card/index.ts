import { Card as AuxCard } from './Card';

import { CardImage } from './CardImage';
import CardName from './CardName';
import { CardTypes } from './CardTypes';
import { CardNumber } from './CardNumber';

const Card = Object.assign(AuxCard, {
    Image: CardImage,
    Types: CardTypes,
    Name: CardName,
    Number: CardNumber,
})

export default Card;

