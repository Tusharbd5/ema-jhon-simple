import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faFirstAid} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    const total = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if(total > 1000){
        shipping = 0;
    }
    else if(total > 50){
        shipping = 2.33;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total/10;
    const grandTotal = total + tax + shipping;

    const formatNumber = num =>{
        const result = num.toFixed(2);
        return Number(result);
    }
    return (
        <div className="cart-info">
            <h3>Order Summery</h3>
            <p style={{marginLeft:'42px'}}>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Charge: {shipping}</small></p>
            <p><small>TAX + VAT = 10%: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>


            <button className = "order-history-btn"> <FontAwesomeIcon icon={faFirstAid}/> Order History</button>
        </div>
    );
};

export default Cart;