import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const SwiperForStory = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    // Replace with your API endpoint
    fetch('/story.json')
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects with id and image properties
        setSlides(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(slides);
  return (
    <div className='mt-5'>
      <>
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={false}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <img className='w-[200px]' src="https://i.ibb.co/nfMh0tJ/Add-story.png" />
          </SwiperSlide>



          {
            slides.map((slide) => <SwiperSlide key={slide.id}>
              <img className='w-[200px]  ' src={slide.image} />
            </SwiperSlide>)
          }



        </Swiper>
      </>
    </div>
  );
};

export default SwiperForStory;