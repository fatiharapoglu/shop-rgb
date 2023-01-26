import React, { useEffect, useState } from "react";

const Basket = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(0);
        props.basketList.map((item) => {
            setTotal((previous) => previous + item.price);
        });
    }, [props.basketList]);

    return (
        <>
            <div className="basket">
                <h1>YOUR BASKET</h1>
                <div className="basket-content">
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
                                    <button className="counter-btn">-</button>
                                    {item.counter || 1}
                                    <button className="counter-btn">+</button>
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
                <button className="proceed-btn">Proceed to Checkout</button>
                <button className="btn" onClick={props.handleCloseBtn}>
                    x
                </button>
            </div>
        </>
    );
};

export default Basket;
