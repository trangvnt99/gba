import React, { Suspense, useEffect } from 'react';
import Header from '../../component/header.js';
import Footer from '../../component/footer.js';
import '../../styles/main_1/main_1.css';
import img from '../../img/Screenshot.png';
import '../../styles/main_1/main_circle/main_circle.css';
import imgComer from '../../img/Vector.png'
import Container_post from './main_post/main_post.js';
import MainBusiness from './main_business/main_business.js';
function Main_1() {
  const CircleComponent = React.lazy(() => import('./circle_item.js'));
  // hiển thị lần lượt từ trên
  useEffect(() => {
    const currentScrollPosition = window.scrollY;
    return () => {
      window.scrollTo(0, currentScrollPosition);
    };
  });
  
  return (
    <>
      <Header />
      <div className="container_home">
        <div>
          <img src={imgComer} alt="Icon 1" class="img" />
          <p className="title_home">Commercial</p>
        </div>
        <h1 className="child_title">Investment Associate Sourcing</h1>
        <h1 className="child_title">Representative</h1>
        <button className="btn_view">
          <a href="http://2dhc.com/info/commercial-N25.html" className="a_view">
            Xem
          </a>
        </button>
        <div className="image_list">
          <img src={img} alt="Icon 2" className="img" />
          <img src={img} alt="Icon 2" className="img" />
          <img src={img} alt="Icon 2" className="img" />
          <img src={img} alt="Icon 2" className="img" />
          <img src={img} alt="Icon 2" className="img" />
        </div>
        <Suspense fallback={<div style={{ height: '10200px', width: '100px' }}></div>}>
        <div class="container_circle_grid">
            <div class="item_circle"></div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle"></div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <div class="container_circle">
              </div>
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
            <div class="item_circle">
              <CircleComponent />
            </div>
          </div>
        </Suspense>
        {/* <div className="group_side">
          <p className="group_side_title">Hiệp hội doanh nghiệp quốc tế</p>
          <h1 className="border_line"> </h1>
          <div className="group_logo">
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>

            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p class="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <a href='http://2dhc.com/hiep-hoi/Chau-Au-49.html'>
                <img src={img} alt="logo" className="logo-item" />
                <p className="img_post"></p>
              </a>
            </div>
            <div className="group_logo_item">
              <img src={img} alt="logo" className="logo-item" />
              <p className="img_post"></p>
            </div>
          </div>
        </div> */}
        <MainBusiness />
      </div>

      
      <Container_post />
      <Footer />
    </>
  );
}

export default Main_1;