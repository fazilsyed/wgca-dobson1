import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const features = [
    {
      title: "Order Menu",
      description: "Savor delicious meals and refreshing beverages during or after your game",
      icon: "🍽️",
      link: "/food"
    },
    {
      title: "Tee Times",
      description: "Book your perfect tee time and start golfing today",
      icon: "⏰",
      link: "/tee-time"
    },
    {
      title: "Driving Range",
      description: "Practice your swing and improve your game",
      icon: "⛳",
      link: "/driving-range"
    },
    {
      title: "Course Map",
      description: "Explore our challenging course layout before you play",
      icon: "🗺️",
      link: "/course-map"
    },
    {
      title: "Scorecard",
      description: "Track your scores and monitor your progress",
      icon: "📋",
      link: "/scorecard"
    },
    {
      title: "Lessons",
      description: "Enhance your skills with professional golf instruction",
      icon: "🎓",
      link: "/lessons"
    },
    {
      title: "Pro Shop",
      description: "Gear up with top-quality golf equipment and apparel",
      icon: "🏪",
      link: "/shop"
    }
  ];

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Dobson Ranch Golf Course</h1>
        <p>Experience world-class golfing in a beautiful setting</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
