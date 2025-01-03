import React, { useState, useEffect } from 'react';
import '../../styles/main_1/main_circle/circle_item.css';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate,  } from 'react-router-dom';
import imgNguCoc from '../../img/main_1/ngucoc.png';
import imgThit from '../../img/main_1/thit.png';
import imgGiaVi from '../../img/main_1/giavi.png';
import imgOcop from '../../img/main_1/ocop.png';
import imgHaiSan from '../../img/main_1/haisan.png';
import imgThucPham from '../../img/main_1/thucpham.png';
import imageItem from '../../img/food.jpg';
const data = [
  { image: imgHaiSan, label: 'Hải sản' },
  { image: imgOcop, label: 'OCOP &' },
  { image: imgGiaVi, label: 'Gia Vị' },
  { image: imgThit, label: 'Thịt' },
  { image: imgNguCoc, label: 'Ngũ cốc' },
];

const CircleComponent = React.memo(() => {
  const navigate = useNavigate();

  const handleClick = () => {
    //navigate('/productdetail');
    window.location.href = 'http://2dhc.com/san-pham/1/Hai-San--1.html';    
  };

  // Khai báo trạng thái cho việc hiển thị từng item
  const [visibleItems, setVisibleItems] = useState([]); 

  useEffect(() => {
    // Hiển thị từng phần tử với khoảng thời gian cách nhau
    data.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]); 
      }, index * 300); 
    });
  }, []);

  const radius = 150; // Bán kính vòng tròn
  const itemSize = 80; // Kích thước mỗi item
  const smallCircleSize = 20; // Kích thước vòng tròn nhỏ
  const centerX = radius + itemSize / 2; // tâm X
  const centerY = radius + itemSize / 2; // tâm Y

  return (
    <div
      className="container_child_circle"
      style={{
        position: 'relative',
        width: radius * 2 + itemSize,
        height: radius * 2 + itemSize,
      }}
    >
      <svg
        width={radius * 2 + itemSize}
        height={radius * 2 + itemSize}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {data.map((_, index) => {
          const angle = (index / data.length) * 2 * Math.PI; // Góc hiện tại
          const nextAngle = ((index + 1) / data.length) * 2 * Math.PI; // Góc của item tiếp theo

          // Tọa độ điểm đầu và điểm cuối
          const x1 = centerX + radius * Math.cos(angle);
          const y1 = centerY + radius * Math.sin(angle);
          const x2 = centerX + radius * Math.cos(nextAngle);
          const y2 = centerY + radius * Math.sin(nextAngle);

          // Tọa độ điều khiển cho đường cong
          const controlX =
            centerX + radius * Math.cos((angle + nextAngle) / 2) * 1.2;
          const controlY =
            centerY + radius * Math.sin((angle + nextAngle) / 2) * 1.2;

          // Tính vị trí của small circle dọc theo đường cong
          const t = 0.2;
          const cx =
            (1 - t) * (1 - t) * x1 +
            2 * (1 - t) * t * controlX +
            t * t * x2; // X tọa độ
          const cy =
            (1 - t) * (1 - t) * y1 +
            2 * (1 - t) * t * controlY +
            t * t * y2; // Y tọa độ

          return (
            <g
              key={index}
              className={`path-group ${
                visibleItems.includes(index) ? 'visible' : ''
              }`}
            >
              {/* Đường cong */}
              <path
                d={`M ${x1},${y1} Q ${controlX},${controlY} ${x2},${y2}`}
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx={cx} cy={cy} r={smallCircleSize / 2} fill="white" />
            </g>
          );
        })}
      </svg>

      {data.map((item, index) => {
        const angle = (index / data.length) * 2 * Math.PI + 11; // Góc hiện tại
        const x =
          centerX + radius * Math.cos(angle) - itemSize / 2;
        const y =
          centerY + radius * Math.sin(angle) - itemSize / 2;
        let longText = "Thông tin chi tiết về mục này." + item.label;
        return (
          <div
            key={index}
            className={`item rotating-item ${
              visibleItems.includes(index) ? 'visible' : ''
            }`}
            style={{
              position: 'absolute',
              borderColor: 'white',
              left: x,
              top: y,
              width: itemSize,
              height: itemSize,
              '--index': index,
            }}
          >
            <Tooltip title={longText}>
              <div className="item-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={item.image} alt='' className="item-image" height={itemSize} width={itemSize+20} />
                <div className="item-label">{item.label}</div>
              </div>
            </Tooltip>
          </div>
        );
      })}

      {/* Vòng tròn trung tâm */}
      <div
        className="center-circle"
        style={{
          position: 'absolute',
          left: centerX - (itemSize + 40) / 2,
          top: centerY - (itemSize + 40) / 2,
          width: itemSize + 40,
          height: itemSize + 40,
        }}
      >
        <div class="item-container">
          <a href='http://2dhc.com/thong-tin/Thuc-Pham-1.html'>
            <img src={imgThucPham} className="center-image" height={itemSize+50} width={itemSize+70} />
            <div className="center-label">Thực phẩm</div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default CircleComponent;
