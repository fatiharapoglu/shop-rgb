import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <div className="homepage-header-left">
                    <span>RGB PC</span>
                    <span>Only High End</span>
                    <span>Where technology meets color</span>
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
        </div>
    );
};

export default Home;
