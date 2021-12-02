import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to='/' className ='App-nav'>Go back to Home Page</Link>
            <Link to='/add-exercise' className ='App-nav'>Add an exercise</Link>
        </nav>
    );
}

export default Navigation;