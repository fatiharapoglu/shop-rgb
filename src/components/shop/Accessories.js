import products from "../Products";

const ShopAccessories = (props) => {
    const findProduct = (e) => {
        const product = products.accessories.find(
            (accessory) => accessory.id === Number(e.target.id)
        );
        props.handleBasketChange(product);
    };
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
                        </h1>
                        <button id={accessory.id} className="btn" onClick={findProduct}>
                            Add to basket
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default ShopAccessories;
