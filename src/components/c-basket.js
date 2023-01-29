import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Basket = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        props.basketList.forEach((item) => {
            newTotal = newTotal + item.price * item.counter;
            return newTotal;
        });
        setTotal(newTotal);
    }, [props]);

    const handleMinus = (e) => {
        let ID = e.target.parentNode.parentNode.lastChild.dataset.id;
        const item = props.basketList.find((item) => item.id === Number(ID));
        if (item.counter === 1) return;
        const newList = props.basketList.map((item) => {
            if (item.id === Number(ID)) {
                return { ...item, counter: item.counter - 1 };
            }
            return item;
        });
        props.setBasketList(newList);
    };

    const handlePlus = (e) => {
        let ID = e.target.parentNode.parentNode.lastChild.dataset.id;
        const newList = props.basketList.map((item) => {
            if (item.id === Number(ID)) {
                return { ...item, counter: item.counter + 1 };
            }
            return item;
        });
        props.setBasketList(newList);
    };

    return (
        <>
            <div className="basket">
                <h1>YOUR BASKET</h1>
                <div className="basket-content">
                    {props.basketList.length === 0 && (
                        <div className="basket-empty">
                            <div>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </div>
                    )}
                    {props.basketList.map((item) => {
                        return (
                            <div key={item.id} className="basket-product">
                                <img src={item.image} alt="basket-item" />
                                <div>
                                    <h2>{item.name}</h2>
                                    <h1>
                                        <span className="price">
                                            {item.price.toLocaleString("tr-TR")}
                                        </span>
                                    </h1>
                                </div>
                                <div className="counter">
                                    <button onClick={handleMinus} className="counter-btn">
                                        -
                                    </button>
                                    {item.counter}
                                    <button onClick={handlePlus} className="counter-btn">
                                        +
                                    </button>
                                </div>
                                <button
                                    data-id={item.id}
                                    className="remove-btn"
                                    onClick={props.handleRemoveBtn}
                                >
                                    x
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="basket-total">
                    <h2>TOTAL</h2>
                    <span className="price">{total.toLocaleString("tr-TR")}</span>
                </div>
                <button
                    className="proceed-btn"
                    onClick={() => {
                        if (props.basketList.length !== 0) {
                            props.handleSnackbar("Thanks for buying!");
                        }
                    }}
                >
                    Proceed to Checkout
                </button>
                <button className="btn" onClick={props.handleCloseBtn}>
                    x
                </button>
            </div>
        </>
    );
};

export default Basket;
