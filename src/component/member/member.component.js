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
import SelectedCountry from "./member.service";

import 'boxicons';

const Member = () => {

    const navigate = useNavigate(); 

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
                    <div className="" onClick={() => SelectedCountry('chauau', navigate)}>
                        <div className="img-mem">
                            <img src={chauau} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Châu Âu</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('nhatban', navigate)}>
                        <div className="img-mem">
                            <img src={nhatban} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Nhật bản</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('singapore', navigate)}>
                        <div className="img-mem">
                            <img src={singapore} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Singapore</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('anhquoc', navigate)}>
                        <div className="img-mem">
                            <img src={anhquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Anh Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('trungquoc', navigate)}>
                        <div className="img-mem">
                            <img src={trungquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Trung Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('canada', navigate)}>
                        <div className="img-mem">
                            <img src={canada} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Canada</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('dailoan', navigate)}>
                        <div className="img-mem">
                            <img src={dailoan} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Đài Loan</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('hanquoc', navigate)}>
                        <div className="img-mem">
                            <img src={hanquoc} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Hàn Quốc</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('theus', navigate)}>
                        <div className="img-mem">
                            <img src={theus} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">The Us</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('nga', navigate)}>
                        <div className="img-mem">
                            <img src={nga} alt="logo" className="logo-mem" />
                        </div>
                        <div className="text-mem">Nga</div>
                    </div>
                    <div className="" onClick={() => SelectedCountry('ando', navigate)}>
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