import React from 'react';
import './ReviewItems.css';
// import { BeakerIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const ReviewItems = ({product, handleRemoveCart}) => {
    const {id, img, name, price, quantity, shipping} = product;
    console.log(product);
    return (
        <div className='review-container'>
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details-text-container">
                    <p>Name: {name}</p>
                    <p><span>Price: {price}</span></p>
                    <p><span>Quantity: {quantity}</span></p>
                    <p><span>Shipping: {shipping}</span></p>
                </div>
                <div className="review-button-container">
                   
                    <button className='button' onClick={()=>handleRemoveCart(id)}>
                    <svg className='delete-btn' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
                    </button>

                </div>
            </div>            
        </div>
    );
};

export default ReviewItems;