import "./App.css";
import imageRickAndMorty from "./img/rick-morty.png";
import { useState } from "react";
import Characters from "./components/charcters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterAPI = await api.json();
    setCharacters(characterAPI.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imageRickAndMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={reqAPI} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
