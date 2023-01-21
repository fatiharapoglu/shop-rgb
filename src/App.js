import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/c-home";
import Shop from "./components/c-shop";
import About from "./components/c-about";
import Nav from "./components/m-nav";

const App = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
};

export default App;