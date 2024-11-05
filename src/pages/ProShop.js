import React, { useState } from 'react';
import './ProShop.css';
import { useNavigate } from 'react-router-dom';

function ProShop() {
  const [cart, setCart] = useState({});
  const [deliveryOption, setDeliveryOption] = useState('course');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Golf Glove",
      description: "Premium leather glove for enhanced grip",
      price: 19.99,
      inStock: 50,
      image: "/proshop/pro-golf-glove.png"
    },
    {
      id: 2,
      name: "Golf Balls",
      description: "High-performance balls for distance and control",
      price: 12.99,
      inStock: 100,
      image: "/proshop/pro-golf-balls.png"
    },
    {
      id: 3,
      name: "Club Head Cover",
      description: "Set of 3 protective covers for woods",
      price: 29.99,
      inStock: 30,
      image: "/proshop/pro-club-head-cover.png"
    },
    {
      id: 4,
      name: "Golf Tees",
      description: "Durable plastic tees in assorted colors",
      price: 5.99,
      inStock: 200,
      image: "/proshop/pro-golf-tees.png"
    },
    {
      id: 5,
      name: "Ball Markers",
      description: "Set of 5 magnetic ball markers",
      price: 9.99,
      inStock: 75,
      image: "/proshop/pro-ball-markers.png"
    },
    {
      id: 6,
      name: "Golf Towel",
      description: "Microfiber towel with clip attachment",
      price: 14.99,
      inStock: 60,
      image: "/proshop/pro-golf-towel.png"
    },
    {
      id: 7,
      name: "Divot Tool",
      description: "Stainless steel tool for repairing greens",
      price: 7.99,
      inStock: 80,
      image: "/proshop/pro-divot-tool.png"
    },
    {
      id: 8,
      name: "Golf Cap",
      description: "Adjustable cap with moisture-wicking band",
      price: 24.99,
      inStock: 40,
      image: "/proshop/pro-golf-cap.png"
    },
    {
      id: 9,
      name: "Golf Socks",
      description: "Cushioned ankle socks for comfort",
      price: 11.99,
      inStock: 90,
      image: "/proshop/pro-golf-socks.png"
    },
    {
      id: 10,
      name: "Sunscreen",
      description: "SPF 50 sunscreen for face and neck",
      price: 8.99,
      inStock: 70,
      image: "/proshop/pro-sunscreen.png"
    }
  ];

  const handleQuantityChange = (productId, quantity) => {
    setCart(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleDeliveryOptionClick = (option) => {
    setDeliveryOption(option);
    if (option === 'course') {
      navigate('/shop/order-details');
    }
  };

  return (
    <div className="pro-shop-page">
      <h1>Dobson Ranch Pro Shop</h1>
      <p className="subtitle">Get what you need while you're on the course</p>

      <h2 className="section-title">Golf Essentials</h2>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" 
            />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <div className="stock-info">In stock: {product.inStock}</div>
            <select
              className="quantity-select"
              value={cart[product.id] || 0}
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
            >
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="delivery-options">
        <button 
          className={`delivery-button ${deliveryOption === 'course' ? 'active' : ''}`}
          onClick={() => handleDeliveryOptionClick('course')}
        >
          Course Delivery
        </button>
        <button 
          className={`delivery-button ${deliveryOption === 'pickup' ? 'active' : ''}`}
          onClick={() => handleDeliveryOptionClick('pickup')}
        >
          Pickup at Pro Shop
        </button>
      </div>
    </div>
  );
}

export default ProShop;