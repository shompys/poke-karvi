import styles from './App.module.css';
import { Catalog } from './components/Catalog/';
import {Routes, Route, Navigate, HashRouter} from 'react-router-dom';
import { usePokemons } from './hooks/useQuerys';
import { MyPokemon } from './components/MyPokemon';

export const App = () => {
  const { data: pokemons, status } = usePokemons({
    limit: 10,
    offset: 0,
  })
  return (
    <>
      <header className={styles.title}>
          Catálogo
      </header>
      <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path=":pokemon/:id" element={<MyPokemon pokemons={pokemons}/>}/>

          <Route path="/*" element={<Catalog pokemons={pokemons} isLoading={status !== 'success'} />}/>
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>  
      </HashRouter>
      </div>
    </>
  );
};
