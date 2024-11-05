import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Login from './pages/Login';
import Home from './pages/Home';
import Food from './pages/Food';
import OrderDetails from './pages/OrderDetails';
import OrderConfirmation from './pages/OrderConfirmation';
import TeeTime from './pages/TeeTime';
import DrivingRange from './pages/DrivingRange';
import CourseMap from './pages/CourseMap';
import Lessons from './pages/Lessons';
import ProShop from './pages/ProShop';
import ProShopOrderDetails from './pages/ProShopOrderDetails';
import Help from './pages/Help';
import Events from './pages/Events';
import Profile from './pages/Profile';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // For demo, we'll consider user logged in if there's a token in localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    console.log('Login handler called');
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    setIsSidebarOpen(false);
    window.location.href = '/login';
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (isSidebarOpen && 
          sidebarRef.current && 
          menuButtonRef.current && 
          !sidebarRef.current.contains(event.target) &&
          !menuButtonRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isAuthenticated && (
          <>
            <Header 
              toggleSidebar={toggleSidebar} 
              isOpen={isSidebarOpen} 
              menuButtonRef={menuButtonRef}
            />
            <Sidebar 
              isOpen={isSidebarOpen} 
              toggleSidebar={toggleSidebar}
              sidebarRef={sidebarRef}
              onLogout={handleLogout}
            />
          </>
        )}
        <main>
          <Routes>
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                  <Navigate to="/" replace /> : 
                  <Login onLogin={handleLogin} />
              } 
            />
            
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route path="/food" element={
              <ProtectedRoute>
                <Food />
              </ProtectedRoute>
            } />
            <Route path="/order-details" element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            } />
            <Route path="/order-confirmation" element={
              <ProtectedRoute>
                <OrderConfirmation />
              </ProtectedRoute>
            } />
            <Route path="/tee-time" element={
              <ProtectedRoute>
                <TeeTime />
              </ProtectedRoute>
            } />
            <Route path="/driving-range" element={
              <ProtectedRoute>
                <DrivingRange />
              </ProtectedRoute>
            } />
            <Route path="/course-map" element={
              <ProtectedRoute>
                <CourseMap />
              </ProtectedRoute>
            } />
            <Route path="/lessons" element={
              <ProtectedRoute>
                <Lessons />
              </ProtectedRoute>
            } />
            <Route path="/shop" element={
              <ProtectedRoute>
                <ProShop />
              </ProtectedRoute>
            } />
            <Route path="/shop/order-details" element={<ProShopOrderDetails />} />
            <Route path="/help" element={<Help />} />
            <Route path="/events" element={<Events />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
