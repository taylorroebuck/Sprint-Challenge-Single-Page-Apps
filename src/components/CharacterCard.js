import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2%;
`

export default function CharacterCard(character) {
  return (
    <StyledCardDiv>
      <h2>{character.obj.name}</h2>
      <div>
        <img src={character.obj.image} alt={character.obj.name} />
      </div>
      <p>Status: {character.obj.status}</p>
    </StyledCardDiv>
  );
}
