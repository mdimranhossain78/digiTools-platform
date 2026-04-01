import React from 'react';
import ProductCard from '../ui/ProductCard';

const Product = ({allData, addCart, setAddCart, price, setPrice}) => {
    // console.log(allData)
    return (
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            allData.map(products =><ProductCard  setAddCart={setAddCart} addCart={addCart} key={products.id} product ={products} setPrice={setPrice} price={price}></ProductCard> )
          }
          
        </div>
    );
};

export default Product;