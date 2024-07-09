import React, { useState } from 'react';
import img from '../../../assets/homeimg/Ellipse 1773.png'
import coverimg from '../../../assets/homeimg/Frame 34746.png'
import { FaEarthAmericas } from "react-icons/fa6";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { LiaTimesCircleSolid } from "react-icons/lia";
import iconhaha from '../../../assets/homeimg/haha.png'
import iconmessage from '../../../assets/homeimg/Group 1000003351.png'
import iconshare from '../../../assets/homeimg/Group 1000003352.png'
import commenticon from '../../../assets/homeimg/Ellipse 1774.png'
import doticon from '../../../assets/homeimg/Group 1000003367.png'
import statusicon from '../../../assets/homeimg/Group 534.png'
import { SlLike } from "react-icons/sl";


const PostCard = () => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);

  const toggleCommentSection = () => {
    setIsCommentSectionVisible(!isCommentSectionVisible);
  };
  return (
    <div className='bg-white shadow-xl mt-5 px-3'>
      <div className=' flex items-center justify-between '>
        <div>
          <div className='flex items-center gap-3'>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <p>Memes Group</p>
              <div className='flex items-center'>
                <p className='mr-2'>1h.</p>
                <FaEarthAmericas />
              </div>
            </div>
          </div>
        </div>
        <div className='flex  '>
          <PiDotsThreeOutlineFill className='w-10 h-10 mr-4' />
          <LiaTimesCircleSolid className='w-10 h-10' />
        </div>
      </div>
      <img className='mt-4' src={coverimg} alt="" />

      <div className='flex justify-between mt-2 px-3'>
        <div className='flex items-center gap-1'>
          <img src={iconhaha} alt="" />
          <p>444</p>
        </div>
        <div className='flex gap-3'>
          <img src={iconmessage} alt="" />
          <img src={iconshare} alt="" />
        </div>
      </div>

      <div className='flex justify-between items-center mt-3 px-4 border-b-2 pb-3'>

        <div className='flex items-center text-xl space-x-1'>
          <SlLike />
          <button>like</button>
        </div>
        <div>
          <button onClick={toggleCommentSection} className='text-xl'> Comment</button>
        </div>
        <div>
          <button className='text-xl'>Share</button>
        </div>

      </div>
      {/* comment section */}
      {isCommentSectionVisible && (
        <div className='px-4 mt-3'>
          <button className='text-xl font-semibold pb-3'>View more Comments</button>

          <div className='flex gap-2'>
            <img className='w-[40px] h-[40px]' src={commenticon} alt="" />
            <div className='flex items-center'>
              <div className=''>
                <div className='bg-[#F0F2F5] rounded-xl p-2'>
                  <p className='font-medium'>Nafiul islam</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a laoreet tortor. Duis malesuada nunc sed faucibus pellentes  Proin odio nulla, rhoncus in dictum in, tincidunt vel l</p>
                </div>

                {/* <img src={doticon} alt="" /> */}
                <div className='flex justify-between px-6 '>
                  <div className='flex space-x-3'>
                    <p>1h</p>
                    <p>Like</p>
                    <p>Reply</p>
                  </div>
                  <div>
                    <img className='-mt-4 ' src={statusicon} alt="" />
                  </div>
                </div>

              </div>
                  <img src={doticon} alt="" />
            </div>
          </div>
        </div>
      )}
      {/* <div className='flex justify-between px-16 '>
        <div className='flex space-x-3'>
          <p>1h</p>
          <p>Like</p>
          <p>Reply</p>
        </div>
        <div>
          <img className='-mt-4 ' src={statusicon} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default PostCard;