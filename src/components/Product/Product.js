import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <br/>
                <p>Price: ${price}</p>
                <br/>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                className="cart-btn"
                onClick = {props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;