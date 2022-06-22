import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHabitatById, usePokemonById, usePokemonSpecie } from '@/hooks/useQuerys';
import styles from './index.module.css';
import { Loading } from '@/components/Loading';
import { Evolution } from '../Evolution';

interface MyPokemonProps {
  setIsCatalog: (val: boolean) => void;
  isCartoon: boolean;
}

export const MyPokemon: FC<MyPokemonProps> = ({ setIsCatalog, isCartoon }) => {
	const { id: urlId } = useParams();
  
	const { data: pokemon } = usePokemonById(urlId);
	const { data: pokeSpecie, status } = usePokemonSpecie(pokemon?.species.url);
	const { data: pokeHabitat } = useHabitatById(urlId);

	const LOCALE = 'es';

	useEffect(() => {
		setIsCatalog(false);
	}, []);

	const handleScrollTop = () => 
		window.scrollTo({ top: 0, behavior: 'smooth' });

	const habitat = pokeHabitat?.names.filter(({language: { name }}) => name === LOCALE);
	
	const description = pokeSpecie?.flavor_text_entries.filter(({ language : { name } }) => name === LOCALE);

	return (
		<div className={styles.content}>
			{
				status !== 'success'
					? <Loading />
					: (<>
						<section className={styles.contentSection}>
							<div className={styles.contentImg}>
								<img 
									className={styles.img}
									src={ (isCartoon ? pokemon?.sprites?.other?.dream_world?.front_default : pokemon?.sprites?.other?.home?.front_default) ?? 'https://d2q2so0mkhigrt.cloudfront.net/shompys-icon.webp'} alt={pokemon?.name} 
								/>
							</div>
							<div className={styles.contentText}>
								<h1>{pokemon?.species.name}</h1>
								
								<p className={styles.p}>Tipo/s: {pokemon?.types.map(item => item.type.name + ' ')}</p>
								<p className={styles.p}>Habitats: {habitat?.map( item => item.name + ' ') ?? ':('}</p>
								<p className={styles.p}>Altura: { pokemon?.height && pokemon?.height / 10} metros</p>
								<p className={styles.p}>Peso: { pokemon?.weight && pokemon?.weight / 10 } kg</p>
								<p className={styles.p}>Habilidades: { pokemon?.abilities.map(item => item.ability.name + ' ') }</p>

							</div>
							<div className={styles.contentDescription}>
								<h3 className={styles.h3}>Descripción</h3>
								<p className={styles.p2}>
									{
										description?.map(({flavor_text}, index) => <span key={index}>{flavor_text} <br/></span>)
									}
								</p>
							</div>
						</section>
						<Evolution pokemon={pokeSpecie} isCartoon={isCartoon} handleScrollTop={handleScrollTop}/>
					</>)
			}
      
		</div>
	);
};
