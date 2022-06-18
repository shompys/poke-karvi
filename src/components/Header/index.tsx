import { FC } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
type HeaderProps = {
    maxPokemons: number;
    status: string;
    isCatalog: boolean;
}
export const Header: FC<HeaderProps> = ({
	maxPokemons,
	status,
	isCatalog,
}) => {

	return (
		<header className={styles.header}>
			{
				!isCatalog && <Link to="/" className={styles.link}>Volver al Catálogo</Link>
			}
			<h1 className={`${styles.h1} ${isCatalog && styles.h1Center}`}>App - Pokemon - máximo de {maxPokemons} - {status}</h1>
		</header>
	);
};