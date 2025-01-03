import React from 'react';

const MainDes = ({ title, description = [], images = [], chart = {}, additionalInfo = [] }) => {
  return (
    <div className="detail_des">
      <div className="img_detail_des">
        <div>
          <p className="title_des_main">{title}</p>
          {description.map((desc, index) => (
            <p key={index} className="title_des">{desc}</p>
          ))}
        </div>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="img_Des" />
        ))}
      </div>

      {additionalInfo.map((info, index) => (
        <p key={index} className="title_des">{info}</p>
      ))}

      <div>
        <img src={chart.src} alt={chart.alt} className="img_chart" />
      </div>

      <p className="title_des">{chart.description}</p>
    </div>
  );
};

export default MainDes;