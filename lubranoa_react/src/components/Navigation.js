import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/" className ="App-link">Go back to Home Page</Link>
            <Link to="/add-exercise" className ="App-link">Add an exercise</Link>
        </nav>
    );
}

export default Navigation;