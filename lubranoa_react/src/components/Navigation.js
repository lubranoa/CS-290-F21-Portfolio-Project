import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to='/'>Go back to Home</Link>
            <Link to='/add-movie'>Add an exercise</Link>
        </nav>
    );
}

export default Navigation;