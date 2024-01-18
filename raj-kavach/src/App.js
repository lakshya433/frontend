import React, { useState } from 'react';
import NavScrollExample from './components/navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(4); // Default selected card is card 5 (index 4)

  const handleCardSelect = (cardNumber) => {
    setSelectedCard(cardNumber);
  }

  const cardTitles = [
    "Url Query Check/Report",
    "Phone No. Query/Report",
    "Feedback/Suggestions from User",
    "Recent Cyber Crimes",
    "Home"
  ];

  return (
    <div className="app-container">
      <div className="App-header">
        <NavScrollExample />
      </div>

      <div className="main-content-wrapper">
        {cardTitles.map((title, index) => (
          <Card 
            key={index} 
            title={title} 
            content={`Content for ${title}`} 
            onClick={() => handleCardSelect(index)}
            className={selectedCard === index ? 'card selected' : 'card'}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
