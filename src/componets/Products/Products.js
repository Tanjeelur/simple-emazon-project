import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {name,img,seller,price,stock,key}=props.product;
    return (
        <div className='product'>
            <div>
              <img src={img} alt=""/>
            </div>
            <div>
            <h3 className='product-name'><Link to={"/product/"+key}>{name}</Link></h3>
            <br/>
            <p><small>By: {seller}</small></p>
            <p>Price: ${price}</p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            {
               props.showButton && <button className='product-button' onClick={()=>props.productHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            }
            </div>
        </div>
    );
};

export default Products;