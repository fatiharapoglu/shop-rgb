import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faTwitterSquare,
    faYoutubeSquare,
    faLinkedin,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import github from "../assets/GitHub-Mark-Light-120px-plus.png";

const Footer = () => {
    return (
        <>
            <footer className="homepage-footer">
                <div className="footer-arrow">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div>
                    <h2>CATEGORIES</h2>
                    <ul>
                        <li>
                            <a href="#">Graphic Cards</a>
                        </li>
                        <li>
                            <a href="#">Processors</a>
                        </li>
                        <li>
                            <a href="#">Motherboards</a>
                        </li>
                        <li>
                            <a href="#">RAMs</a>
                        </li>
                        <li>
                            <a href="#">Storage Units</a>
                        </li>
                        <li>
                            <a href="#">Accessories</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>CUSTOMER SERVICE</h2>
                    <ul>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">My Account</a>
                        </li>
                        <li>
                            <a href="#">Returns and Exchanges</a>
                        </li>
                        <li>
                            <a href="#">Delivery Information</a>
                        </li>
                        <li>
                            <a href="#">Cargo Tracking</a>
                        </li>
                        <li>
                            <a href="#">Trading Guide</a>
                        </li>
                        <li>
                            <a href="#">Membership</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>LEGAL NOTICES</h2>
                    <ul>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>OFFICIAL CHANNELS</h2>
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookSquare} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagramSquare} /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutubeSquare} /> Youtube
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <footer className="footer-footer">
                <div className="about">
                    <span>
                        <a
                            href="https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart"
                            id="odin"
                        >
                            The Odin Project{" "}
                        </a>
                        | fatiharapoglu
                    </span>
                    <a href="https://github.com/fatiharapoglu">
                        <img className="github-icon" src={github} alt="github-logo" />
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
