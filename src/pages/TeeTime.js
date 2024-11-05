import React, { useState } from 'react';
import './TeeTime.css';

function TeeTime() {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const todaySlots = [
    { time: '2:00 PM' },
    { time: '3:30 PM' },
    { time: '5:00 PM' },
  ];

  const tomorrowSlots = [
    { time: '8:00 AM' },
    { time: '10:30 AM' },
    { time: '1:00 PM' },
    { time: '3:30 PM' },
  ];

  const wednesdaySlots = [
    { time: '7:30 AM' },
    { time: '9:00 AM' },
    { time: '11:30 AM' },
    { time: '2:00 PM' },
    { time: '4:30 PM' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
  };

  const handleShowMoreDays = () => {
    // Handle showing more days
    console.log('Show more days clicked');
  };

  return (
    <div className="tee-time-page">
      <h1>Tee Times</h1>
      <p className="subtitle">Find and book your tee times</p>

      <section className="search-section">
        <h2>Search for a Tee Time</h2>
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="form-group">
              <label>Start Time</label>
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="--:-- --"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="form-group">
              <label>End Time</label>
              <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="--:-- --"
              />
            </div>
          </div>
          <button type="submit" className="search-button">
            Search Availability
          </button>
        </form>
      </section>

      <section className="available-times-section">
        <h2>Upcoming Available Tee Times</h2>
        
        <div className="day-group">
          <h3>Today (Monday)</h3>
          <div className="time-slots">
            {todaySlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <div className="day-group">
          <h3>Tomorrow (Tuesday)</h3>
          <div className="time-slots">
            {tomorrowSlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <div className="day-group">
          <h3>Wednesday</h3>
          <div className="time-slots">
            {wednesdaySlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="show-more-days"
          onClick={handleShowMoreDays}
        >
          Show More Days
        </button>
      </section>
    </div>
  );
}

export default TeeTime; 