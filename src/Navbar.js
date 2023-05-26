import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul className='navbar'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/help">Help</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
