import React from 'react';
import img from '../../../assets/homeimg/Frame 1000003421.png'
import { CiSearch } from "react-icons/ci";

const Contact = () => {
  return (
    <div className=" bg-base-100  shadow-xl mt-5 rounded-md">
  <div className='flex items-center justify-between p-2'>
        <p className='  text-lg font-bold'>Contact </p>
        <CiSearch />
      </div>

    <div className="p-2">

      <div className='mt-5'>
        <img src={img} alt="" />
      </div>
   
      
    </div>
  </div>
  );
};

export default Contact;