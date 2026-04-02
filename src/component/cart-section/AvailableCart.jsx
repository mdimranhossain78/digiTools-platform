import React from 'react';
import { toast } from 'react-toastify';

const AvailableCart = ({addCart, setAddCart}) => {
    // console.log(addCart)
   
    const handelCartRemove =(carts)=>{
        console.log(carts)

        //   console.log(price)

        toast(`Remov to cart`)

        const fileteredCarts = addCart.filter((filterCart)=> filterCart.name  != carts.name)
        setAddCart(fileteredCarts)

       
    }
    
    return (

        <div>
            {
        addCart.map((carts) =>{
            return <div key={carts.id} className='bg-gray-300 p-4 mb-4'>
            <div className='flex justify-between items-center'>
               <div className='flex gap-4 items-center'>
                 <img className='h-7.5 w-7.5' src={carts.icon} alt="" />
                <div>
                    <h1>{carts.name}</h1>
                    <p>${carts.price}</p>
                </div>
               </div>
                <div>
                    <button onClick={()=>handelCartRemove(carts)} className='text-red-500 font-bold cursor-pointer'>Remove</button>
                </div>
            </div>
        </div>
        })
        }

       
        </div>

    );
};

export default AvailableCart;