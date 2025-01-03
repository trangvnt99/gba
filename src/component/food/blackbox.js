import React from "react";
import "../../styles/main_member.css";

const BlackBox = () => {
    return (
        <div className="blackbox">
        <box-icon name="home" type="solid" color="#cabfbf" className="icon"></box-icon>
        <a href="http://localhost:3000/main_1" className="a_title_navi">
            <p> Trang chủ</p>
        </a>
        <box-icon name="chevron-right" type="solid" color="#cabfbf" className="icon"></box-icon>
        <p id="mem">Thực phẩm</p>
    </div>
    )
}
export default BlackBox;