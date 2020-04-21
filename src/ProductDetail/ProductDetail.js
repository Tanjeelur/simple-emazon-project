import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../src/fakeData';
import Products from '../componets/Products/Products';

const ProductDetail = () => {
    const {productkey}=useParams();
    const product = fakeData.find(pd =>pd.key ===productkey);
    return (
        <div>
            <h1>Your product details...</h1>
            <Products showButton={false} product={product}></Products>
        </div>
    );
};

export default ProductDetail;