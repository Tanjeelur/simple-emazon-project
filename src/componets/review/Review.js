import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart } from '../../src/utilities/databaseManager';
import fakeData from '../../src/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../cart/Cart';
import victory from '../../src/images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderplaced,setOrderplaced]=useState(false);
   
    const placeHandler = ()=>{
        setCart([]);
        setOrderplaced(true);
       clearLocalShoppingCart();

    }
    const removeHandler = (productkey)=>{
        const newCart= cart.filter(pd => pd.key !== productkey)
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }
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
    let thankyou;
    if(orderplaced){
       thankyou= <img src={victory} alt=""/>
    }
    return (
        <div className="Shop-container">
            <div className="product-container">
            <h1>Cart items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem 
                    key={pd.key} product={pd} 
                    removeHandler={removeHandler}
                     ></ReviewItem>)
            }
            {thankyou}
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={placeHandler} className="product-button">Place order</button>
               </Cart>
            </div>
        </div>
    );
};

export default Review;