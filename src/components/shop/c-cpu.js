import React from "react";
import products from "../c-products";

const ShopCPU = () => {
    return (
        <>
            {products.cpus.map((cpu) => {
                return (
                    <div key={cpu.id} className="product">
                        <img src={cpu.image} alt="cpu" />
                        <h2>{cpu.name}</h2>
                        <p>{cpu.description}</p>
                        <h1>
                            <span className="price">{cpu.price.toLocaleString("tr-TR")}</span>
                            <span className="currency"> ₺</span>
                        </h1>
                        <button id={cpu.id} className="btn">
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopCPU;
