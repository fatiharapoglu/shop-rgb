import React from "react";
import Footer from "./m-footer";
import Nav from "./m-nav";

const About = (props) => {
    return (
        <>
            <Nav basketList={props.basketList} handleRemoveBtn={props.handleRemoveBtn} />
            <div className="about-wrapper">
                <h1>ABOUT RGBPC®</h1>
                <p>
                    This website is created with React by Fatih Arapoğlu. This is not a real
                    shopping site. Most links will not work correctly as they are there for only
                    visuals. Checkout system also will not work since this is not a real website.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis tempora
                    saepe eveniet perferendis aut corporis quisquam, aspernatur fugit repudiandae,
                    repellendus ab vel quod pariatur qui nam? Aliquid inventore illo ea.
                </p>
                <div className="vision-mission">
                    <div className="vision">
                        <h2>VISION</h2>
                        <p>Only selected & high end. Only RGB.</p>
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
