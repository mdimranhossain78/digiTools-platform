
import React from 'react';
import { BsCart2 } from 'react-icons/bs';


const Navber = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
    <div className="flex justify-between p-2  w-300 mx-auto">
 
   <div className="navbar-start">
    <img src="/public/image/DigiTools.png" alt="" />
  </div>
  <div className="navbar-center">
   <ul className='flex gap-6'>
    <li><a href="">Products</a></li>
    <li><a href="">Features</a></li>
    <li><a href="">Pricing</a></li>
    <li><a href="">Testimonials</a></li>
    <li><a href="">FAQ</a></li>
   </ul>
  </div>
  <div className="navbar-end flex gap-6">
      <div className="indicator">
        <BsCart2 />
        <span className="badge badge-xs bg-red-400 indicator-item text-[6px] text-white p-1">0</span>
      </div>
      <div className='flex gap-5'>
        <button className='btn'>login</button>
        <button className='btn'>Get Started</button>
      </div>
    
  </div>
 </div>
        </div>
    );
};

export default Navber;