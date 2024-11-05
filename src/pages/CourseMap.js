import React, { useState } from 'react';
import './CourseMap.css';

function CourseMap() {
  const [currentHole, setCurrentHole] = useState(0);
  
  const holes = [
    {
      number: 1,
      image: '/holes/aerial-hole-1.png',
      description: 'A challenging par 4 with a dogleg right. Watch out for the bunkers guarding the green.'
    },
    {
      number: 2,
      image: '/holes/aerial-hole-2.png',
      description: 'A short par 3 over water. Club selection is crucial to avoid a watery grave.'
    },
    {
      number: 3,
      image: '/holes/aerial-hole-3.png',
      description: 'Long par 5 with a narrow fairway. Accuracy off the tee is key to scoring well here.'
    },
    {
      number: 4,
      image: '/holes/aerial-hole-4.png',
      description: 'Straight par 4 with a well-protected green. Approach shot accuracy is key.'
    },
    {
      number: 5,
      image: '/holes/aerial-hole-5.png',
      description: 'Uphill par 3 with a multi-tiered green. Club selection is crucial.'
    },
    {
      number: 6,
      image: '/holes/aerial-hole-6.png',
      description: 'Dogleg left par 4. A well-placed tee shot sets up a good approach.'
    },
    {
      number: 7,
      image: '/holes/aerial-hole-7.png',
      description: 'Long par 5 with water down the right side. Risk-reward second shot opportunity.'
    },
    {
      number: 8,
      image: '/holes/aerial-hole-8.png',
      description: 'Short par 4 with a narrow landing area. Precision off the tee is rewarded.'
    },
    {
      number: 9,
      image: '/holes/aerial-hole-9.png',
      description: 'Challenging par 4 finishing hole. Avoid the fairway bunkers for a good approach.'
    },
    {
      number: 10,
      image: '/holes/aerial-hole-10.png',
      description: 'Starting the back nine with a straightaway par 4. Good opportunity for a solid start.'
    },
    {
      number: 11,
      image: '/holes/aerial-hole-11.png',
      description: 'Par 3 over water. Don\'t let the scenic view distract you from the challenge.'
    },
    {
      number: 12,
      image: '/holes/aerial-hole-12.png',
      description: 'Dogleg right par 5. Big hitters can reach in two, but beware of the greenside bunkers.'
    },
    {
      number: 13,
      image: '/holes/aerial-hole-13.png',
      description: 'Short par 4 with a well-bunkered green. Accuracy on the approach is key.'
    },
    {
      number: 14,
      image: '/holes/aerial-hole-14.png',
      description: 'Long par 3 with a two-tiered green. Middle of the green is always a good play.'
    },
    {
      number: 15,
      image: '/holes/aerial-hole-15.png',
      description: 'Straightaway par 4 with out-of-bounds right. Favor the left side of the fairway.'
    },
    {
      number: 16,
      image: '/holes/aerial-hole-16.png',
      description: 'Risk-reward par 5. Reachable in two for long hitters, but trouble lurks around the green.'
    },
    {
      number: 17,
      image: '/holes/aerial-hole-17.png',
      description: 'Challenging par 4 with strategic bunkering. Position your tee shot carefully for the best angle of approach.'
    },
    {
      number: 18,
      image: '/holes/aerial-hole-18.png',
      description: 'Finishing hole par 4 with water left. A strong drive sets up a good chance for a closing birdie.'
    }
  ];

  const handlePrevious = () => {
    setCurrentHole(current => 
      current === 0 ? holes.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentHole(current => 
      current === holes.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="course-map">
      <h1>Course Map</h1>
      <p className="subtitle">
        Swipe between each hole to see what it looks like and the details.
      </p>

      <div className="hole-viewer">
        <h2>Hole #{holes[currentHole].number}</h2>
        
        <div className="carousel-container">
          <button 
            className="nav-button prev"
            onClick={handlePrevious}
            aria-label="Previous hole"
          >
            ‹
          </button>

          <div className="hole-image">
            <img 
              src={holes[currentHole].image} 
              alt={`Hole ${holes[currentHole].number}`}
            />
          </div>

          <button 
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next hole"
          >
            ›
          </button>
        </div>

        <p className="hole-description">
          {holes[currentHole].description}
        </p>
      </div>
    </div>
  );
}

export default CourseMap; 