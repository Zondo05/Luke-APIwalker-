import React from 'react';
import './App.css';
import { Router }from '@reach/router';

import SearchBar from "./views/SearchBar";

import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">

      <SearchBar />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Starships path="/starships/:id" />
        <Error path="/error" />
      </Router>

    </div>
  );
}

export default App;
