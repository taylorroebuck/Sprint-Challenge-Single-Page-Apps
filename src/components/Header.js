import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .headerNav {
    width: 100%;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
        background: dodgerblue;
      }
    }
  }
`

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="headerNav">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/characters">Characters </NavLink>
        <NavLink to="/locations">Locations </NavLink>
      </nav>
    </StyledHeader>
  );
}
