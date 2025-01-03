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
const data = [
  {
    image: imgHaiSan,
    label: 'Hải sản',
    description: 'Hải sản tươi ngon được đánh bắt trực tiếp từ biển cả. Chúng tôi cung cấp đa dạng các loại hải sản như tôm, cua, cá, mực với chất lượng đảm bảo, phù hợp cho mọi bữa ăn gia đình và nhà hàng.',
   },
  {
    image: imgOcop,
    label: 'OCOP &',
    description: 'Các sản phẩm OCOP được chọn lọc kỹ lưỡng từ các vùng miền khác nhau, bao gồm đặc sản địa phương, thủ công mỹ nghệ, và nông sản đạt chuẩn quốc gia, mang đến sự đa dạng và chất lượng tuyệt hảo.',
   },
  {
    image: imgGiaVi,
    label: 'Gia Vị',
    description: 'Gia vị hảo hạng giúp làm tăng hương vị cho món ăn của bạn. Từ các loại bột gia vị truyền thống đến các loại sốt nhập khẩu, tất cả đều được chọn lọc kỹ lưỡng nhằm đảm bảo chất lượng cao nhất.',
   },
  {
    image: imgThit,
    label: 'Thịt',
    description: 'Thịt sạch và tươi ngon, được nuôi dưỡng trong môi trường tự nhiên, không sử dụng hóa chất độc hại. Chúng tôi cung cấp các loại thịt bò, thịt heo, và gia cầm đạt chuẩn an toàn thực phẩm.',
   },
  {
    image: imgNguCoc,
    label: 'Ngũ cốc',
    description: 'Ngũ cốc nguyên hạt giàu dinh dưỡng, tốt cho sức khỏe, bao gồm các loại như gạo lứt, yến mạch, đậu đỗ, phù hợp cho người ăn chay và những ai muốn duy trì lối sống lành mạnh.',
   },
];

const CircleComponent = React.memo(() => {

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
        let longText = "Thông tin chi tiết về mục " + item.label +":" + item.description;


        const handleClick = () => {
          if (item.label === 'Hải sản') {
            window.location.href = 'http://localhost:3000/main_food/haisan';
          } else if (item.label === 'Thịt') {
            window.location.href = 'http://localhost:3000/main_food/giavi';
          } else if (item.label === 'OCOP &') {
            window.location.href = 'http://localhost:3000/main_food/giavi';
          } else if (item.label === 'Ngũ cốc') {
            window.location.href = 'http://localhost:3000/main_food/ngucoc_hat';
          } else {
            window.location.href = 'http://localhost:3000/main_food/giavi';
          }
        };
   
        return (
          <div
            key={index}
            className={`item-cr rotating-item ${
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
              <div className="item-container-circle-main" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={item.image} alt='' className="item-image-cirle-main" height={itemSize} width={itemSize+20} />
                <div className="item-label-cirlce-man">{item.label}</div>
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
          <a href='http://localhost:3000/main_food/thuc_uong'>
            <img src={imgThucPham} className="center-image" height={itemSize+50} width={itemSize+70} />
            <div className="center-label">Thực phẩm</div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default CircleComponent;
