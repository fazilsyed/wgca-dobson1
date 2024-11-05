import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();
  
  const handleSignIn = (e) => {
    e.preventDefault();
    // Call the onLogin prop to update authentication state
    onLogin();
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to Dobson Ranch</h1>
        
        <div className="logo-container">
          <img 
            src="/Dobson-Ranch-Logo-blue.png" 
            alt="Dobson Ranch Logo" 
            className="logo"
          />
        </div>

        <p className="login-description">
          Sign In or Sign Up to make reservations, place orders, and try our virtual caddy!
        </p>

        <div className="auth-buttons">
          <button className="auth-btn sign-in-btn">Sign In</button>
          <button className="auth-btn sign-up-btn">Sign Up</button>
        </div>

        <form onSubmit={handleSignIn} className="login-form">
          <input
            type="email"
            value="isabel@whispering.ai"
            readOnly
            className="login-input"
          />
          <input
            type="password"
            value="•••••••"
            readOnly
            className="login-input"
          />
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login; 