import React from 'react';
import img from '../../assets/homeimg/Ellipse 2 (1).png'
import { NavLink } from 'react-router-dom';

const MenuItem = ({ img, heading,address }) => {
  return (
    <NavLink to={address}>
      <div className='flex space-x-5 mt-5'>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h2>{heading}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default MenuItem;