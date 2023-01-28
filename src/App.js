import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/m-home";
import Shop from "./components/c-shop";
import About from "./components/c-about";
import Nav from "./components/m-nav";
import Footer from "./components/m-footer";

const App = () => {
    const [basketList, setBasketList] = useState([]);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleSnackbar = () => {
        setIsSnackbarOpen(true);
    };

    return (
        <>
            <Nav basketList={basketList} setBasketList={setBasketList} />
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
            <Footer />
        </>
    );
};

export default App;
