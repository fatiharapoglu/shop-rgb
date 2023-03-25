import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Snackbar from "./components/Snackbar";
import NotFound from "./components/404";

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
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            {isSnackbarOpen && <Snackbar snackbarText={snackbarText} />}
        </>
    );
};

export default App;
