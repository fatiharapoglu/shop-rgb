import React from "react";
import products from "../c-products";

const ShopAll = (props) => {
    const findProduct = (e, tab) => {
        let key;
        if (tab === "mobo") {
            key = "mobos";
        } else if (tab === "gpu") {
            key = "gpus";
        } else if (tab === "cpu") {
            key = "cpus";
        } else if (tab === "ram") {
            key = "rams";
        } else if (tab === "accessory") {
            key = "accessories";
        }
        const product = products[key].find((item) => item.id === Number(e.target.id));
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
                        <button
                            id={mobo.id}
                            className="btn"
                            onClick={(e) => {
                                findProduct(e, "mobo");
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                );
            })}
            {products.gpus.map((gpu) => {
                return (
                    <div key={gpu.id} className="product">
                        <img src={gpu.image} alt="gpu" />
                        <h2>{gpu.name}</h2>
                        <p>{gpu.description}</p>
                        <h1>
                            <span className="price">{gpu.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button
                            id={gpu.id}
                            className="btn"
                            onClick={(e) => {
                                findProduct(e, "gpu");
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                );
            })}
            {products.cpus.map((cpu) => {
                return (
                    <div key={cpu.id} className="product">
                        <img src={cpu.image} alt="cpu" />
                        <h2>{cpu.name}</h2>
                        <p>{cpu.description}</p>
                        <h1>
                            <span className="price">{cpu.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button
                            id={cpu.id}
                            className="btn"
                            onClick={(e) => {
                                findProduct(e, "cpu");
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                );
            })}
            {products.rams.map((ram) => {
                return (
                    <div key={ram.id} className="product">
                        <img src={ram.image} alt="ram" />
                        <h2>{ram.name}</h2>
                        <p>{ram.description}</p>
                        <h1>
                            <span className="price">{ram.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button
                            id={ram.id}
                            className="btn"
                            onClick={(e) => {
                                findProduct(e, "ram");
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                );
            })}
            {products.accessories.map((accessory) => {
                return (
                    <div key={accessory.id} className="product">
                        <img src={accessory.image} alt="accessory" />
                        <h2>{accessory.name}</h2>
                        <p>{accessory.description}</p>
                        <h1>
                            <span className="price">{accessory.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button
                            id={accessory.id}
                            className="btn"
                            onClick={(e) => {
                                findProduct(e, "accessory");
                            }}
                        >
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopAll;
