import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" alt="Producto 1" />
      </div>
      <div>
        <img src="https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" alt="Producto 2" />
      </div>
      <div>
        <img src="https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" alt="Producto 3" />
      </div>
      <div>
        <img src="https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" alt="Producto 4" />
      </div>
      <div>
        <img src="https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" alt="Producto 5" />
      </div>
    </Slider>
  );
}

export default Carousel;
