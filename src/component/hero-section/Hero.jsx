import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='w-300 mx-auto flex justify-between items-center my-16'>

            <div className='content space-y-4'>
                <div className="badge badge-soft badge-primary  font-medium"><FaRegDotCircle /> New: AI-Powered Tools Available</div>

                <h2 className=' font-extrabold text-[72px]'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-[#627382]'>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>
                <div className='flex gap-6'>
                 <button className="btn btn-active btn-primary rounded-full">Explore Products</button>
                    <button className='btn rounded-full text-primary border-primary'><CiPlay1 /> Watch Demo</button>
                </div>
                </div>
                

            <div className='logo'>
                <img src="/public/image/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;