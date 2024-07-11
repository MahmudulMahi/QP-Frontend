import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import butimg from '../../../assets/storyimg/Icon.png'

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

  console.log("slide", slides);
  useEffect(() => {
    // Replace with your API endpoint
    fetch('http://localhost:5000/storyimg')
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
                <button className="btn  absolute bottom-0 right-14  "><img src={butimg} alt="" /></button>
              </Link>
            </div>
          </SwiperSlide>


          {
            slides.map((slide) => <SwiperSlide key={slide._id}>
              <Link to={`/story-type/${slide._id}`}>
                <button><img className=' w-[200px] h-[270px] rounded-md ' src={slide.image}  /></button>
              </Link>
            </SwiperSlide>)
          }



        </Swiper>
      </>
    </div>
  );
};

export default SwiperForStory;