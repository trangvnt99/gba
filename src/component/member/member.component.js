import React from "react";
import "../../styles/main_member.css";

import ando from "../../picture/member/ando.png";
import anhquoc from "../../picture/member/anhquoc.png";
import canada from "../../picture/member/canada.png";
import chauau from "../../picture/member/chauau.png";
import dailoan from "../../picture/member/dailoan.jpeg";
import hanquoc from "../../picture/member/hanquoc.png";
import nga from "../../picture/member/nga.jpeg";
import nhatban from "../../picture/member/nhatban.jpeg";
import singapore from "../../picture/member/singapore.png";
import theus from "../../picture/member/theus.png";
import trungquoc from "../../picture/member/trungquoc.png";

import { useNavigate } from "react-router-dom";

import 'boxicons';

const Member = () => {

    const navigate = useNavigate(); 
    const SelectedCountry = (e) => {

        switch (e) {
            case "chauau":
                navigate("/main_member/chauau"); 
                break;
            case "nhatban":
                navigate("/main_member/nhatban"); 
                break;
            case "singapore":
                navigate("/main_member/singapore"); 
                break;
            case "anhquoc":
                navigate("/main_member/anhquoc"); 
                break;
            case "trungquoc":
                navigate("/main_member/trungquoc"); 
                break;
            case "canada":
                navigate("/main_member/canada"); 
                break;
            case "dailoan":
                navigate("/main_member/dailoan"); 
                break;
            case "hanquoc":
                navigate("/main_member/hanquoc"); 
                break;
            case "theus":
                navigate("/main_member/theus"); 
                break;
            case "nga":
                navigate("/main_member/nga"); 
                break;
            case "ando":
                navigate("/main_member/ando"); 
                break;
            default:
                console.log("Không tìm thấy quốc gia:", e); // Xử lý trường hợp không khớp
        }
    };


    return (
        <>
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p> Trang chủ</p>
                <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>

                <p id="mem">Thành viên</p>
            </div>
            <div className="list" id="1">
                <h4 className="title">THÀNH VIÊN</h4>
                <div className="recb"></div>
                <div className="grid-mem">
                    <div className="" onClick={() => SelectedCountry('chauau')}>
                        <div className="img-mem">
                            <img src={chauau} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('nhatban')}>
                        <div className="img-mem">
                            <img src={nhatban} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Nhật bản</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('singapore')}>
                        <div className="img-mem">
                            <img src={singapore} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Singapore</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('anhquoc')}>
                        <div className="img-mem">
                            <img src={anhquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Anh Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('trungquoc')}>
                        <div className="img-mem">
                            <img src={trungquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Trung Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('canada')}>
                        <div className="img-mem">
                            <img src={canada} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Canada</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('dailoan')}>
                        <div className="img-mem">
                            <img src={dailoan} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Đài Loan</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('hanquoc')}>
                        <div className="img-mem">
                            <img src={hanquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Hàn Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('theus')}>
                        <div className="img-mem">
                            <img src={theus} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">The Us</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('nga')}>
                        <div className="img-mem">
                            <img src={nga} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Nga</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('ando')}>
                        <div className="img-mem">
                            <img src={ando} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Ấn độ</div>
                    </div>

                </div>

            </div>


        </>
    )
};

export default Member;