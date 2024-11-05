import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Food.css';

function Food() {
  const navigate = useNavigate();
  const [selectedQuantities, setSelectedQuantities] = useState({});

  // Randomly select some items for the cart on component mount
  useEffect(() => {
    const randomSelection = {};
    
    // Randomly select 2-3 food items
    const foodIndices = new Set();
    while(foodIndices.size < Math.floor(Math.random() * 2) + 2) { // 2-3 items
      foodIndices.add(Math.floor(Math.random() * foodItems.length) + 1);
    }
    
    // Randomly select 1-2 drink items
    const drinkIndices = new Set();
    while(drinkIndices.size < Math.floor(Math.random() * 2) + 1) { // 1-2 items
      drinkIndices.add(Math.floor(Math.random() * drinkItems.length) + 8); // Adding 8 because drink IDs start at 8
    }

    // Combine selections and set random quantities (1-3)
    [...foodIndices, ...drinkIndices].forEach(id => {
      randomSelection[id] = Math.floor(Math.random() * 3) + 1;
    });

    setSelectedQuantities(randomSelection);
  }, []);

  const foodItems = [
    {
      id: 1,
      name: 'Hot Dog',
      description: 'Classic all-beef hot dog with your choice of toppings',
      price: 5.99,
      image: '/food/food-hot-dog.png'
    },
    {
      id: 2,
      name: 'Club Sandwich',
      description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
      price: 9.99,
      image: '/food/food-club-sandwich.png'
    },
    {
      id: 3,
      name: 'Chicken Wings',
      description: '6 crispy wings with your choice of sauce',
      price: 8.99,
      image: '/food/food-chicken-wings.png'
    },
    {
      id: 4,
      name: 'Caesar Salad',
      description: 'Crisp romaine, croutons, parmesan, and Caesar dressing',
      price: 7.99,
      image: '/food/food-caesar-salad.png'
    },
    {
      id: 5,
      name: 'Burger',
      description: 'Quarter-pound beef patty with lettuce, tomato, and cheese',
      price: 10.99,
      image: '/food/food-burger.png'
    },
    {
      id: 6,
      name: 'Grilled Chicken Wrap',
      description: 'Grilled chicken, lettuce, tomato, and ranch in a wrap',
      price: 8.99,
      image: '/food/food-grilled-chicken-wrap.png'
    },
    {
      id: 7,
      name: 'Nachos',
      description: 'Tortilla chips topped with cheese, jalapenos, and salsa',
      price: 7.99,
      image: '/food/food-nachos.png'
    }
  ];

  const drinkItems = [
    {
      id: 8,
      name: 'Beer',
      description: 'Domestic draft beer',
      price: 4.99,
      image: '/food/drink-beer.png'
    },
    {
      id: 9,
      name: 'Gatorade',
      description: 'Electrolyte-packed sports drink',
      price: 3.99,
      image: '/food/drink-gatorade.png'
    },
    {
      id: 10,
      name: 'Soda',
      description: 'Your choice of carbonated soft drink',
      price: 2.99,
      image: '/food/drink-soda.png'
    },
    {
      id: 11,
      name: 'Iced Tea',
      description: 'Freshly brewed and chilled',
      price: 2.99,
      image: '/food/drink-iced-tea.png'
    },
    {
      id: 12,
      name: 'Water',
      description: 'Bottled spring water',
      price: 1.99,
      image: '/food/drink-water.png'
    }
  ];

  const handleQuantityChange = (itemId, quantity) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [itemId]: quantity
    }));
  };

  const handleCourseDelivery = () => {
    // Filter out items with quantity 0
    const cartItems = {
      items: [...foodItems, ...drinkItems]
        .filter(item => selectedQuantities[item.id] > 0)
        .map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: selectedQuantities[item.id],
          total: item.price * selectedQuantities[item.id]
        })),
      deliveryMethod: 'course'
    };

    // Navigate to order details with cart items
    navigate('/order-details', { state: { cart: cartItems } });
  };

  const renderItems = (items) => (
    <div className="food-grid">
      {items.map(item => (
        <div key={item.id} className="food-card">
          <img 
            src={item.image} 
            alt={item.name} 
            className="food-image"
          />
          <h3>{item.name}</h3>
          <p className="description">{item.description}</p>
          <p className="price">${item.price.toFixed(2)}</p>
          <select
            value={selectedQuantities[item.id] || 0}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            className="quantity-select"
          >
            {[...Array(11)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );

  return (
    <div className="food-page">
      <h1>Eats and Drinks</h1>
      <p className="subtitle">
        Place your order for pickup or delivery to you on the course!
      </p>

      <section className="food-section">
        <h2>Food</h2>
        {renderItems(foodItems)}
      </section>

      <section className="drinks-section">
        <h2>Drinks</h2>
        {renderItems(drinkItems)}
      </section>

      <div className="delivery-options">
        <button 
          className="delivery-button"
          onClick={handleCourseDelivery}
        >
          Course Delivery
        </button>
        <button className="delivery-button pickup">Pickup</button>
      </div>
    </div>
  );
}

export default Food; 