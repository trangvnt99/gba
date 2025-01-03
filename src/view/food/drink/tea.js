import React from "react";
import "../../../styles/food/mainSeafood.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Food from "../../../component/food/food.component";
import BlackBox from "../../../component/food/blackbox";

import tea1 from "../../../picture/food/tea/tea1.jpg";


const Tea = () => {


    return (
        <>
            <Header />
            <BlackBox />
            <div className="main" >

                <div class="menu">
                    <Food />
                </div>
                <div class="list">
                    <h1>Các loại Trà</h1>
                    <hr />
                    <div class="container">
                        <div class="image-container">
                            <img src={tea1} alt="Your Image" class="image" />
                        </div>
                        <div class="text-container">
                            <p class="views">Lượt xem: <span class="view-count">9999</span>

                                <img class="icon" src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="icon" width="30" height="30" />

                            </p>
                            <p class="description">
                                Uống trà giúp thanh lọc cơ thể......                      </p>
                        </div>
                    </div>


                    <p className="content">Trên vai trò là người kết nối, 2dhC luôn làm tốt nhiệm vụ của mình trong chuỗi tiến trình kết nối các nhà sản xuất trong nước đến với thị trường đối tác quốc tế, góp phần thúc đẩy nền công nghiệp thuỷ sản nước nhà.
                        <br /><br />
                        Hiện nay, 2dhC đang hoạt động trên các thị trường quan trọng như Mỹ, Châu Âu và Philippines với mối quan hệ đối tác ổn định; từ đó, từng bước mở rộng tầm ảnh hưởng trong khu vực và thế giới.
                        Một số chứng nhận xuất khẩu thuỷ sản Việt Nam ra quốc tế cũng được các doanh nghiệp quan tâm như: HACCP, ASC, BAP, MSC và Global GAP,... </p>



                </div>
            </div>
            <Footer />
        </>
    );
}
export default Tea;