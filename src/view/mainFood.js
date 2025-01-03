import React  from "react";
import "../styles/food/mainSeafood.css";

import Footer from "../component/footer";
import Header from "../component/header";
import Food from "../component/food/food.component"


import 'boxicons';

const MainFood = () => {
   

    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name="home" type="solid" color="#cabfbf" className="icon"></box-icon>
                <a href="http://localhost:3000/main_1" className="a_title_navi">
                    <p> Trang chủ</p>
                </a>
                <box-icon name="chevron-right" type="solid" color="#cabfbf" className="icon"></box-icon>
                <p id="mem">Thực phẩm</p>
            </div>
            <div className="main" >
            <div class="menu">
           <Food />
           </div>
           </div>   
            <Footer />
        </>
    );
}



export default MainFood;