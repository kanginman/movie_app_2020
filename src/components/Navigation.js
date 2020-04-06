import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Navigation;
