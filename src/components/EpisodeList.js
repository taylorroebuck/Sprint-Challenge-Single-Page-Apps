import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";

const EpisodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: justify;
  background: grey;
  padding: 1.5%;
`

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(response => {
                console.log(response);
                const episodes = response.data.results.filter(obj =>
                    obj.name.toLowerCase().includes(query.toLowerCase())
                );
                setEpisodes(episodes);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, [query]);

    return (
        <EpisodeDiv>
            <SearchForm query={query} setQuery={setQuery} />
            {episodes.map(obj => {
                return <EpisodeCard obj={obj} key={obj.id} />;
            })}
        </EpisodeDiv>
    );
}
