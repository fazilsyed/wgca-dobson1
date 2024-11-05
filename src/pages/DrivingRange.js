import React, { useState } from 'react';
import './DrivingRange.css';

function DrivingRange() {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('1');

  const reservations = [
    {
      id: 1,
      date: 'Tuesday, May 2',
      time: '10:30 AM',
      duration: '2 hours'
    },
    {
      id: 2,
      date: 'Friday, May 5',
      time: '2:00 PM',
      duration: '1 hour'
    },
    {
      id: 3,
      date: 'Sunday, May 7',
      time: '8:00 AM',
      duration: '3 hours'
    }
  ];

  const handleManage = (id) => {
    console.log('Managing reservation:', id);
  };

  const todaySlots = [
    { start: '2:00 PM', end: '4:00 PM' },
    { start: '3:30 PM', end: '5:30 PM' },
    { start: '5:00 PM', end: '7:00 PM' },
  ];

  const tomorrowSlots = [
    { start: '8:00 AM', end: '10:00 AM' },
    { start: '10:30 AM', end: '12:30 PM' },
    { start: '1:00 PM', end: '3:00 PM' },
    { start: '3:30 PM', end: '5:30 PM' },
  ];

  const wednesdaySlots = [
    { start: '7:30 AM', end: '9:30 AM' },
    { start: '9:00 AM', end: '11:00 AM' },
    { start: '11:30 AM', end: '1:30 PM' },
    { start: '2:00 PM', end: '4:00 PM' },
    { start: '4:30 PM', end: '6:30 PM' },
  ];

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    console.log('Checking availability:', { date, startTime, duration });
  };

  const handleShowMoreDays = () => {
    console.log('Show more days clicked');
  };

  return (
    <div className="driving-range-page">
      <h1>Driving Range</h1>
      <p className="subtitle">Book some time on the range and get some practice in!</p>

      <section className="reservations-section">
        <h2>My Reservations</h2>
        <div className="reservations-list">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="reservation-item">
              <span className="reservation-info">
                {`${reservation.date} - ${reservation.time} (${reservation.duration})`}
              </span>
              <button 
                className="manage-button"
                onClick={() => handleManage(reservation.id)}
              >
                Manage
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section">
        <h2>Book a Slot</h2>
        <form onSubmit={handleCheckAvailability} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
              <label>Duration (hours)</label>
              <select 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)}
                className="duration-select"
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
              </select>
            </div>
          </div>

          <button type="submit" className="check-availability-button">
            Check Availability
          </button>
        </form>
      </section>

      <section className="available-slots-section">
        <h2>Available Slots</h2>
        
        <div className="day-group">
          <h3>Today (Monday)</h3>
          <div className="time-slots">
            {todaySlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {`${slot.start} - ${slot.end}`}
              </button>
            ))}
          </div>
        </div>

        <div className="day-group">
          <h3>Tomorrow (Tuesday)</h3>
          <div className="time-slots">
            {tomorrowSlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {`${slot.start} - ${slot.end}`}
              </button>
            ))}
          </div>
        </div>

        <div className="day-group">
          <h3>Wednesday</h3>
          <div className="time-slots">
            {wednesdaySlots.map((slot, index) => (
              <button key={index} className="time-slot">
                {`${slot.start} - ${slot.end}`}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="show-more-days-button"
          onClick={handleShowMoreDays}
        >
          Show More Days
        </button>
      </section>
    </div>
  );
}

export default DrivingRange; 