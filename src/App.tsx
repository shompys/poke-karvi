import styles from './App.module.css';
import { Catalog } from './components/Catalog/';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { usePokemons } from './hooks/useQuerys';
import { MyPokemon } from './components/MyPokemon';

export const App = () => {
  const { data: pokemons, isLoading } = usePokemons({
    limit: 10,
    offset: 0,
  })
  return (
    <>
      <header className={styles.title}>
          Catálogo
      </header>
      <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path=":pokemon/:id" element={<MyPokemon pokemons={pokemons}/>}/>

          <Route path="/*" element={<Catalog pokemons={pokemons} isLoading={isLoading} />}/>
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>  
      </BrowserRouter>
      </div>
    </>
  );
};
