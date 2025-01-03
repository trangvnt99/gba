import React from "react";
import "../styles/header.css";
import logo from "../picture/logo.png";
import usa from "../picture/usa.svg";
import vietnam from "../picture/vietnam.webp";

const Header = () => {
    return (
        <header>
            <div className="hall">
                <a href="http://2dhc.com" className="title">
                <img src={logo} alt="logo" className="logo-h" />
                </a>

                <a href="http://2dhc.com" className="title">
                    <div className="gba-button-r">
                        GBA
                    </div>
                </a>
                
                <div className="phoneicon">
                    <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                </div>
                <p className="phonenum">(+1) 818 588 2 599</p>
                <img src={usa} alt="usa" className="flag" />
                <img src={vietnam} alt="vietnam" className="flag" />
            </div>

        </header>
    );
}
export default Header;