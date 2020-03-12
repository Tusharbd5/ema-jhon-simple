import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Item Ordered: {cart.length}</p>
        </div>
    );
};

export default Cart;