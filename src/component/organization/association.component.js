import React from "react";
import "../../styles/main_member.css";
import afta from "../../picture/organizationalImg/afta.png";
import evfta from "../../picture/organizationalImg/evfta.png";
import cptpp from "../../picture/organizationalImg/cptpp.png";
import gp from "../../picture/organizationalImg/gp.png";
import wto from "../../picture/organizationalImg/wto.png";


import {
    useNavigate,
  } from "react-router-dom";

const Association = () => {

    
    const navigate = useNavigate(); // Sử dụng useNavigate

    // Hàm xử lý khi người dùng nhấn vào một tổ chức
    const SelectOrganization = (organization) => {

        switch (organization) {
            case "wto":
                navigate("/main/wto"); // Điều hướng tới trang WTO
                break;
            case "gt":
                navigate("/main/gt"); // Điều hướng tới trang Glenorchy Trading
                break;
            case "afta":
                navigate("/main/afta"); // Hiển thị nội dung AFTA
                break;
            case "evfta":
                navigate("/main/evfta"); // Hiển thị nội dung EVFTA
                break;
            case "cptpp":
                navigate("/main/cptpp"); // Hiển thị nội dung CPTPP
                break;
            default:
                console.log("Unknown organization:", organization); // Xử lý trường hợp không khớp
        }
    };
    return (
        <>
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
                            <img src={afta} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem" onClick={() => SelectOrganization('afta')}>AFTA</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={evfta} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem" onClick={() => SelectOrganization('evfta')}>EVFTA</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={cptpp} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem" onClick={() => SelectOrganization('cptpp')}>CPTPP</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                            <img src={gp} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem" onClick={() => SelectOrganization('gt')}>Glenorchy Trading</div>
                    </div>
                    <div className="">
                        <div className="img-mem">
                        
                            <img src={wto} alt="logo" className="logo-mem" />
                     
                        </div>
                        <div className="text-mem" onClick={() => SelectOrganization('wto')}>WTO</div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Association;