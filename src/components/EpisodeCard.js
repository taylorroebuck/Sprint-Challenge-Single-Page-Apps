import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2%;
`

export default function EpisodeCard(episode) {
  return (
    <StyledCardDiv>
      <h2>{episode.obj.name}</h2>
      <p>{episode.obj.air_date}</p>
      <p>{episode.obj.episode}</p>
    </StyledCardDiv>
  );
}