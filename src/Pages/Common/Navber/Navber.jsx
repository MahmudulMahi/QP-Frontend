import React from 'react';
import logo from "../../../assets/navberimg/image 386.png"
import homebtn from "../../../assets/navberimg/Vector (1).png"
import navicon1 from "../../../assets/navberimg/Group 1000003376.png"
import navicon2 from "../../../assets/navberimg/Group_light.png"
import navicon3 from "../../../assets/navberimg/Group 1000003341.png"
import navicon4 from "../../../assets/navberimg/Vector (2).png"
import profile from "../../../assets/navberimg/Group 1000003375.png"
import messenger from "../../../assets/navberimg/Frame 14.png"
import notification from "../../../assets/navberimg/Frame 15.png"
import searchber from "../../../assets/navberimg/Group 1000003374.png"
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
      
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><img src={homebtn} alt="" /></li>
         
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <img className='mr-6' src={logo} alt="" />
        <img className='hidden lg:block' src={searchber} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex ">
        {/* <ul className=" menu-horizontal px-1 gap-[100] "> */}
        <div className='flex space-x-[80px] ml-48  '>
          <Link><img className='w-6 h-6 hidden lg:block' src={homebtn} alt="" /></Link>
          <Link><img className='w-6 h-6 hidden lg:block' src={navicon1} alt="" /></Link>
          <Link><img className='w-6 h-6 hidden lg:block' src={navicon2} alt="" /></Link>
          <Link><img className='w-6 h-6 hidden lg:block' src={navicon3} alt="" /></Link>
          <Link><img className='w-6 h-6 hidden lg:block' src={navicon4} alt="" /></Link>
        </div>


        {/* </ul> */}
      </div>
      <div className="navbar-end">
        <div className='flex space-x-4'>
          <img className='max-w-12 max-h-12 hidden lg:block' src={messenger} alt="" />
          <img className='max-w-12 max-h-12 hidden lg:block' src={notification} alt="" />
          <img className='max-w-12 max-h-12 hidden lg:block' src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navber;