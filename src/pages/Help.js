import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [selectedOption, setSelectedOption] = useState('faqs');

  const renderContent = () => {
    switch(selectedOption) {
      case 'faqs':
        return (
          <div className="faq-list">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What are the course hours?</h3>
              <p>Our course is open from sunrise to sunset, 7 days a week.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer golf lessons?</h3>
              <p>Yes, we offer individual and group lessons for all skill levels. Please contact our Pro Shop for more information.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a dress code?</h3>
              <p>Yes, we require collared shirts and prohibit denim, cut-offs, and tank tops. Golf shoes or soft-spiked shoes are required.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have rental clubs available?</h3>
              <p>Yes, we offer club rentals. Please call ahead to reserve a set.</p>
            </div>
          </div>
        );
      
      case 'course-info':
        return (
          <div className="info-section">
            <h2>Course Information</h2>
            <ul className="course-info-list">
              <li>18-hole championship course</li>
              <li>Par 72</li>
              <li>6,703 yards from the back tees</li>
              <li>Bermuda grass fairways and greens</li>
              <li>4 sets of tees to accommodate all skill levels</li>
              <li>Practice facilities include a driving range, putting green, and chipping area</li>
            </ul>
          </div>
        );
      
      case 'emergency':
        return (
          <div className="info-section">
            <h2>Emergency Information</h2>
            <p className="emergency-intro">In case of an emergency on the course:</p>
            
            <ol className="emergency-list">
              <li>Call 911 immediately for any life-threatening situations</li>
              <li>Contact the clubhouse at (555) 123-4567</li>
              <li>Use the nearest emergency phone located on holes 5, 9, 14, and 18</li>
              <li>Know your location on the course to direct emergency services</li>
            </ol>

            <p className="aed-info">
              AED devices are located in the clubhouse and at the halfway house.
            </p>
          </div>
        );
      
      case 'phone':
        return (
          <div className="info-section">
            <h2>Important Contact Numbers</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Pro Shop:</span>
                <span className="phone-number">(555) 123-4567</span>
              </li>
              <li>
                <span className="contact-label">Tee Time Reservations:</span>
                <span className="phone-number">(555) 123-4568</span>
              </li>
              <li>
                <span className="contact-label">Restaurant & Events:</span>
                <span className="phone-number">(555) 123-4569</span>
              </li>
              <li>
                <span className="contact-label">Golf Course Superintendent:</span>
                <span className="phone-number">(555) 123-4570</span>
              </li>
              <li>
                <span className="contact-label">Lost and Found:</span>
                <span className="phone-number">(555) 123-4571</span>
              </li>
            </ul>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="help-page">
      <h1>FAQs and Help</h1>
      <p className="help-subtitle">
        Find answers to common questions and important information about Dobson Ranch Golf Course.
      </p>

      <div className="faq-section">
        <select 
          className="faq-dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="faqs">FAQs</option>
          <option value="course-info">Course Info</option>
          <option value="emergency">Emergency Info</option>
          <option value="phone">Contact Phone Numbers</option>
        </select>

        {renderContent()}
      </div>
    </div>
  );
}

export default Help; 