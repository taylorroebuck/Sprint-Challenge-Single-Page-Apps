import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        const characters = response.data.results;
        setCharacters(characters);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="character-list">
        {characters.map(obj => {
          return <CharacterCard obj={obj} key={obj.id} />;
        })}
    </div>
  );
}
