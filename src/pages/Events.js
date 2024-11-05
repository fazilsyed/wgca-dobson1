import React, { useState } from 'react';
import './Events.css';

function Events() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const events = [
    {
      id: 1,
      title: 'Summer Golf Tournament',
      date: 'July 15, 2023',
      time: '8:00 AM - 5:00 PM',
      location: 'Full Course',
      description: 'Join our annual summer tournament with great prizes and fun for all skill levels.',
      image: '/images/summer-tournament.jpg',
      actionButton: 'Reserve Now'
    },
    {
      id: 2,
      title: 'Twilight Golf Series',
      date: 'Every Friday in August',
      time: '6:00 PM - 8:30 PM',
      location: 'Back Nine',
      description: 'Experience the beauty of golfing at dusk in our weekly twilight series.',
      image: '/images/twilight-series.jpg',
      actionButton: 'Learn More'
    },
    {
      id: 3,
      title: 'Charity Golf Day',
      date: 'September 3, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Full Course',
      description: 'Support local charities while enjoying a day of golf with friends and colleagues.',
      image: '/images/charity-golf.jpg',
      actionButton: 'Buy Tickets'
    },
    {
      id: 4,
      title: 'Junior Golf Camp',
      date: 'July 24-28, 2023',
      time: '9:00 AM - 12:00 PM',
      location: 'Practice Range & Front Nine',
      description: 'A week-long camp for young golfers to improve their skills and have fun.',
      image: '/images/junior-camp.jpg',
      actionButton: 'Reserve Now'
    },
    {
      id: 5,
      title: 'Golf and Dinner Evening',
      date: 'August 12, 2023',
      time: '4:00 PM - 9:00 PM',
      location: 'Back Nine & Clubhouse',
      description: 'Combine your love for golf and fine dining in this special evening event.',
      image: '/images/dinner-evening.jpg',
      actionButton: 'Buy Tickets'
    },
    {
      id: 6,
      title: 'Senior Golf Tournament',
      date: 'October 5, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'Full Course',
      description: 'A friendly competition for our senior golfers with special prizes and categories.',
      image: '/images/senior-tournament.jpg',
      actionButton: 'Learn More'
    },
    {
      id: 7,
      title: 'Golf Equipment Expo',
      date: 'September 16-17, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Clubhouse & Practice Range',
      description: 'Explore the latest golf equipment and technology from top brands.',
      image: '/images/equipment-expo.jpg',
      actionButton: 'Learn More'
    }
  ];

  const handleFilter = () => {
    // Implement filtering logic here
    console.log('Filtering:', selectedMonth, selectedYear);
  };

  return (
    <div className="events-page">
      <h1>Dobson Ranch Event Calendar</h1>
      <p className="subtitle">
        Learn about special events, tournaments, and more in the calendar below. If you would like to host your own event, contact us anytime.
      </p>

      <div className="filter-section">
        <select 
          className="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          {/* Add all months */}
        </select>

        <select 
          className="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <button className="apply-filter" onClick={handleFilter}>
          Apply Filter
        </button>
      </div>

      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-details">
              <h2>{event.title}</h2>
              <div className="event-info">
                <div className="info-item">
                  <span className="label">Date:</span>
                  <span>{event.date}</span>
                </div>
                <div className="info-item">
                  <span className="label">Time:</span>
                  <span>{event.time}</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="event-description">{event.description}</p>
              <button className="action-button">{event.actionButton}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events; 