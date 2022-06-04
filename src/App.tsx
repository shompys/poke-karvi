import styles from "./App.module.css";
import { Catalog } from "./components/Catalog/";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { MyPokemon } from "./components/MyPokemon";
import useToolsRulesPokemons from "./hooks/useToolsRulesPokemons";
import { useState } from "react";

export const App = () => {
  const [maxPokemons] = useState(151);
  const { pokemons, status, nextPage, hasPokemons } = useToolsRulesPokemons({
    limitTotalPokemons: maxPokemons,
  });

  return (
    <>
      <header className={styles.title}>App - Pokemon - máximo de {maxPokemons} - {status}</header>
      <div className={styles.app}>
        <HashRouter>
          <Routes>
            <Route
              path=":id"
              element={<MyPokemon maxPokemons={maxPokemons} />}
            />

            <Route
              path="/*"
              element={
                <Catalog
                  pokemons={pokemons}
                  isLoading={status !== "success"}
                  nextPage={nextPage}
                  hasPokemons={hasPokemons}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
};
