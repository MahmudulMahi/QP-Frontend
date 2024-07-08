import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { CiCircleQuestion } from "react-icons/ci";

const Registration = () => {


  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  // const countryCodes = [
  //   { code: '+1', country: 'USA' },
  //   { code: '+44', country: 'UK' },
  //   { code: '+91', country: 'India' },
  //   // Add more country codes as needed
  // ];
  // const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);

  return (
    <div className="hero bg-[#183a3ae0] min-h-screen  ">
      <div className="md:hero-content flex-col lg:flex-row p-2 mt-5 text-left">
        {/* <div className="text-center lg:text-left w-9/12">
          <h1 className="text-xl md:text-5xl  font-bold text-white">Welcome to the first <br />  decentralised Social Network <br /> in the world</h1>
          <p className="py-6 text-white">
            We are the only decentralised Social Network that gives opportunity to monetise your time <br /> even if you are a normal user who does't create any content and use the earning to buy <br /> any services or goods from the native marketplace.
          </p>
          <button className=" bg-[#307777] px-8 py-4 rounded-md text-white text-left ">Login Now!</button>
        </div> */}
        <div className="w-9/12">
          <h1 className="text-xl md:text-5xl font-bold text-white">
            Welcome to the first <br />
            decentralised Social Network <br />
            in the world
          </h1>
          <p className="py-6 text-white">
            We are the only decentralised Social Network that gives opportunity to monetise your time <br />
            even if you are a normal user who doesn’t create any content and use the earning to buy <br />
            any services or goods from the native marketplace.
          </p>
          <button className="bg-[#307777] px-8 py-4 rounded-md text-white">
            Login Now!
          </button>
        </div>
        <div className=" bg-base-100  max-w-72 md:max-w-md shrink-0 shadow-2xl rounded-md mt-5 md:mt-0">
          <form className="card-body">
            <p className='text-[#307777] font-bold text-lg'>Register Your Account</p>
            <div className='flex space-x-2'>
              <div>
                <div className="form-control ">

                  <label className="label font-semibold mt-3">
                    <span className="label-text">First Name </span>
                  </label>
                  <input type="email" placeholder="first name" className="border-[1px] border-current p-2 rounded-md w-full" required />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label font-semibold mt-3">
                    <span className="label-text">Last Name </span>
                  </label>
                  <input type="email" placeholder="Last Name" className="border-[1px] border-current p-2 rounded-md w-full" required />
                </div>
              </div>
            </div>
            <div className="form-control ">

              <label className="label font-semibold ">
                <span className="label-text">Email Address </span>
              </label>
              <input type="email" placeholder="email" className="border-[1px] border-current p-2 rounded-md" required />
            </div>
            <div className="form-control ">
              <label className="label font-semibold relative">
                <span className="label-text">Password</span>
                <div className='absolute right-3 top-[50px]'>
                  <BiShow />
                </div>
              </label>

              <input type="password" placeholder="password" className="border-[1px] border-current p-2 rounded-md" required />
              <div className='flex justify-between'>
                <label className=" label">

                  <input type="checkbox" className="w-5 h-5 accent-[#307777]   " />
                  <span className="label-text ml-2 ">Remember me</span>
                </label>

                <label className="label">
                  <a href="#" className="label-text-alt text-[#307777] font-semibold ">Forgot password?</a>
                </label>
              </div>
            </div>
            {/* --------- */}
            <div className="form-control w-full">
              <label className="label font-semibold ">
                <span className="label-text">Date of Birth</span>
              </label>
              <div className="flex space-x-4">
                <select className="border-[1px] border-current p-2 rounded-md w-full" required>
                  <option value="">DD</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select className="border-[1px] border-current p-2 rounded-md w-full" required>
                  <option value="">MM</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
                <select className="border-[1px] border-current p-2 rounded-md w-full" required>
                  <option value="">YYYY</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* --------- */}
            {/* <div className="form-control w-full">
              <label className="label font-semibold mt-3">
                <span className="label-text">Phone Number</span>
              </label>
              <div className="flex space-x-2">
                <select className="border-[1px] border-current p-2 rounded-md" required>
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>{code} ({country})</option>
                  ))}
                </select>
                <input type="text" placeholder="phone number" className="border-[1px] border-current p-2 rounded-md w-full" required />
              </div>
            </div> */}

            <div className='form-control w-full'>
              <label className="label font-semibold ">
                <span className="label-text">Phone Number</span>
              </label>
              <div className="join">
                <div>

                </div>
                <select className="border-[1px] border-current p-2 rounded-md w-2/5 ">
                  <option disabled selected>+880(Ban)</option>
                  <option>Us</option>
                  <option>Ban</option>
                  <option>India</option>
                </select>
                <div className='relative w-full'>
                  <input type="text" className="border-[1px] border-current p-2 rounded-md w-full" />

                  <div className='absolute right-3 top-4 '>
                    <CiCircleQuestion />
                  </div>
                </div>

              </div>
            </div>
            <label className="form-control w-full ">
              <div className="label font-semibold">
                <span className="label-text">Your Gender</span>

              </div>

              <select className=" border-[1px] border-current p-2 rounded-md w-full">
                <option disabled selected>Pick one</option>
                <option>Men</option>
                <option>Women</option>
                <option>Other</option>

              </select>


            </label>
            <div className='flex '>
              <label className=" label">

                <input type="checkbox" className="w-5 h-5 accent-[#307777]   " />
                <span className=" text-sm ml-2 ">I accept the <span className='text-[#307777] text-base'>Terms and Conditions</span> of the website </span>
              </label>


            </div>
            <div className="form-control mt-6">
              <button className="py-3 bg-[#307777] rounded-md text-white">Complete Registration</button>
            </div>
            {/* <div className="divider divider-neutral  ">or sign up with</div> */}
            <div className='flex justify-center items-center gap-1  mx-auto'>
              <hr className="border-gray-400 w-8 my-4" />
              <p className="mx-auto">or sign up with</p>
              <hr className="border-gray-400 w-8 my-4" />
            </div>
            <p className='text-center'>Already have an Account? <span className='text-2xl text-[#307777] font-medium'>Login here</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

