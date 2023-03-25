import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Basket from "./Basket";

const Nav = (props) => {
    const [isCartActive, setIsCartActive] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        setCartLength(props.basketList.length);
    }, [props]);

    const handleRemoveBtn = (e) => {
        const newList = props.basketList.filter((item) => item.id !== Number(e.target.dataset.id));
        props.setBasketList(newList);
    };

    const handleBasketClick = () => {
        setIsCartActive(true);
    };

    const handleCloseBtn = () => {
        setIsCartActive(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/shop-rgb/">
                    <span className="brand">
                        RGB<span>PC</span>
                    </span>
                </Link>
                <span className="slogan">Where technology meets color.</span>
            </div>
            <div className="navbar-right">
                <Link to="/shop-rgb/shop/all">SHOP</Link>
                <Link to="/shop-rgb/about">ABOUT</Link>
                <button className="btn" onClick={handleBasketClick}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {cartLength !== 0 && <span className="basket-counter">{cartLength}</span>}
                </button>
            </div>
            <Basket
                basketList={props.basketList}
                setBasketList={props.setBasketList}
                handleCloseBtn={handleCloseBtn}
                handleRemoveBtn={handleRemoveBtn}
                setCartLength={setCartLength}
                handleSnackbar={props.handleSnackbar}
                isCartActive={isCartActive}
            />
        </nav>
    );
};

export default Nav;
