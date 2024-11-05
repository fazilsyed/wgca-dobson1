import React, { useState } from 'react';
import './Lessons.css';

function Lessons() {
  const instructors = [
    {
      id: 1,
      name: 'Scottie Smith',
      image: '/instructors/scottie-smith.png',
      specialty: 'Specializes in improving your short game',
      pricePerHour: 75
    },
    {
      id: 2,
      name: 'Sarah Williams',
      image: '/instructors/sarah-williams.png',
      specialty: 'Helps beginners build a solid foundation',
      pricePerHour: 80
    },
    {
      id: 3,
      name: 'Rory Jones',
      image: '/instructors/rory-jones.png',
      specialty: 'Expert in perfecting your swing technique',
      pricePerHour: 85
    },
    {
      id: 4,
      name: 'Nelly Anderson',
      image: '/instructors/nelly-anderson.png',
      specialty: 'Focuses on mental game and course strategy',
      pricePerHour: 70
    }
  ];

  const [hours, setHours] = useState({});

  const calculateTotal = (pricePerHour, instructorId) => {
    const selectedHours = hours[instructorId] || 1;
    let total;

    switch(selectedHours) {
      case 5:
        // 10% off for 5 hours
        total = pricePerHour * 5 * 0.9;
        break;
      case 10:
        // 20% off for 10 hours
        total = pricePerHour * 10 * 0.8;
        break;
      default:
        // Regular price for 1 hour
        total = pricePerHour * selectedHours;
    }

    return Math.round(total); // Round to nearest dollar
  };

  const handleBuyNow = (instructor) => {
    console.log('Buy Now clicked for:', instructor.name);
    // Implement purchase flow
  };

  const handleSchedule = (instructor) => {
    console.log('Schedule clicked for:', instructor.name);
    // Implement scheduling flow
  };

  return (
    <div className="lessons-page">
      <h1>Golf Lessons and Coaching</h1>
      <p className="subtitle">
        Purchase slots with your favorite instructor and then book time on their calendar below.
      </p>

      <section className="purchase-section">
        <h2>Purchase Lessons</h2>
        <div className="instructor-grid">
          {instructors.map(instructor => (
            <div key={instructor.id} className="instructor-card">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="instructor-image"
              />
              <h3>{instructor.name}</h3>
              <p className="specialty">{instructor.specialty}</p>
              <p className="price">Price per hour: ${instructor.pricePerHour}</p>
              
              <select
                value={hours[instructor.id] || 1}
                onChange={(e) => setHours(prev => ({
                  ...prev,
                  [instructor.id]: parseInt(e.target.value)
                }))}
                className="hours-select"
              >
                <option value={1}>1 hour</option>
                <option value={5}>5 hours (10% off)</option>
                <option value={10}>10 hours (20% off)</option>
              </select>

              <p className="total">
                Total: ${calculateTotal(instructor.pricePerHour, instructor.id)}
              </p>

              <div className="button-group">
                <button 
                  className="buy-now-button"
                  onClick={() => handleBuyNow(instructor)}
                >
                  Buy Now
                </button>
                <button 
                  className="schedule-button"
                  onClick={() => handleSchedule(instructor)}
                >
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Lessons; 