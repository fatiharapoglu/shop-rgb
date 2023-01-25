import React from "react";
import Footer from "./m-footer";
import Nav from "./m-nav";

const About = () => {
    return (
        <>
            <Nav />
            <div className="about-container">
                <h1>RGBPC</h1>
                <p>
                    This website is created with React by Fatih Arapoğlu. This is not a real
                    shopping site. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis tempora saepe eveniet perferendis aut corporis quisquam, aspernatur
                    fugit repudiandae, repellendus ab vel quod pariatur qui nam? Aliquid inventore
                    illo ea.
                </p>
                <div className="vision-mission">
                    <div className="vision">
                        <h2>VISION</h2>
                        <p>Only high end. Only RGB.</p>
                    </div>
                    <div className="mission">
                        <h2>MISSION</h2>
                        <p>Where technology meets color.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
