import React from "react";
import "../styles/main_member.css";
import img from "../picture/logo.png";
import Footer from "../component/footer";
import Header from "../component/header";

const Main1 = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p> Trang chủ</p>
                <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>

                <p id="mem">Tổ chức</p>
            </div>
            <div className="list" id="3">
                <h4 className="title">TỔ CHỨC</h4>
                <div className="recb"></div>
                <div className="grid-mem">
                    <div className="">
                        <div className="img-mem">
                            <img src={img} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={img} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={img} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={img} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={img} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                </div>
            </div>
            <div className="list" id="4">
                <h4 className="title">AFFTA</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường Ấn Độ (đang cập nhật)</p>

            </div>
            <Footer />
        </>
    );
}
export default Main1;