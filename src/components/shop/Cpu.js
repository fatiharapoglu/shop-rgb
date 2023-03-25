import products from "../Products";

const ShopCPU = (props) => {
    const findProduct = (e) => {
        const product = products.cpus.find((cpu) => cpu.id === Number(e.target.id));
        props.handleBasketChange(product);
    };
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
                        </h1>
                        <button id={cpu.id} className="btn" onClick={findProduct}>
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopCPU;
