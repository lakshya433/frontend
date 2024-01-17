import React, { useState } from 'react';
import NavScrollExample from './components/navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardNumber) => {
    setSelectedCard(cardNumber);
  }

  const cardTitles = [
    "Url Query Check/Report",
    "Phone No. Query/Report",
    "Feedback/Suggestions from User",
    "Recent Cyber Crimes"
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
            className={selectedCard === index ? 'main-card' : 'side-card'}
            onClick={() => handleCardSelect(index)}
            selected={selectedCard === index}
          />
        ))}

        <Card 
          title="Home" 
          content="This is the main card." 
          className={selectedCard === null ? 'main-card' : 'side-card'} 
          onClick={() => handleCardSelect(null)}
          selected={selectedCard === null}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
