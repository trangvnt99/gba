import React from 'react';

import ando from "../../../picture/member/ando.png";
import anhquoc from "../../../picture/member/anhquoc.png";
import canada from "../../../picture/member/canada.png";
import chauau from "../../../picture/member/chauau.png";
import dailoan from "../../../picture/member/dailoan.jpeg";
import hanquoc from "../../../picture/member/hanquoc.png";
import nga from "../../../picture/member/nga.jpeg";
import nhatban from "../../../picture/member/nhatban.jpeg";
import singapore from "../../../picture/member/singapore.png";
import theus from "../../../picture/member/theus.png";
import trungquoc from "../../../picture/member/trungquoc.png";

import SelectedCountry from "../../../component/member/member.service";
import { useNavigate } from "react-router-dom";

const MainBusiness = () => {

      const navigate = useNavigate(); 

    return (
        <div className="group_side">
          <p className="group_side_title">Hiệp hội doanh nghiệp quốc tế</p>
          <h1 className="border_line"> </h1>
          <div className="group_logo">
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('chauau', navigate)}>
                <img src={chauau} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>

            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('nhatban', navigate)}>
                <img src={nhatban} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('singapore', navigate)}>
                <img src={singapore} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('anhquoc', navigate)}>
                <img src={anhquoc} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('trungquoc', navigate)}>
                <img src={trungquoc} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('canada', navigate)}>
                <img src={canada} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('dailoan', navigate)}>
                <img src={dailoan} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('hanquoc', navigate)}>
                <img src={hanquoc} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('theus', navigate)}>
                <img src={theus} alt="logo" className="logo-item" />
                <p class="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('nga', navigate)}>
                <img src={nga} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a onClick={() => SelectedCountry('ando', navigate)}>
              <img src={ando} alt="logo" className="logo-item" />
              <p className="img_post"></p>
              </a>
            </div>
          </div>
        </div>
    );
};

export default MainBusiness;