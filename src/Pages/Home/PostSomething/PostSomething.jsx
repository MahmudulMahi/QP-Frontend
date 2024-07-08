import React from 'react';
import img from '../../../assets/homeimg/Ellipse 1773.png'
import videoimg from '../../../assets/homeimg/Frame 1000003419.png'
import photoimg from '../../../assets/homeimg/Group 1000003350.png'
import feelingimg from '../../../assets/homeimg/Frame 1000003418.png'

const PostSomething = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-4 px-11 mt-5'>
        <div>
          <img className='w-20' src={img} alt="" />
        </div>

        <input type="text" placeholder="What's on your mind,Shanto?" className="bg-slate-100 p-4 rounded-full w-full " />
      </div>

      <div className='flex justify-evenly items-center mt-4 border-y-2 py-4'>
        <button><img src={videoimg} alt="" /></button>
        <button><img src={photoimg} alt="" /></button>
        <button><img src={feelingimg} alt="" /></button>
      </div>
    </div>
  );
};

export default PostSomething;