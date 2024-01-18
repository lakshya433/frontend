// Card2.js
import React from 'react';
import Card from './Card';
import './Card4.css'; // Styles specific to Card 2

const Card4 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Card 4"
      content="Content for Card 4"
      className="card4" // Add specific class for Card 2
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card4;
