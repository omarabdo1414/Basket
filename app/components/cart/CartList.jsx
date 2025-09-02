import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items, onRemove }) => {
    return (
        <div className="cart-list">
            {items.map(item => (
                <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default CartList;