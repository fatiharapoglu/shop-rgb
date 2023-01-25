import React from "react";
import products from "../c-products";

const ShopRAM = () => {
    return (
        <>
            {products.rams.map((ram) => {
                return (
                    <div key={ram.id} className="product">
                        <img src={ram.image} alt="ram" />
                        <h2>{ram.name}</h2>
                        <h1>
                            {ram.price}
                            <span className="currency">₺</span>
                        </h1>
                        <p>{ram.description}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ShopRAM;
