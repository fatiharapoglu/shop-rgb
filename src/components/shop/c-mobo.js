import React from "react";
import products from "../c-products";

const ShopMobo = (props) => {
    const findProduct = (e) => {
        const product = products.mobos.find((mobo) => mobo.id === Number(e.target.id));
        props.handleBasketChange(product);
    };
    return (
        <>
            {products.mobos.map((mobo) => {
                return (
                    <div key={mobo.id} className="product">
                        <img src={mobo.image} alt="mobo" />
                        <h2>{mobo.name}</h2>
                        <p>{mobo.description}</p>
                        <h1>
                            <span className="price">{mobo.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button id={mobo.id} className="btn" onClick={findProduct}>
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopMobo;
