import styles from './App.module.css';
import { Catalog } from './components/Catalog/index';

export const App = () => {
  
  return (
    <>
      <header className={styles.title}>
          Catálogo
      </header>
      <div className={styles.app}>
        <Catalog />
      </div>
    </>
  );
};
