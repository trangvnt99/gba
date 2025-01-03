import React from "react";
import "../styles/mainItems.css";
import items from "../picture/Items/giadung1.webp";
import Footer from "../component/footer";
import Header from "../component/header";

import 'boxicons';

const MainItems = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p> Trang chủ</p>
                <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p id="mem">Hàng gia dụng</p>
            </div>


         <div className="list">
            
            <div class="container">
                <div class="image-container-item">
                <img src={items} alt="Your Image" class="image" width="300px" height="200px" />
                </div>
                <div class="text-container">
                    <p class="views">Lượt xem: <span class="view-count">9999</span> 

                            <img class="icon" src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="icon"  width="30" height="30" />

                    </p>
                    <p class="description">
                    Hàng gia dụng là các sản phẩm được sử dụng trong cuộc sống hằng ngày để đáp ứng nhu cầu sinh hoạt gia đình.
                    </p>
                </div>
                </div>


                <p className="content">Hàng gia dụng là các sản phẩm được sử dụng trong cuộc sống hàng ngày để đáp ứng nhu cầu sinh hoạt gia đình, bao gồm đồ dùng nhà bếp, nội thất, điện tử và các vật dụng tiện ích khác.<br></br><br></br>
            Thị trường hàng gia dụng ở Việt Nam phong phú với nhiều sản phẩm từ các thương hiệu nội địa đến hàng nhập khẩu, đáp ứng đa dạng nhu cầu của người tiêu dùng.
             Ngoài các sản phẩm tiện ích, Việt Nam còn nổi tiếng với các sản phẩm thủ công mỹ nghệ như đồ gốm sứ, nội thất làm từ tre, mây và các vật liệu tự nhiên, mang đậm nét văn hóa dân gian.<br></br><br></br>
            Trong khi đó, hàng gia dụng thế giới thường tích hợp công nghệ hiện đại, sử dụng các giải pháp thông minh và tiết kiệm năng lượng, đáp ứng tiêu chuẩn cao về hiệu suất và an toàn.
             Các sản phẩm thường được sản xuất với tiêu chuẩn nghiêm ngặt về chất lượng và an toàn, mang lại độ bền cao và sự tiện nghi cho người sử dụng.<br></br><br></br>
            Hàng gia dụng không chỉ là những vật dụng thiết yếu trong cuộc sống mà còn phản ánh sự phát triển kinh tế và văn hóa của từng quốc gia.
             Sự khác biệt trong cách lựa chọn, chế tạo và sử dụng hàng gia dụng giữa Việt Nam và thế giới mang lại sự đa dạng và phong phú cho cuộc sống hàng ngày của mọi người.</p>

            <div>
                <div >
                 <img src={items} alt="" className="" width="100%" height= "100%" />
                </div>
            </div>

            </div>

            <Footer />
        </>
    );
}
export default MainItems;