import React, { useState } from 'react';
import crstory from '../../../assets/storyimg/Frame 1000003665.png'

const TextStory = () => {
  const [bgColor, setBgColor] = useState('bg-white');

  const colorMapping = {
    red: 'bg-red-300',
    green: 'bg-green-300',
    blue: 'bg-blue-300',
    yellow: 'bg-yellow-300',
    // Add more colors as needed
  };
  const handleColorChange = (color) => {
    setBgColor(colorMapping[color]);
  };
  return (
    <div className='grid grid-cols-12  gap-3' style={{ minHeight: 'calc(100vh - 150px)' }}>
      <div className='col-span-3 bg-white shadow-xl '>
        <div className='flex flex-col justify-between h-full pb-4 '>
          <div>
            <img className='mt-5' src={crstory} alt="" />
            <textarea className="textarea textarea-bordered w-full mt-4 " placeholder="start Typing"></textarea>
            <h2 className='text-2xl'>Background Color</h2>
            <div className="flex space-x-2 mt-5">

              {Object.keys(colorMapping).map((color) => (
                <button
                  key={color}
                  className={`p-2 w-10 h-10 rounded-full ${colorMapping[color]}`}
                  onClick={() => handleColorChange(color)}
                >
                  

                </button>
              ))}
            </div>
          </div>
          <div className='px-1 text-white'>
            <button className="bg-[#307777] w-full p-3 rounded ">Create Story</button>
          </div>


        </div>
      </div>
      <div className='col-span-9 bg-[#FFFFFF] px-7'>
        <h2 className='text-3xl pb-3 font-medium'>Preview</h2>
        <div>
          <div className="hero bg-base-200 " style={{ minHeight: 'calc(100vh - 150px)' }}>
            <div className="hero-content text-center">
              <div className="max-w-md">


                <input type="text" placeholder="Type here" className={`input w-[400px] h-[500px] max-w-xs ${bgColor}`} style={{ fontSize: '30px'  }}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextStory;