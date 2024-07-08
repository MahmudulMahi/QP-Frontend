import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/homeimg/Group 1000003345.png'
const CarouselSection = () => {
  return (
    <Carousel showThumbs={false}>
    <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={img1} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={img1} />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  );
};

export default CarouselSection;