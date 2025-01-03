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