import React from "react";
import "../styles/main_member.css";
import img from "../picture/logo.png";
import Footer from "../component/footer";
import Header from "../component/header";
// import { Link } from "react-router-dom";
import 'boxicons';

const Main_member = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <a href="http://localhost:3000/main_1" className="a_title_navi">  
                    <p> Trang chủ</p>
                </a>               
                 <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p id="mem">Thành viên</p>
            </div>
            <div className="list" id="1">
                <h4 className="title">THÀNH VIÊN</h4>
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
            <div className="list" id="2">
                <h4 className="title">ẤN ĐỘ</h4>
                <div className="recb"></div>
                <p className="subcontent">.. tại thị trường Ấn Độ (đang cập nhật)</p>
                <img src={img} alt="logo" className="pic-content" />
            </div>
            <Footer />
        </>
    )
};

export default Main_member;