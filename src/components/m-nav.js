import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-left">
                EliteTechWorks
            </Link>
            <ul className="navbar-right">
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
