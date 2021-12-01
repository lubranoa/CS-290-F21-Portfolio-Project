import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <h3>Links</h3>
            <Link to=''>Go back to Home</Link>
            <Link to=''>Add an exercise</Link>
        </nav>
    );
}

export default Navigation;