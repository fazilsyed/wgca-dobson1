import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <div className="checkmark">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Taking you to home...</p>
      </div>
    </div>
  );
}

export default OrderConfirmation; 