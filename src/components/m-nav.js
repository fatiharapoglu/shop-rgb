import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <span className="brand">
                        RGB <span>PC</span>
                    </span>
                </Link>
                <span className="slogan">Where technology meets color.</span>
            </div>
            <div className="navbar-right">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <button className="btn">
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </header>
    );
};

export default Nav;
