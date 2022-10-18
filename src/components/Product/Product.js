import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    // console.log(getTheValue)
    const {img, name, price, quantity, ratings, seller,stock} = product;

    return (
        <div className='product-card'>
            <img src={img} alt="" />
            
            <div className='product-card-details'>
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <hr />
            <p>Manufacture: {seller}</p>
            <p>Quantity: {quantity}</p>
            <p><small>Ratings: {ratings} Stars 
            </small></p>
            <p><small>Stock: {stock}</small></p>
            </div>
            <p><button onClick={() => handleAddToCart(product)} className='add-to-cart-button'>Add to Cart</button></p>
        </div>
    );
};

export default Product;