import styles from './index.module.css';

export const Loading = () => {
	return (
		<div className={styles.content}>  
			<img className={styles.loading} src="https://d2q2so0mkhigrt.cloudfront.net/shompys-icon.webp" alt="shompys" />
		</div>
	);
};
