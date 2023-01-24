import React from "react";
import video from "../assets/background.mp4";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/shop">SHOP</NavLink>
                    <span>Bag</span>
                </div>
            </header>
            <main className="homepage-main">
                <h1>GeForce RTX 40 Series</h1>
                <h2>BEYOND FAST</h2>
                <p>NVIDIA® GeForce RTX™ 40 Series GPUs are now available.</p>
                <NavLink to="/shop">
                    <button className="btn">See All Products</button>
                </NavLink>
            </main>
            <video className="homepage-background" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Home;
