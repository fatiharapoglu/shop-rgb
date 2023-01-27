import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/m-home";
import Shop from "./components/c-shop";
import About from "./components/c-about";

const App = () => {
    const [basketList, setBasketList] = useState([]);

    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={<Home basketList={basketList} setBasketList={setBasketList} />}
                />
                <Route
                    path="/shop/*"
                    element={<Shop basketList={basketList} setBasketList={setBasketList} />}
                />
                <Route
                    path="/about"
                    element={<About basketList={basketList} setBasketList={setBasketList} />}
                />
            </Routes>
        </div>
    );
};

export default App;
