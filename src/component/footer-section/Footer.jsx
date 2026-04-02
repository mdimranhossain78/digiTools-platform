import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] w-full pt-25 pb-8'>
            <div>
                 <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-300 mx-auto'>
                <div className='text-white col-span-2 space-y-4'>
                    <img src="/image/rooterImag.png" alt="" />
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <ul className='text-white space-y-4'>
                    <li className='font-medium text-[20px]'>Product</li>
                    <li className='text-gray-200'>Features</li>
                    <li className='text-gray-200'>Pricing</li>
                    <li className='text-gray-200'>Templates</li>
                    <li className='text-gray-200'>Integrations</li>
                </ul>
                <ul className='text-white space-y-4'>
                    <li className='font-medium text-[20px]'>Company</li>
                    <li className='text-gray-200'>About</li>
                    <li className='text-gray-200'>Blog</li>
                    <li className='text-gray-200'>Careers</li>
                    <li className='text-gray-200'>Press</li>
                </ul>
                <ul className='text-white space-y-4'>
                    <li className='font-medium text-[20px]'>Resources</li>
                    <li className='text-gray-200'>Documentation</li>
                    <li className='text-gray-200'>Help Center</li>
                    <li className='text-gray-200'>Community</li>
                    <li className='text-gray-200'>Contact</li>
                </ul>
                
                <div className=''>
                    <p className='font-medium text-[20px] text-white mb-4'>Social Links</p>
                    <div className='flex gap-4'>
                        <img src="/image/Instagram.png" alt="" />
                        <img src="/image/Twitter.png" alt="" />
                        <img src="/image/Facebook.png" alt="" />
                    </div>
                </div>
               
               
            </div>
             
            </div>

           

           <div className=  'flex flex-col gap-5 sm:flex-row justify-between items-center max-w-300 mx-auto mt-8'>
            <p className='text-gray-300'>© 2026 Digitools. All rights reserved.</p>
            <ul className='flex gap-4'>
                <li className='text-gray-300'>Privacy Policy</li>
                <li className='text-gray-300'>  Terms of Service  </li>
                <li className='text-gray-300'> Cookies</li>
                
            </ul>
           </div>
        </div>
    );
};

export default Footer;