
import Card from "./components/card";
import styles from "./App.module.css";
import { usePokemons, } from "./hooks/useQuerys";

export const App = () => {
  const { app } = styles;
  
  const todo = usePokemons()
  console.log(todo)
  return (
    <>
      <header>Catálogo</header>
      <main>
        {/* {
            <Card pokemon="hola">
              <img src="" alt="" />
            </Card>
          // pokemones.map( ({name, url}) => 
          
          // )
        } */}
      </main>
    </>
  );
};
