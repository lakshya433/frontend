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

  return (
    <div className="app-container">
      <div className="App-header">
        <NavScrollExample />
      </div>

      <div className="main-content-wrapper">
        {[1, 2, 3, 4].map((cardNumber) => (
          <Card 
            key={cardNumber} 
            title={`Card ${cardNumber}`} 
            content={`Content for card ${cardNumber}`} 
            className={selectedCard === cardNumber ? 'main-card' : 'side-card'}
            onClick={() => handleCardSelect(cardNumber)}
            selected={selectedCard === cardNumber}
          />
        ))}

        <Card 
          title="Main Card" 
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
