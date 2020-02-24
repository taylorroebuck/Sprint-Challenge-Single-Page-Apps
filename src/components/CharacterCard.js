import React from "react";

export default function CharacterCard(character) {
  return (
    <div>
      <h2>Character Name: {character.obj.name}</h2>
      <div>
        <img src={character.obj.image} alt={character.obj.name} />
      </div>
      <p>Status: {character.obj.status}</p>
    </div>
  );
}
