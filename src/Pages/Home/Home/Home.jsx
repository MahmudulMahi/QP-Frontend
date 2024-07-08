import React from 'react';
import userlogo from '../../../assets/homeimg/Ellipse 2 (1).png'
import menulogo1 from '../../../assets/homeimg/Map_duotone_line.png'
import menulogo2 from '../../../assets/homeimg/Group.png'
import menulogo3 from '../../../assets/homeimg/File_dock_duotone_line.png'
import menulogo4 from '../../../assets/homeimg/notebook_duotone_line.png'
import menulogo5 from '../../../assets/homeimg/Wallet_duotone_line.png'
import menulogo6 from '../../../assets/homeimg/Box.png'
import menulogo7 from '../../../assets/homeimg/Box_alt_light.png'
import menulogo8 from '../../../assets/homeimg/Box_open_light.png'
import MenuItem from '../../../components/Menuitem/MenuItem';
import CarouselSection from '../Carousel/CarouselSection';
import PageMightLike from '../PageMightLike/PageMightLike';
import PageMayKnow from '../PageMayKnow/PageMayKnow';
import Sponsared from '../../../components/Sponsared/Sponsared';
import FriendRequest from '../FriendRequest/FriendRequest';
import Contact from '../Contact/Contact';
import PostSomething from '../PostSomething/PostSomething';


const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-3'>

      <div className='col-span-2 '>
        {/* <h2>site link</h2> */}
        <div className='flex items-center gap-4'>
          <div>
            <img className='w-8 h-8' src={userlogo} alt="" />
          </div>
          <div>
            <p>James Rodigan</p>
          </div>
        </div>
        <MenuItem img={menulogo1} heading={"Explore"} address={'explore'} ></MenuItem>
        <MenuItem img={menulogo2} heading={"Friends"} address={'friends'}></MenuItem>
        <MenuItem img={menulogo2} heading={"Groups"} address={'groups'}></MenuItem>
        <MenuItem img={menulogo3} heading={"Pages"} address={'pages'}></MenuItem>
        <MenuItem img={menulogo4} heading={"Bookmarks"} address={'bookmarks'}></MenuItem>
        <MenuItem img={menulogo5} heading={"Wallet"} address={'wallet'}></MenuItem>
        <MenuItem img={menulogo6} heading={"Market Place"} address={'market-place'}></MenuItem>
        <MenuItem img={menulogo7} heading={"Seller Panel"} address={'seller-panel'}></MenuItem>
        <MenuItem img={menulogo8} heading={"Buyer Panel"} address={'buyer-panel'}></MenuItem>

      </div>
      <div className='col-span-2 '>
       
        <CarouselSection></CarouselSection>
        <PageMightLike></PageMightLike>
        <PageMayKnow></PageMayKnow>
        <Sponsared></Sponsared>
      </div>

      <div className='col-span-6 '>
<PostSomething></PostSomething>
      </div>
      <div className='col-span-2 '>
    
        <Sponsared></Sponsared>
        <FriendRequest></FriendRequest>
        <Contact></Contact>
      </div>



    </div>
  );
};

export default Home;