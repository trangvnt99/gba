import React, {useState} from "react";
import "../../../styles/food/mainSeafood.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Food from "../../../component/food/food.component";

import food1 from "../../../picture/food/sea-food/food1.jpg";
import tomchebien from "../../../picture/food/sea-food/tomchebien.jpg";
import tomthe from "../../../picture/food/sea-food/tomthe.jpg";
import tomxu from "../../../picture/food/sea-food/tomxu.jpg";
import catuyet from "../../../picture/food/sea-food/catuyet.jpg";

const SeaFood = () => {

    const [currentPage, setCurrentPage] = useState(1);


    //cac mon
    const foodData = [
        { page: 1, name: "Tôm chế biến", img: tomchebien },
        { page: 1, name: "Tôm thẻ", img: tomthe },
        { page: 1, name: "Tôm xú", img: tomxu },
        { page: 1, name: "Cá tuyết đại dương", img: catuyet },
        { page: 2, name: "Tôm chế biến 2", img: catuyet },
        { page: 2, name: "Tôm thẻ 2", img: catuyet },
        { page: 2, name: "Tôm xú 2", img: catuyet },
        { page: 2, name: "Cá tuyết đại dương", img: catuyet },
        { page: 3, name: "Tôm xú", img: tomxu },
        { page: 3, name: "Tôm xú", img: tomxu },
        { page: 3, name: "Tôm xú", img: tomxu },
        { page: 3, name: "Tôm xú", img: tomxu },
    ];

    //lay danh sach mon theo trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <>

<Header />

       <div className="main" >

            <div class="menu">
           <Food />
           </div>
           {/* <div className="main"> */}
           <div class="list">
                    <h1>Hải sản</h1>
                    <hr />
                    <div class="container">
                        <div class="image-container">
                            <img src={food1} alt="Your Image" class="image" />
                        </div>
                        <div class="text-container">
                            <p class="views">Lượt xem: <span class="view-count">9999</span>

                                <img class="icon" src="https://img.icons8.com/?size=100&id=986&format=png&color=000000" alt="icon" width="30" height="30" />

                            </p>
                            <p class="description">
                                Thuỷ hải sản đóng một vai trò quan trọng trong đời sống con người; mang theo hơi thở từ đại dương đây được xem là nguồn cung cấp protein lớn nhất cho toàn cầu. Nhờ vào dòng hải lưu giàu dinh dưỡng và hệ sinh thái đa dạng của các vùng biển như Biển Bắc, Địa Trung Hải và Vịnh Alaska, mà ngành công nghiệp hải sản tại các quốc gia Nhật Bản, Na Uy và Hoa Kỳ phát triển một cách mạnh mẽ.  Bên cạnh đó, trữ lượng thuỷ sản xuất khẩu ở Việt Nam đạt hàng triệu tấn mỗi năm nhờ hệ thống sông ngòi và bờ biển dài, cùng ​​sự đa dạng về loài hải sản cũng như quy mô sản xuất lớn và công nghệ nuôi trồng hiện đại.                             </p>
                        </div>
                    </div>


                    <p className="content">Trên vai trò là người kết nối, 2dhC luôn làm tốt nhiệm vụ của mình trong chuỗi tiến trình kết nối các nhà sản xuất trong nước đến với thị trường đối tác quốc tế, góp phần thúc đẩy nền công nghiệp thuỷ sản nước nhà.
                        <br /><br />
                        Hiện nay, 2dhC đang hoạt động trên các thị trường quan trọng như Mỹ, Châu Âu và Philippines với mối quan hệ đối tác ổn định; từ đó, từng bước mở rộng tầm ảnh hưởng trong khu vực và thế giới.
                        Một số chứng nhận xuất khẩu thuỷ sản Việt Nam ra quốc tế cũng được các doanh nghiệp quan tâm như: HACCP, ASC, BAP, MSC và Global GAP,... </p>


                    <h1>Các món </h1>
                    <hr />
                    <div class="food">
                        {/* <div class="item">
                            <p class="name" data-page="1">Tôm chế biến</p>
                            <img src={tomchebien} alt="Your Image" class="image" />

                        </div>
                        <div class="item" >
                            <p class="name" data-page="1">Tôm thẻ</p>
                            <img src={tomthe} alt="Your Image" class="image" />

                        </div>
                        <div class="item">
                            <p class="name" data-page="1">Tôm xú</p>
                            <img src={tomxu} alt="Your Image" class="image" />

                        </div>
                        <div class="item">
                            <p class="name" data-page="1">Cá tuyết đại dương</p>
                            <div class="foodimg">
                                <img src={catuyet} alt="Your Image" class="image" />
                            </div>
                        </div>

                        <div class="item">
                            <p class="name" data-page="2">Tôm chế biến</p>
                            <img src={catuyet} alt="Your Image" class="image" />

                        </div>
                        <div class="item" >
                            <p class="name" data-page="2">Tôm thẻ</p>
                            <img src={catuyet} alt="Your Image" class="image" />

                        </div>
                        <div class="item">
                            <p class="name" data-page="2">Tôm xú</p>
                            <img src={catuyet} alt="Your Image" class="image" />

                        </div>
                        <div class="item">
                            <p class="name" data-page="2">Cá tuyết đại dương</p>
                            <div class="foodimg">
                                <img src={catuyet} alt="Your Image" class="image" />
                            </div>
                        </div> */}
                        {foodData
                            .filter((item) => item.page === currentPage)
                            .map((item, index) => (
                                <div className="item" key={index}>
                                    <p className="name">{item.name}</p>
                                    <img src={item.img} alt={item.name} className="image" />
                                </div>
                            ))}
                    </div>
                    <div class="page">
                        {/* <p class="pagination" data-page="1">1</p> 
                        <p class="pagination" data-page="2">2</p>
                         <p class="pagination" data-page="3">3</p> */}
                         {[1, 2, 3].map((page) => (
                            <p
                                key={page}
                                className={`pagination ${currentPage === page ? "active" : ""}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </p>
                        ))}
                    </div>
                </div>
                {/* </div> */}
                </div>
                <Footer />
        </>
    );
}
export default SeaFood;