import { NavLink, Route, Routes } from "react-router-dom";

import ShopAll from "./shop/All";
import ShopMobo from "./shop/Mobo";
import ShopGPU from "./shop/Gpu";
import ShopCPU from "./shop/Cpu";
import ShopRAM from "./shop/Ram";
import ShopAccessories from "./shop/Accessories";

const Shop = (props) => {
    const handleBasketChange = (newItem) => {
        const isDuplicate = props.basketList.find((item) => item.id === newItem.id);
        if (isDuplicate !== undefined)
            return props.handleSnackbar(
                "This item is already on your cart. You can change quantity on your basket if you want to order multiple of this item."
            );
        props.setBasketList([...props.basketList, newItem]);
        props.handleSnackbar("Item successfully added to your cart.");
    };

    return (
        <>
            <div className="shop-wrapper">
                <aside className="shop-aside">
                    <h2>CATEGORIES</h2>
                    <ul>
                        <li>
                            <NavLink to="/shop/all">All Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/mobo">Motherboards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/gpu">Graphic Cards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/cpu">Processors</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/ram">RAMs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/accessories">Peripherals</NavLink>
                        </li>
                    </ul>
                </aside>
                <main className="shop-main">
                    <Routes>
                        <Route
                            path="/all"
                            element={<ShopAll handleBasketChange={handleBasketChange} />}
                        />
                        <Route
                            path="/mobo"
                            element={<ShopMobo handleBasketChange={handleBasketChange} />}
                        />
                        <Route
                            path="/gpu"
                            element={<ShopGPU handleBasketChange={handleBasketChange} />}
                        />
                        <Route
                            path="/cpu"
                            element={<ShopCPU handleBasketChange={handleBasketChange} />}
                        />
                        <Route
                            path="/ram"
                            element={<ShopRAM handleBasketChange={handleBasketChange} />}
                        />
                        <Route
                            path="/accessories"
                            element={<ShopAccessories handleBasketChange={handleBasketChange} />}
                        />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default Shop;
