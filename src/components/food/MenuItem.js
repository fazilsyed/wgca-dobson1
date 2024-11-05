import React from 'react';
import './MenuItem.css';

function MenuItem({ item, onAddToCart, defaultQuantity = 0 }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <div className="item-price">${item.price.toFixed(2)}</div>
      <select 
        className="quantity-select"
        onChange={(e) => onAddToCart(parseInt(e.target.value))}
        value={defaultQuantity}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
}

export default MenuItem; 