import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegDotCircle } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse gap-6 lg:flex-row justify-between items-center max-w-300 mx-auto my-16'>

            <div className='content space-y-4'>
                <div className="badge badge-soft badge-primary  font-medium"><FaRegDotCircle /> New: AI-Powered Tools Available</div>

                <h2 className='text-[40px] md:text-[60px] lg:text-[72px] font-extrabold '>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-[#627382]'>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>
                <div className='flex justify-center lg: gap-6'>
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