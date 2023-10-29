import React from "react";
import Accordeon from "./Accordeon";

function Karakter(props) {
  const { char, movies } = props;
  return (
    <Accordeon title={char.name}>
      <div className="char-card">
        <ul>
          <li>Height: {char.height}</li>
          <li>Mass: {char.mass}</li>
          <li>Hair Color: {char.hair_color}</li>
          <li>Skin Color: {char.skin_color}</li>
          <li>Eye Color: {char.eye_color}</li>
          <li>Birth Year: {char.birth_year}</li>
          <li>Gender: {char.gender}</li>
          <li>Appears in: {char.films.length} movies</li>
        </ul>
        {char.films.map((filmTitle) => {
          return (
            <Accordeon title={filmTitle}>
              {movies.length > 0 && (
                <ul>
                  <li>
                    {movies.find((m) => m.title === filmTitle).release_date}
                  </li>
                  <li>
                    {movies.find((m) => m.title === filmTitle).opening_crawl}
                  </li>
                </ul>
              )}
            </Accordeon>
          );
        })}
      </div>
    </Accordeon>
  );
}

export default Karakter;