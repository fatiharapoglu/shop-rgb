import React from "react";
import products from "../c-products";

const ShopGPU = () => {
    return (
        <>
            {products.gpus.map((gpu) => {
                return (
                    <div>
                        <img src={gpu.image} alt="gpu" />
                        <h2>{gpu.name}</h2>
                        <h1>
                            {gpu.price} <span className="currency">₺</span>
                        </h1>
                        <p>{gpu.description}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ShopGPU;
