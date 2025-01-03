import React from 'react';
import img from '../../../img/Screenshot.png';
import imgCruise from '../../../img/main_1/post/cruise.png';
const Container_post = ({ title, content }) => {
    return (
        <div className="container_post">
            <p className="line_with_text">2DHA.COM</p>
        <div className="grid-container">
          <div className="grid-item-post">
            <div className="item_container">
              <div className="hover01 column">
                <div>
                  <figure><img className="img_member" src={imgCruise} alt='' /></figure>
                </div>
              </div>
            </div>
            <a className="a_title_post" href="/productdetail">
              <p className="title_post">Aviation | Cruise ship</p>
            </a>
          </div>
          <div className="grid-item-post">
            <div className="item_container">
              <div className="hover01 column">
                <div>
                  <figure><img className="img_member" src={img} alt='' /></figure>
                </div>
              </div>
            </div>
            <a className="a_title_post" href="/productdetail">
              <p className="title_post">Hospitality | Travel</p>
            </a>
          </div>
          <div className="grid-item-post">
            <div className="item_container">
              <div className="hover01 column">
                <div>
                  <figure><img className="img_member" src={img} alt=''/></figure>
                </div>
              </div>
            </div>
            <a className="a_title_post" href="/productdetail">
              <p className="title_post">Human | Services</p>
            </a>
          </div>
        </div>
        </div>
    );
};

export default Container_post;