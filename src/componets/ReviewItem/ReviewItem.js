import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name,quantity,key,price}= props.product
    return (
        <div className="review-product">
            <h3>{name}</h3>
            <p>Quantity:{quantity}</p>
            <p><small>Price: ${price}</small></p>
            <br/>
            <button className="product-button" 
            onClick={() => props.removeHandler(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;