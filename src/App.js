import React, { useState, useEffect } from "react";
import axios from "axios";

import Karakter from "./components/Karakter";
import Accordeon from "./components/Accordeon";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  function getChars() {
    return axios.get("https://swapi.dev/api/people/");
  }
  function getMovs() {
    return axios.get("https://swapi.dev/api/films/");
  }

  useEffect(() => {
    console.log("loading data");
    setLoading(true);
    setError(null);

    Promise.all([getChars(), getMovs()])
      .then(function ([chars, movs]) {
        console.log("data loaded");
        setLoading(false);
        setError(null);

        setCharacters(chars.data);
        setMovies(movs.data[0].results);
      })
      .catch(function (error) {
        console.log("axios error on data load");
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && characters.length > 0 && (
        <>
          <h1 className="Header">STARWARS WIT</h1>
          <div className="char-container">
            {characters.map((char) => (
              <Karakter char={char} movies={movies} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
