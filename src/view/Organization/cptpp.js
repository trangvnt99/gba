import React from "react";
import Association from "../../component/organization/association.component";
import Header from "../../component/header";
import Footer from "../../component/footer";
const MainCptpp = () => {
    
    return (
        <>
        <Header />
        <Association />
            <div className="list" id="4">
                <h4 className="title">Cptpp</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường  (đang cập nhật)</p>

            </div>
        <Footer />
        </>
    );
}
export default MainCptpp;