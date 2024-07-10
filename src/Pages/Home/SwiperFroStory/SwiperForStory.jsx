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
import { Link } from 'react-router-dom';

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


          {/* <div>
            
            <SwiperSlide>
              <img className='w-[200px]' src="https://i.ibb.co/T2cpBd5/888.jpg" />
            </SwiperSlide>
          
            <Link to='/llll'>
            <button className="btn btn-secondary">Secondary</button>
            </Link>
          </div> */}
          <SwiperSlide>
            <div className='flex flex-col items-center relative'>
              <img className='w-[200px] h-[270px] rounded-md' src="https://i.ibb.co/T2cpBd5/888.jpg" alt="First Slide" />
              <Link to='/story-type'>
                <button className="btn btn-secondary absolute -bottom-5 right-14  ">Add Story</button>
              </Link>
            </div>
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