import React from 'react';
import AvailableCart from './AvailableCart';
import EmtyCart from '../emtyCart/EmtyCart';
import { toast } from 'react-toastify';

const Cart = ({addCart, setAddCart}) => {
    // console.log(addCart)
    const totalPrice = addCart.reduce((sum, item)=> sum + item.price, 0)
    console.log(totalPrice)
    const hendelClear = ()=>{
        setAddCart([])
        
        if(addCart.length === 0){
             toast.error('cart is empty')
        }else{
             toast.success('Proceeding to checkout...')
        }
      
    }
    return (
        <div>
            <h1 className='mb-4 font-bold text-2xl'>Your Cart</h1>

           {addCart.length !=0 ? <AvailableCart addCart={addCart} setAddCart={setAddCart}></AvailableCart> : <EmtyCart></EmtyCart>
            }

          
            <div className='flex justify-between'>
                <p>Total:</p>
                <p className='font-bold text-2xl'>${totalPrice}</p>
            </div>
            
            
          <button className='btn w-full mt-4  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' onClick={hendelClear}>Proceed to Checkout</button>
         
        
        </div>

    );
};

export default Cart;