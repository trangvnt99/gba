import React from "react";
import Member from "../../component/member/member.component";
import Footer from "../../component/footer";
import Header from "../../component/header";
const Singapore = () => {
    
    return (
        <>
        <Header />
        <Member />
            <div className="list" id="4">
                <h4 className="title">Singapore</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường  (đang cập nhật)</p>

            </div>
        <Footer />
        </>
    );
}
export default Singapore;