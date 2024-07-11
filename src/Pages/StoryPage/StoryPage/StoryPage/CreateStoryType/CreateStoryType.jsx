import React, { useRef, useState } from 'react';
import crstory from '../../../../../assets/storyimg/Frame 1000003665.png'
import textimg from '../../../../../assets/storyimg/Frame 1000003668.png'
import photoimg from '../../../../../assets/storyimg/Frame 1000003668 (1).png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_IMAGEBB_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const CreateStoryType = () => {
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState();
 


  console.log("oo", image);

  const handleImage = async (e) => {

    e.preventDefault()

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Send data to backend using Axios
      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(response.data.success){
        const imageItem={
          image:response.data.data.display_url
        }
        const storyimg=await axios.post('http://localhost:5000/storyimg',imageItem)
        console.log(storyimg.data);
        setUploaded(true);
        if(storyimg.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }

      // Handle response if needed
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error if needed
      console.error('Error:', error);
    }


  }


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
                  <div className=''>
                    <form onSubmit={handleImage}>
                    
                      <label >
                        <img src={textimg} alt="" />
                        <input type="file" className='hidden' onChange={(e) => setImage(e.target.files[0])} />
                       
                      </label>
                      
                      {image?
                        <button type="submit" className="mt-3 bg-[#307777] w-full p-3 rounded">Upload Image</button>
                        :""
                      }
                      
                      
                    </form>

                  </div>
                  <div>
                    <Link to='text-story'>
                      <img className='' src={photoimg} alt="" />
                    </Link>
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