import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonById, usePokemonSpecie } from '@/hooks/useQuerys';
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
	
	useEffect(() => {
		scrollTo({top: 0, behavior: 'smooth'});
	});

	useEffect(() => {
		setIsCatalog(false);
	}, []);

	const description = pokeSpecie?.flavor_text_entries.filter(({ language : { name } }) => name === 'es');
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
								<h1>Lorem Ipsum</h1>
								<p className={styles.p}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa diam nisi
									enim convallis. Eget in malesuada enim diam lectus. Odio arcu egestas
									nibh aliquet tortor. Posuere est curabitur aliquam, malesuada neque, vitae
									arcu. Ac quam sit purus consequat rutrum sit elementum. Scelerisque
									commodo iaculis amet, tincidunt sodales. Lacus, arcu, convallis nulla
									ipsum. Eleifend consequat mauris volutpat commodo. Tellus ullamcorper
									dui ac condimentum. Mauris purus nibh augue non quis vitae. Aliquam
									tellus faucibus in id.
								</p>
							</div>
							<div className={styles.contentDescription}>
								<h3 className={styles.h3}>Descripción</h3>
								<p className={styles.p2}>
									{
										description?.map(({flavor_text}) => <>{flavor_text} <br/></>)
									}
								</p>
							</div>
						</section>
						<Evolution pokemon={pokeSpecie} isCartoon={isCartoon}/>
					</>)
			}
      
		</div>
	);
};
