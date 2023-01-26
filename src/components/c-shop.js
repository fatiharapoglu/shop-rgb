import React, { useState } from "react";
import Nav from "./m-nav";
import { NavLink, Route, Routes } from "react-router-dom";
import ShopAll from "./shop/c-all";
import ShopMobo from "./shop/c-mobo";
import ShopGPU from "./shop/c-gpu";
import ShopCPU from "./shop/c-cpu";
import ShopRAM from "./shop/c-ram";
import ShopAccessories from "./shop/c-accessories";
import Footer from "./m-footer";

const Shop = () => {
    const [basketList, setBasketList] = useState([]);

    const handleBasketChange = (newItem) => {
        setBasketList([...basketList, newItem]);
    };

    return (
        <>
            <Nav basketList={basketList} />
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
                            <NavLink to="/shop/accessories">Accessories</NavLink>
                        </li>
                    </ul>
                </aside>
                <main className="shop-main">
                    <Routes>
                        <Route path="/all" element={<ShopAll />} />
                        <Route path="/mobo" element={<ShopMobo />} />
                        <Route
                            path="/gpu"
                            element={
                                <ShopGPU
                                    basketList={basketList}
                                    handleBasketChange={handleBasketChange}
                                />
                            }
                        />
                        <Route path="/cpu" element={<ShopCPU />} />
                        <Route path="/ram" element={<ShopRAM />} />
                        <Route path="/accessories" element={<ShopAccessories />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
