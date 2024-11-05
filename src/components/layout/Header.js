import React from 'react';
import './Header.css';

function Header({ toggleSidebar, menuButtonRef }) {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src="/dobson-logo.png" 
          alt="Dobson Ranch Logo" 
          className="header-logo"
        />
        <h1>Dobson Ranch Golf Course</h1>
        <button 
          ref={menuButtonRef}
          className="menu-button" 
          onClick={toggleSidebar}
        >
          <span className="menu-icon">☰</span>
        </button>
      </div>
    </header>
  );
}

export default Header;