import React, { useState, useEffect } from 'react';
import fakeData from '../../../src/fakeData'
import './Shop.css'
import Products from '../../Products/Products';
import Cart from '../../cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../../src/utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
     const first10=fakeData.slice(0,10); 
     const [products,setproducts]=useState(first10);
     const [cart,setCart]= useState([]);
     useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const productCart = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
        });
       setCart(productCart);
    },[]);
     

     const productHandler = (product)=>{
         const AddedKey = product.key;
         const sameProduct = cart.find(pd=>pd.key === AddedKey);
         let count =1;
         let newCart;
         if(sameProduct){
             const count = sameProduct.quantity + 1;
             sameProduct.quantity = count;
             const others = cart.filter(pd => pd.key !== AddedKey);
             newCart=[...others,sameProduct]
         }
         else{
             product.quantity=1;
             newCart =[...cart,product];
         }
         setCart(newCart);
         addToDatabaseCart(product.key,count);
     }
    return (
        <div className="Shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Products
                        key={pd.key}
                         showButton={true} 
                         productHandler={productHandler}
                          product={pd}>
                                           </Products> )
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review"><button className="product-button">Review order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;