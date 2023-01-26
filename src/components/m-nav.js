import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Basket from "./c-basket";

const Nav = (props) => {
    const [isCartActive, setIsCartActive] = useState(false);

    const handleBasketClick = () => {
        setIsCartActive(true);
    };

    const handleCloseBtn = () => {
        setIsCartActive(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <span className="brand">
                        RGB<span>PC</span>
                    </span>
                </Link>
                <span className="slogan">Where technology meets color.</span>
            </div>
            <div className="navbar-right">
                <Link to="/shop/all">SHOP</Link>
                <Link to="/about">ABOUT</Link>
                <button className="btn" onClick={handleBasketClick}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
            {isCartActive && (
                <Basket
                    handleCloseBtn={handleCloseBtn}
                    basketList={props.basketList}
                    handleRemoveBtn={props.handleRemoveBtn}
                />
            )}
        </nav>
    );
};

export default Nav;
