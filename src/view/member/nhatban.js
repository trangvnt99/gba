import React from "react";
import Member from "../../component/member/member.component";
import Header from "../../component/header";
import Footer from "../../component/footer";
const NhatBan = () => {
    
    return (
        <>
        <Header />
        <Member />
            <div className="list" id="4">
                <h4 className="title">Nhật Bản</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường  (đang cập nhật)</p>

            </div>
        <Footer />
        </>
    );
}
export default NhatBan;