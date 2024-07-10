import React from 'react';
import crstory from '../../../../../assets/storyimg/Frame 1000003665.png'
import textimg from '../../../../../assets/storyimg/Frame 1000003668.png'
import photoimg from '../../../../../assets/storyimg/Frame 1000003668 (1).png'
import { Link } from 'react-router-dom';

const CreateStoryType = () => {
  return (
    <div className='grid grid-cols-12  gap-3' style={{ minHeight: 'calc(100vh - 150px)' }}>
      <div className='col-span-3 bg-white shadow-xl '>
        <div className='flex flex-col justify-between h-full pb-4 '>
          <div>
            <img className='mt-5' src={crstory} alt="" />
          </div>
          <div className='px-1 text-white'>
            <button className="bg-[#307777] w-full p-3 rounded ">Create Story</button>
          </div>
        </div>
      </div>
      <div className='col-span-9 bg-[#FFFFFF] px-7'>
        <h2 className='text-3xl pb-3 font-medium'>Select Story Type</h2>
        <div>
          <div className="hero bg-base-200 " style={{ minHeight: 'calc(100vh - 150px)' }}>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className='flex gap-2'>
                  <div>
                    <Link to='text-story'>
                    <img src={textimg} alt="" />
                    </Link>
                  </div>
                  <div>
                    <img src={photoimg} alt="" />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryType;