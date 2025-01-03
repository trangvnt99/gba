import React from "react";
import "../../styles/main_member.css";

import Association from "../../component/organization/association.component";
import Header from "../../component/header";
import Footer from "../../component/footer";


const MainWto = () => {
    
    return (
        <>
        
            <Header />
            <Association />

            <div className="list" id="4">
                <h4 className="title">WTO</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường  (đang cập nhật)</p>
            </div>
            <Footer />
        </>
    );
}
export default MainWto;