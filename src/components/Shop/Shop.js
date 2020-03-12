import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(pd => <Product 
                    handleAddProduct = {handleAddProduct}
                    product ={pd}>
                    </Product>)
               } 
            </div>
            
        <div className="cart-container">
            <h3>This is Cart</h3>
            <p>Order Summery: {cart.length}</p>
        </div>
        </div>     
    );
};

export default Shop;