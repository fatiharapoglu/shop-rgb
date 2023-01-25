import React from "react";
import products from "../c-products";

const ShopCPU = () => {
    return (
        <>
            {products.cpus.map((cpu) => {
                return (
                    <div key={cpu.id}>
                        <img src={cpu.image} alt="cpu" />
                        <h2>{cpu.name}</h2>
                        <h1>
                            {cpu.price}
                            <span className="currency">₺</span>
                        </h1>
                        <p>{cpu.description}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ShopCPU;
