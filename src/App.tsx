import styles from "./App.module.css";
import { Catalog } from "./components/Catalog/";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { MyPokemon } from "./components/MyPokemon";
import useToolsRulesPokemons from "./hooks/useToolsRulesPokemons";
import { useState } from "react";
import { Header } from "./components/Header";

export const App = () => {
  const [maxPokemons] = useState<number>(151);
  const [isCatalog, setIsCatalog] = useState<boolean>(true);
  const { pokemons, status, nextPage, hasPokemons } = useToolsRulesPokemons({
    limitTotalPokemons: maxPokemons,
  });

  return (
    <>
        <HashRouter>
          <Header 
            maxPokemons={maxPokemons} 
            status={status}
            isCatalog={isCatalog}
          />
          <Routes>
            <Route
              path=":id"
              element={<MyPokemon setIsCatalog={setIsCatalog} />}
            />
            <Route
              path="/*"
              element={
                <Catalog
                  pokemons={pokemons}
                  isLoading={status !== "success"}
                  nextPage={nextPage}
                  hasPokemons={hasPokemons}
                  setIsCatalog={setIsCatalog}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
    </>
  );
};
