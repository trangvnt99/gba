import React from "react";
import Member from "../../component/member/member.component";
import Header from "../../component/header";
import Footer from "../../component/footer";
const TrungQuoc = () => {
    
    return (
        <>
        <Header />
        <Member />
        <div className="list" id="2">
                <h4 className="title">Trung quốc</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường Trung quốc (đang cập nhật)</p>

            </div>
        <Footer />
        </>
    );
}
export default TrungQuoc;