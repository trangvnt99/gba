import React from "react";
import "../styles/mainGBA.css";

import Footer from "../component/footer";
import Header from "../component/header";
import 'boxicons';

const MainGBA = () => {
    return (
        <>
            <Header />
            <div className="blackbox">
                <box-icon name='home' type='solid' color="#cabfbf" className="icon"></box-icon>
                <a href="http://localhost:3000/main_1" className="a_title_navi">  
                    <p> Trang chủ</p>
                </a>               
                <box-icon name='chevron-right' type='solid' color="#cabfbf" className="icon"></box-icon>
                <p id="mem">GBA</p>
            </div>
            <div className="list">
                <h1 className="title"><green>2dhC</green> là một doanh nghiệp "thuộc Đức" là thành viên của <green>GBA</green></h1>
                <p className="content">Sourcing, hay còn gọi là tìm nguồn cung ứng, đóng vai trò cực kỳ quan trọng trong nhiều lĩnh vực kinh doanh và quản lý chuỗi cung ứng. Dưới đây là một số vai trò chính của sourcing:</p>

                <li className="title" id="special-item">Commercial & Investment Associate Sourcing Representative :</li>
                <div className="grid_GBA">
                    <div className="grid-item">
                        
                        <i>Đưa các sản phẩm/dịch vụ của các công ty trong nước ra thị trường quốc tế
                        </i>
                    </div>
                    <div class= "line"></div>
                    <div className="grid-item">

                        <i>
                        Chọn lựa các nhà đầu tư phù hợp để đầu tư với các doanh nghiệp trong nước.
                             </i>
                    </div>
                    <hr className="line"/>
                    <div className="grid-item">
                       
                        <i>
                        Tìm nguồn quỹ tài chính quốc tế
                            </i>
                    </div>

                </div>

                <li className="title" id="special-item">Chào mừng bạn đã đến với hiệp hội doanh nghiệp đức tại việt nam - <green>GBA</green></li>
                <ul className="content">
                    <p>Hiệp hội Doanh nghiệp Đức (GBA) là một trong những hiệp hội doanh nghiệp nước ngoài đầu tiên tại Việt Nam, bắt đầu hoạt động từ năm 1995. Trong hơn 28 năm, GBA là tâm điểm của đời sống, văn hóa và giá trị doanh nghiệp Đức tại Việt Nam. Nó đã giúp các doanh nghiệp Đức phát triển hoạt động, tư vấn về nhiều chủ đề và tạo cơ hội kinh doanh và trao đổi xã hội trên khắp Việt Nam.</p>
                    <p>Ngày nay, GBA có hơn 370 thành viên, phản ánh những cơ hội và sự năng động của thị trường Việt Nam. Đây là một trong những hiệp hội doanh nghiệp nước ngoài lớn nhất tại Việt Nam và là đối tác được đánh giá cao trong cộng đồng địa phương. Ngoài ra, GBA còn là một trong những thành viên sáng lập của EuroCham Việt Nam, một tổ chức hợp tác đại diện cho các hoạt động và lợi ích xuyên châu Âu tại Việt Nam. Tư cách thành viên GBA tự động đi cùng với tư cách thành viên EuroCham và tăng cường mối quan hệ của chúng tôi với các cộng đồng doanh nghiệp Châu Âu khác.</p> 
                    <p>Chúng tôi hy vọng trang web của chúng tôi sẽ cung cấp cho bạn thông tin hữu ích về GBA, thành viên, lợi ích thành viên và hoạt động của chúng tôi. Nếu có bất kỳ câu hỏi nào về chúng tôi, các sự kiện của chúng tôi hoặc đơn đăng ký thành viên của bạn, nhóm văn phòng của chúng tôi sẽ có mặt để hỗ trợ bạn. Cùng với các thành viên của chúng tôi, chúng tôi sẽ rất vui mừng được chào đón bạn đến với các sự kiện của chúng tôi và hy vọng bạn cũng có thể trở thành thành viên mới.</p>

                </ul>
            </div>

            <Footer />
        </>
    );
}
export default MainGBA;