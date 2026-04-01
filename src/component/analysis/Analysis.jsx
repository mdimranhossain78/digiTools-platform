import React from 'react';

const Analysis = () => {
    return (
        <div className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mb-30 p-4' >
            <div className='w-300 mx-auto flex justify-between'>
            <div className='text-center'>
                <h2 className=' font-extrabold text-[60px] text-white'>50K+</h2>
                <p className='text-[24px] font-medium text-white'>Active Users</p>
            </div>
         
            <div className='text-center'>
                <h2 className=' font-extrabold text-[60px] text-white'>200+</h2>
                <p className='text-[24px] font-medium text-white'>Premium Tools</p>
            </div>
            <div className='text-center'>
                <h2 className=' font-extrabold text-[60px] text-white'>4.9</h2>
                <p className='text-[24px] font-medium text-white'>Rating</p>
            </div>
           
            </div>
        </div>
    );
};

export default Analysis;