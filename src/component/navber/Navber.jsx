
import React from 'react';
import { BsCart2 } from 'react-icons/bs';


const Navber = ({count}) => {
    return (
      
       
 <div className='bg-base-100 shadow-sm p-2 sticky top-0 z-10'>
        

          <div className="flex justify-between max-w-300 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <img className='max-w-22 md:max-w-40 lg:max-w-50' src="/image/DigiTools.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className=" gap-2 md:gap-4 navbar-end flex">
          <div className="indicator">
                        <BsCart2 />
                        <span className={`badge badge-xs bg-red-500 indicator-item text-white text-[10px] p-1 ${count===0?'hidden':''} `}>{count}</span>
                      </div>
            <button className='btn rounded-full'>login</button>
          <a className="btn btn-primary rounded-full">Get Started</a>
        </div>
      </div>

          

        </div>

    );
};

export default Navber;