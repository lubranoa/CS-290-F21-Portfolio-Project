import "./App.css";
import React from "react";
import SolarizedLogo from "./components/SolarizedLogo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import Navigation from "./components/Navigation";
import { useState } from "react";
import SolarizedCredit from "./components/SolarizedCredit";

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          < SolarizedLogo />
          <h1>Solarized Dark Exercise Tracker</h1>
          <p id="App-intro">
            Welcome to our website! We'll help you keep track of your exercises, how many 
            reps you did, how much weight you used, the units of that weight, and the date 
            you did that exercise. You can see what all you've accomplished over your 
            workout journey and can add more accomplishments or even edit or delete them 
            in case you messed up your entry while hitting that One-Rep Max goal. Good 
            luck and have fun!
          </p>
          <Route path="/" exact>
            < HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            < AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            < EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
          <footer>
             < Navigation />
             < SolarizedCredit />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
