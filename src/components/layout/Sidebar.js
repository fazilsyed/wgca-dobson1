import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, sidebarRef, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav 
      ref={sidebarRef}
      className={`sidebar ${isOpen ? 'open' : ''}`}
    >
      <div className="sidebar-items">
        <Link to="/" onClick={toggleSidebar}><span className="icon">🏠</span> Home</Link>
        <Link to="/food" onClick={toggleSidebar}><span className="icon">🍽️</span> Order Menu</Link>
        <Link to="/tee-time" onClick={toggleSidebar}><span className="icon">⏰</span> Tee Times</Link>
        <Link to="/driving-range" onClick={toggleSidebar}><span className="icon">⛳</span> Driving Range</Link>
        <Link to="/lessons" onClick={toggleSidebar}><span className="icon">🎓</span> Lessons</Link>
        <Link to="/shop" onClick={toggleSidebar}><span className="icon">🏪</span> Pro Shop</Link>
        <Link to="/course-map" onClick={toggleSidebar}><span className="icon">🗺️</span> Course Map</Link>
        <Link to="/scorecard" onClick={toggleSidebar}><span className="icon">📋</span> Scorecard</Link>
        <Link to="/events" onClick={toggleSidebar}><span className="icon">📅</span> Events</Link>
        <Link to="/help" onClick={toggleSidebar}><span className="icon">❓</span> Help</Link>
        <Link to="/contact" onClick={toggleSidebar}><span className="icon">✉️</span> Contact</Link>
        <Link to="/profile" onClick={toggleSidebar} className="sidebar-item">
          <span className="sidebar-icon">👤</span>
          <span className="sidebar-text">My Profile</span>
        </Link>
        <div className="sidebar-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <span className="sidebar-icon">⬅️</span>
          <span className="sidebar-text">Logout</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
