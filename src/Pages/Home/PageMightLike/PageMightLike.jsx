import React from 'react';
import img1 from '../../../assets/homeimg/Frame 36 (1).png'
import img2 from '../../../assets/homeimg/Frame 37.png'
import img3 from '../../../assets/homeimg/Frame 38.png'

const PageMightLike = () => {
  return (
    <div className=" bg-base-100  shadow-xl mt-5 rounded-md">
      <p className='text-center text-[#307777] text-xl font-bold'>Pages You Might Like </p>

      <div className="p-2">

      <div className='mt-5'>
      <img src={img1} alt="" />
      </div>
      <div className='mt-5'>
      <img src={img2} alt="" />
      </div>
      <div className='mt-5'>
      <img src={img3} alt="" />
      </div>
      <div className='mt-5'>
      <img src={img2} alt="" />
      </div>
      </div>
    </div>
  );
};

export default PageMightLike;