import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: justify;
  background: grey;
  padding: 1.5%;
`

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                console.log(response);
                const locations = response.data.results.filter(obj =>
                    obj.name.toLowerCase().includes(query.toLowerCase())
                );
                setLocations(locations);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, [query]);

    return (
        <LocationDiv>
            <SearchForm query={query} setQuery={setQuery} />
            {locations.map(obj => {
                return <LocationCard obj={obj} key={obj.id} />;
            })}
        </LocationDiv>
    );
}
