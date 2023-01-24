import React from "react";
import video from "../assets/background.mp4";
import { NavLink } from "react-router-dom";
import Footer from "./m-footer";
import rtx from "../assets/4090.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <div className="homepage-header-left">
                    <span className="brand">
                        RGB <span>PC</span>
                    </span>
                    <span className="slogan">Where technology meets color.</span>
                </div>
                <div className="homepage-header-right">
                    <NavLink to="/shop">Shop</NavLink>
                    <button className="btn">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </header>
            <main className="homepage-main-wrapper">
                <div className="homepage-main">
                    <h1>GeForce RTX 40 Series</h1>
                    <h2>BEYOND FAST</h2>
                    <p>NVIDIA® GeForce RTX™ 40 Series GPUs are now available.</p>
                    <NavLink to="/shop">
                        <button className="btn">See All Products</button>
                    </NavLink>
                </div>
                <div className="main-image">
                    <img src={rtx} alt="rtx 4090" />
                </div>
            </main>
            <video className="homepage-background" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <Footer />
        </div>
    );
};

export default Home;
