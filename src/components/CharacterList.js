import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: justify;
  background: grey;
  padding: 1.5%;
`

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(obj => 
          obj.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(characters);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [query]);

  return (
    <CharacterDiv className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
        {characters.map(obj => {
          return <CharacterCard obj={obj} key={obj.id} />;
        })}
    </CharacterDiv>
  );
}
