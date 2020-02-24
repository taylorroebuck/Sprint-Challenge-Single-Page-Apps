import React from "react";
import styled from "styled-components";
import Header from "./Header";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const HeaderH1 = styled.h1`
  color: dodgerblue;
`

export default function WelcomePage() {
  return (
    <HeaderSection className="welcome-page">
      <header>
        <HeaderH1>Welcome to the ultimate fan site!</HeaderH1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </HeaderSection>
  );
}
