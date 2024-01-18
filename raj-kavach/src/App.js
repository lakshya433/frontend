import React, { useState } from 'react';
import NavScrollExample from './components/navbar';
import Footer from './components/Footer';
// import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2'; // Import other cards as needed
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';

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
  const cardComponents = [
    Card1,
    Card2,
    Card3,
    Card4,
    Card5
  ];

  return (
    <div className="app-container">
      <div className="App-header">
        <NavScrollExample />
      </div>

      <div className="main-content-wrapper">
        {cardTitles.map((title, index) => {
          const CardComponent = cardComponents[index];
          return (
            <CardComponent
              key={index}
              onClick={() => handleCardSelect(index)}
              selected={selectedCard === index}
            />
          );
        })}
      </div>


      <Footer />
    </div>
  );
}

export default App;
