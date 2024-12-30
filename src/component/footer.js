import React from "react";
import "../styles/footer.css";
import logo from "../picture/logo.png";
import 'boxicons';

const Footer = () => {
    return (
        <footer className="fall">
            <div className="grid">
                <div className="div1">
                    <div className="logod">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="gba-button">
                        GBA
                    </div>
                    <div className="text1">
                        Commercial & Investment Associate Sourcing
                        Representative
                    </div>
                </div>
                <div className="div2">
                    <h3 className="title">Contact Us</h3>
                    <div className="rec">
                    </div>
                    <div className="text2">
                        <div className="icon">
                            <box-icon name='envelope' ></box-icon>
                        </div>
                        <p>Contact@2dhC.com</p>

                        <div className="icon">
                            <box-icon name='phone' type='solid' ></box-icon>
                        </div>
                        <p>(+84) 913 11 33 41 <br /> (+1) 818 588 2 599</p>

                        <div className="icon">
                            <box-icon name='map' type='solid' ></box-icon>
                        </div>
                        <p>Deutches Haus, 33 Le Duan Street,
                            Ben Nghe Ward, Dist 1, HCMC, Vietnam</p>
                    </div>
                </div>
                <div className="div2">
                    <h3 className="title">About Us</h3>
                    <div className="rec">
                    </div>
                    <p className="text1">Why is 2dhC | All in one </p>
                </div>
            </div>
            <div className="under">@2024 2dhc</div>
        </footer>
    );
};

export default Footer;