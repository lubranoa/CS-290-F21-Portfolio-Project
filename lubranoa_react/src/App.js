import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import SolarizedLogo from "./components/SolarizedLogo";
import Navigation from '../components/Navigation';

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          < SolarizedLogo />
          <h1>Solarized Dark Exercise Tracker</h1>
          <Route path="/" exact>
            < HomePage />
          </Route>
          <Route path="/add-exercise">
            < AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            < EditExercisePage />
          </Route>
          <footer>< Navigation /></footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
