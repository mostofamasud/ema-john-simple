import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);

    }
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    
    return (
        <div className='shop-container'>
            <div className="shop">
                <h1>Shop: {products.length}</h1>
                <div className="card">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
                </div>
                </div>
            <div className="cart">
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: 0</p>
                <p>Total Shipping Charge: 0</p>
                <h3>Grand Total: </h3>
                <p className='button'><button className='clear-cart'>Clear Cart</button></p>
                <p><button className='review-order'>Review Order</button></p>
            </div>
            
        </div>
    );
};

export default Shop;