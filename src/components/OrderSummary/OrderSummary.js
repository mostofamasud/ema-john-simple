import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const {cart} = props;
    console.log(cart);
    let price = 0;
    let shipping = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping;
        // console.log(shipping);
    }
    let tax = (price * 0.1).toFixed(2);
    tax = parseFloat(tax)
    const total = price + shipping + tax + grandTotal;
    
    return (
        <div className='cart-part'>
            <h1 className='order-summary'>Order Summary</h1>
            <div className='order-details'>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: <strong>${price}</strong></p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Total Tax: ${tax}</p>
            <h3>Grand Total: ${total}</h3>
            </div>
            <p className='button'><button className='clear-cart'>Clear Cart</button></p>
            <p><button className='review-order'>Review Order</button></p>
        </div>
    );
};

export default OrderSummary;