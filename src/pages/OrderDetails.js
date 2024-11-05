import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {
  const navigate = useNavigate();
  const [tip, setTip] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [wearing, setWearing] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  // Fixed values
  const subtotal = 16.99;
  const taxRate = 0.086;
  const deliveryFee = 2.00;
  
  // Calculate tax
  const salesTax = subtotal * taxRate;
  
  // Handle tip change
  const handleTipChange = (e) => {
    // Remove any non-numeric characters except decimal point
    const value = e.target.value.replace(/[^\d.]/g, '');
    
    // Ensure only one decimal point
    const parts = value.split('.');
    if (parts.length > 2) return;
    
    // Limit to two decimal places
    if (parts[1] && parts[1].length > 2) return;
    
    setTip(value);
  };

  // Handle share location
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation(`Lat: ${latitude}, Long: ${longitude}`);
      }, (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enter it manually.');
      });
    } else {
      alert('Geolocation is not supported by your browser. Please enter your location manually.');
    }
  };

  // Calculate total
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
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <div className="order-details-page">
      <h1>Food and Drink Order</h1>
      <p className="subtitle">
        Give us the details of where to find you, and we'll make sure you get your order asap.
      </p>

      <div className="order-section">
        <div className="section-label">Your Order:</div>
        <div className="order-items">
          <div className="order-item">
            <span>Clubhouse Sandwich</span>
            <span>$12.99</span>
          </div>
          <div className="order-item">
            <span>Iced Tea</span>
            <span>$2.50</span>
          </div>
          <div className="order-item">
            <span>Bottled Water</span>
            <span>$1.50</span>
          </div>
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
          <input
            type="text"
            placeholder="e.g., Hole 7, near the bunker"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            className={errors.location ? 'error' : ''}
          />
          <button onClick={handleShareLocation} className="share-location-btn">
            <span className="location-icon">📍</span>
            <span>Share my location</span>
          </button>
        </div>

        <div className="section-label">What You're Wearing:</div>
        <div className="input-wrapper">
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
          {errors.wearing && <div className="error-message">{errors.wearing}</div>}
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

export default OrderDetails; 