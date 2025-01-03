import React from 'react';
import img from '../../../img/Screenshot.png';
import imgCruise from '../../../img/main_1/post/cruise.png';
import imghos from '../../../img/main_1/post/Hospital.png';
import imghuman from '../../../img/main_1/post/Human.png';
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
            <a className="a_title_post">
              <p className="title_post">Aviation |</p>
              <p className="title_post">Cruise ship</p>
            </a>
          </div>
          <div className="grid-item-post">
            <div className="item_container">
              <div className="hover01 column">
                <div>
                  <figure><img className="img_member" src={imghos} alt='' /></figure>
                </div>
              </div>
            </div>
            <a className="a_title_post">
              <p className="title_post">Hospitality |</p>
              <p className='title_post'>Travel</p>
            </a>
          </div>
          <div className="grid-item-post">
            <div className="item_container">
              <div className="hover01 column">
                <div>
                  <figure><img className="img_member" src={imghuman} alt=''/></figure>
                </div>
              </div>
            </div>
            <a className="a_title_post">
              <p className="title_post">Human |</p>
              <p className="title_post">Services</p>

            </a>
          </div>
        </div>
        </div>
    );
};

export default Container_post;