import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2%;
`

export default function LocationCard(location) {
  return (
    <StyledCardDiv>
      <h2>{location.obj.name}</h2>
      <p>Type: {location.obj.type}</p>
      <p>Dimension: {location.obj.dimension}</p>
      
    </StyledCardDiv>
  );
}
