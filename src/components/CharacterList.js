import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CharacterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: justify;
  background: grey;
`

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
    <CharacterDiv className="character-list">
        {characters.map(obj => {
          return <CharacterCard obj={obj} key={obj.id} />;
        })}
    </CharacterDiv>
  );
}
