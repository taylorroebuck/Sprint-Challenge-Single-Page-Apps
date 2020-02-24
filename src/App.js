import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters" exact component={CharacterList} />
      {/* <Header />
      <Switch>
        <Route exact path="/" exact component={WelcomePage} />
        <Route exact path="/characters" exact component={CharacterList} />
      </Switch> */}
    </main>
  );
}
