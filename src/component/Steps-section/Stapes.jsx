import React from 'react';

const Stapes = () => {
    return (
        <div className='max-w-300 mx-auto my-50'>
           <div className='text-center mb-6'>
             <h1 className='text-3xl font-extrabold mb-4'>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
           </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card p-4 bg-base-100 shadow-sm">
            <div className="card-body ">
                <div className='flex justify-end'>
                <div className='h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-[10.5px] px-[11px]'><p>01</p></div>
                    
                </div>
                
            </div>
            <div className='flex justify-center'>
                <div className='h-[99px] w-25 bg-[#9614fa33] rounded-full p-5 '>
                  <div><img className='' src="/public/image/user.png" alt="" /> </div> 
                </div>
               
            </div>
             <div className='text-center'>
                <h1 className='font-bold text-2xl mb-4'>Create Account</h1>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
             </div>
            </div>
                <div className="card p-4 bg-base-100 shadow-sm">
            <div className="card-body ">
                <div className='flex justify-end'>
                <div className='h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-[10.5px] px-[11px]'><p>02</p></div>
                    
                </div>
                
            </div>
            <div className='flex justify-center'>
                <div className='h-[99px] w-25 bg-[#9614fa33] rounded-full p-5 '>
                  <div><img className='' src="/public/image/package.png" alt="" /> </div> 
                </div>
               
            </div>
             <div className='text-center'>
                <h1 className='font-bold text-2xl mb-4'>Choose Products</h1>
                <p>Browse our catalog and select the tools <br />that fit your needs.</p>
             </div>
            </div>
                <div className="card p-4 bg-base-100 shadow-sm">
            <div className="card-body ">
                <div className='flex justify-end'>
                <div className='h-10 w-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-[10.5px] px-[11px]'><p>03</p></div>
                    
                </div>
                
            </div>
            <div className='flex justify-center'>
                <div className='h-[99px] w-25 bg-[#9614fa33] rounded-full p-5 '>
                  <div><img className='' src="/public/image/rocket.png" alt="" /> </div> 
                </div>
               
            </div>
             <div className='text-center'>
                <h1 className='font-bold text-2xl mb-4'>Create Account</h1>
                <p>Download and start using your premium <br /> tools immediately.</p>
             </div>
            </div>
            </div>
                



        </div>
    );
};

export default Stapes;