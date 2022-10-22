import {getStoredCard} from '../utilities/fakedb'
export const productAndCartLoader = async() =>{
        // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get cart
    const savedCart = getStoredCard();
    const initialCart = [];

    for (const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}

/* import { getStoredCard } from "../utilities/fakedb";

export const productAndCartLoader = async() =>{
    // Get Products
    const productData = await fetch("products.json");
    const products = await productData.json();
    console.log(products);

    // get cart
    const savedCart = getStoredCard();
    console.log(savedCart);
    const previousCart = [];
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    return {products, previousCart};
}  */