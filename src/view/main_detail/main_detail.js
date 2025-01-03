import React from "react";
import '../../styles/main_detail/main_detail.css';
import Header from '../../component/header.js';
import Footer from '../../component/footer.js';
import 'boxicons';
import imgGG from '../../img/maindetail/gg.png';
import imgFB from '../../img/maindetail/facebook.png';
import imgTW from '../../img/maindetail/twitter.png';
import imTom01 from '../../img/maindetail/tom_01.png';
import imTom02 from '../../img/maindetail/tom_02.png';
import chart from '../../img/maindetail/chart.png';
import eyeView from '../../img/maindetail/eyeview.png';
import imgTom from '../../img/maindetail/tom.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MainDes from "./main_des/main_des.js";
const dataProduct = [
    {
        name: "Tôm Sú",
        view: 10,
        id: 'SD00001',
        Des: "Tôm sú là loại tôm nước lợ lớn và phổ biến, đặc biệt ở khu vực châu Á-Thái Bình Dương. Nguồn gốc của tôm sú có thể truy nguyên từ các vùng biển nhiệt đới và cận nhiệt đới rộng lớn, bao gồm cả Đông Nam Á, Nam Á, và phần phía bắc của Úc.",
        sanLuong: 100000,
        maSku: "SF001101; SF001102; SF001103; SF001104; SF001105; SF001106; SF001107; SF001108; SF001109; SF001110; SF001111; SF001112; SF001113; SF001114",
        addresses: ["Ninh Thuận", "Cà Mau", "Cần Thơ"],
    }
];

const NavigateClick = () => {
    window.location.href = 'http://localhost:3000/main_food/';
};

const MainDetail = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name="home" type="solid" color="#cabfbf" className="icon"></box-icon>
                <a href="http://localhost:3000/main_1" className="a_title_navi">  
                    <p> Trang chủ</p>
                </a>
                <box-icon name="chevron-right" type="solid" color="#cabfbf" className="icon"></box-icon>
                <p onClick={NavigateClick}>Thực phẩm</p>




                <box-icon name="chevron-right" type="solid" color="#cabfbf" className="icon"></box-icon>
                <p id="mem">Sản phẩm</p>
            </div>
            <div className="pro_detail">
                <p className="title_pro">SẢN PHẨM</p>
                {dataProduct.map((product, index) => (
                    <div key={index}>
                        <div class="content_des">
                            <div className="content_pro_left">
                                <div className="img_detail">
                                    <img className="img_pro" src={imgTom} alt={product.name} />
                                    <div>
                                        <p class="title_share">Chia sẻ sản phẩm</p>
                                        <div className="social-icons group_logo_item_detail">
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                                <img src={imgFB} alt="Facebook" className="social-icon" />
                                            </a>
                                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                                <img src={imgTW} alt="Twitter" className="social-icon-twitter" />
                                            </a>
                                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                                <img src={imgGG} alt="Google" className="social-icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content_pro_right">
                                <p className="name_pro">{product.name}</p>
                                <div className="view_pro">
                                    <p className="item_pro">
                                        Lượt xem: {product.view}
                                        <img src={eyeView} alt="View" className="img_view" height={15} />
                                    </p>
                                </div>
                                <p className="item_pro">Mã sản phẩm: {product.id}</p>
                                <p className="item_pro">Giới thiệu</p>
                                <div className="des_pro">{product.Des}</div>
                                <p className="item_pro">Tổng quan</p>
                                <table className="table_pro">
                                    <tbody>
                                        <tr>
                                            <th className="title_table_pro">Sản lượng</th>
                                            <td className="content_table_pro content_th_top">{product.sanLuong} tấn/năm</td>
                                        </tr>
                                        <tr>
                                            <th className="title_table_pro">Mã SKU</th>
                                            <td className="content_table_pro content_th_bttm">{product.maSku}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="address_pro">
                                    <div className="address_title">
                                        <LocationOnIcon />
                                        <p>Địa điểm:</p>
                                    </div>
                                    <ul className="horizontal-list">
                                        {product.addresses.map((address, idx) => (
                                            <li key={idx}>
                                                <span className="green-dot"></span>
                                                {address}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <MainDes 
                              title={'Tôm Sú: Kỳ Quan Thủy Sản Việt Nam'}
                              description={['Tôm sú là nguồn cung cấp protein cao, chứa nhiều omega-3, các vitamin và khoáng chất thiết yếu, hỗ trợ sức khỏe tim mạch, tăng cường hệ miễn dịch và thúc đẩy sự phát triển trí não.']}
                              images={[
                                { src: imTom01, alt: "Tôm Sú" },
                                { src: imTom02, alt: "Tôm Sú" }
                              ]}
                              chart={chart}
                              additionalInfo={ [
                                "Loại tôm này được nuôi nhiều ở các khu vực nhiệt đới và cận nhiệt đới, nhờ vào khả năng thích ứng cao với điều kiện môi trường đa dạng và nhu cầu thị trường lớn cho tôm có chất lượng cao.",
                                "Việt Nam: Là một trong những nước xuất khẩu tôm sú hàng đầu, Việt Nam tập trung vào việc nuôi trồng tôm sú chất lượng cao tại các tỉnh ven biển của Đồng bằng sông Cửu Long như Cà Mau và Bạc Liêu. Ngành công nghiệp tôm sú ở Việt Nam đã phát triển mạnh mẽ nhờ vào sự hỗ trợ của chính phủ và việc áp dụng công nghệ cao trong nuôi trồng và chế biến.",
                                "Sản lượng toàn cầu của tôm sú đã có những biến động lớn trong những năm gần đây, phần lớn do sự bùng phát của các dịch bệnh như bệnh đốm trắng và bệnh hoại tử gan tụy cấp tính (AHPND). Tuy nhiên, với sự phát triển của các kỹ thuật nuôi trồng và quản lý bệnh tật tiên tiến, cùng với nhu cầu thị trường quốc tế luôn tăng, ngành công nghiệp tôm sú dự kiến sẽ tiếp tục phục hồi và phát triển trong những năm tới.",
                            ]}
                            optionDes={[
                                "Ngành tôm sú toàn cầu cũng đang chú trọng hơn vào việc sản xuất bền vững và trách nhiệm để đáp ứng nhu cầu của những người tiêu dùng hiện đại, những người ngày càng quan tâm đến vấn đề môi trường và xã hội trong sản xuất thực phẩm.",
                                "Tôm sú phát triển tốt trong môi trường nước lợ với nhiệt độ từ 25-30°C và độ mặn từ 15-20‰. Các tỉnh ven biển phía Nam như Cà Mau, Bạc Liêu, và Kiên Giang là những địa phương chính trong nuôi trồng tôm sú tại Việt Nam, nhờ có điều kiện tự nhiên thuận lợi và hệ thống ao nuôi được quản lý tốt."
                            ]}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default MainDetail;

