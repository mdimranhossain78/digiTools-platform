import React, { use, useEffect, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart-section/Cart';
import Stapes from '../Steps-section/Stapes';
import PricingCard from '../pricing-section/PricingCard';

const MainSection = ({dataPromise, setCount}) => {

   const allData =use(dataPromise)
    const [tab, setTab]= useState('product')
    const [addCart, setAddCart] =useState([])
    const [price, setPrice] = useState(0)
    
    useEffect(()=>{
          setCount(addCart.length)

         
    })
  

    // console.log(allData)
    return (

        <div className='max-w-300 mx-auto my-30'>

            <div className='text-center mb-6'>
                <h1 className='font-extrabold text-[48px]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.</p>
            </div>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box w-62 justify-center mx-auto rounded-full gap-4">
  <input type="radio" name="my_tabs_1" className={`tab ${tab==="product" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white":"text-black" } rounded-full w-27 `} aria-label="Products" defaultChecked onClick={()=>setTab("product")} />

<input type="radio" name="my_tabs_1" className={`tab ${tab==="cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white":"text-black" } rounded-full w-27 `} aria-label={`Cart (${addCart.length})`} onClick={()=>setTab("cart") }  />
  
</div>
            
           {tab === "product"? <Product allData={allData} addCart = {addCart} setAddCart={setAddCart} price ={price} setPrice={setPrice}></Product> 
           
           :
            <Cart addCart={addCart} setAddCart={setAddCart}  price ={price} setPrice={setPrice} ></Cart>} 
 
         {tab === "product"&&<Stapes></Stapes>}
        {tab === "product"&&<PricingCard></PricingCard>}
         

        </div>
    );
};

export default MainSection;