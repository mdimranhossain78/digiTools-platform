import React from 'react';

const ProductCard = ({product, setAddCart, addCart, price, setPrice}) => {
    // console.log(product)
    let tags = null;
    if(product.tag==="New"){
        tags = <div className="badge badge-soft badge-accent">New</div>
    }
    else if(product.tag ==="Best Seller"){
        tags = <div className="badge badge-soft badge-warning">Best Seller</div>
    }
    else{
      tags  =  <div className="badge badge-soft badge-primary">Popular</div>
    }

    const handleCardBtn = ()=>{
       setAddCart([...addCart, product])
       alert("Add to cart")
       const total = price + product.price
       
       setPrice(Number(total.toFixed(2)))
        // console.log(product.price)
    }
    
    return (
        <div>
             <div className="card bg-base-100 shadow-sm w-full">
                <div className="card-body">
                    <div className='flex justify-between'>

                        <img src="/public/image/operation.png" alt="" />
                       <div>
                         {tags}
                       </div>
                    </div>
                   
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                   
            
                     <p className="text-xl">${product.price}/{product.period}</p>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            product.features.map((features, i)=>{
                        return <li key={i} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>key{features}</span>
                    </li>
                    
                            })

                        }
                    
                    </ul>

                    <div className="mt-6">
                    <button className="btn btn-primary btn-block" onClick={handleCardBtn}>Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ProductCard;