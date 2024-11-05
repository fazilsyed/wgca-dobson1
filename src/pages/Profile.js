import React from 'react';
import './Profile.css';

function Profile() {
  const profileData = {
    name: 'Isabel Prado',
    location: 'Phoenix, Arizona',
    avatar: '/isabel-round-avatar.png',
    stats: {
      avgScore: 82,
      handicap: 12,
      roundsPlayed: 24
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-header">
          <div className="avatar-container">
            <img 
              src={profileData.avatar} 
              alt="Profile" 
              className="profile-avatar"
            />
          </div>
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-location">{profileData.location}</p>
        </div>

        <div className="stats-section">
          <h2>Golf Stats</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">{profileData.stats.avgScore}</span>
              <span className="stat-label">Avg. Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{profileData.stats.handicap}</span>
              <span className="stat-label">Handicap</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{profileData.stats.roundsPlayed}</span>
              <span className="stat-label">Rounds Played</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <div className="action-row">
            <button className="action-button">Reservations</button>
            <button className="action-button">Orders</button>
          </div>
          <div className="action-row">
            <button className="action-button">Promotions</button>
            <button className="action-button outline">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 