import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProShopOrderDetails.css';

function ProShopOrderDetails() {
  const navigate = useNavigate();
  const [tip, setTip] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [wearing, setWearing] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  // Mock cart data (replace this with your actual cart data)
  const orderItems = [
    { name: "Titleist Pro V1 Golf Balls (Dozen)", price: 49.99 },
    { name: "Wooden Tees (Pack of 50)", price: 5.99 },
    { name: "Dobson Ranch Logo Golf Glove", price: 19.99 }
  ];

  // Calculate subtotal
  const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
  const taxRate = 0.086;
  const salesTax = subtotal * taxRate;
  const deliveryFee = 2.00;

  const handleTipChange = (e) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 2) return;
    setTip(value);
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation(`Lat: ${latitude}, Long: ${longitude}`);
        if (errors.location) {
          setErrors(prev => ({ ...prev, location: '' }));
        }
      }, (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enter it manually.');
      });
    } else {
      alert('Geolocation is not supported by your browser. Please enter your location manually.');
    }
  };

  const calculateTotal = () => {
    const tipAmount = parseFloat(tip) || 0;
    return (subtotal + salesTax + deliveryFee + tipAmount).toFixed(2);
  };

  const validateFields = () => {
    const newErrors = {};
    
    if (!userLocation.trim()) {
      newErrors.location = 'Please enter your location';
    }
    
    if (!wearing.trim()) {
      newErrors.wearing = 'Please tell us what you\'re wearing';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateFields()) {
      navigate('/order-confirmation');
    }
  };

  return (
    <div className="order-details-page">
      <h1>Pro Shop Order</h1>
      <p className="subtitle">
        Give us your location below, and we'll bring your order asap.
      </p>

      <div className="order-section">
        <div className="section-label">Your Order:</div>
        <div className="order-items">
          {orderItems.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}

          <div className="order-item subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="order-item">
            <span>Sales Tax (8.6%)</span>
            <span>${salesTax.toFixed(2)}</span>
          </div>

          <div className="order-item">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>

          <div className="order-item tip">
            <span>Tip:</span>
            <div className="tip-input-container">
              <input
                type="text"
                placeholder="Enter tip amount"
                value={tip}
                onChange={handleTipChange}
                className="tip-input"
              />
            </div>
          </div>

          <div className="order-item total">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>

        <div className="section-label">Your Location:</div>
        <div className="location-input-group">
          <div className="input-wrapper">
            {errors.location && <div className="error-message">{errors.location}</div>}
            <input
              type="text"
              placeholder="e.g., Hole 7, near the bunker"
              value={userLocation}
              onChange={(e) => {
                setUserLocation(e.target.value);
                if (errors.location) {
                  setErrors(prev => ({ ...prev, location: '' }));
                }
              }}
              className={errors.location ? 'error' : ''}
            />
          </div>
          <button onClick={handleShareLocation} className="share-location-btn">
            <span className="location-icon">📍</span>
            <span>Share my location</span>
          </button>
        </div>

        <div className="section-label">What You're Wearing:</div>
        <div className="input-wrapper">
          {errors.wearing && <div className="error-message">{errors.wearing}</div>}
          <input
            type="text"
            placeholder="e.g., Red shirt, khaki shorts"
            value={wearing}
            onChange={(e) => {
              setWearing(e.target.value);
              if (errors.wearing) {
                setErrors(prev => ({ ...prev, wearing: '' }));
              }
            }}
            className={errors.wearing ? 'error' : ''}
          />
        </div>

        <div className="section-label">Additional Instructions:</div>
        <textarea
          placeholder="Any special instructions for delivery..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <div className="payment-method">
          <span>Payment Method: Visa ending in 1234</span>
          <button className="edit-link">Edit</button>
        </div>

        <button 
          className="place-order-btn" 
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default ProShopOrderDetails;