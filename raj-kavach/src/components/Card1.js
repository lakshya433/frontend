// Card1.js
import React from 'react';
import Card from './Card';
import './Card1.css'; // Styles specific to Card 1

const Card1 = ({ onClick, selected, special }) => {
  return (
    <Card
      title="Card 1"
      content="Content for Card 1"
      className="card1" // Add specific class for Card 1
      onClick={onClick}
      selected={selected}
    />
  );
};

export default Card1;
