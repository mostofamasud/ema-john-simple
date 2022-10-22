import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrderSummary from '../OrderSummary/OrderSummary';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const {products, initialCart} = useLoaderData(); //{ products: products, initialCart: initialCart }
    const [cart , setCart] = useState(initialCart);
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    };
    const handleRemoveCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    };
   
    console.log(initialCart);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product =><ReviewItems  key={product.id} product = {product} handleRemoveCart = {handleRemoveCart}  clearCart = {clearCart}></ReviewItems>)
                }
            </div>
            <div className="cart">
                <OrderSummary clearCart = {clearCart} cart ={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Orders;