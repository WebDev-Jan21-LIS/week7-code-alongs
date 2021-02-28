import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeStyle={{color: "red"}} exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "red"}} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "red"}} to="/contact">Contact Me</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "red"}} to="/projects">Projects</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;