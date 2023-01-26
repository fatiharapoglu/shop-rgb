import React from "react";
import products from "../c-products";

const ShopMobo = () => {
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
                        <button id={mobo.id} className="btn">
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopMobo;
