import products from "../Products";

const ShopGPU = (props) => {
    const findProduct = (e) => {
        const product = products.gpus.find((gpu) => gpu.id === Number(e.target.id));
        props.handleBasketChange(product);
    };

    return (
        <>
            {products.gpus.map((gpu) => {
                return (
                    <div key={gpu.id} className="product">
                        <img src={gpu.image} alt="gpu" />
                        <h2>{gpu.name}</h2>
                        <p>{gpu.description}</p>
                        <h1>
                            <span className="price">{gpu.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button id={gpu.id} className="btn" onClick={findProduct}>
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopGPU;
