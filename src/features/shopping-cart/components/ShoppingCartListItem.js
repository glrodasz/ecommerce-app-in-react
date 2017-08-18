import React from 'react';
import '../styles/ShoppingCartListItem.css';

const ShoppingCartListItem = ({ title, image, price, quantity}) => (
  <li className="shopping-cart-item">
    <figure className="shopping-cart-item__figure">
      <img className="shopping-cart-item__image" alt={title} src={image} />
    </figure>
    <strong className="shopping-cart-item__title">{title}</strong>
    <div className="shopping-cart-item__detail">
      <strong>Cantidad</strong>
      <p>{quantity}</p>
    </div>
    <span className="shopping-cart-item__detail">
      <strong>Precio</strong>
      <p>{price}</p>
    </span>
  </li>
);

export default ShoppingCartListItem;
