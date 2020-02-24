import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters" exact component={CharacterList} />
      <Route path="/locations" exact component={LocationsList} />
      <Route path="/episodes" exact component={EpisodeList} />
    </main>
  );
}
