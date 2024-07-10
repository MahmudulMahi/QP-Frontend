

import logo from "../../../assets/navberimg/image 386.png";
import homebtn from "../../../assets/navberimg/homebtn.png";
import navicon1 from "../../../assets/navberimg/Group 1000003376.png";
import navicon2 from "../../../assets/navberimg/Group_light.png";
import navicon3 from "../../../assets/navberimg/Group 1000003341.png";
import navicon4 from "../../../assets/navberimg/Vector (2).png";
import profile from "../../../assets/navberimg/Group 1000003375.png";
import messenger from "../../../assets/navberimg/Frame 14.png";
import notification from "../../../assets/navberimg/Frame 15.png";
import searchber from "../../../assets/navberimg/Group 1000003374.png";
import plusebtn from "../../../assets/navberimg/Group 121.png";
import searchbtn from "../../../assets/navberimg/Group 119.png";
import homesmall from "../../../assets/navberimg/Group 445 (1).png";
import smallicon1 from "../../../assets/navberimg/Frame 35.png";
import smallicon2 from "../../../assets/navberimg/Vector (3).png";
import smallicon3 from "../../../assets/navberimg/Frame 36.png";
import smallicon4 from "../../../assets/navberimg/Frame 35.png";
import smallicon5 from "../../../assets/navberimg/Group 1000003341.png";
import user from "../../../assets/navberimg/Ellipse 2 (1).png";
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navber = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const [isOpenUserDropdown, setIsOpenUserDropdown] = useState(false);
  const [isOpenDropdownSm, setIsOpenDropdownSm] = useState(false);

  const toggleDropdown = () => {
    setIsOpenUserDropdown(!isOpenUserDropdown);
  };
  const toggleDropdownSm = () => {
    setIsOpenDropdownSm(!isOpenDropdownSm);
  };
  return (
    // navbar bg-black flex justify-between items-center
    <div className=" lg:navbar bg-[#FFFFFF] justify-between items-center mt-4 ">
      {/* Small device view */}

      <div className="flex lg:hidden justify-between w-full">
        <img className='mr-6 w-6' src={logo} alt="" />
        <div className='flex space-x-4'>
          <img src={plusebtn} alt="" />
          <img src={searchbtn} alt="" />
          <img src={plusebtn} alt="" />
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center space-x-2 mt-5 ">
        <NavLink><img className='w-6 h-6' src={homesmall} alt="" /></NavLink>
        <NavLink><img className='w-6 h-6' src={smallicon1} alt="" /></NavLink>
        <NavLink><img className='w-6 h-6' src={smallicon2} alt="" /></NavLink>
        <NavLink><img className='w-6 h-6' src={smallicon3} alt="" /></NavLink>
        <NavLink><img className='w-6 h-6' src={smallicon4} alt="" /></NavLink>
        <NavLink><img className='w-6 h-6' src={smallicon5} alt="" /></NavLink>
        <button onClick={toggleDropdownSm} className="flex items-center">
          <img className='w-6 h-6' src={user} alt="Profile" />
        </button>
        {isOpenDropdownSm && (
          <div className="absolute right-0 mt-40 w-48 bg-white border rounded shadow-lg">
            {user?.email ?
              <NavLink to="" onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</NavLink>
              : <NavLink to="/login" className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Login</NavLink>
            }
            <NavLink to="/registration" className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Register</NavLink>
          </div>
        )}
      </div>



      {/* Large device view */}
      <div className="hidden  lg:flex justify-between w-full">
        <div className="flex items-center">
          <img className='mr-6' src={logo} alt="" />
          <img className='hidden lg:block w-80' src={searchber} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <div className='flex space-x-[50px] ml-64'>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'border-b-4 border-[#307777] ' : ''
              }
            >
              {/* btn btn-ghost */}
              <button className="btn btn-ghost">
                <img className='w-6 h-6 mb-1' src={homebtn} alt="Home" />
              </button>
            </NavLink>

            <NavLink><button className="btn btn-ghost"><img className='w-6 h-6' src={navicon1} alt="" /></button></NavLink>
            <NavLink><button className="btn btn-ghost"><img className='w-6 h-6' src={navicon2} alt="" /></button></NavLink>

            <NavLink><button className="btn btn-ghost"><img className='w-6 h-6' src={navicon3} alt="" /></button></NavLink>

            <NavLink><button className="btn btn-ghost"><img className='w-6 h-6' src={navicon4} alt="" /></button></NavLink>

          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className='flex space-x-4'>
            <img className='max-w-12 max-h-12' src={messenger} alt="" />
            <img className='max-w-12 max-h-12' src={notification} alt="" />
            {/* <img className='max-w-12 max-h-12' src={profile} alt="" /> */}
            <button onClick={toggleDropdown} className="flex items-center">
              <img className='max-w-12 max-h-12' src={profile} alt="Profile" />
            </button>

            {isOpenUserDropdown && (
              <div className="absolute  mt-12 w-36 bg-white border rounded shadow-lg">
                {user?.email ?
                  <Link to=''>  <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">LogOut</button></Link>
                  :<Link to='/login'> <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Login</button></Link>
                }
                <Link to='/registration'><button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Register</button></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;

