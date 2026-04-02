import React from 'react';

const PricingCard = () => {
    return (
        <div>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-extrabold mb-4'>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card bg-base-100 shadow-sm ">
            <div className="card-body">
        
            <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Starter</h2>
            <p>Perfect for getting started</p>
            <span className="text-xl"><span className='font-bold text-2xl'>$0</span>/<span>month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Perfect for getting started</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Customizable style templates</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Batch processing capabilities</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Community support</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>1 project per month</span>
            </li>
           
            
            </ul>
            <div className="mt-6">
            <button className="btn btn-primary btn-block">Get Started Free</button>
            </div>
        </div>
         </div> 
            <div className="card bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm relative">
            <div className="card-body">
            <span className="badge badge-xs badge-warning absolute -top-2 left-[40%]">Most Popular</span>
            <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Pro</h2>
            <p>Best for professionals</p>
            <span className="text-xl"><span className='font-bold text-2xl'>$29</span>/<span>month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to all premium toolsn</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited templates</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Priority support</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited projects</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Cloud sync</span>
            </li>
            
            </ul>
            <div className="mt-6">
            <button className="btn btn-block">Start Pro Trial</button>
            </div>
        </div>
         </div> 
            <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
            
            <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Enterprise</h2>
            <p>For teams and businesses</p>
            <span className="text-xl"><span className='font-bold text-2xl'>$99</span>/<span>month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Everything in Pro</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Team collaboration</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom integrations</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Dedicated support</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom branding</span>
            </li>
            
            </ul>
            <div className="mt-6">
            <button className="btn btn-primary btn-block">Contact Sales</button>
            </div>
        </div>
         </div> 
        </div>
        </div>
       
    );
};

export default PricingCard;