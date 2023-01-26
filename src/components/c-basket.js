import React, { useEffect, useState } from "react";

const Basket = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        props.basketList.forEach((item) => {
            handleTotalChange(item.price);
        });
    }, [props.basketList]);

    const handleTotalChange = (newPrice) => {
        setTotal(total + newPrice);
    };

    return (
        <>
            <div className="basket">
                <h1>Your Basket</h1>
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
                            </div>
                        );
                    })}
                </div>
                <div className="basket-total">
                    <h2>Total</h2>
                    <span className="price">{total.toLocaleString("tr-TR")}</span>
                </div>
                <button className="btn" onClick={props.handleCloseBtn}>
                    x
                </button>
            </div>
        </>
    );
};

export default Basket;
