import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/m-home";
import Shop from "./components/c-shop";
import About from "./components/c-about";

const App = () => {
    const [basketList, setBasketList] = useState([]);

    const handleRemoveBtn = (e) => {
        const newList = basketList.filter((item) => item.id !== Number(e.target.dataset.id));
        setBasketList(newList);
    };

    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            basketList={basketList}
                            setBasketList={setBasketList}
                            handleRemoveBtn={handleRemoveBtn}
                        />
                    }
                />
                <Route
                    path="/shop/*"
                    element={
                        <Shop
                            basketList={basketList}
                            setBasketList={setBasketList}
                            handleRemoveBtn={handleRemoveBtn}
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About
                            basketList={basketList}
                            setBasketList={setBasketList}
                            handleRemoveBtn={handleRemoveBtn}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
