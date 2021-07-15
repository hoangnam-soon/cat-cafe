import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';



const Slidebanner = () => {
  
  const fadeImages = [
    'https://hoangnam-soon.github.io/Cat-Cafe/img/Banner/banner2.jpg',
    'https://hoangnam-soon.github.io/Cat-Cafe/img/Banner/banner1.jpg',
    'https://cdn-onshop.cdn.vccloud.vn/images/zimpet/sale.jpg',
    'https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/BLOG/blog-banner.jpg?raw=true'
  ];
  

  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2 className='title-banner1'> Trong mắt Quàng thượng mèo, <br>
                      
                      </br> Tất cả mọi thứ đề thuộc sở hữu của Mèo.</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2 className='title-banner2'>Cuộc đời là những giọt cà phê đen, bản thân ta sẽ là những viên đường bé nhỏ.</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
          <h2 className='title-banner3'>Nhìn gì! Mua phụ kiện đi Sen.</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slidebanner