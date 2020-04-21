import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price*prd.quantity,0);
    
    const tax = total/10
    let shipping = 0;
    if(total > 500){
        shipping = 0;
    }
    else if(total > 200){
         shipping = 10  
    }
    else if(total > 50){
        shipping = 15
    }
    else if(total > 0){
        shipping = 20
    }
    const formatNumber = num =>{
        const precise = num.toFixed(2)
        return Number(precise);
    }
    const grandTotal=total+shipping+Number(tax)
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered : {cart.length}</p>
            <p><small>Shipping coast :{shipping}</small></p>
            <p><small>Tax :{formatNumber(tax)}</small></p>
            <p>Total price :${formatNumber(grandTotal)} </p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;