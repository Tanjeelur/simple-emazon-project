import React, { useState } from 'react';
import fakeData from '../../../src/fakeData'
import './Shop.css'
import Products from '../../Products/Products';
import Cart from '../../cart/Cart';
const Shop = () => {
     const first10=fakeData.slice(0,10); 
     const [products,setproducts]=useState(first10);
     const [cart,setCart]= useState([]);
     

     const productHandler = (product)=>{
         console.log('product added',product);
         const newCart = [...cart,product]
         setCart(newCart);
     }
    return (
        <div className="Shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Products  productHandler={productHandler} product={pd}>
                                           </Products> )
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;