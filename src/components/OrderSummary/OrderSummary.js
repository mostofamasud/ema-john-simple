import React from 'react';
import './OrderSummary.css'

const OrderSummary = (props) => {
    console.log(props);
    return (
        <div>
            <h1 className='order-summary'>Order Summary</h1>
            <div className='order-details'>
            <p>Selected Items: <span id='selected-items'>0</span></p>
           
            </div>
            
        </div>
    );
};

export default OrderSummary;