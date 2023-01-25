import React from "react";
import products from "../c-products";

const ShopAccessories = () => {
    return (
        <>
            {products.accessories.map((accessory) => {
                return (
                    <div key={accessory.id} className="product">
                        <img src={accessory.image} alt="accessory" />
                        <h2>{accessory.name}</h2>
                        <p>{accessory.description}</p>
                        <h1>
                            <span className="price">{accessory.price.toLocaleString("tr-TR")}</span>
                            <span className="currency"> ₺</span>
                        </h1>
                        <button id={accessory.id} className="btn">
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopAccessories;
