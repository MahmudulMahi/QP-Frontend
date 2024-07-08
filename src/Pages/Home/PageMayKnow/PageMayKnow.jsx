import React from 'react';
import img1 from '../../../assets/homeimg/Frame 36 (2).png'
import img2 from '../../../assets/homeimg/Frame 37 (1).png'
import img3 from '../../../assets/homeimg/Frame 38 (1).png'
import img4 from '../../../assets/homeimg/Frame 39.png'

const PageMayKnow = () => {
  return (
    <div className=" bg-base-100  shadow-xl mt-5 rounded-md">
      <div className='flex items-center justify-between p-2'>
        <p className=' text-[#307777] text-lg font-bold'>Pages You Might Like </p>
        <p className='text-[#307777]'>See All</p>
      </div>

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
          <img src={img4} alt="" />
        </div>
        <div className='mt-5'>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageMayKnow;