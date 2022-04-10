import styles from './App.module.css';
import { Catalog } from './components/Catalog/';
import {Routes, Route, Navigate, HashRouter} from 'react-router-dom';
import { usePokemons } from './hooks/useQuerys';
import { MyPokemon } from './components/MyPokemon';
import { useState } from 'react';


export const App = () => {
  const [limit, setLimit] = useState<number>(10)
  const { data: pokemons, status } = usePokemons({
    limit, 
    offset: 0,
  })

  const nextPage = () => {
    
    setLimit(page => page + 10);
    
  }
 
  return (
    <>
      <header className={styles.title}>
          Catálogo
      </header>
      <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path=":id" element={<MyPokemon pokemons={pokemons} />}/>

          <Route path="/*" element={<Catalog pokemons={pokemons} isLoading={status !== 'success'} nextPage={nextPage}/>}/>
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>  
      </HashRouter>
      </div>
    </>
  );
};
