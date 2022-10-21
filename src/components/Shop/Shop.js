import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Shop.css'
import { addToDb, getStoredCard } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedProduct) =>{
        let newCart =[];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);

    }
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCard = getStoredCard();
        const savedCard = [];
        // console.log(storedCard);
        for(const id in storedCard){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct);
                // console.log(addedProduct);
            }
        }
        setCart(savedCard);
    },[products])
    
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
                <OrderSummary cart = {cart}></OrderSummary>
            </div>
            
        </div>
    );
};

export default Shop;