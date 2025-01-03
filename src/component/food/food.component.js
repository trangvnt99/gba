import React  from "react";
import "../../styles/food/food.css";


import { useNavigate } from "react-router-dom";

import 'boxicons';

const Food = () => {
   


    const navigate = useNavigate(); 
        const SelectedFood = (e) => {
    
            switch (e) {
                case "seaFood":
                    navigate("/main_food/haisan"); 
                    break;
                case "ngucoc-hat":
                    navigate("/main_food/ngucoc_hat"); 
                    break;
                case "cashew":
                    navigate("/main_food/hatdieu"); 
                    break;
                case "seed":
                    navigate("/main_food/hat"); 
                    break;
                case "specialtyCereals":
                    navigate("/main_food/ngucoc_dacsan"); 
                    break;
                case "spice":
                    navigate("/main_food/giavi"); 
                    break;
                case "raw-spice":
                    navigate("/main_food/giavi_tho"); 
                    break;
                case "flour":
                    navigate("/main_food/bot"); 
                    break;
                case "drink":
                    navigate("/main_food/thuc_uong"); 
                    break;
                case "tea":
                    navigate("/main_food/tra"); 
                    break;
                case "drinks":
                    navigate("/main_food/thucuong_tonghop");  
                    break;
                default:
                    console.log("Không tìm thấy gì:", e); // Xử lý trường hợp không khớp
            }
        };
    return (
        <>


            <div class="index">
                {/* <div class="menu"> */}
                <div>
                    <h2>Thực phẩm</h2>
                    </div>
                    
                    <ul class="ngucoc">
                        <span onClick={() => SelectedFood('seaFood')}> <green>Hải sản</green> </span> <br/>
                        <span onClick ={() => SelectedFood('ngucoc-hat')}> <green>Ngũ cốc & Hạt</green></span> <br />
                        <ul id="menu-ngucoc" >
                            <li onClick ={() => SelectedFood('cashew')}>Hạt điều</li>
                            <li onClick ={() => SelectedFood('seed')}>Hạt</li>
                            <li onClick ={() => SelectedFood('specialtyCereals')}>Ngũ cốc đặc sản</li>
                        </ul>

                        <span onClick ={() => SelectedFood('spice')}><green> Gia vị</green></span> <br />
                        <ul id="menu-giavi" >
                            <li onClick ={() => SelectedFood('raw-spice')}>Gia vị thô</li>
                            <li onClick ={() => SelectedFood('flour')}>Bột </li>
                        </ul>

                        <span onClick ={() => SelectedFood('drink')}><green>Thức uống</green></span><br />
                        <ul id="menu-thucuong" >
                            <li onClick ={() => SelectedFood('tea')}>Trà</li>
                            <li onClick ={() => SelectedFood('drinks')}>Hỗn hợp uống</li>
                        </ul>

                    </ul>

                {/* </div> */}

            </div>

        </>
    );
}



export default Food;