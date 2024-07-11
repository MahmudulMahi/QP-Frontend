import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import userimg from '../../../assets/storyimg/Group 1000003420.png'
import userimg2 from '../../../assets/storyimg/Group 1000003421.png'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';



const SingleStory = () => {

  const { id } = useParams();
  const [story, setStory] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/storyimg/${id}`)
      .then(response => response.json())
      .then(data => setStory(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }
  return (

    <div className='grid grid-cols-12  gap-3' style={{ minHeight: 'calc(100vh - 150px)' }}>
      <div className='col-span-3 bg-white shadow-xl '>
        <div className='flex flex-col justify-between h-full pb-4 '>
          <div>
            <img className='mt-5' src={userimg} alt="" />
            <img className='mt-3' src={userimg2} alt="" />
            <img className='mt-3' src={userimg} alt="" />
            <img className='mt-3' src={userimg2} alt="" />
            <img className='mt-3' src={userimg} alt="" />
            <img className='mt-3' src={userimg2} alt="" />
          </div>
          {/* <div className='px-1 text-white'>
          <button className="bg-[#307777] w-full p-3 rounded ">Create Story</button>
        </div> */}
        </div>
      </div>
      <div className='col-span-9 bg-[#FFFFFF] px-7'>
        <h2 className='text-3xl pb-3 font-medium'>Select Story Type</h2>
        <div>
          <div className="hero bg-base-200 " style={{ minHeight: 'calc(100vh - 150px)' }}>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <>
                  <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                      enabled: true,
                    }}
                    breakpoints={{
                      769: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
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
                      <div className='flex flex-col items-center relative'>
                        <img className='w-[400px] h-[550px] rounded-md' src={story.image} alt="First Slide" />

                      </div>
                    </SwiperSlide>


                  </Swiper>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleStory;