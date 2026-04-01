import React from 'react';
import AvailableCart from './AvailableCart';
import EmtyCart from '../emtyCart/EmtyCart';

const Cart = ({addCart, setAddCart, price, setPrice}) => {
    // console.log(addCart)
    const hendelClear = ()=>{
        setAddCart([])
        setPrice(0)
    }
    return (
        <div>
            <h1 className='mb-4 font-bold text-2xl'>Your Cart</h1>

           {addCart.length !=0 ? <AvailableCart addCart={addCart} setAddCart={setAddCart}  price ={price} setPrice={setPrice}></AvailableCart> : <EmtyCart></EmtyCart>
            }

          
            <div className='flex justify-between'>
                <p>Total:</p>
                <p className='font-bold text-2xl'>${price}</p>
            </div>
            
            
          <button className='btn w-full mt-4  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' onClick={hendelClear}>Proceed to Checkout</button>
         
        
        </div>

    );
};

export default Cart;