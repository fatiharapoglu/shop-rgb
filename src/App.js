import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/m-home";
import Shop from "./components/c-shop";
import About from "./components/c-about";
import Nav from "./components/m-nav";
import Footer from "./components/m-footer";
import Snackbar from "./components/c-snackbar";

const App = () => {
    const [basketList, setBasketList] = useState([]);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");

    const handleSnackbar = (text) => {
        setIsSnackbarOpen(true);
        setSnackbarText(text);
    };

    useEffect(() => {
        if (isSnackbarOpen === false) return;
        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, 3000);
    }, [isSnackbarOpen]);

    return (
        <>
            <Nav
                basketList={basketList}
                setBasketList={setBasketList}
                handleSnackbar={handleSnackbar}
            />
            <Routes>
                <Route path="/shop-rgb/" element={<Home />} />
                <Route
                    path="/shop-rgb/shop/*"
                    element={
                        <Shop
                            basketList={basketList}
                            setBasketList={setBasketList}
                            handleSnackbar={handleSnackbar}
                        />
                    }
                />
                <Route path="/shop-rgb/about" element={<About />} />
            </Routes>
            <Footer />
            {isSnackbarOpen && <Snackbar snackbarText={snackbarText} />}
        </>
    );
};

export default App;
