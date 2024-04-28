import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


const Carousel = () => {
  

  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='img/hero/hero-1.jpg'  className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='img/hero/hero-2.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='img/hero/hero-1.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src='img/hero/hero-2.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>

    </MDBCarousel>
  );
}

export default Carousel;
