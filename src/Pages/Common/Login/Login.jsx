import React, { useContext } from 'react';
import { BiShow } from "react-icons/bi";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogin =async(e) =>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log("tt",user.email);
      navigate("/")
    })
    

  }
  return (
    <div className="hero bg-[#0B3243] min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-9/12">
          <h1 className="text-5xl font-bold text-white">Welcome to the first <br />  decentralised Social Network <br /> in the world</h1>
          <p className="py-6 text-white">
            We are the only decentralised Social Network that gives opportunity to monetise your time <br /> even if you are a normal user who does't create any content and use the earning to buy <br /> any services or goods from the native marketplace.
          </p>
          <button className=" bg-[#307777] px-8 py-4 rounded-md text-white ">Register Now!</button>
        </div>
        <div className=" bg-base-100  max-w-sm shrink-0 shadow-2xl rounded-md">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <p className='text-[#307777] font-bold text-lg'>Login to your Account</p>
              <label className="label font-semibold mt-3">
                <span className="label-text">Email Address </span>
              </label>
              <input type="email" name="email" placeholder="email" className="border-[1px] border-current p-2 rounded-md" required />
            </div>
            <div className="form-control">
              <label className="label font-semibold relative">
                <span className="label-text">Password</span>
                <div className='absolute right-3 top-[50px]'>
                  <BiShow />
                </div>
              </label>

              <input type="password" name="password" placeholder="password" className="border-[1px] border-current p-2 rounded-md" required />
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
            <div className="form-control mt-6">
              <button className="py-3 bg-[#307777] rounded-md text-white">Login</button>
            </div>
            {/* <div className="divider divider-neutral  ">or sign up with</div> */}
            <div className='flex justify-center items-center gap-1  mx-auto'>
              <hr className="border-gray-400 w-8 my-4" />
              <p className="mx-auto">or sign up with</p>
              <hr className="border-gray-400 w-8 my-4" />
            </div>
            <p>Don't have an Account? <span className='text-xl text-[#307777] font-medium'>Sign up here</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;