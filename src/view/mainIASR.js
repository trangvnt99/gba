import React from "react";
import "../styles/mainIASR.css";
// import img from "../picture/logo.png";
import Footer from "../component/footer";
import Header from "../component/header";
import 'boxicons';

const MainIASR = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p> Trang chủ</p>
                <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p id="mem">Commercial & Investment Associate Sourcing Representative</p>
            </div>
            <div className="list">
                <h4 className="title">Vai trò <green>2dhC</green> đối với các bên</h4>
                <p className="content">Sourcing, hay còn gọi là tìm nguồn cung ứng, đóng vai trò cực kỳ quan trọng trong nhiều lĩnh vực kinh doanh và quản lý chuỗi cung ứng. Dưới đây là một số vai trò chính của sourcing:</p>
                <div className="gridGBA">
                    <div className="grid-item">
                        <b>
                            1. Đảm bảo nguồn cung ổn định
                        </b>
                        <br />
                        <i>
                            Sourcing giúp doanh nghiệp tìm và chọn các nhà cung cấp đáng tin cậy, đảm bảo rằng nguồn cung cấp nguyên vật liệu hoặc sản phẩm luôn ổn định và liên tục.
                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            2. Tiết kiệm chi phí:
                        </b>
                        <br />
                        <i>
                            Bằng cách tìm kiếm và đàm phán với nhiều nhà cung cấp khác nhau, doanh nghiệp có thể so sánh giá cả và chất lượng để chọn được nhà cung cấp có giá tốt nhất, từ đó giảm chi phí sản xuất.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            3. Nâng cao chất lượng sản phẩm:
                        </b>
                        <br />
                        <i>
                            Sourcing cho phép doanh nghiệp lựa chọn những nhà cung cấp có chất lượng sản phẩm cao, đáp ứng các tiêu chuẩn và yêu cầu kỹ thuật, từ đó cải thiện chất lượng sản phẩm cuối cùng.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            4. Tối ưu hóa thời gian giao hàng:
                        </b>
                        <br />
                        <i>
                            Tìm được các nhà cung cấp có khả năng giao hàng đúng hạn và linh hoạt giúp doanh nghiệp duy trì được lịch trình sản xuất và giao hàng, tránh tình trạng chậm trễ.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            4. Tối ưu hóa thời gian giao hàng:
                        </b>
                        <br />
                        <i>
                            Tìm được các nhà cung cấp có khả năng giao hàng đúng hạn và linh hoạt giúp doanh nghiệp duy trì được lịch trình sản xuất và giao hàng, tránh tình trạng chậm trễ.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            5. Tạo ra lợi thế cạnh tranh:
                        </b>
                        <br />
                        <i>
                            Sourcing hiệu quả có thể giúp doanh nghiệp có được những nguyên vật liệu hoặc sản phẩm đặc biệt mà đối thủ cạnh tranh không có, từ đó tạo ra sự khác biệt và lợi thế cạnh tranh trên thị trường.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            6. Quản lý rủi ro:
                        </b>
                        <br />
                        <i>
                            Việc đa dạng hóa nguồn cung giúp doanh nghiệp giảm thiểu rủi ro liên quan đến việc phụ thuộc vào một nhà cung cấp duy nhất, đặc biệt là trong các tình huống khẩn cấp hoặc biến động thị trường.                        </i>
                    </div>
                    <div className="grid-item">
                        <b>
                            7. Phát triển mối quan hệ đối tác:
                        </b>
                        <br />
                        <i>
                            Sourcing còn giúp xây dựng và duy trì mối quan hệ lâu dài với các nhà cung cấp, tạo nền tảng cho sự hợp tác và phát triển bền vững trong tương lai.                        </i>
                    </div>
                </div>
                <ul className="content">
                    <ul>
                        <li class="custom-bullet">
                            Như vậy, Sourcing không chỉ là một công việc kỹ thuật mà còn là một yếu tố chiến lược quan trọng, góp phần vào sự thành công và phát triển bền vững của doanh nghiệp.
                        </li>
                        <br/>
                        
                        <li class="custom-bullet">

                        Tóm lại, Sourcing đóng một vai trò không thể thiếu trong việc giúp các doanh nghiệp không chỉ mở rộng thị trường mà còn cải thiện hiệu quả hoạt động và sự cạnh tranh trên trường quốc tế. Sự hiểu biết và ứng dụng linh hoạt mô hình này sẽ là chìa khóa quan trọng giúp các nhà sản xuất không ngừng phát triển và thành công trong kỷ nguyên mới.
                         </li>
                    </ul>
                </ul>
            </div>

            <Footer />
        </>
    );
}
export default MainIASR;