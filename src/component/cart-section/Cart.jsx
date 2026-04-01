import React from 'react';
import AvailableCart from './AvailableCart';

const Cart = ({addCart}) => {
    console.log(addCart)
    return (
        <div>
            <h1>Your Cart</h1>
            <AvailableCart ></AvailableCart>
        </div>
    );
};

export default Cart;