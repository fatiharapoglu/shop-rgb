import products from "../Products";

const ShopRAM = (props) => {
    const findProduct = (e) => {
        const product = products.rams.find((ram) => ram.id === Number(e.target.id));
        props.handleBasketChange(product);
    };

    return (
        <>
            {products.rams.map((ram) => {
                return (
                    <div key={ram.id} className="product">
                        <img src={ram.image} alt="ram" />
                        <h2>{ram.name}</h2>
                        <p>{ram.description}</p>
                        <h1>
                            <span className="price">{ram.price.toLocaleString("tr-TR")}</span>
                        </h1>
                        <button id={ram.id} className="btn" onClick={findProduct}>
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopRAM;
